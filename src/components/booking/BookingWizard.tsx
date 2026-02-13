import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { BookingState, Barber, Service } from '../../types/booking';
import { StepBarber } from './StepBarber';
import { StepServices } from './StepServices';
import { barbers } from '../../data/barbers';
import { cn } from '../../utils/cn';
import { ChevronLeft } from 'lucide-react';

export const BookingWizard = () => {
    const [searchParams] = useSearchParams();
    const [step, setStep] = useState(1);
    const [booking, setBooking] = useState<BookingState>({
        step: 1,
        barber: null,
        services: [],
        date: null,
        time: null,
        client: { name: '', phone: '', email: '' }
    });

    useEffect(() => {
        const barberId = searchParams.get('barberId');
        if (barberId) {
            const selectedBarber = barbers.find(b => b.id === barberId);
            if (selectedBarber) {
                // Update if no barber selected OR if selected barber matches URL but is different from current state
                if (!booking.barber || booking.barber.id !== selectedBarber.id) {
                    setBooking(prev => ({ ...prev, barber: selectedBarber }));
                    setStep(2);
                }
            }
        }
    }, [searchParams]);

    const handleBarberSelect = (barber: Barber) => {
        setBooking((prev: BookingState) => ({ ...prev, barber }));
        setTimeout(() => setStep(2), 300);
    };

    const handleServiceSelect = (service: Service) => {
        setBooking((prev: BookingState) => ({ ...prev, services: [service] }));
        setTimeout(() => setStep(3), 300);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const getSetmoreUrl = () => {
        if (!booking.barber || !booking.services[0]) return booking.barber?.setmoreUrl || '';

        const staffId = booking.barber.id === '1' ? 'a42e10f5-db49-4de4-969b-5cd2b9452902' : // Juandi
            booking.barber.id === '2' ? '5ZW2GZ1VSiWHkzXefsVjpC5HlKqy0fTw' : // Jhoiber
                booking.barber.id === '3' ? '1qhfDMGPePL6jNqlZtMzKytFJ7s0OJiN' : // Diego
                    booking.barber.id === '4' ? 'Gw04A81vDthUF7VAdJNT9ItTTiMRmVAX' : // Alejandro
                        ''; // Default fallback

        let productsId = '';

        switch (booking.services[0].id) {
            case '1': productsId = '6b1edb91-fa88-4bc5-9f2c-745ab62baa0a'; break; // Corte
            case '2': productsId = 'b71538a7-fe03-44b6-bada-74577330f010'; break; // Corte + Cejas
            case '3': productsId = '90e2f09c-71a4-48f1-a657-a5c9ef4f7a1e'; break; // Corte + Barba
            case '4': productsId = 'eb3b0b49-fc3b-4df7-bffa-7745466ebaa5'; break; // Corte + Mechas
            case '5': productsId = '705dc8c6-99c5-451d-89d7-dae55d191cad'; break; // Corte + Tinte
        }

        // If we have both IDs, construct the direct link
        if (staffId && productsId) {
            return `https://thefuckingcompanyed3h.setmore.com/book?step=time-slot&products=${productsId}&type=service&staff=${staffId}&staffSelected=true`;
        }

        // Fallback to barber's main profile URL if specific combo is missing (e.g. for Diego/Alejandro not yet mapped)
        return booking.barber.setmoreUrl;
    };

    return (
        <div className={cn(
            "mx-auto min-h-[600px] transition-all duration-300",
            step === 3 ? "max-w-7xl" : "max-w-6xl"
        )}>

            {/* Progress Bar (3 Steps) */}
            <div className="flex items-center justify-center mb-16 relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[350px] h-[2px] bg-gray-200 z-0">
                    <div
                        className="h-full bg-black transition-all duration-500 ease-out"
                        style={{ width: `${((step - 1) / 2) * 100}%` }}
                    ></div>
                </div>

                <div className="flex justify-between w-full max-w-[350px]">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="relative flex flex-col items-center group">
                            <div className={cn(
                                "w-10 h-10 flex items-center justify-center rounded-full font-oswald font-bold text-base transition-all duration-300 z-10 border-2",
                                step >= s ? "bg-black border-black text-white scale-110" : "bg-white border-gray-300 text-gray-300"
                            )}>
                                {s}
                            </div>
                            <span className={cn(
                                "absolute -bottom-8 text-xs font-sans uppercase tracking-[0.2em] font-bold transition-colors duration-300",
                                step >= s ? "text-black" : "text-gray-300"
                            )}>
                                {s === 1 ? "EQUIPO" : s === 2 ? "SERVICIOS" : "RESERVA"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Back Button (Visible in Step 2 and 3) */}
            {step > 1 && (
                <div className="mb-4">
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-black font-oswald font-bold uppercase tracking-widest hover:text-gray-600 transition-colors text-sm"
                    >
                        <ChevronLeft size={16} /> Volver
                    </button>
                </div>
            )}

            {/* Content Area */}
            <div className={cn(
                "bg-white border border-gray-100 shadow-lg rounded-sm relative transition-all duration-300",
                step === 3 ? "p-0 overflow-hidden" : "p-6 md:p-12"
            )}>

                {/* Step 1: Barber Selection */}
                {step === 1 && (
                    <StepBarber
                        selectedBarber={booking.barber}
                        onSelect={handleBarberSelect}
                    />
                )}

                {/* Step 2: Service Selection */}
                {step === 2 && (
                    <StepServices
                        onSelect={handleServiceSelect}
                    />
                )}

                {/* Step 3: Setmore Integration */}
                {step === 3 && booking.barber && (
                    <div className="animate-fade-in h-[650px] flex flex-col">
                        <div className="flex-grow w-full h-full bg-white relative">
                            <iframe
                                src={getSetmoreUrl()}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                className="w-full h-full"
                                title={`Reserva con ${booking.barber.name}`}
                            ></iframe>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};
