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

    // SVG Circle properties
    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-2 rounded-full bg-white text-black shadow-lg transition-all duration-500 transform hover:scale-110 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            aria-label="Volver arriba"
        >
            <div className="relative flex items-center justify-center w-10 h-10">
                {/* Background Circle */}
                <svg className="absolute w-full h-full -rotate-90">
                    <circle
                        cx="20"
                        cy="20"
                        r={radius}
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx="20"
                        cy="20"
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-100 ease-out"
                    />
                </svg>
                <ChevronUp className="w-5 h-5" />
            </div>
        </button>
    );
};
