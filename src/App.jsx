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

function App() {
    return (
        <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-primary selection:text-white">
            <Navbar />
            <main>
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
    );
}

export default App;
