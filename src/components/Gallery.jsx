import React from 'react';
import { motion } from 'framer-motion';

const images = [
    { id: 1, text: "Free Weights Zone", color: "from-red-600/80", url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" },
    { id: 2, text: "Cardio Deck", color: "from-gray-700/80", url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop" },
    { id: 3, text: "Powerlifting Area", color: "from-primary/80", url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop" },
    { id: 4, text: "CrossFit Box", color: "from-red-900/80", url: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=600&auto=format&fit=crop" },
    { id: 5, text: "Machines", color: "from-red-700/80", url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop" },
    { id: 6, text: "Personal Training", color: "from-dark-700/80", url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop" }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.5 } }
};

const Gallery = () => {
    return (
        <section id="gallery" className="py-16 sm:py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-3">Our Facility</h2>
                        <h3 className="text-3xl sm:text-5xl font-black uppercase text-white drop-shadow-md">Premium Zones</h3>
                    </motion.div>
                </div>

                {/* Dense Grid for Mobile - 2 columns on small, 3 on large */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6"
                >
                    {images.map((item) => (
                        <motion.div
                            variants={itemVariants}
                            key={item.id}
                            whileHover={{ scale: 1.03, zIndex: 10 }}
                            className="relative aspect-square sm:aspect-[4/3] bg-dark-900 overflow-hidden rounded-xl group cursor-pointer border border-dark-700 hover:border-primary transition-colors shadow-lg hover:shadow-2xl hover:shadow-primary/20"
                        >
                            {/* Animated Inner Glow pattern */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10`} />

                            <div className="absolute inset-0 bg-dark-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-out">
                                <img src={item.url} alt={item.text} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                            </div>

                            {/* Text Overlay always partially visible on mobile, fully on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 sm:pb-8 z-20">
                                <span className="text-white font-black uppercase tracking-widest text-[10px] sm:text-lg sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center px-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                    {item.text}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Gallery;
