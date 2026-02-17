import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const calculateScrollProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            setProgress(scrollProgress);
            setIsVisible(scrollTop > 100);
        };

        window.addEventListener('scroll', calculateScrollProgress);
        return () => window.removeEventListener('scroll', calculateScrollProgress);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // SVG Circle properties for 50px size
    // Center 25, 25. Radius ~22 to fit within 50px.
    const radius = 22;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-[20px] right-[20px] z-50 flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white text-black shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:scale-105 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            aria-label="Volver arriba"
        >
            <div className="relative flex items-center justify-center w-full h-full">
                {/* Background Circle */}
                <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 50 50">
                    <circle
                        cx="25"
                        cy="25"
                        r={radius}
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx="25"
                        cy="25"
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                    />
                </svg>
                <ChevronUp className="w-6 h-6" />
            </div>
        </button>
    );
};
