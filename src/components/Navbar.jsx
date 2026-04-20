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
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg shadow-black/50 py-3 sm:py-4 border-b border-white/5' : 'bg-transparent py-4 sm:py-6'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 cursor-pointer z-50"
                    >
                        <Dumbbell className="text-primary h-6 w-6 sm:h-8 sm:w-8 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                        <span className="text-white text-xl sm:text-2xl font-black uppercase tracking-wider">Titan<span className="text-primary">Fit</span></span>
                    </motion.div>

                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-300 hover:text-white relative group font-bold uppercase tracking-widest text-[11px] transition-colors">
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a href="#contact" className="px-6 py-2.5 bg-primary text-white font-black text-xs uppercase tracking-widest rounded-md hover:bg-primaryDark transition-all hover:scale-105 active:scale-95 shadow-[0_4px_14px_0_rgba(239,68,68,0.39)]">
                            Join Now
                        </a>
                    </div>

                    <div className="lg:hidden flex items-center z-50">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-dark-900 border-t border-dark-800 absolute top-full left-0 w-full overflow-hidden shadow-2xl backdrop-blur-xl"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-3 text-white text-lg font-black tracking-widest uppercase hover:text-primary hover:bg-dark-800 rounded-lg transition-colors border-l-2 border-transparent hover:border-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                href="#pricing"
                                className="block w-full text-center mt-6 px-6 py-4 bg-gradient-to-r from-primary to-primaryDark text-white font-black uppercase tracking-widest rounded-xl shadow-lg active:scale-95"
                                onClick={() => setIsOpen(false)}
                            >
                                Join Now - 1499 Rs.
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
