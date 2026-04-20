import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Medal, Clock, ShieldCheck, Flame } from 'lucide-react';

const stats = [
    { icon: Users, value: '850+', label: 'Active Members' },
    { icon: Medal, value: '25+', label: 'Expert Trainers' },
    { icon: Target, value: '120+', label: 'Weekly Classes' },
    { icon: Clock, value: '24/7', label: 'Gym Access' },
];

const About = () => {
    return (
        <section id="about" className="py-16 sm:py-24 bg-dark-900 relative overflow-hidden">
            {/* Decorative gradient blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="space-y-6 sm:space-y-8"
                    >
                        <div>
                            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-3">About TitanFit</h2>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-white drop-shadow-md">
                                Not Just A Gym. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">It's A Lifestyle.</span>
                            </h3>
                        </div>

                        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed text-justify sm:text-left">
                            Founded by industry veterans in 2015, TitanFit provides the ultimate 24/7 environment for individuals serious about their physical transformation. We combine old-school work ethic, hardcore iron, and modern sports science with extreme precision.
                        </p>

                        <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="space-y-3 sm:space-y-4 bg-dark-800/50 p-4 rounded-xl border border-white/5"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-800 rounded-lg flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm sm:text-lg uppercase text-white">Elite Trainers</h4>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Certified professionals dedicated to your success.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="space-y-3 sm:space-y-4 bg-dark-800/50 p-4 rounded-xl border border-white/5"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-800 rounded-lg flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                    <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm sm:text-lg uppercase text-white">Custom Plans</h4>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Tailored workouts based on your specific goals.</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Staggered Grid for Mobile Compactness */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
                        }}
                        className="grid grid-cols-2 gap-3 sm:gap-4 lg:pl-10"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                                    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" } }
                                }}
                                whileHover={{ y: -5, borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.05)' }}
                                className="bg-dark-800 p-6 sm:p-8 rounded-2xl border border-dark-700 text-center transition-all group shadow-lg"
                            >
                                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-dark-500 group-hover:text-primary transition-colors mb-3 sm:mb-4 drop-shadow-md" />
                                <h4 className="text-2xl sm:text-4xl font-black text-white mb-1 drop-shadow-sm">{stat.value}</h4>
                                <p className="text-[10px] sm:text-xs text-primary font-bold uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
