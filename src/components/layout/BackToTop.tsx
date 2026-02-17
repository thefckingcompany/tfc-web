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

    // SVG Circle properties for 44px size
    // Center 22, 22. Radius 15 (Diameter 30) to give ~7px padding from the edge.
    const radius = 15;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-[20px] right-[20px] z-50 flex items-center justify-center w-[44px] h-[44px] rounded-full bg-white text-black shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:scale-105 group ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
                }`}
            aria-label="Volver arriba"
        >
            <div className="relative flex items-center justify-center w-full h-full">
                {/* Background Circle */}
                <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 44 44">
                    <circle
                        cx="22"
                        cy="22"
                        r={radius}
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx="22"
                        cy="22"
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
