import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Hero = () => {
    const sectionRef = useRef(null);
    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 1000], [0, 200]);
    const yText = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

    // Text animation on mount (CSS-based, no gsap needed)
    useEffect(() => {
        const chars = document.querySelectorAll('.hero-char');
        chars.forEach((char, i) => {
            char.style.transition = `opacity 0.8s ease ${1.5 + i * 0.04}s, transform 0.8s ease ${1.5 + i * 0.04}s`;
            char.style.opacity = '0';
            char.style.transform = 'translateY(80px) rotateX(-90deg)';
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    char.style.opacity = '1';
                    char.style.transform = 'translateY(0) rotateX(0)';
                });
            });
        });
    }, []);

    const titleWords = ['FORGE', 'YOUR', 'ULTIMATE'];

    return (
        <section ref={sectionRef} className="relative h-[100dvh] flex items-center justify-center overflow-hidden w-full">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 z-0 scale-110"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15)_0,transparent_50%)] z-10" />
                <img
                    src="/hero-bg.png"
                    alt="Premium Gym Interior"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Removed the cheap 3D rings and replaced with empty/minimal background for a cleaner Apple/Netflix look */}

            {/* Main Content */}
            <motion.div
                style={{ y: yText, opacity, scale }}
                className="relative z-20 text-center px-4 sm:px-6 w-full max-w-5xl mx-auto mt-16 sm:mt-24"
            >
                {/* Tagline Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 1.2 }}
                    className="inline-block px-5 py-1.5 mb-6 border border-white/10 rounded-full glass"
                >
                    <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">
                        Premium Fitness Experience
                    </span>
                </motion.div>

                {/* 3D Animated Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.1] mb-4 sm:mb-6 font-display perspective-1000">
                    {titleWords.map((word, wordIdx) => (
                        <span key={wordIdx} className="inline-block mr-3 sm:mr-4">
                            {word.split('').map((char, charIdx) => (
                                <span
                                    key={charIdx}
                                    className="hero-char inline-block text-white drop-shadow-lg"
                                    style={{ display: 'inline-block' }}
                                >
                                    {char}
                                </span>
                            ))}
                        </span>
                    ))}
                    <br className="hidden sm:block" />
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8, rotateX: -40 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        transition={{ duration: 1, delay: 2.2, type: "spring" }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primaryDark mt-2 glow-text"
                        style={{ perspective: '500px' }}
                    >
                        PHYSIQUE
                    </motion.span>
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.5 }}
                    className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-xs sm:max-w-2xl mx-auto font-light leading-relaxed"
                >
                    TitanFit brings world-class equipment and elite coaching to your neighborhood. Book a tour today and experience the difference.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0 w-full sm:w-auto mt-4"
                >
                    <MagneticButton className="w-full sm:w-auto">
                        <a
                            href="#pricing"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 sm:py-5 rounded-xl font-black uppercase tracking-widest transition-all transform hover:shadow-2xl hover:shadow-primary/30 active:scale-95 hover:scale-105"
                        >
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
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 glass text-white px-8 py-4 sm:py-5 rounded-xl font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-all active:scale-95"
                        >
                            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                            Chat With Us
                        </a>
                    </MagneticButton>
                </motion.div>
            </motion.div>


            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    );
};

export default Hero;
