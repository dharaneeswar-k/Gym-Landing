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
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';

function App() {
    return (
        <Preloader>
            <SmoothScroll>
                <ScrollProgress />

                <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-primary selection:text-white relative">
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
        </Preloader>
    );
}

export default App;
