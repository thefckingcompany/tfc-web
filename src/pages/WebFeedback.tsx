import { ArrowLeft, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const WebFeedback = () => {
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a backend or service.
        // For now, we simulate a successful submission.
        // A real implementation could use Formspree, EmailJS, or a simple mailto link as fallback (though not truly anonymous).

        // Simulating network request
        setTimeout(() => {
            setSubmitted(true);
            setMessage('');
        }, 500);
    };

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-sans">
            <div className="max-w-md mx-auto">
                <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-12 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft className="mr-2" size={14} /> Volver al inicio
                </Link>

                <h1 className="text-3xl md:text-4xl font-oswald font-bold uppercase mb-4 leading-none text-white">
                    Mejorar la Web
                </h1>

                <p className="text-gray-400 text-sm mb-12 leading-relaxed max-w-sm">
                    Ayúdanos a mejorar. Si has encontrado un error o tienes una idea para la web, cuéntanoslo. Este formulario es 100% anónimo.
                </p>

                {submitted ? (
                    <div className="bg-white/10 border border-white/20 rounded-none p-8 text-center animate-fade-in">
                        <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4">
                            <MessageSquare size={24} />
                        </div>
                        <h3 className="text-xl font-oswald font-bold uppercase mb-2">¡Gracias!</h3>
                        <p className="text-gray-400 text-sm">Tu comentario ha sido recibido. Trabajaremos en ello.</p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="mt-6 text-xs font-bold uppercase tracking-widest underline hover:text-gray-300"
                        >
                            Enviar otro mensaje
                        </button>
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
                                className="w-full bg-white/5 border border-white/10 text-white p-4 focus:outline-none focus:border-white/40 transition-colors text-sm placeholder:text-gray-600 rounded-none resize-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black py-4 font-oswald font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!message.trim()}
                        >
                            Enviar Comentario
                        </button>

                        <p className="text-[10px] text-gray-600 text-center uppercase tracking-widest mt-4">
                            No guardamos ningún dato personal.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default WebFeedback;
