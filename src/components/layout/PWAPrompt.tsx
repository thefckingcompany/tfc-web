import { useNavigate, useLocation } from "react-router-dom";
import { Download } from "lucide-react";

export const PWAPrompt = () => {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === '/instalar-app') return null;

    return (
        <div id="pwa-install-prompt" className="md:hidden bg-gray-50 border-t border-gray-200 py-6 px-6 text-center text-black -mt-4 relative z-10">
            <h3 className="text-xl font-oswald font-bold uppercase mb-2 leading-tight">
                Instala App
            </h3>
            <p className="text-xs font-sans text-gray-500 mb-4 tracking-wide uppercase px-4 leading-relaxed">
                ¿Vienes a menudo? Añade TFC a tu pantalla de inicio y ten tu barbería en un toque.
            </p>
            <button
                onClick={() => navigate('/instalar-app')}
                className="w-full bg-black text-white py-3 px-6 text-xs font-bold font-oswald uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
            >
                <Download size={14} />
                Añadir a Inicio
            </button>
        </div>
    );
};
