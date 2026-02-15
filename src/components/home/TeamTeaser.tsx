import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const barbers = [
    { name: 'Juandi', img: '/juandi.jpg', instagram: 'https://www.instagram.com/jdbarber96/', objectPosition: 'object-top' },
    { name: 'Jhoiber', img: '/jhoiber1.png', instagram: 'https://www.instagram.com/jhoiiberr_/', objectPosition: 'object-top' },
    { name: 'Diego', img: '/diego1.png', instagram: 'https://www.instagram.com/diegorm999/', objectPosition: 'object-top' },
    { name: 'Alejandro', img: '/alejandro1.png', instagram: 'https://www.instagram.com/aleeeee._.rb/', objectPosition: 'object-center' },
];

export const TeamTeaser = () => {
    return (
        <section className="pt-12 pb-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-10 sm:px-8 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10 animate-fade-in-up">
                    <p className="font-script text-2xl text-gray-500 mb-2">Maestros Artesanos</p>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-oswald font-bold uppercase tracking-tighter text-black">
                        Conoce al Equipo
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {barbers.map((barber) => (
                        <div
                            key={barber.name}
                            className="group relative h-64 sm:h-[500px] overflow-hidden block"
                        >
                            <img
                                src={barber.img}
                                alt={barber.name}
                                className={`w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 contrast-125 brightness-90 ${barber.objectPosition || 'object-center'}`}
                            />
                            {/* Always Visible Name Overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-20 pb-10 flex flex-col items-center justify-end transition-opacity">
                                <a
                                    href={barber.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 border-b border-white/50 pb-1 hover:border-white transition-colors cursor-pointer hover:text-gray-200"
                                >
                                    <h3 className="text-white font-oswald text-xl md:text-2xl uppercase tracking-widest">
                                        {barber.name}
                                    </h3>
                                    <Instagram className="text-white" size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        to="/reservar"
                        className="inline-block px-12 py-5 bg-black text-white font-oswald font-bold text-2xl uppercase tracking-widest hover:bg-gray-900 transition-colors transform hover:-translate-y-1 skew-x-[-10deg]"
                    >
                        <span className="block skew-x-[10deg]">Reservar Ahora</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
