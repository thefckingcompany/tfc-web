import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';

export const AboutSection = () => {
    return (
        <section className="pt-0 pb-12 bg-white text-black overflow-hidden">
            {/* Standard container width and padding matching TeamTeaser */}
            <div className="max-w-7xl mx-auto px-10 sm:px-8 lg:px-8">

                {/* Header Centered - Matching LocationTeaser/TeamTeaser style */}
                <ScrollReveal width="100%">
                    <div className="text-center mb-6">
                        <p className="font-script text-2xl text-gray-500 mb-2">Nuestra Historia</p>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tighter text-black">
                            NOSOTROS
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20">

                    {/* Image Column */}
                    <div className="relative group h-full lg:col-span-1">
                        <ScrollReveal width="100%" delay={0.2}>
                            <div className="aspect-[4/5] lg:aspect-auto lg:h-full overflow-hidden bg-gray-100">
                                <img
                                    src="/ft-nosotros-tfc.jpg"
                                    alt="Barbero trabajando"
                                    className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 scale-[1.02] group-hover:scale-105"
                                />
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Content Column */}
                    <div className="space-y-6 flex flex-col justify-center lg:col-span-2">

                        <ScrollReveal width="100%" delay={0.4}>
                            <div>
                                <span className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 block font-oswald">
                                    Artesanía & Precisión
                                </span>
                                <h3 className="text-xl md:text-3xl font-oswald text-black leading-tight">
                                    No solo cortamos el cabello; esculpimos identidades con el rigor de la vieja escuela y la visión de la nueva era.
                                </h3>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal width="100%" delay={0.5}>
                            <div className="space-y-6 text-gray-500 font-sans leading-relaxed text-sm md:text-base">
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

                            {/* CTA Button */}
                            <div className="mt-8">
                                <Link
                                    to="/galeria"
                                    className="inline-flex items-center gap-2 text-black font-oswald font-bold text-sm uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors btn-premium"
                                >
                                    Ver Galería
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </ScrollReveal>

                    </div>

                </div>
            </div>
        </section>
    );
};
