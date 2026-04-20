import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Hero = () => {
    const { scrollY } = useScroll();
    // Aggressive parallax tailored for mobile devices - items move strongly based on scroll
    const yBg = useTransform(scrollY, [0, 1000], [0, 200]);
    const yText = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden w-full">
            {/* Background Image with intense Parallax */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 z-0 scale-110"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-black/80 to-dark-900 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1)_0,transparent_50%)] z-10" />
                <img
                    src="/hero-bg.png"
                    alt="Luxury Gym Interior"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Floating Animated Geometric Elements */}
            <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 right-0 md:right-1/4 w-32 h-32 md:w-64 md:h-64 border border-primary/20 rounded-full blur-sm z-0"
            />

            <motion.div
                style={{ y: yText, opacity }}
                className="relative z-20 text-center px-4 sm:px-6 w-full max-w-5xl mx-auto mt-16 sm:mt-24"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.5 }}
                    className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-dark-900/50 backdrop-blur-md"
                >
                    <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase shadow-primary drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">Premium Fitness Experience</span>
                </motion.div>

                <motion.h1
                    className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1] mb-4 sm:mb-6"
                >
                    {['Forge', 'Your', 'Ultimate'].map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                            className="inline-block mr-3 sm:mr-4 drop-shadow-lg text-white"
                        >
                            {word}
                        </motion.span>
                    ))}
                    <br className="hidden sm:block" />
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-primaryDark drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] mt-2"
                    >
                        Physique
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-xs sm:max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
                >
                    TitanFit brings world-class equipment and elite coaching to your neighborhood. Book a tour today and experience the difference.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0 w-full sm:w-auto"
                >
                    <MagneticButton className="w-full sm:w-auto">
                        <a href="#pricing" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primaryDark text-white px-8 py-4 sm:py-5 rounded-lg font-black uppercase tracking-widest transition-transform transform shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] active:scale-95">
                            Join Now
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </motion.div>
                        </a>
                    </MagneticButton>

                    <MagneticButton className="w-full sm:w-auto">
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-dark-800/80 backdrop-blur text-white px-8 py-4 sm:py-5 rounded-lg font-bold uppercase tracking-wider border border-white/10 hover:border-primary hover:text-primary transition-all active:scale-95">
                            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                            Chat With Us
                        </a>
                    </MagneticButton>
                </motion.div>
            </motion.div>

            {/* Floating Scroll Indicator Mobile-optimized */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
            >
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 mb-2 font-bold">Scroll Down</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="text-primary w-6 h-6 opacity-80" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
