import React, { useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const images = [
    { id: 1, text: "Free Weights Zone", url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" },
    { id: 2, text: "Cardio Deck", url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop" },
    { id: 3, text: "Powerlifting Area", url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop" },
    { id: 4, text: "CrossFit Box", url: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=600&auto=format&fit=crop" },
    { id: 5, text: "Machines", url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop" },
    { id: 6, text: "Personal Training", url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop" }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const GalleryItem = ({ item, index }) => {
    const cardRef = useRef(null);
    const x = useSpring(0, { stiffness: 200, damping: 25 });
    const y = useSpring(0, { stiffness: 200, damping: 25 });
    const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);
    const z = useSpring(0, { stiffness: 200, damping: 25 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
        z.set(30);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        z.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            variants={{
                hidden: { opacity: 0, scale: 0.8, rotateX: -15 },
                show: { opacity: 1, scale: 1, rotateX: 0, transition: { type: "spring", bounce: 0.4, delay: index * 0.05 } }
            }}
            className="relative aspect-square sm:aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer border border-dark-700 hover:border-primary/50 shadow-lg hover:shadow-[0_20px_60px_rgba(239,68,68,0.15)] transition-all"
        >
            {/* Spotlight cursor follow */}
            <motion.div
                className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                    background: `radial-gradient(circle at ${50}% ${50}%, rgba(239,68,68,0.08) 0%, transparent 60%)`,
                }}
            />

            {/* Image */}
            <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 ease-out">
                <img src={item.url} alt={item.text} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-20" />

            {/* Holographic shimmer on hover */}
            <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10 rounded-xl" />

            {/* Text */}
            <div className="absolute inset-0 flex items-end justify-center pb-4 sm:pb-8 z-30" style={{ transform: 'translateZ(20px)' }}>
                <span className="text-white font-black uppercase tracking-widest text-[10px] sm:text-base translate-y-2 group-hover:translate-y-0 transition-transform duration-300 text-center px-2 font-display">
                    {item.text}
                </span>
            </div>
        </motion.div>
    );
};

const Gallery = () => {
    return (
        <section id="gallery" className="py-16 sm:py-28 bg-black/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-3 font-display">Our Facility</h2>
                        <h3 className="text-3xl sm:text-5xl font-black uppercase font-display metallic-text">Premium Zones</h3>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 perspective-2000"
                >
                    {images.map((item, index) => (
                        <GalleryItem key={item.id} item={item} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
