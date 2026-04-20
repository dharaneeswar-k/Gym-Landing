import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Classic Plan",
        price: "1499 Rs.",
        duration: "/ month",
        description: "Perfect for getting started.",
        features: [
            "Full Gym Floor Access",
            "Free Weights & Machines",
            "Clean Locker Facilities",
            "High-speed Free Wi-Fi"
        ],
        popular: false
    },
    {
        name: "Titan Pro",
        price: "3999 Rs.",
        duration: "/ quarter",
        description: "Our most popular membership.",
        features: [
            "Everything in Classic",
            "2 Group Classes Weekly",
            "1 Free PT Session / Month",
            "Basic Diet Plan"
        ],
        popular: true
    },
    {
        name: "Elite VIP",
        price: "12999 Rs.",
        duration: "/ year",
        description: "For the serious achiever.",
        features: [
            "Everything in Titan Pro",
            "Unlimited Group Classes",
            "Monthly Body Composition",
            "VIP Priority Equipment Access"
        ],
        popular: false
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4 } }
};

const Pricing = () => {
    return (
        <section id="pricing" className="py-16 sm:py-24 bg-dark-800 relative z-10">

            {/* Dynamic Background Blob for extra cool factor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

                <div className="text-center mb-12 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-3">Memberships</h2>
                            <h3 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-black uppercase text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Join The Titans</h3>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex md:grid md:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-10 md:pb-0 hide-scroll-mobile px-6 sm:px-0"
                >
                    {plans.map((plan, idx) => (
                        <motion.div
                            variants={itemVariants}
                            key={idx}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`relative flex-shrink-0 w-[78vw] snap-start md:w-auto bg-dark-900/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border flex flex-col transition-all duration-300 ${plan.popular
                                ? 'border-primary shadow-[0_0_30px_rgba(239,68,68,0.2)] md:scale-105 z-10'
                                : 'border-dark-700 hover:border-gray-500'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-primaryDark text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_4px_10px_rgba(239,68,68,0.5)]">
                                    Most Popular
                                </div>
                            )}

                            <div className="text-center mb-6 sm:mb-8 mt-2 sm:mt-0">
                                <h4 className="text-lg sm:text-xl font-bold uppercase text-white mb-2">{plan.name}</h4>
                                <p className="text-gray-400 text-xs sm:text-sm mb-6 pb-6 border-b border-dark-700/50">{plan.description}</p>
                                <div className="flex flex-col items-center justify-center">
                                    <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 drop-shadow-sm">{plan.price}</span>
                                    <span className="text-primary font-bold text-sm tracking-widest uppercase mt-1">{plan.duration}</span>
                                </div>
                            </div>

                            <ul className="space-y-3 sm:space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                        className="flex items-start sm:items-center gap-3 text-gray-300 text-xs sm:text-sm font-medium"
                                    >
                                        <div className={`mt-0.5 sm:mt-0 rounded-full p-1 ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-dark-700 text-gray-400'}`}>
                                            <Check className="w-3 h-3 sm:w-4 sm:h-4 stroke-[3]" />
                                        </div>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>

                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block w-full text-center py-4 rounded-xl uppercase font-black tracking-widest transition-all active:scale-95 ${plan.popular
                                    ? 'bg-primary hover:bg-primaryDark text-white shadow-[0_4px_15px_rgba(239,68,68,0.4)]'
                                    : 'bg-dark-800 hover:bg-dark-700 text-white border border-dark-700 hover:border-gray-500'
                                    }`}
                            >
                                Choose Plan
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Pricing;
