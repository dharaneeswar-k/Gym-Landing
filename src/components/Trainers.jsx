import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { Award, Star, Target, X, CheckCircle2, ChevronRight } from 'lucide-react';

const trainers = [
    {
        name: "Rahul Singh",
        role: "Head Coach & Master Trainer",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
        achievements: "Mr. India 2021 | 10+ Years Exp",
        specialties: ["Powerlifting", "Hypertrophy", "Strength Coaching"],
        color: "from-primary",
        bio: "Rahul revolutionized the hardcore lifting scene in India. He believes in heavy compound lifting paired with precise recovery protocols. He has personally overseen the transformation of elite athletes and competitive bodybuilders across the nation.",
        stats: { squat: "260kg", bench: "180kg", deadlift: "300kg" },
        certifications: ["ACE Master Trainer", "Olympic Weightlifting Level 2", "Precision Nutrition L1"]
    },
    {
        name: "Priya Sharma",
        role: "CrossFit & Agility Specialist",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop",
        achievements: "National Gold Medalist | 6+ Years Exp",
        specialties: ["HIIT", "Athletic Conditioning", "Mobility"],
        color: "from-red-600",
        bio: "Priya brings an explosive mix of gymnastics, endurance, and Olympic lifting to TitanFit. Her classes are legendary for pushing members past their perceived limits while keeping the energy unconditionally high and form strict.",
        stats: { clean: "95kg", snatch: "75kg", engine: "Endless" },
        certifications: ["CrossFit Level 3", "ISSA Certified PT", "Mobility WOD Spec"]
    },
    {
        name: "Vikram Desai",
        role: "Body Transformation Expert",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
        achievements: "Transformed 600+ Clients | 12+ Years Exp",
        specialties: ["Fat Loss", "Diet Optimization", "Bodybuilding"],
        color: "from-purple-500",
        bio: "Vikram doesn't just change bodies; he changes minds. Using a strict blend of metabolic conditioning, caloric cycling, and hypertrophy training, he engineers transformations that stick for life. He's the architect behind our 90-day shred.",
        stats: { clients: "600+", retention: "98%", bodyfat: "5%" },
        certifications: ["NSCA CSCS", "Sports Nutritionist", "Physique Prep Coach"]
    }
];

