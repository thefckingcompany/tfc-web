
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection = () => {
    return (
        <section className="py-24 bg-white text-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* Header Centered for Mobile, maybe Split for Desktop? 
                   The user image shows "NOSOTROS" big at the top, centered or part of the layout. 
                   Actually in the image, "Nuestra Historia" and "NOSOTROS" seem to be a main header 
                   ABOVE the split content. Let's follow that.
                */}
                <div className="text-center mb-16 md:mb-24 animate-fade-in-up">
                    <p className="font-script text-3xl md:text-4xl text-gray-500 mb-2">Nuestra Historia</p>
                    <h2 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tighter text-black">
                        NOSOTROS
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image Column */}
                    <div className="relative group animate-fade-in-left">
                        <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                            {/* Placeholder image until generation succeeds */}
                            <img
                                src="/about-barber.png"
                                alt="Barbero trabajando"
                                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        {/* Decorative element possibly? */}
                    </div>

                    {/* Content Column */}
                    <div className="animate-fade-in-right space-y-8">

                        <div>
                            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 block">
                                Artesanía & Precisión
                            </span>
                            <h3 className="text-2xl md:text-4xl font-serif text-black leading-tight">
                                No solo cortamos el cabello; esculpimos identidades con el rigor de la vieja escuela y la visión de la nueva era.
                            </h3>
                        </div>

                        <div className="space-y-6 text-gray-600 font-sans leading-relaxed text-base md:text-lg">
                            <p>
                                En <strong className="text-black">The Fucking Company</strong>, entendemos que la barbería es un ritual sagrado.
                                Fundada con la ambición de elevar el estándar del cuidado masculino, nuestra tienda combina la elegancia
                                atemporal de las técnicas clásicas de afeitado con navaja con las tendencias más vanguardistas en estilismo urbano.
                            </p>
                            <p>
                                Cada cliente que cruza nuestra puerta es tratado con la atención al detalle que merece.
                                Utilizamos productos de primera calidad y herramientas de precisión para asegurar que cada degradado
                                sea impecable y cada barba esté perfectamente perfilada. Nuestra pasión es tu confianza.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8 mt-8">
                            <div>
                                <span className="block text-3xl md:text-4xl font-oswald font-bold text-black mb-1">10+</span>
                                <span className="text-xs md:text-sm uppercase tracking-widest text-gray-500">Años de Maestría</span>
                            </div>
                            <div>
                                <span className="block text-3xl md:text-4xl font-oswald font-bold text-black mb-1">5k+</span>
                                <span className="text-xs md:text-sm uppercase tracking-widest text-gray-500">Estilos Creados</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <Link
                                to="/equipo"
                                className="inline-flex items-center gap-2 text-black font-oswald font-bold text-sm uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
                            >
                                Conocer al Equipo
                                <ArrowRight size={16} />
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};
