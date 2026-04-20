import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            style={{
                translateX: cursorX,
                translateY: cursorY,
            }}
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block"
        >
            <motion.div
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? 'rgba(239, 68, 68, 0.15)' : 'rgba(239, 68, 68, 0)',
                    borderColor: isHovering ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.4)',
                }}
                className="w-full h-full rounded-full border-2 border-primary/40 flex items-center justify-center transition-colors"
            >
                <motion.div
                    animate={{ scale: isHovering ? 0 : 1 }}
                    className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                />
            </motion.div>
        </motion.div>
    );
};

export default CustomCursor;
