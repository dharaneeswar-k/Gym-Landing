import React, { useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import gymData from '../data/gymData';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -10, scale: 0.95 },
    show: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { type: "spring", bounce: 0.4 } }
};

const PricingCard = ({ plan }) => {
    const cardRef = useRef(null);
    const x = useSpring(0, { stiffness: 150, damping: 20 });
    const y = useSpring(0, { stiffness: 150, damping: 20 });
    const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

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
            variants={itemVariants}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`relative flex-shrink-0 w-[78vw] snap-start md:w-auto glass p-6 sm:p-8 rounded-2xl border flex flex-col transition-all duration-300 ${plan.popular
                ? 'border-primary/50 shadow-[0_0_40px_rgba(239,68,68,0.15)] md:scale-105 z-10'
                : 'border-dark-700 hover:border-white/20'
                }`}
        >
            {/* Holographic shimmer for popular */}
            {plan.popular && (
                <div className="absolute inset-0 rounded-2xl holographic opacity-30 pointer-events-none" />
            )}

            <div style={{ transform: "translateZ(40px)" }} className="flex flex-col h-full relative z-10">
                {plan.popular && (
                    <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-primaryDark text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_4px_20px_rgba(239,68,68,0.5)] flex items-center gap-1.5"
                    >
                        <Star className="w-3 h-3 fill-white" />
                        Most Popular
                    </motion.div>
                )}

                <div className="text-center mb-6 sm:mb-8 mt-2 sm:mt-0">
                    <h4 className="text-lg sm:text-xl font-bold uppercase text-white mb-2 font-display">{plan.name}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-6 pb-6 border-b border-dark-700/50">{plan.description}</p>
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-4xl sm:text-5xl font-black metallic-text font-display">{plan.price}</span>
                        {plan.duration && <span className="text-primary font-bold text-sm tracking-widest uppercase mt-1">{plan.duration}</span>}
                    </div>
                </div>

                {plan.features && (
                    <ul className="space-y-3 sm:space-y-4 mb-8 flex-grow">
                        {plan.features.map((feature, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="flex items-start sm:items-center gap-3 text-gray-300 text-xs sm:text-sm font-medium"
                            >
                                <div className={`mt-0.5 sm:mt-0 rounded-full p-1 ${plan.popular ? 'bg-primary/20 text-primary shadow-[0_0_8px_rgba(239,68,68,0.4)]' : 'bg-dark-700 text-gray-400'}`}>
                                    <Check className="w-3 h-3 sm:w-4 sm:h-4 stroke-[3]" />
                                </div>
                                {feature}
                            </motion.li>
                        ))}
                    </ul>
                )}

                <a
                    href={`https://wa.me/${gymData.whatsapp}?text=I%20want%20to%20buy%20the%20${plan.name}%20plan`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-4 rounded-xl uppercase font-black tracking-widest transition-all active:scale-95 hover:scale-[1.02] ${plan.popular
                        ? 'bg-primary hover:bg-primaryDark text-white shadow-[0_4px_20px_rgba(239,68,68,0.4)] neon-box'
                        : 'bg-dark-800 hover:bg-dark-700 text-white border border-dark-700 hover:border-gray-500'
                        }`}
                >
                    Choose Plan
                </a>
            </div>
        </motion.div>
    );
};

const Pricing = () => {
    return (
        <section id="pricing" className="py-16 sm:py-28 aurora-bg relative z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="text-center mb-12 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-black uppercase font-display metallic-text">Join The {gymData.gymName.split(' ')[0]}</h3>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex md:grid md:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-10 md:pb-0 hide-scroll-mobile px-6 sm:px-0 perspective-2000"
                >
                    {gymData.pricing.map((plan, idx) => (
                        <PricingCard key={idx} plan={plan} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
