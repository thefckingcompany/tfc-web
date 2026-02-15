import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const team = [
    {
        id: '1',
        name: 'Juandi',
        role: 'Master Barber / Fundador',
        bio: 'Más de 10 años definiendo el estilo urbano de Madrid. Experto en cortes clásicos con toque moderno.',
        image: '/juandi.jpg',
        specialties: ['Tijera', 'Old School', 'Visagismo'],
        instagram: 'https://www.instagram.com/jdbarber96/',
        username: '@jdbarber96',
        objectPosition: 'object-center'
    },
    {
        id: '2',
        name: 'Jhoiber',
        role: 'Especialista en Degradados',
        bio: 'El rey del degradado. Si buscas un fade limpio y preciso, Jhoiber es tu hombre.',
        image: '/jhoiber.jpg',
        specialties: ['Skin Fade', 'Freestyle', 'Perfilado'],
        instagram: 'https://www.instagram.com/jhoiiberr_/',
        username: '@jhoiiberr_',
        objectPosition: 'object-top'
    },
    {
        id: '3',
        name: 'Diego',
        role: 'Experto en Barbas',
        bio: 'Nadie trata tu barba como él. Rituales de toalla caliente y afeitado tradicional.',
        image: '/diego.jpg',
        specialties: ['Barbas Largas', 'Afeitado Navaja', 'Tratamientos'],
        instagram: 'https://www.instagram.com/diegorm999/',
        username: '@diegorm999',
        objectPosition: 'object-top'
    },
    {
        id: '4',
        name: 'Alejandro',
        role: 'Estilista & Color',
        bio: 'El artista del color. Platinos, fantasía y las últimas tendencias en colorimetría.',
        image: '/alejandro.jpg',
        specialties: ['Color', 'Mechas', 'Texturizado'],
        instagram: 'https://www.instagram.com/aleeeee._.rb/',
        username: '@aleeeee._.rb',
        objectPosition: 'object-top'
    },
];

const Team = () => {
    return (
        <div className="min-h-screen bg-white text-black py-12 px-10 sm:px-8 lg:px-8">
            <div className="text-center mb-7 pt-0">
                <p className="font-script text-2xl text-gray-500 mb-2">El Talento</p>
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-oswald font-bold uppercase tracking-tighter mb-6">
                    Conoce al Equipo
                </h1>
                <div className="w-16 h-[1px] bg-black mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
                {team.map((member) => (
                    <div key={member.name} className="flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300">
                        {/* Image */}
                        <div className="h-64 sm:h-[500px] overflow-hidden relative">
                            <img
                                src={member.image}
                                alt={member.name}
                                className={`w-full h-full object-cover grayscale contrast-110 ${member.objectPosition}`}
                            />
                        </div>

                        {/* Content */}
                        <div className="p-8 bg-white border border-gray-100 flex-grow flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl md:text-3xl font-oswald font-bold uppercase mb-1">{member.name}</h2>
                                <h3 className="text-gray-500 font-sans text-xs uppercase tracking-[0.2em] mb-6">{member.role}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-sm font-sans">
                                    {member.bio}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {member.specialties.map(s => (
                                        <span key={s} className="px-3 py-1 bg-gray-100 text-[10px] uppercase font-bold tracking-wider text-gray-700">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                                <div className="flex gap-4">
                                    <a
                                        href={member.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors group"
                                    >
                                        <Instagram size={18} />
                                        <span className="text-xs font-sans tracking-wide group-hover:underline">{member.username}</span>
                                    </a>
                                </div>
                                <Link
                                    to={`/reservar?barberId=${member.id}`}
                                    className="px-6 py-2 border border-black text-black font-oswald font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all text-xs"
                                >
                                    Reservar Cita
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
