import { Link } from 'react-router-dom';

const categories = [
    {
        title: "",
        items: [
            { name: "Corte de pelo", price: "15 €", desc: "Tijera y máquina, acabado natural y preciso." },
            { name: "Corte de pelo + Diseño de cejas", price: "18 €", desc: "Perfilado definido para potenciar tu mirada." },
            { name: "Corte de pelo + Arreglo de barba", price: "22 €", desc: "Perfilado a navaja y diseño adaptado a tu estilo." },
            { name: "Corte de pelo + Mechas", price: "30 €", desc: "Iluminación sutil o contrastes con personalidad." },
            { name: "Corte de pelo + Tinte", price: "45 €", desc: "Cambio de color o cobertura de canas." },
        ]
    }
];

const Services = () => {
    return (
        <div className="bg-white text-black pt-12 pb-20 px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-8 pt-0">
                <p className="font-script text-4xl text-gray-400 mb-2">Precios Transparentes</p>
                <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tighter mb-6">
                    Carta de Servicios
                </h1>
                <div className="w-16 h-[1px] bg-black mx-auto"></div>
            </div>

            {/* Pricing Grid */}
            <div className="max-w-3xl mx-auto w-full space-y-20">
                <div>
                    <div className="flex flex-col gap-0">
                        {categories[0].items.map((item) => (
                            <div key={item.name} className="flex flex-col sm:flex-row justify-between items-baseline group py-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors px-4 rounded-lg">
                                <div className="flex-1 pr-8">
                                    <h3 className="text-2xl font-oswald font-bold text-black uppercase tracking-wide">
                                        {item.name}
                                    </h3>
                                    <p className="text-base text-gray-500 mt-2 font-sans">{item.desc}</p>
                                </div>
                                <div className="w-full sm:w-auto mt-4 sm:mt-0 flex-none">
                                    <span className="text-2xl font-bold font-oswald text-black whitespace-nowrap">
                                        {item.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Footer */}
            <div className="text-center mt-8">
                <p className="text-gray-500 mb-6 uppercase tracking-[0.2em] text-xs">¿Listo para reservar?</p>
                <Link
                    to="/reservar"
                    className="inline-block px-12 py-4 bg-black text-white font-oswald font-bold text-sm uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors"
                >
                    Reservar Cita
                </Link>
            </div>

        </div>
    );
};

export default Services;
