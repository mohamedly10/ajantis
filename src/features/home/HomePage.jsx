import React from 'react';
import Hero from './components/Hero';
import WorldSection from './components/WorldSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import ProductSection from './components/productSection';

const HomePage = () => {
    return (
        <>
            <Hero />
            <WorldSection />
            <ServicesSection />
            <ProductSection />
            <ContactSection />
        </>
    );
};

export default HomePage;
