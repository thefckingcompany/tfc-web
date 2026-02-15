import { MessageCircle, Instagram } from 'lucide-react';

export const LocationTeaser = () => {
    return (
        <section className="pt-0 pb-24 bg-white text-black relative">
            <div className="max-w-2xl mx-auto px-10 sm:px-8 lg:px-8">

                {/* Header Centered */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <p className="font-script text-2xl text-gray-500 mb-2">Visítanos</p>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tighter text-black">
                        Contacto
                    </h2>
                </div>

                <div className="flex flex-col gap-12 mb-20">

                    {/* Dirección */}
                    <div className="group border-b border-gray-200 pb-8">
                        <div className="flex justify-between items-baseline mb-3">
                            <h3 className="text-base md:text-xl font-oswald font-bold uppercase tracking-wide group-hover:text-gray-600 transition-colors">
                                Dirección
                            </h3>
                            <a
                                href="https://google.com/maps?ll=28.07699,-16.55746&z=19&t=h&hl=es&gl=ES&mapclient=embed&q=C.+Princesa+Ifara,+5+38611+San+Isidro+Santa+Cruz+de+Tenerife"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm md:text-xl font-bold font-oswald hover:text-gray-600 transition-colors uppercase"
                            >
                                VER MAPA
                            </a>
                        </div>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-sans">
                            Calle Princesa Ifara, Local 5<br />
                            38611 Granadilla de Abona (Canarias)
                        </p>
                    </div>

                    {/* Teléfono */}
                    <div className="group border-b border-gray-200 pb-8">
                        <div className="flex justify-between items-baseline mb-3">
                            <h3 className="text-base md:text-xl font-oswald font-bold uppercase tracking-wide group-hover:text-gray-600 transition-colors">
                                Teléfono
                            </h3>
                            <a href="tel:+34664194168" className="text-lg md:text-2xl font-bold font-oswald hover:text-gray-600 transition-colors">
                                664 194 168
                            </a>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed font-sans">
                            Llámanos o escríbenos por WhatsApp para reservar tu cita.
                        </p>
                    </div>

                    {/* Horario */}
                    <div className="group border-b border-gray-200 pb-8">
                        <h3 className="text-xl font-oswald font-bold uppercase tracking-wide group-hover:text-gray-600 transition-colors mb-4">
                            Horario
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex flex-col">
                                <span className="font-bold text-black font-oswald text-lg">Lunes a Viernes</span>
                                <span className="text-gray-500 text-base font-sans">10:00 - 20:00</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-black font-oswald text-lg">Sábados</span>
                                <span className="text-gray-500 text-base font-sans">10:00 - 14:00</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-black font-oswald text-lg">Domingos</span>
                                <span className="text-gray-500 text-base font-sans italic">Cerrado</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a
                        href="https://wa.me/34664194168"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-black text-white font-oswald font-bold text-sm uppercase tracking-[0.2em] hover:bg-[#25D366] transition-colors min-w-[200px]"
                    >
                        <MessageCircle size={18} />
                        Whatsapp
                    </a>
                    <a
                        href="https://www.instagram.com/thefucking.company/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-black text-black font-oswald font-bold text-sm uppercase tracking-[0.2em] hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] transition-all min-w-[200px]"
                    >
                        <Instagram size={18} />
                        Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};
