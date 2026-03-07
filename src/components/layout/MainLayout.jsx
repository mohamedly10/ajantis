import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col font-body text-text-light">
            <Navbar />
            <main className="grow pt-[72px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
