import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBasket } from 'lucide-react';
import { useBasket } from '../../context/BasketContext';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { basket } = useBasket();
    const navigate = useNavigate();
    const location = useLocation();

    const itemCount = basket.reduce((total, item) => total + item.quantity, 0);

    const handleNavClick = (hash) => {
        if (location.pathname !== '/') {
            navigate(`/${hash}`);
        }
        setIsOpen(false);
    };
    return (
        <nav className="fixed w-full z-50 bg-secondary/90 backdrop-blur-sm border-b border-primary/20">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-primary font-heading text-2xl font-bold tracking-widest uppercase flex items-center gap-2">
                    AJANTIS
                    <span className="text-3xl">♕</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-text-light font-body">
                    <a href="/#home" onClick={() => handleNavClick('#home')} className="hover:text-primary transition-colors">الرئيسية</a>
                    <a href="/#world" onClick={() => handleNavClick('#world')} className="hover:text-primary transition-colors">عالم أجانتيس</a>
                    <a href="/#services" onClick={() => handleNavClick('#services')} className="hover:text-primary transition-colors">خدماتنا</a>
                    <Link to="/products" className="hover:text-primary transition-colors">المنتجات</Link>
                    <a href="/#contact" onClick={() => handleNavClick('#contact')} className="hover:text-primary transition-colors">تواصل معنا</a>

                    {/* Basket Icon */}
                    <Link to="/checkout" className="relative p-2 text-primary hover:text-primary-light transition-colors group">
                        <ShoppingBasket size={24} />
                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary text-secondary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {itemCount}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Mobile Menu Button & Basket */}
                <div className="flex md:hidden items-center gap-4">
                    <Link to="/checkout" className="relative p-2 text-primary">
                        <ShoppingBasket size={24} />
                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary text-secondary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {itemCount}
                            </span>
                        )}
                    </Link>
                    <button
                        className="text-primary focus:outline-none"
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
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-secondary border-t border-primary/20 absolute w-full">
                    <div className="flex flex-col p-4 gap-4 items-center">
                        <a href="/#home" className="hover:text-primary" onClick={() => handleNavClick('#home')}>الرئيسية</a>
                        <a href="/#world" className="hover:text-primary" onClick={() => handleNavClick('#world')}>عالم أجانتيس</a>
                        <a href="/#services" className="hover:text-primary" onClick={() => handleNavClick('#services')}>خدماتنا</a>
                        <Link to="/products" className="hover:text-primary" onClick={() => setIsOpen(false)}>المنتجات</Link>
                        <a href="/#contact" className="hover:text-primary" onClick={() => handleNavClick('#contact')}>تواصل معنا</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
