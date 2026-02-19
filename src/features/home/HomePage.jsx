import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Hero from './components/Hero';
import WorldSection from './components/WorldSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';


const HomePage = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col font-body text-text-light">
            <Navbar />
            <main className="grow">
                <Hero />
                <WorldSection />
                <ServicesSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
