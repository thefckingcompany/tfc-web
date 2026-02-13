import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.png" // Replace with your actual hero image
                    alt="Barbershop Atmosphere"
                    className="w-full h-full object-cover object-bottom brightness-[0.5]"
                />
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">

                {/* Main Title Stack */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-oswald font-bold text-white leading-none tracking-tighter mb-2 uppercase">
                    The Fucking<br />
                    <span className="block mt-[-10px]">Company</span>
                </h1>

                {/* Script Subtitle */}
                <h2 className="text-4xl md:text-6xl font-script text-white mb-6 transform -rotate-2">
                    Barber Shop
                </h2>

                {/* Separator */}
                <div className="w-24 h-[1px] bg-white/50 mb-8"></div>

                {/* Tagline */}
                <p className="text-sm md:text-base text-gray-300 font-sans tracking-[0.3em] uppercase mb-12">
                    Barbería profesional. Citas sin esperas.
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full md:w-auto">
                    <Link
                        to="/reservar"
                        className="w-full md:w-auto px-10 py-4 bg-white text-black font-oswald font-bold text-sm uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors"
                    >
                        Reservar Cita
                    </Link>
                    <Link
                        to="/servicios"
                        className="w-full md:w-auto px-10 py-4 border border-white text-white font-oswald font-bold text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
                    >
                        Ver Servicios
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce opacity-50">
                <span className="text-xs uppercase tracking-widest">Scroll</span>
            </div>
        </div>
    );
};
