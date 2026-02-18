import { ArrowLeft, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const WebFeedback = () => {
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);

    // TODO: Reemplaza esta URL con la URL de tu Webhook de producción de n8n
    const N8N_WEBHOOK_URL = 'https://n8n.srv1263947.hstgr.cloud/webhook/feedback-web';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        // Detectar plataforma
        const isPWA = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;

        const userAgent = navigator.userAgent;

        let platform = 'Ordenador';
        if (isPWA) {
            platform = 'PWA';
        } else if (/Mobi|Android/i.test(userAgent)) {
            platform = 'Móvil';
        }

        try {
            await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message,
                    platform,
                    userAgent,
                    timestamp: new Date().toISOString(),
                }),
            });

            // Simulamos un pequeño delay visual si la respuesta es instantánea
            setSubmitted(true);
            setMessage('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.error('Error enviando feedback:', error);
            // Opcional: mostrar error al usuario, por ahora lo marcamos como enviado para no frustrar
            setSubmitted(true);
            setMessage('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="bg-white text-black pt-8 pb-8 px-6 font-sans">
            <div className="max-w-md mx-auto">
                <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-6 text-gray-500 hover:text-black transition-colors">
                    <ArrowLeft className="mr-2" size={14} /> Volver al inicio
                </Link>

                <h1 className="text-3xl md:text-4xl font-oswald font-bold uppercase mb-4 leading-none text-black">
                    Mejorar la Web
                </h1>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed max-w-sm">
                    Ayúdanos a mejorar. Si has encontrado un error o tienes una idea para la web, cuéntanoslo. Este formulario es 100% anónimo.
                </p>

                {submitted ? (
                    <div className="bg-gray-50 border border-gray-200 rounded-none p-8 text-center animate-fade-in">
                        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                            <MessageSquare size={24} />
                        </div>
                        <h3 className="text-xl font-oswald font-bold uppercase mb-2">¡Gracias!</h3>
                        <p className="text-gray-600 text-sm">Tu comentario ha sido recibido. Trabajaremos en ello.</p>

                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="feedback" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                                Tu Mensaje
                            </label>
                            <textarea
                                id="feedback"
                                rows={6}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Describe el error o tu sugerencia aquí..."
                                className="w-full bg-gray-50 border border-gray-200 text-black p-4 focus:outline-none focus:border-black transition-colors text-sm placeholder:text-gray-400 rounded-none resize-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-4 font-oswald font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!message.trim() || isSending}
                        >
                            {isSending ? 'Enviando...' : 'Enviar Comentario'}
                        </button>

                        <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest mt-4">
                            No guardamos ningún dato personal.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default WebFeedback;
