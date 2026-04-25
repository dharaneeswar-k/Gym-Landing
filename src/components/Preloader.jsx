import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gymData from '../data/gymData';
import { Dumbbell } from 'lucide-react';

const Preloader = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 400);
                    return 100;
                }
                return prev + Math.random() * 15 + 5;
            });
        }, 100);

        // Safety fallback
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
                    >
                        {/* Background grid */}
                        <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:50px_50px] opacity-[0.03]" />

                        {/* Rotating glow ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute w-40 h-40 border border-primary/20 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className="absolute w-56 h-56 border border-primary/10 rounded-full"
                        />

                        {/* Icon */}
                        <motion.div
                            animate={{
                                rotateY: [0, 360],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                rotateY: { duration: 2, repeat: Infinity, ease: "linear" },
                                scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                            }}
                            className="relative z-10 mb-8"
                            style={{ perspective: '800px' }}
                        >
                            <div className="w-20 h-20 bg-dark-900 border border-primary/30 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.3)]">
                                <Dumbbell className="w-10 h-10 text-primary" />
                            </div>
                        </motion.div>

                        {/* Brand */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl font-black uppercase tracking-wider mb-2 font-display relative z-10"
                        >
                            {gymData.gymName}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-10 relative z-10"
                        >
                            Forge Your Ultimate Physique
                        </motion.p>

                        {/* Progress bar */}
                        <div className="w-48 h-[2px] bg-dark-800 rounded-full overflow-hidden relative z-10">
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary to-primaryDark rounded-full"
                                style={{ width: `${Math.min(progress, 100)}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-[10px] text-gray-600 uppercase tracking-widest mt-3 font-bold relative z-10"
                        >
                            Loading Experience
                        </motion.span>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default Preloader;