const TrainerCard = ({ trainer, index, onOpen }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const yImage = useTransform(scrollYProgress, [0, 1], [-30, 30]);

    const x = useSpring(0, { stiffness: 150, damping: 20 });
    const y = useSpring(0, { stiffness: 150, damping: 20 });
    const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onClick={() => onOpen(trainer)}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.6, type: "spring", bounce: 0.4 }}
            className="relative group rounded-3xl overflow-hidden glass border border-dark-700 h-[450px] sm:h-[550px] md:h-[500px] shadow-xl hover:shadow-[0_10px_60px_rgba(239,68,68,0.15)] hover:border-primary/30 transition-all cursor-pointer flex-shrink-0 w-[78vw] sm:w-[60vw] md:w-auto snap-start animate-neon-border"
        >
            {/* Glowing Background */}
            <div className={`absolute -inset-10 bg-gradient-to-tr ${trainer.color} to-transparent opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-700 z-0 pointer-events-none`} />

            {/* Image with parallax */}
            <div className="absolute inset-0 overflow-hidden z-10" style={{ transform: "translateZ(50px)" }}>
                <motion.img
                    style={{ y: yImage, scale: 1.15 }}
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8 z-20 flex flex-col justify-end h-full pointer-events-none" style={{ transform: "translateZ(80px)" }}>
                <div className="transform sm:translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h4 className="text-2xl sm:text-4xl font-black uppercase text-white mb-1 font-display">{trainer.name}</h4>
                    <p className="text-primary font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-3 sm:mb-4 neon-text">{trainer.role}</p>

                    <div className="flex items-center gap-2 mb-4 glass px-3 py-1.5 sm:py-2 rounded-xl inline-flex">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                        <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">{trainer.achievements}</span>
                    </div>

                    <div className="flex items-center gap-2 text-white/50 text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-2 sm:mt-0 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>View Full Profile</span>
                        <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Trainers = () => {
    const [selectedTrainer, setSelectedTrainer] = useState(null);

    useEffect(() => {
        if (selectedTrainer) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [selectedTrainer]);

    return (
        <section id="trainers" className="py-20 sm:py-32 bg-black/80 relative overflow-hidden">
            {/* Background text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] sm:opacity-[0.03] select-none z-0">
                <h2 className="text-[10rem] sm:text-[15rem] leading-none font-black text-white whitespace-nowrap blur-[4px] sm:blur-[8px] font-display">COACHES</h2>
            </div>

            <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
                <div className="text-center mb-10 sm:mb-20 px-4 sm:px-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="inline-flex items-center justify-center gap-2 mb-3">
                            <Star className="w-4 h-4 text-primary fill-primary" />
                            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mt-0.5 font-display">The Titans Engine</h2>
                            <Star className="w-4 h-4 text-primary fill-primary" />
                        </div>
                        <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-display metallic-text">Meet The Masters</h3>
                    </motion.div>
                </div>

                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-12 w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory px-6 sm:px-0 pb-10 md:pb-0 hide-scroll-mobile perspective-2000">
                    {trainers.map((trainer, index) => (
                        <TrainerCard key={index} trainer={trainer} index={index} onOpen={setSelectedTrainer} />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedTrainer && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedTrainer(null)}
                            className="absolute inset-0 bg-black/85 backdrop-blur-lg cursor-pointer"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            transition={{ type: "spring", bounce: 0.3 }}
                            className="relative w-full max-w-5xl glass-strong rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedTrainer(null)}
                                className="absolute top-4 right-4 z-50 glass p-2 rounded-full hover:bg-primary hover:border-primary transition-colors text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="md:w-5/12 h-64 md:h-auto relative shrink-0">
                                <div className={`absolute inset-0 bg-gradient-to-tr ${selectedTrainer.color} to-transparent opacity-20 mix-blend-overlay z-10`} />
                                <img src={selectedTrainer.image} alt={selectedTrainer.name} className="w-full h-full object-cover grayscale" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-dark-900 z-10" />
                            </div>

                            <div className="md:w-7/12 p-6 sm:p-10 lg:p-12 overflow-y-auto hidden-scrollbar z-20">
                                <h4 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-2 font-display">{selectedTrainer.role}</h4>
                                <h3 className="text-4xl sm:text-5xl font-black uppercase text-white mb-6 leading-none font-display">{selectedTrainer.name}</h3>

                                <div className="flex flex-wrap items-center gap-3 mb-8">
                                    <span className="glass text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                        <Award className="w-4 h-4 text-yellow-500" />
                                        {selectedTrainer.achievements}
                                    </span>
                                </div>

                                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 font-medium">
                                    {selectedTrainer.bio}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                                    <div>
                                        <h5 className="text-xs uppercase text-gray-500 tracking-widest font-black border-b border-dark-700 pb-2 mb-4">Core Specialties</h5>
                                        <ul className="space-y-3">
                                            {selectedTrainer.specialties.map((itm, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                                                    <Target className="w-4 h-4 text-primary shrink-0" />
                                                    {itm}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="text-xs uppercase text-gray-500 tracking-widest font-black border-b border-dark-700 pb-2 mb-4">Certifications</h5>
                                        <ul className="space-y-3">
                                            {selectedTrainer.certifications.map((itm, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                                    {itm}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="glass rounded-2xl p-6 flex flex-wrap gap-6 justify-between items-center relative overflow-hidden group hover:border-primary/50 transition-colors neon-box">
                                    <div className="absolute right-0 top-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                                    {Object.entries(selectedTrainer.stats).map(([key, value]) => (
                                        <div key={key} className="text-center relative z-10">
                                            <span className="block text-2xl sm:text-3xl font-black text-white font-display">{value}</span>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{key}</span>
                                        </div>
                                    ))}
                                </div>

                                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="mt-8 w-full block text-center bg-white text-black py-4 rounded-xl font-black uppercase tracking-widest hover:bg-gray-200 active:scale-95 transition-transform">
                                    Request {selectedTrainer.name.split(' ')[0]}
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Trainers;
