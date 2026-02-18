import { ArrowLeft, Share, MoreVertical, PlusSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstallPWA = () => {
    return (
        <div className="bg-white text-black pt-8 pb-8 px-6">
            <div className="max-w-md mx-auto">
                <Link to="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest mb-8 hover:text-gray-600 transition-colors">
                    <ArrowLeft className="mr-2" size={16} /> Volver
                </Link>

                <h1 className="text-3xl font-oswald font-bold uppercase mb-6 leading-tight">
                    Instala la App <br /><span className="text-gray-400">En tu móvil</span>
                </h1>

                <p className="font-sans text-gray-600 mb-12">
                    Añade <strong>The Fucking Company</strong> a tu pantalla de inicio para reservar en un toque y sin abrir el navegador.
                </p>

                {/* iOS Instructions */}
                <div className="mb-12">
                    <h2 className="text-xl font-oswald font-bold uppercase mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">1</span>
                        iPhone (iOS)
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-6 space-y-4 border border-gray-100">
                        <div className="flex items-start gap-4">
                            <Share className="shrink-0 mt-1" />
                            <p className="text-sm text-gray-600">
                                Toca el botón <strong>Compartir</strong> en la barra inferior de Safari.
                            </p>
                        </div>
                        <div className="w-full h-px bg-gray-200"></div>
                        <div className="flex items-start gap-4">
                            <PlusSquare className="shrink-0 mt-1" />
                            <p className="text-sm text-gray-600">
                                Busca y selecciona <strong>"Añadir a la pantalla de inicio"</strong>.
                            </p>
                        </div>
                        <div className="w-full h-px bg-gray-200"></div>
                        <div className="flex items-start gap-4">
                            <span className="font-bold text-lg leading-none mt-0 text-black">Add</span>
                            <p className="text-sm text-gray-600">
                                Toca <strong>"Añadir"</strong> arriba a la derecha.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Android Instructions */}
                <div>
                    <h2 className="text-xl font-oswald font-bold uppercase mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">2</span>
                        Android (Chrome)
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-6 space-y-4 border border-gray-100">
                        <div className="flex items-start gap-4">
                            <MoreVertical className="shrink-0 mt-1" />
                            <p className="text-sm text-gray-600">
                                Toca el menú de <strong>tres puntos</strong> arriba a la derecha.
                            </p>
                        </div>
                        <div className="w-full h-px bg-gray-200"></div>
                        <div className="flex items-start gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1"><rect width="16" height="16" x="4" y="4" rx="2" /><path d="M12 4v16" /><path d="M4 12h16" /></svg>
                            <p className="text-sm text-gray-600">
                                Selecciona <strong>"Instalar aplicación"</strong> o "Añadir a pantalla de inicio".
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstallPWA;
