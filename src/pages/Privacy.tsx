import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white text-black min-h-screen pt-10 pb-4 font-sans">
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
                    Política de <span className="opacity-50">Privacidad</span>
                </h1>

                <div className="w-20 h-1 bg-black mb-12"></div>

                {/* Content */}
                <div className="space-y-12 text-sm leading-relaxed text-gray-800">

                    <div className="bg-gray-50 p-8 border border-gray-100">
                        <p className="italic text-gray-600 font-medium">
                            En The Fucking Company, valoramos la privacidad de nuestros clientes. Esta política explica cómo tratamos la información que recopilamos a través de nuestra página web.
                        </p>
                    </div>

                    <section>
                        <h2 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">1. Responsable del Tratamiento</h2>
                        <div className="pl-4 border-l-2 border-gray-200">
                            <p className="mb-2">El responsable de los datos recogidos en esta web es:</p>
                            <ul className="list-none space-y-2 mt-2 font-medium">
                                <li><strong>Identidad:</strong> The Fucking Company</li>
                                <li><strong>Dirección:</strong> Calle Princesa Ifara, Local 5, 38611, Granadilla de Abona (Canarias).</li>
                                <li><strong>Email de contacto:</strong> <a href="mailto:thefckingcompanyacc@gmail.com" className="underline hover:text-gray-500 transition-colors">thefckingcompanyacc@gmail.com</a></li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">2. ¿Qué datos recopilamos y para qué?</h2>
                        <p className="mb-4">
                            Cuando utilizas nuestro sistema de reservas, recopilamos datos personales (nombre, teléfono, email) con la única finalidad de:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 ml-4">
                            <li>Gestionar tu cita de peluquería/barbería.</li>
                            <li>Enviarte recordatorios de tu reserva.</li>
                            <li>Contactarte en caso de cambios en el horario del servicio.</li>
                        </ul>
                        <p className="mt-4 font-bold text-xs uppercase tracking-wider text-black">
                            No vendemos tus datos a terceros ni enviamos publicidad no solicitada.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">3. Proveedores de servicios (Setmore)</h2>
                        <p>
                            Para ofrecer el servicio de cita previa, utilizamos la plataforma <strong>Setmore</strong>. Al reservar, tus datos se gestionan a través de sus servidores bajo estrictas medidas de seguridad. Puedes consultar la política de privacidad de Setmore en su sitio web oficial.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">4. Legitimación</h2>
                        <p>
                            La base legal para el tratamiento de tus datos es el <strong>consentimiento</strong> que nos das al completar el formulario de reserva y al aceptar nuestra política de cookies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">5. Conservación de datos</h2>
                        <p>
                            Mantendremos tus datos personales mientras sean necesarios para la prestación del servicio o mientras no solicites su eliminación.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">6. Tus Derechos</h2>
                        <p className="mb-4">Tienes derecho a:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <li className="bg-gray-50 px-4 py-3 border border-gray-100 font-medium">Acceder a tus datos personales.</li>
                            <li className="bg-gray-50 px-4 py-3 border border-gray-100 font-medium">Rectificar datos inexactos.</li>
                            <li className="bg-gray-50 px-4 py-3 border border-gray-100 font-medium">Solicitar la eliminación de tus datos ("derecho al olvido").</li>
                            <li className="bg-gray-50 px-4 py-3 border border-gray-100 font-medium">Oponerte al tratamiento de los mismos.</li>
                        </ul>
                        <p className="text-gray-600 bg-black text-white p-6 text-xs leading-relaxed">
                            Para ejercer estos derechos, solo tienes que enviarnos un email a <a href="mailto:thefckingcompanyacc@gmail.com" className="underline font-bold hover:text-gray-300">thefckingcompanyacc@gmail.com</a> adjuntando una copia de tu DNI o documento identificativo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">7. Enlaces a Terceros</h2>
                        <p>
                            Nuestra web puede contener enlaces a nuestras redes sociales (Instagram, Whatsapp, Maps). Al hacer clic, estarás sujeto a las políticas de privacidad de dichas plataformas.
                        </p>
                    </section>

                </div>

                <div className="text-center mt-4 pb-4">
                    <Link to="/" className="inline-block px-8 py-3 bg-black text-white font-oswald font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors">
                        Volver al Inicio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
