import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Vikram S.",
        role: "Member for 2 years",
        content: "The best gym in the city hands down. The equipment is top-notch and the trainers actually care. I dropped 20kg and gained confidence.",
        rating: 5
    },
    {
        id: 2,
        name: "Sneha R.",
        role: "Member for 6 months",
        content: "Love the CrossFit sessions! The vibe is energetic and everyone pushes you to be your best. Finally found a gym I want to go to every day.",
        rating: 5
    },
    {
        id: 3,
        name: "Arjun K.",
        role: "Powerlifter",
        content: "If you lift heavy, this is your place. Plenty of squat racks, deadlift platforms, and the environment is pure motivation.",
        rating: 5
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
    const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

    // Auto-play
    useEffect(() => {
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [next]);

    return (
        <section className="py-16 sm:py-28 aurora-bg border-t border-dark-800/50 relative overflow-hidden">
            {/* Particle dots background */}
            <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.6 }}
                >
                    <Quote className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-primary/30 mb-6 sm:mb-8 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]" />
                </motion.div>

                {/* 3D Carousel Container */}
                <div className="relative h-72 sm:h-64 md:h-52 flex items-center justify-center perspective-1000">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, scale: 0.85, rotateY: 30, z: -100 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
                            exit={{ opacity: 0, scale: 0.85, rotateY: -30, z: -100 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="absolute w-full px-4"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                                ))}
                            </div>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 italic mb-6 sm:mb-8 tracking-wide font-light leading-relaxed">
                                "{testimonials[current].content}"
                            </p>
                            <div>
                                <h4 className="font-black text-white uppercase tracking-widest text-sm sm:text-base font-display">{testimonials[current].name}</h4>
                                <p className="text-[10px] sm:text-xs text-primary font-bold uppercase tracking-widest mt-1 neon-text">{testimonials[current].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Nav Dots */}
                <div className="flex justify-center gap-2 mt-6 mb-4">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current
                                    ? 'bg-primary w-6 shadow-[0_0_10px_rgba(239,68,68,0.6)]'
                                    : 'bg-dark-600 hover:bg-dark-500'
                                }`}
                        />
                    ))}
                </div>

                <div className="flex justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
                    <button onClick={prev} className="p-3 sm:p-4 glass rounded-full hover:bg-primary/20 text-gray-400 hover:text-primary transition-all hover:scale-110 active:scale-95 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button onClick={next} className="p-3 sm:p-4 glass rounded-full hover:bg-primary/20 text-gray-400 hover:text-primary transition-all hover:scale-110 active:scale-95 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
