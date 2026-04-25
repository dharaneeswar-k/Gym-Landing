import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import gymData from '../data/gymData';

const FloatingWhatsApp = () => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50"
        >
            <a
                href={`https://wa.me/${gymData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] transition-transform group"
            >
                <MessageCircle className="w-8 h-8" />

                {/* Tooltip */}
                <span className="absolute right-20 bg-dark-800 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-dark-700 pointer-events-none">
                    Chat with us!
                    <div className="absolute top-1/2 -right-1 w-2 h-2 bg-dark-800 border-t border-r border-dark-700 transform -translate-y-1/2 rotate-45"></div>
                </span>
            </a>
        </motion.div>
    );
};

export default FloatingWhatsApp;
