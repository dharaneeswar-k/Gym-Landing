import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [trail, setTrail] = useState([]);
    const trailRef = useRef([]);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    const updateTrail = useCallback((x, y) => {
        const now = Date.now();
        trailRef.current = [
            { x, y, id: now },
            ...trailRef.current.slice(0, 5)
        ];
        setTrail([...trailRef.current]);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            updateTrail(e.clientX, e.clientY);
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
    }, [cursorX, cursorY, isVisible, updateTrail]);

    // Cleanup old trail particles
    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            trailRef.current = trailRef.current.filter(p => now - p.id < 300);
            setTrail([...trailRef.current]);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Trail particles */}
            {trail.map((point, i) => (
                <div
                    key={point.id}
                    className="fixed pointer-events-none z-[9998] hidden md:block"
                    style={{
                        left: point.x - 3,
                        top: point.y - 3,
                        width: 6 - i,
                        height: 6 - i,
                        borderRadius: '50%',
                        backgroundColor: `rgba(239, 68, 68, ${0.4 - i * 0.06})`,
                        boxShadow: `0 0 ${8 - i * 2}px rgba(239, 68, 68, ${0.3 - i * 0.05})`,
                        transition: 'opacity 0.1s',
                    }}
                />
            ))}

            {/* Main cursor */}
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
                        backgroundColor: isHovering ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0)',
                        borderColor: isHovering ? 'rgba(239, 68, 68, 0.3)' : 'rgba(239, 68, 68, 0.4)',
                        boxShadow: isHovering
                            ? '0 0 20px rgba(239, 68, 68, 0.2)'
                            : '0 0 8px rgba(239, 68, 68, 0.1)',
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full rounded-full border-2 border-primary/40 flex items-center justify-center"
                >
                    <motion.div
                        animate={{ scale: isHovering ? 0 : 1 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                    />
                </motion.div>
            </motion.div>
        </>
    );
};

export default CustomCursor;
