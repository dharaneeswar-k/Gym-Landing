import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';

const Counter = ({ end, duration = 2.5, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let startTime;
            let animationFrame;

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = (timestamp - startTime) / (duration * 1000);

                if (progress < 1) {
                    setCount(Math.floor(end * progress));
                    animationFrame = requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };

            animationFrame = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(animationFrame);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const Transformations = () => {
    return (
        <section id="results" className="py-16 sm:py-24 bg-dark-900 overflow-hidden relative">

            <div className="absolute -left-32 top-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-12 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-3">Real Results</h2>
                        <h3 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-black uppercase text-white mb-4">Don't Just Take Our Word</h3>
                        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                            We let our body transformations speak for themselves. Witness the raw power of consistency, heavy iron, and our expert nutritional guidance.
                        </p>
                    </motion.div>
                </div>

                {/* Stackable Mobile Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-16 sm:mb-24 text-center">
                    {[
                        { label: "Pounds Destroyed", value: 4500, suffix: "+" },
                        { label: "Muscle Built", value: 1200, suffix: "kg+" },
                        { label: "Lives Changed", value: 850, suffix: "+" },
                        { label: "Success Rate", value: 99, suffix: "%" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
                            className="p-4 sm:p-6 bg-gradient-to-b from-dark-800 to-dark-900 rounded-2xl border border-dark-700 shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2 drop-shadow-md">
                                <Counter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-[10px] sm:text-xs text-primary uppercase tracking-widest font-bold">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile-Friendly Before/After Layout Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-dark-800/80 backdrop-blur border border-dark-700 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                >
                    <div className="p-8 sm:p-12 md:w-1/2 flex flex-col justify-center order-2 md:order-1">
                        <h4 className="text-2xl sm:text-3xl font-black uppercase mb-4 text-white">Aditya's 120-Day Shred</h4>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 italic">
                            "TitanFit broke me down and rebuilt me. The personalized diet protocol and the hardcore lifting environment was the exact shock my body needed. I'm in the best shape of my life."
                        </p>
                        <ul className="space-y-3 mb-8 text-xs sm:text-sm text-gray-300 font-bold tracking-wide">
                            <li className="flex gap-3 items-center"><div className="w-2 h-2 bg-primary rounded-full" /> Lost 22kg of pure fat</li>
                            <li className="flex gap-3 items-center"><div className="w-2 h-2 bg-primary rounded-full" /> Dropped 4 pant sizes</li>
                            <li className="flex gap-3 items-center"><div className="w-2 h-2 bg-primary rounded-full" /> Doubled bench press max</li>
                        </ul>
                        <a href="#contact" className="self-start px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-black uppercase tracking-widest rounded-lg hover:bg-gray-200 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            Start Your Shred
                        </a>
                    </div>

                    <div className="w-full md:w-1/2 bg-black border-b md:border-b-0 md:border-l border-dark-700 flex items-center justify-center p-4 sm:p-8 order-1 md:order-2 relative group min-h-[250px] sm:min-h-[400px]">
                        {/* Neon Glow Placeholder for missing image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50 rounded-t-3xl md:rounded-t-none md:rounded-r-3xl" />

                        <div className="text-center p-6 border border-white/10 rounded-2xl bg-dark-900/50 backdrop-blur shadow-2xl relative z-10 max-w-xs cursor-pointer hover:border-primary/50 hover:bg-dark-900/80 transition-all">
                            <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(239,68,68,0.6)] group-hover:scale-110 transition-transform">
                                <Play className="w-8 h-8 ml-1" fill="currentColor" />
                            </div>
                            <span className="uppercase tracking-[0.2em] text-xs font-black block mb-2 text-white">Watch Transformation</span>
                            <span className="text-[10px] text-gray-400 font-medium">Video proof of Aditya's journey.</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Transformations;
