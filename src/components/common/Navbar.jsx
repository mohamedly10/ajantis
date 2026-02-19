import React, { useState } from 'react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Logo based on the image "AJANTIS"
    return (
        <nav className="fixed w-full z-50 bg-secondary/90 backdrop-blur-sm border-b border-primary/20">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-primary font-heading text-2xl font-bold tracking-widest uppercase flex items-center gap-2">
                    AJANTIS
                    <span className="text-3xl">♕</span> {/* Placeholder icon for the crown/symbol */}
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-text-light font-body">
                    <a href="#home" className="hover:text-primary transition-colors">الرئيسية</a>
                    <a href="#world" className="hover:text-primary transition-colors">عالم أجانتيس</a>
                    <a href="#services" className="hover:text-primary transition-colors">خدماتنا</a>
                    <a href="#contact" className="hover:text-primary transition-colors">تواصل معنا</a>
                    {/* <Button variant="primary">اكتشف المجموعة</Button> */}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-secondary border-t border-primary/20 absolute w-full">
                    <div className="flex flex-col p-4 gap-4 items-center">
                        <a href="#home" className="hover:text-primary" onClick={() => setIsOpen(false)}>الرئيسية</a>
                        <a href="#world" className="hover:text-primary" onClick={() => setIsOpen(false)}>عالم أجانتيس</a>
                        <a href="#services" className="hover:text-primary" onClick={() => setIsOpen(false)}>خدماتنا</a>
                        <a href="#contact" className="hover:text-primary" onClick={() => setIsOpen(false)}>تواصل معنا</a>
                        <Button variant="primary" className="w-full">اكتشف المجموعة</Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
