import React from 'react';
import back_icon from "../../assets/icon/arrow.png"
const Footer = () => {
    return (
        <footer className="bg-secondary py-12 border-t border-primary/20 text-center">
            <div className="container mx-auto px-4 flex flex-col items-center gap-6">

                {/* Logo */}
                <div className="text-primary font-heading text-3xl font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                    AJANTIS
                    <span className="text-3xl">♕</span>
                </div>

                {/* Links/Socials */}
                <div className="flex gap-6 text-text-muted text-sm">
                    <a href="#" className="hover:text-primary transition-colors">FaceBook</a>
                    <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                    <a href="#" className="hover:text-primary transition-colors">Twitter (X)</a>
                    <a href="#" className="hover:text-primary transition-colors">Snapchat</a>
                </div>

                {/* Copyright */}
                <div className="text-text-muted text-xs mt-4">
                    جميع الحقوق محفوظة ©{new Date().getFullYear()}أجانتيس للمجوهرات الراقية
                </div>

                <div className='w-full justify-content: flex-end align-items: flex-end;'>
                    <a href="#home" className="hover:text-primary transition-colors">              <img src={back_icon} alt="" className='w-14 h-auto' /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
