import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Flame, Dumbbell, Zap, ArrowUpRight } from 'lucide-react';

const programs = [
    {
        id: 1,
        title: "Weight Loss",
        description: "High-intensity metabolic conditioning designed to shred fat and build lean muscle effectively.",
        icon: Flame,
        color: "text-orange-500",
        shadow: "shadow-orange-500/20"
    },
    {
        id: 2,
        title: "Muscle Gain",
        description: "Hypertrophy-focused hardcore resistance training to pack on serious size and dense strength.",
        icon: Dumbbell,
        color: "text-primary",
        shadow: "shadow-primary/20"
    },
    {
        id: 3,
        title: "CrossFit HIIT",
        description: "Functional diverse movements performed at high intensity to improve overall peak fitness.",
        icon: Zap,
        color: "text-red-400",
        shadow: "shadow-red-400/20"
    },
    {
        id: 4,
        title: "1-on-1 Training",
        description: "Expert coaching tailored exactly to your body, nutrition planning, and daily accountability.",
        icon: Activity,
        color: "text-blue-500",
        shadow: "shadow-blue-500/20"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
};

const Programs = () => {
    return (
        <section id="programs" className="py-16 sm:py-24 bg-black relative pb-24 sm:pb-32 overflow-hidden">

            {/* Dynamic diagonal divider - Seamless transition from About */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 -mt-px pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[120px]">
                    <path d="M0 0 L1200 0 L1200 120 L0 10 Z" className="fill-dark-900"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 sm:pt-0">

                <div className="text-center mb-12 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-3">Our Services</h2>
                        <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white drop-shadow-md">Elite Programs</h3>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                >
                    {programs.map((program) => (
                        <motion.div
                            variants={itemVariants}
                            key={program.id}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`bg-dark-900 p-6 sm:p-8 rounded-2xl border border-dark-700 hover:border-white/20 transition-all group relative overflow-hidden shadow-lg hover:${program.shadow}`}
                        >
                            {/* Animated Background Flare */}
                            <div className="absolute -top-16 -right-16 w-32 h-32 bg-dark-800 rounded-full group-hover:scale-[3] transition-transform duration-700 ease-out z-0 opacity-50" />

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex p-3 rounded-xl bg-dark-800 border border-dark-700 shadow-inner group-hover:bg-dark-900 transition-colors">
                                    <program.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${program.color} drop-shadow-md`} />
                                </div>

                                <h4 className="text-xl sm:text-2xl font-black uppercase mb-3 text-white group-hover:translate-x-1 transition-transform">{program.title}</h4>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 h-auto sm:h-20">{program.description}</p>

                                <div className="pt-4 border-t border-dark-700/50 flex items-center justify-between group-hover:border-white/20 transition-colors">
                                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 font-bold group-hover:text-white transition-colors">Learn More</span>
                                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-primary transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Diagonal Divider - Transition to Results */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 mb-px pointer-events-none rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[120px]">
                    <path d="M0 0 L1200 0 L1200 120 L0 10 Z" className="fill-dark-900"></path>
                </svg>
            </div>
        </section>
    );
};

export default Programs;
