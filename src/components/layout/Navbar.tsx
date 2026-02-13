import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'INICIO', path: '/' },
    { name: 'SERVICIOS', path: '/servicios' },
    { name: 'EQUIPO', path: '/equipo' },
    { name: 'GALERÍA', path: '/galeria' },
    { name: 'CONTACTO', path: '/contacto' },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine text color based on background (Dark hero or White page headers)
    // Home starts transparent (on dark hero), becomes black on scroll
    // Other pages start white (on white bg? No, usually sticky on top). 
    // Actually, easiest for "Classic Premium" is always black on white for inner pages, 
    // and transparent->black for Home.

    const isDarkBg = isHome && !scrolled;
    const textColorClass = isDarkBg ? 'text-white' : 'text-black';
    const bgClass = isDarkBg ? 'bg-transparent border-transparent' : 'bg-white/95 backdrop-blur-md border-gray-200 shadow-sm';
    const buttonClass = isDarkBg
        ? 'bg-white text-black hover:bg-gray-200'
        : 'bg-black text-white hover:bg-gray-800';

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${bgClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="flex flex-col items-center">
                            <span className={`text-2xl font-oswald font-bold tracking-tighter uppercase leading-none ${textColorClass}`}>
                                The Fucking
                            </span>
                            <span className={`text-lg font-oswald uppercase tracking-[0.3em] leading-none opacity-80 ${textColorClass}`}>
                                Company
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-xs font-bold tracking-[0.2em] transition-colors font-sans hover:opacity-60 ${textColorClass}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/reservar"
                            className={`px-6 py-3 font-oswald font-bold tracking-wider uppercase text-sm transition-colors ${buttonClass}`}
                        >
                            Reservar
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${textColorClass} hover:opacity-70 transition-colors`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-200 absolute w-full h-screen">
                    <div className="px-4 pt-10 pb-6 space-y-4 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-2xl font-oswald font-bold tracking-wider text-black hover:text-gray-600"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/reservar"
                            onClick={() => setIsOpen(false)}
                            className="mt-8 px-10 py-4 bg-black text-white font-oswald font-bold tracking-wider uppercase"
                        >
                            Reservar Cita
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
