import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Zap } from 'lucide-react';

const CallToAction = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.7, 1], [0.8, 1.2]);

    return (
        <section className="relative py-24 sm:py-32 bg-black border-t border-dark-800 overflow-hidden">

            {/* Intense Background Parallax Text - Mobile Adjusted */}
            <motion.div
                style={{ scale }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06] sm:opacity-[0.08] mix-blend-screen"
            >
                <span className="text-[10rem] sm:text-[18rem] md:text-[25rem] font-black uppercase tracking-tighter whitespace-nowrap text-white drop-shadow-2xl">BEAST</span>
            </motion.div>

            {/* Glowing Orbs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                >
                    <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-dark-900 border border-dark-700 rounded-full flex items-center justify-center mb-6 sm:mb-8 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                        <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary drop-shadow-[0_0_8px_rgba(239,68,68,1)]" />
                    </div>

                    <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl font-black uppercase mb-4 sm:mb-6 leading-[1.1]">
                        Stop Waiting.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 drop-shadow-md">Start Sweating.</span>
                    </h2>

                    <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-[280px] sm:max-w-2xl mx-auto font-medium leading-relaxed">
                        Your body is capable of amazing things. Give it the uncompromising environment it deserves. Send us a message today and book your exclusive gym tour!
                    </p>

                    <div className="relative inline-block w-full sm:w-auto">
                        <div className="absolute inset-0 bg-primary rounded-xl animate-ping opacity-10 hidden sm:block delay-1000" />

                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="group flex w-full sm:w-auto items-center justify-center gap-3 bg-primary hover:bg-primaryDark text-white px-6 sm:px-10 py-5 sm:py-6 rounded-xl font-black uppercase tracking-widest text-sm sm:text-lg transition-transform transform active:scale-95 hover:scale-105 shadow-[0_0_40px_rgba(239,68,68,0.3)] relative z-10 border-b-4 border-red-800 hover:border-red-700">
                            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                            Book A Gym Tour
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
