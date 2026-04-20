import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Transformations from './components/Transformations';
import Trainers from './components/Trainers';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';

function App() {
    return (
        <SmoothScroll>
            <CustomCursor />
            <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-primary selection:text-white relative overflow-hidden">
                {/* Million Dollar Aura Backgrounds */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="aura-orb absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] bg-primary/5 rounded-full blur-[150px]" />
                    <div className="aura-orb-reverse absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] bg-primary/3 rounded-full blur-[120px]" />
                </div>

                <Navbar />
                <main className="relative z-10">
                    <Hero />
                    <About />
                    <Programs />
                    <Transformations />
                    <Trainers />
                    <Gallery />
                    <Pricing />
                    <Testimonials />
                    <CallToAction />
                </main>
                <Contact />
                <FloatingWhatsApp />
            </div>
        </SmoothScroll>
    );
}

export default App;
