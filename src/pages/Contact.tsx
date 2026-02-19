import { Instagram } from 'lucide-react';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const Contact = () => {
    return (
        <section className="py-12 bg-white text-black min-h-screen">
            <div className="max-w-7xl mx-auto px-10 sm:px-8 lg:px-8">

                {/* Header Centered */}
                <ScrollReveal width="100%">
                    <div className="text-center mb-6">
                        <p className="font-script text-2xl text-gray-500 mb-2">Visítanos</p>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tighter text-black">
                            Contacto
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* Map */}
                    <ScrollReveal width="100%" delay={0.2} className="w-full md:w-1/2">
                        <div className="aspect-square border border-gray-200 shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d609.6318844102494!2d-16.55746!3d28.07699!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a9e359105cdd9%3A0x468a2f86410d8fbe!2sC.%20Princesa%20Ifara%2C%205%2C%2038611%20San%20Isidro%2C%20Santa%20Cruz%20de%20Tenerife!5e1!3m2!1ses!2ses!4v1770920129863!5m2!1ses!2ses"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </ScrollReveal>

                    {/* Info */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">

                        <div className="flex flex-col gap-8 mb-8">
                            <ScrollReveal width="100%" delay={0.3}>
                                <div>
                                    <h3 className="text-base md:text-xl font-oswald font-bold uppercase tracking-widest mb-4 border-b-2 border-black inline-block py-1">Dirección</h3>
                                    <a
                                        href="https://google.com/maps?ll=28.07699,-16.55746&z=19&t=h&hl=es&gl=ES&mapclient=embed&q=C.+Princesa+Ifara,+5+38611+San+Isidro+Santa+Cruz+de+Tenerife"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-gray-600 font-sans leading-relaxed text-sm md:text-base tracking-wide hover:text-black transition-colors"
                                    >
                                        Calle Princesa Ifara, Local 5<br />
                                        38611 Granadilla de Abona (Canarias)
                                    </a>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal width="100%" delay={0.4}>
                                <div>
                                    <h3 className="text-base md:text-xl font-oswald font-bold uppercase tracking-widest mb-4 border-b-2 border-black inline-block py-1">Teléfono</h3>
                                    <a
                                        href="tel:+34664194168"
                                        className="block text-gray-600 font-sans leading-relaxed text-lg md:text-2xl tracking-wide font-bold hover:text-black transition-colors"
                                    >
                                        664 194 168
                                    </a>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal width="100%" delay={0.5}>
                                <div>
                                    <h3 className="text-base md:text-xl font-oswald font-bold uppercase tracking-widest mb-6 border-b-2 border-black inline-block py-1">Horario</h3>
                                    <ul className="text-gray-600 font-sans leading-relaxed space-y-4 text-base tracking-wide w-full max-w-md">
                                        <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                                            <span>Lunes a Viernes</span>
                                            <span className="font-bold text-black text-lg">10:00 - 20:00</span>
                                        </li>
                                        <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                                            <span>Sábados</span>
                                            <span className="font-bold text-black text-lg">10:00 - 14:00</span>
                                        </li>
                                        <li className="flex justify-between items-center pb-2">
                                            <span>Domingos</span>
                                            <span className="italic text-gray-400 font-medium">Cerrado</span>
                                        </li>
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal width="100%" delay={0.6}>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href="https://wa.me/34664194168"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 bg-black text-white font-oswald font-bold text-base uppercase tracking-[0.2em] hover:bg-[#25D366] transition-all shadow-md hover:shadow-xl btn-premium"
                                >
                                    <WhatsAppIcon size={20} />
                                    Whatsapp
                                </a>
                                <a
                                    href="https://www.instagram.com/thefucking.company/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 border-2 border-black text-black font-oswald font-bold text-base uppercase tracking-[0.2em] hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] transition-all shadow-md hover:shadow-xl btn-premium"
                                >
                                    <Instagram size={20} />
                                    Instagram
                                </a>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
