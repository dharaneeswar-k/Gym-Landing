import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const MagneticButton = ({ children, className = '', ...props }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const x = useSpring(0, { stiffness: 150, damping: 15 });
    const y = useSpring(0, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        // Moderate "pull" distance (move 40% of the way toward cursor)
        x.set(distanceX * 0.4);
        y.set(distanceY * 0.4);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            className="inline-block"
        >
            <button className={className} {...props}>
                {children}
            </button>
        </motion.div>
    );
};

export default MagneticButton;
