import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import gymData from '../data/gymData';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
};

const ProgramCard = ({ program }) => {
    const cardRef = useRef(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const x = useSpring(0, { stiffness: 200, damping: 25 });
    const y = useSpring(0, { stiffness: 200, damping: 25 });
    const rotateX = useTransform(y, [-0.5, 0.5], [12, -12]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsFlipped(false);
    };

    return (
        <motion.div
            variants={itemVariants}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative h-[320px] sm:h-[360px] cursor-pointer perspective-1000 group"
        >
            {/* Card Front */}
            <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="absolute inset-0 bg-dark-900 rounded-2xl border border-dark-700 hover:border-dark-600 transition-colors overflow-hidden shadow-xl backface-hidden"
                style={{ backfaceVisibility: 'hidden' }}
            >
                {/* Clean dark card structure, removed heavy glow and holographics */}

                <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col" style={{ transform: 'translateZ(30px)' }}>
                    <div className="mb-6 inline-flex p-3.5 rounded-xl glass group-hover:shadow-lg transition-all">
                        <program.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${program.color} drop-shadow-md group-hover:scale-110 transition-transform`} />
                    </div>

                    <h4 className="text-xl sm:text-2xl font-black uppercase mb-3 text-white group-hover:translate-x-1 transition-transform font-display">{program.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">{program.description}</p>

                    <div className="pt-4 border-t border-dark-700/50 flex items-center justify-between group-hover:border-white/20 transition-colors">
                        <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 font-bold group-hover:text-white transition-colors">Tap to Explore</span>
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-primary transition-colors group-hover:rotate-45 duration-300" />
                    </div>
                </div>
            </motion.div>

            {/* Card Back */}
            <motion.div
                animate={{ rotateY: isFlipped ? 0 : -180 }}
                transition={{ duration: 0.6, type: "spring" }}
                className={`absolute inset-0 rounded-2xl border border-dark-700 overflow-hidden shadow-xl bg-gradient-to-br ${program.gradient} backface-hidden`}
                style={{ backfaceVisibility: 'hidden' }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col items-center justify-center text-center">
                    <program.icon className="w-12 h-12 text-white mb-4 drop-shadow-lg" />
                    <h4 className="text-2xl font-black uppercase text-white mb-4 font-display">{program.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed mb-6">{program.description}</p>
                    <a
                        href={`https://wa.me/${gymData.whatsapp}?text=I%20want%20to%20get%20started%20with%20${program.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-black rounded-xl font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-transform"
                    >
                        Get Started
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Programs = () => {
    return (
        <section id="programs" className="py-24 sm:py-32 relative overflow-hidden bg-dark-950">
            {/* Section Transition */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 sm:pt-0">
                <div className="text-center mb-12 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-3">Our Services</h2>
                        <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white font-display">Elite Programs</h3>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 perspective-2000"
                >
                    {gymData.services.map((program, index) => (
                        <ProgramCard key={index} program={program} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Programs;
