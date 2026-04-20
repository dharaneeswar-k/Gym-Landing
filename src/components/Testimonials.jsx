import React, { useState } from 'react';
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

    const next = () => setCurrent((c) => (c + 1) % testimonials.length);
    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-16 sm:py-24 bg-dark-900 border-t border-dark-800 relative overflow-hidden">

            {/* Background Particles Fake */}
            <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.6 }}
                >
                    <Quote className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-primary/40 mb-6 sm:mb-8" />
                </motion.div>

                {/* Adjusted Heights for Mobile */}
                <div className="relative h-72 sm:h-64 md:h-48 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
                            transition={{ duration: 0.4 }}
                            className="absolute w-full px-4"
                        >
                            <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]" />
                                ))}
                            </div>
                            <p className="text-lg sm:text-xl md:text-xl text-gray-300 italic mb-6 sm:mb-8 tracking-wide font-light">"{testimonials[current].content}"</p>
                            <div>
                                <h4 className="font-black text-white uppercase tracking-widest text-sm sm:text-base">{testimonials[current].name}</h4>
                                <p className="text-[10px] sm:text-xs text-primary font-bold uppercase tracking-widest mt-1">{testimonials[current].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
                    <button onClick={prev} className="p-3 sm:p-4 bg-dark-800 rounded-full hover:bg-primary/20 text-gray-400 hover:text-primary transition-all border border-dark-700 hover:border-primary hover:scale-110 active:scale-95 shadow-lg">
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button onClick={next} className="p-3 sm:p-4 bg-dark-800 rounded-full hover:bg-primary/20 text-gray-400 hover:text-primary transition-all border border-dark-700 hover:border-primary hover:scale-110 active:scale-95 shadow-lg">
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
