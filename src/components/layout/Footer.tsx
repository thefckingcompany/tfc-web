import { Instagram, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-black pt-20 pb-10 text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-10 sm:px-8 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl font-oswald font-bold uppercase tracking-tighter leading-none mb-1">
                                The Fucking
                            </h2>
                            <h2 className="text-xl font-oswald uppercase tracking-[0.3em] leading-none opacity-70">
                                Company
                            </h2>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed max-w-xs font-sans tracking-wide">
                            PREMIUM GROOMING FOR THE MODERN GENTLEMAN. ESTABLISHED 2020.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://wa.me/34664194168" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <MessageCircle size={14} />
                            </a>
                            <a href="https://www.instagram.com/thefucking.company/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <Instagram size={14} />
                            </a>
                            <a href="tel:+34664194168" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <Phone size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-oswald font-bold uppercase tracking-[0.2em] mb-8 text-white">Menú</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Inicio', path: '/' },
                                { name: 'Nosotros', path: '/nosotros' },
                                { name: 'Servicios', path: '/servicios' },
                                { name: 'Equipo', path: '/equipo' },
                                { name: 'Galería', path: '/galeria' },
                                { name: 'Contacto', path: '/contacto' },
                                { name: 'Reservas', path: '/reservar' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-sans">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-oswald font-bold uppercase tracking-[0.2em] mb-8 text-white">Ubicación</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="https://google.com/maps?ll=28.07699,-16.55746&z=19&t=h&hl=es&gl=ES&mapclient=embed&q=C.+Princesa+Ifara,+5+38611+San+Isidro+Santa+Cruz+de+Tenerife"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 text-gray-500 group hover:text-white transition-colors"
                                >
                                    <MapPin className="shrink-0 transition-colors" size={16} />
                                    <span className="text-xs font-sans tracking-wide">Calle Princesa Ifara, Local 5<br />38611 Granadilla de Abona (Canarias)</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+34664194168"
                                    className="flex items-center gap-4 text-gray-500 group hover:text-white transition-colors"
                                >
                                    <Phone className="shrink-0 transition-colors" size={16} />
                                    <span className="text-xs font-sans tracking-wide">664 194 168</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:thefckingcompanyacc@gmail.com"
                                    className="flex items-center gap-4 text-gray-500 group hover:text-white transition-colors"
                                >
                                    <Mail className="shrink-0 transition-colors" size={16} />
                                    <span className="text-xs font-sans tracking-wide">thefckingcompanyacc@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-sm font-oswald font-bold uppercase tracking-[0.2em] mb-8 text-white">Horario</h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between text-xs font-sans text-gray-500 tracking-wide border-b border-white/10 pb-2">
                                <span>Lun - Vie</span>
                                <span className="text-white">10am - 8pm</span>
                            </li>
                            <li className="flex justify-between text-xs font-sans text-gray-500 tracking-wide border-b border-white/10 pb-2">
                                <span>Sábados</span>
                                <span className="text-white">10am - 2pm</span>
                            </li>
                            <li className="flex justify-between text-xs font-sans text-gray-500 tracking-wide border-b border-white/10 pb-2">
                                <span>Domingos</span>
                                <span className="text-gray-600 italic">Cerrado</span>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <Link to="/reservar" className="block w-full py-3 bg-white text-black text-center font-oswald font-bold text-xs uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors">
                                Reservar Cita
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-700 text-[10px] text-center md:text-left uppercase tracking-widest font-sans">
                        &copy; {new Date().getFullYear()} The Fucking Company. All Rights Reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link to="/privacidad" className="text-gray-700 hover:text-gray-400 text-[10px] uppercase tracking-widest transition-colors font-sans">Privacy</Link>
                        <Link to="/legal" className="text-gray-700 hover:text-gray-400 text-[10px] uppercase tracking-widest transition-colors font-sans">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
