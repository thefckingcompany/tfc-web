import React from 'react';
import type { Barber } from '../../types/booking';
import { cn } from '../../utils/cn';
import { barbers } from '../../data/barbers';

interface StepBarberProps {
    selectedBarber: Barber | null;
    onSelect: (barber: Barber) => void;
}

export const StepBarber: React.FC<StepBarberProps> = ({ selectedBarber, onSelect }) => {
    return (
        <div className="animate-fade-in relative">
            <h2 className="text-3xl font-oswald font-bold text-black mb-10 text-center uppercase tracking-widest">1. Selecciona Barbero</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {barbers.map((barber) => (
                    <button
                        key={barber.id}
                        onClick={() => onSelect(barber)}
                        className={cn(
                            "group relative overflow-hidden h-64 sm:h-96 w-full text-left transition-all",
                            selectedBarber?.id === barber.id
                                ? "ring-2 ring-black grayscale-0"
                                : "grayscale hover:grayscale-0 opacity-80 hover:opacity-100"
                        )}
                    >
                        <img
                            src={barber.image}
                            alt={barber.name}
                            className={`w-full h-full object-cover ${(barber.name === 'Juandi' || barber.name === 'Jhoiber' || barber.name === 'Diego' || barber.name === 'Alejandro') ? 'object-top' : 'object-center'}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h3 className={cn(
                                "text-2xl font-oswald font-bold uppercase",
                                "text-white"
                            )}>
                                {barber.name}
                            </h3>
                            <p className="text-gray-300 text-xs font-sans tracking-widest uppercase mt-1">{barber.role}</p>
                            {selectedBarber?.id === barber.id && (
                                <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};
