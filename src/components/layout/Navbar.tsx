import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { WhatsAppIcon } from '../../icons/WhatsAppIcon';

const navLinks = [
    { name: 'INICIO', path: '/' },
    { name: 'NOSOTROS', path: '/nosotros' },
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

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Determine text color based on background (Dark hero or White page headers)
    // Home starts transparent (on dark hero), becomes black on scroll
    // Other pages start white (on white bg? No, usually sticky on top). 
    // Actually, easiest for "Classic Premium" is always black on white for inner pages, 
    // and transparent->black for Home.

    const isDarkBg = isHome && !scrolled;
    const textColorClass = isDarkBg ? 'text-white' : 'text-black';

    const bgClass = isDarkBg
        ? 'bg-transparent border-transparent'
        : 'bg-white/95 backdrop-blur-md border-gray-200 shadow-sm';

    const buttonClass = isDarkBg
        ? 'bg-white text-black hover:bg-gray-200'
        : 'bg-black text-white hover:bg-gray-800';

    const handleLogoClick = (e: React.MouseEvent) => {
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${bgClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group" onClick={handleLogoClick}>
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
                            className={`${textColorClass} hover:opacity-70 transition-colors p-2 -mr-2`}
                            aria-label="Menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Overlay - Rendered in Portal to escape parent stacking context (backdrop-filter) */}
            {isOpen && createPortal(
                <div
                    style={{ backgroundColor: '#000000' }}
                    className="md:hidden fixed top-0 left-0 w-full h-full z-[9999] text-white flex flex-col overscroll-none animate-in fade-in duration-200"
                >

                    {/* Top Bar: Logo & Close Button - Replicating Navbar structure exactly */}
                    <div className="w-full border-b border-white/10 shrink-0">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-24">
                                {/* Logo */}
                                <Link
                                    to="/"
                                    className="flex flex-col items-center"
                                    onClick={(e) => {
                                        setIsOpen(false);
                                        handleLogoClick(e);
                                    }}
                                >
                                    <span className="text-2xl font-oswald font-bold tracking-tighter uppercase leading-none text-white">
                                        The Fucking
                                    </span>
                                    <span className="text-lg font-oswald uppercase tracking-[0.3em] leading-none opacity-80 text-white">
                                        Company
                                    </span>
                                </Link>

                                {/* Close Button */}
                                <div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-white hover:opacity-70 transition-colors p-2 -mr-2"
                                        aria-label="Cerrar menú"
                                    >
                                        <X size={28} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-grow flex flex-col items-center justify-center space-y-4 overflow-y-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-oswald font-bold tracking-widest text-white hover:text-gray-400 uppercase transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Social Media Icons moved here */}
                        <div className="flex justify-center gap-8 py-4">
                            <a
                                href="https://wa.me/34664194168"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-green-400 transition-colors"
                            >
                                <WhatsAppIcon size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/thefucking.company/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-pink-400 transition-colors"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="tel:+34664194168"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                <Phone size={24} />
                            </a>
                        </div>
                        <Link
                            to="/reservar"
                            onClick={() => setIsOpen(false)}
                            className="mt-8 px-12 py-4 bg-white text-black font-oswald font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors"
                        >
                            Reservar Cita
                        </Link>

                        <div className="flex flex-col items-center gap-3 mt-6 w-full px-8">
                            <Link
                                to="/instalar-app"
                                onClick={() => setIsOpen(false)}
                                className="w-full max-w-[200px] py-3 border border-white/30 text-white text-center font-oswald font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-xs"
                            >
                                Instala App
                            </Link>
                            <Link
                                to="/mejorar-web"
                                onClick={() => setIsOpen(false)}
                                className="w-full max-w-[200px] py-2 bg-white/5 border border-white/10 text-white text-center font-sans font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-[9px] flex items-center justify-center gap-2"
                            >
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                ¿Algo falla o mejorarías en la web?
                            </Link>
                        </div>
                    </div>

                    {/* Social Media Footer */}

                </div>,
                document.body
            )
            }
        </nav >
    );
};
