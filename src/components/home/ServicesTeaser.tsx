import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';

const services = [
    {
        title: "Corte de pelo",
        price: "15 €",
        description: "Tijera y máquina, acabado natural y preciso."
    },
    {
        title: "Corte de pelo + Diseño de cejas",
        price: "18 €",
        description: "Perfilado definido para potenciar tu mirada."
    },
    {
        title: "Corte de pelo + Arreglo de barba",
        price: "22 €",
        description: "Perfilado a navaja y diseño adaptado a tu estilo."
    },
    {
        title: "Corte de pelo + Mechas",
        price: "30 €",
        description: "Iluminación sutil o contrastes con personalidad."
    },
    {
        title: "Corte de pelo + Tinte",
        price: "45 €",
        description: "Cambio de color o cobertura de canas."
    }
];

export const ServicesTeaser = () => {
    return (
        <section className="pt-16 pb-12 bg-white text-black relative">
            <div className="max-w-6xl mx-auto px-10 sm:px-8 lg:px-8">

                {/* Header */}
                <ScrollReveal width="100%">
                    <div className="text-center mb-8">
                        <p className="font-script text-2xl text-gray-500 mb-2">Calidad sobre cantidad</p>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tighter text-black">
                            Nuestros Servicios
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} width="100%" delay={index * 0.1}>
                            <div
                                className={`group ${index === services.length - 1 ? 'pb-0' : 'border-b border-gray-200 pb-8'} ${index === 4 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
                            >
                                <div className="flex justify-between items-baseline mb-3">
                                    <h3 className="text-base md:text-xl font-oswald font-bold uppercase tracking-wide group-hover:text-gray-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <span className="text-base md:text-xl font-bold font-oswald">{service.price}</span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed font-sans max-w-md">
                                    {service.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}

                </div>

                <ScrollReveal width="100%" delay={0.2}>
                    <div className="text-center mt-10">
                        <Link
                            to="/servicios"
                            className="inline-block px-10 py-4 border border-black text-black font-oswald font-bold text-sm uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all transform btn-premium"
                        >
                            Ver Todos los Servicios
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
