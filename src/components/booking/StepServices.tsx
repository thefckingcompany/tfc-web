import React from 'react';
import type { Service } from '../../types/booking';
import { ChevronRight } from 'lucide-react';

interface StepServicesProps {
    onSelect: (service: Service) => void;
}

const leftServices: Service[] = [
    { id: '1', name: 'Corte de pelo', price: 15, duration: 60, formattedDuration: '1h' },
    { id: '2', name: 'Corte de pelo + Diseño de cejas', price: 18, duration: 60, formattedDuration: '1h' },
];

const rightServices: Service[] = [
    { id: '3', name: 'Corte de pelo + Arreglo de barba', price: 22, duration: 60, formattedDuration: '1h' },
    { id: '4', name: 'Corte de pelo + Mechas', price: 30, duration: 120, formattedDuration: '2h' },
];

const bottomService: Service = { id: '5', name: 'Corte de pelo + Tinte', price: 45, duration: 120, formattedDuration: '2h' };

export const StepServices: React.FC<StepServicesProps> = ({ onSelect }) => {

    const ServiceButton = ({ service }: { service: Service }) => (
        <button
            onClick={() => onSelect(service)}
            className="group flex justify-between items-center p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-black transition-all text-left w-full h-full"
        >
            <div>
                <h3 className="text-lg font-sans font-medium text-black mb-1">{service.name}</h3>
                <p className="text-sm text-gray-500 font-sans">
                    {service.formattedDuration || `${service.duration} min`} · <span className="font-bold text-black">{service.price} €</span>
                </p>
            </div>
            <div className="text-gray-400 group-hover:text-black transition-colors">
                <ChevronRight size={20} />
            </div>
        </button>
    );

    return (
        <div className="animate-fade-in text-black max-w-5xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                {/* Left Column */}
                <div className="flex flex-col gap-6">
                    {leftServices.map(service => (
                        <ServiceButton key={service.id} service={service} />
                    ))}
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                    {rightServices.map(service => (
                        <ServiceButton key={service.id} service={service} />
                    ))}
                </div>
            </div>

            {/* Bottom Centered Service */}
            <div className="max-w-md mx-auto">
                <ServiceButton service={bottomService} />
            </div>

        </div>
    );
};
