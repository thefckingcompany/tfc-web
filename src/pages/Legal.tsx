import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Legal = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white text-black min-h-screen pt-10 pb-20 font-sans">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4 text-gray-500 hover:text-black transition-colors"
                >
                    <ArrowLeft className="mr-2" size={14} /> Volver al inicio
                </Link>

                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-oswald font-bold uppercase mb-8 leading-none tracking-tight">
                    Aviso Legal y <span className="opacity-50">Condiciones</span>
                </h1>

                <div className="w-20 h-1 bg-black mb-12"></div>

                {/* Content */}
                <div className="space-y-12 text-sm leading-relaxed text-gray-800">

                    <section>
                        <h2 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">1. Información General</h2>
                        <div className="pl-4 border-l-2 border-gray-200">
                            <p className="mb-2">En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002 (LSSI-CE), se facilitan los siguientes datos del titular de esta web:</p>
                            <ul className="list-none space-y-2 mt-2 font-medium">
                                <li><strong>Titular:</strong> The Fucking Company</li>
                                <li><strong>Domicilio:</strong> Calle Princesa Ifara, Local 5, 38611, Granadilla de Abona (Canarias).</li>
                                <li><strong>Contacto:</strong> <a href="mailto:thefckingcompanyacc@gmail.com" className="underline hover:text-gray-500 transition-colors">thefckingcompanyacc@gmail.com</a></li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">2. Objeto</h2>
                        <p>
                            Este sitio web tiene como objetivo informar sobre los servicios de barbería de The Fucking Company y facilitar la reserva de citas online a través de la plataforma integrada de terceros (Setmore).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">3. Condiciones de Uso</h2>
                        <p>
                            El acceso y uso de este sitio web le atribuye la condición de <strong>USUARIO</strong>. Al navegar por esta web, usted acepta los términos aquí expuestos. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios, absteniéndose de realizar actividades ilícitas o que dañen la imagen de la empresa.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">4. Sistema de Reservas (Setmore)</h2>
                        <p className="mb-4">Las citas se gestionan externamente mediante Setmore.</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 ml-4">
                            <li><strong>Exactitud:</strong> El usuario es responsable de facilitar datos verídicos para la reserva.</li>
                            <li><strong>Cancelaciones:</strong> Nos reservamos el derecho de anular citas si los datos de contacto son falsos o si hay errores técnicos en el sistema de terceros.</li>
                            <li><strong>Precios:</strong> Los precios mostrados son informativos y pueden variar según el servicio final realizado en el local.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">5. Propiedad Intelectual</h2>
                        <p>
                            Todos los contenidos de esta web (logotipos, textos, fotografías de cortes de pelo y diseños) son propiedad de The Fucking Company o de sus respectivos autores. Queda prohibida su reproducción o distribución sin permiso expreso.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">6. Exclusión de Responsabilidad</h2>
                        <div className="bg-gray-50 p-6 border border-gray-100">
                            <p className="italic text-gray-600">
                                No nos hacemos responsables de los daños o perjuicios que puedan derivarse de interferencias, omisiones, interrupciones o virus informáticos motivados por causas ajenas a nuestra gestión, ni de la disponibilidad técnica del sistema de reservas de Setmore.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">7. Legislación y Jurisdicción</h2>
                        <p>
                            Para la resolución de cualquier controversia o cuestión relacionada con este sitio web, será de aplicación la legislación española, sometiéndose las partes a los Juzgados y Tribunales de Granadilla de Abona.
                        </p>
                    </section>

                    <div className="text-center mt-8 mb-8">
                        <Link to="/" className="inline-block px-8 py-3 bg-black text-white font-oswald font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors">
                            Volver al Inicio
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Legal;
