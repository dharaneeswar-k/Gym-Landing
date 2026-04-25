import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Programs', href: '#programs' },
        { name: 'Results', href: '#results' },
        { name: 'Trainers', href: '#trainers' },
        { name: 'Pricing', href: '#pricing' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed w-full z-50 transition-colors duration-500 ${isScrolled || isOpen
                ? 'bg-dark-950/95 backdrop-blur-md border-b border-white/5 py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center relative z-50">
                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer">
                        <Dumbbell className="text-primary h-7 w-7 sm:h-8 sm:w-8" />
                        <span className="text-white text-xl sm:text-2xl font-black uppercase tracking-wider font-display">
                            Titan<span className="text-primary">Fit</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em]"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-white text-dark-950 font-black text-xs uppercase tracking-widest rounded-lg hover:bg-gray-200 transition-all active:scale-95 text-center"
                        >
                            Join Now
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Fullscreen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed inset-0 top-0 left-0 w-full h-screen bg-dark-950 z-40 flex flex-col justify-center px-6"
                    >
                        <div className="flex flex-col space-y-8 mt-16">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    initial={{ x: -30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                                    key={link.name}
                                    href={link.href}
                                    className="text-4xl sm:text-5xl font-black text-white hover:text-primary transition-colors tracking-tight font-display"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-auto mb-16"
                        >
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full py-5 bg-primary text-white text-center font-black uppercase tracking-widest rounded-xl hover:bg-primaryDark transition-colors active:scale-95"
                            >
                                Start Your Journey
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
