import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackToTop } from './BackToTop';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className={`flex flex-col min-h-screen font-sans selection:bg-tfc-accent selection:text-white ${isHome ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <Navbar />
            <main className={`flex-grow ${isHome ? 'pt-0' : 'pt-24'}`}>
                {children}
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
};
