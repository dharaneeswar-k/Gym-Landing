import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-dark-900 border-t border-dark-800 pt-16 sm:pt-24 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">

                    <div className="space-y-4 sm:space-y-6 lg:col-span-1">
                        <h4 className="text-2xl sm:text-3xl tracking-wider uppercase font-black">Titan<span className="text-primary">Fit</span></h4>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                            Forging champions since 2015. The premium destination for serious fitness enthusiasts. Don't wish for a good body, work for it.
                        </p>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                        <h4 className="font-bold uppercase tracking-[0.2em] text-xs text-gray-500">Quick Links</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {['Home', 'About Us', 'Programs', 'Pricing'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-300 hover:text-primary transition-colors text-xs sm:text-sm uppercase font-bold tracking-wider">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4 sm:space-y-6 lg:col-span-2">
                        <h4 className="font-bold uppercase tracking-[0.2em] text-xs text-gray-500">Contact Us</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex gap-3 sm:gap-4 items-start">
                                <MapPin className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-300 font-medium">xxxx , xxxx</p>
                                    <p className="text-xs sm:text-sm text-gray-300 font-medium">xxxx, Tamil Nadu 600000</p>
                                </div>
                            </div>
                            <div className="flex gap-3 sm:gap-4 items-start">
                                <Clock className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-300 font-medium">Mon - Sat: 5:00 AM - 11:00 PM</p>
                                    <p className="text-xs sm:text-sm text-gray-300 font-medium">Sunday: 6:00 AM - 12:00 PM</p>
                                </div>
                            </div>
                            <div className="flex gap-3 sm:gap-4 items-start">
                                <Phone className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                                <p className="text-xs sm:text-sm text-gray-300 font-medium">+91 98765 43210</p>
                            </div>
                            <div className="flex gap-3 sm:gap-4 items-start">
                                <Mail className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                                <p className="text-xs sm:text-sm text-gray-300 font-medium">join@titanfit.in</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Dense Mobile-optimized Form & Map row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    <div className="bg-dark-800 p-6 sm:p-8 rounded-2xl border border-dark-700 shadow-xl">
                        <h4 className="font-black uppercase mb-6 text-lg sm:text-xl text-white tracking-widest">Send Inquiry</h4>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Name" className="bg-dark-900 border border-dark-700 p-3 sm:p-4 rounded-xl text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                                <input type="email" placeholder="Your Email" className="bg-dark-900 border border-dark-700 p-3 sm:p-4 rounded-xl text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                            </div>
                            <input type="tel" placeholder="Phone Number" className="w-full bg-dark-900 border border-dark-700 p-3 sm:p-4 rounded-xl text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                            <textarea placeholder="Your Message" rows="3" className="w-full bg-dark-900 border border-dark-700 p-3 sm:p-4 rounded-xl text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
                            <button className="w-full bg-primary hover:bg-primaryDark text-white font-black uppercase tracking-widest py-4 rounded-xl transition-transform active:scale-95 shadow-[0_0_15px_rgba(239,68,68,0.2)]">Submit Request</button>
                        </form>
                    </div>

                    <div className="rounded-2xl overflow-hidden border border-dark-700 relative min-h-[250px] sm:min-h-[300px] group shadow-xl">
                        <div className="absolute inset-0 bg-dark-800 flex flex-col items-center justify-center p-6 text-center text-gray-500 group-hover:bg-dark-900 transition-colors">
                            <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-dark-600 mb-4 group-hover:text-primary transition-colors" />
                            <p className="uppercase tracking-[0.2em] text-[10px] sm:text-xs font-black w-full text-gray-400">Google Maps Interactive Integration</p>
                            <p className="text-xs pt-2 text-dark-500">45 Anna Salai, Chennai, Tamil Nadu</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-dark-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                    <p className="text-gray-500 text-xs sm:text-sm font-medium">© {new Date().getFullYear()} TitanFit. All rights reserved.</p>
                    <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Contact;
