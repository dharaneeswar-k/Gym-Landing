import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            style={{ scaleX, transformOrigin: '0%' }}
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-red-400 to-primaryDark z-[100] shadow-[0_0_10px_rgba(239,68,68,0.5),0_0_20px_rgba(239,68,68,0.3)]"
        />
    );
};

export default ScrollProgress;
