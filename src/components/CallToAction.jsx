import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Zap } from 'lucide-react';
import MagneticButton from './MagneticButton';
import gymData from '../data/gymData';

const CallToAction = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.7, 1], [0.8, 1.2]);
    const rotate = useTransform(scrollYProgress, [0.7, 1], [0, 180]);

    return (
        <section className="relative py-24 sm:py-36 bg-black border-t border-dark-800/50 overflow-hidden">

            {/* Massive Parallax Background Text */}
            <motion.div
                style={{ scale }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] sm:opacity-[0.06]"
            >
                <span className="text-[10rem] sm:text-[18rem] md:text-[25rem] font-black uppercase tracking-tighter whitespace-nowrap text-white font-display">BEAST</span>
            </motion.div>

            {/* Removed Aurora Orbs for a cleaner, stark contrast look */}

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                >
                    <motion.div
                        className="mx-auto w-16 h-16 sm:w-20 sm:h-20 glass rounded-full flex items-center justify-center mb-6 sm:mb-8"
                    >
                        <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4 sm:mb-6 leading-[1.1] font-display">
                        Stop Waiting.<br />
                        <span className="metallic-text">Start Sweating.</span>
                    </h2>

                    <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-[300px] sm:max-w-2xl mx-auto font-medium leading-relaxed">
                        Your body is capable of amazing things. Give it the uncompromising environment it deserves. Send us a message today and book your exclusive gym tour!
                    </p>

                    <div className="relative inline-block w-full sm:w-auto mt-4">
                        <MagneticButton className="w-full sm:w-auto">
                            <a
                                href={`https://wa.me/${gymData.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex w-full sm:w-auto items-center justify-center gap-3 bg-white text-dark-950 px-8 py-5 sm:py-6 rounded-xl font-black uppercase tracking-widest text-sm sm:text-lg transition-all transform active:scale-95 hover:bg-gray-200"
                            >
                                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                Book A Gym Tour
                            </a>
                        </MagneticButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
