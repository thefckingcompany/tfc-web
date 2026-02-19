import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackToTop } from './BackToTop';
import { PWAPrompt } from './PWAPrompt';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className={`flex flex-col min-h-[100dvh] font-sans selection:bg-tfc-accent selection:text-white ${isHome ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex-grow ${isHome ? 'pt-0' : 'pt-24'}`}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <PWAPrompt />
            <Footer />
            <BackToTop />
        </div>
    );
};
