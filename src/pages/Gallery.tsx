
// List of gallery images
const galleryImages = [
    { src: '/gallery/IMG_2403.jpg', alt: 'Corte de pelo moderno' },
    { src: '/gallery/IMG_2404.jpg', alt: 'Detalle de corte degradado' },
    { src: '/gallery/IMG_2405.jpg', alt: 'Barbería en acción' },
    { src: '/gallery/IMG_2406.jpg', alt: 'Estilo urbano' },
    { src: '/gallery/IMG_2407.jpg', alt: 'Corte clásico' },
    { src: '/gallery/IMG_2408.jpg', alt: 'Interior de la barbería' },
    { src: '/gallery/IMG_2409.jpg', alt: 'Herramientas de trabajo' },
    { src: '/gallery/IMG_2411.jpg', alt: 'Cliente satisfecho' },
    { src: '/gallery/IMG_2412.jpg', alt: 'Equipo trabajando' },
];

const Gallery = () => {
    return (
        <div className="container mx-auto px-6 py-12 min-h-screen animate-fade-in bg-white text-black">

            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-script text-gray-400 mb-2">Nuestro Trabajo</h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-oswald font-bold uppercase tracking-tighter leading-none">
                    GALERÍA
                </h1>
                <p className="mt-6 text-lg text-gray-500 font-sans max-w-2xl mx-auto uppercase tracking-wider">
                    Una muestra de nuestro arte y pasión por el estilo masculino.
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryImages.map((image, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden aspect-square rounded-sm bg-gray-100 shadow-lg cursor-pointer transition-transform hover:-translate-y-2 duration-500"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Gallery;
