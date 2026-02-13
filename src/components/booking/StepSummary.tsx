import React, { useState } from 'react';
import type { BookingState } from '../../types/booking';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';


interface StepSummaryProps {
    bookingState: BookingState;
    onSubmit: (client: { name: string; phone: string; email: string }) => void;
    onBack: () => void;
}

export const StepSummary: React.FC<StepSummaryProps> = ({ bookingState, onSubmit, onBack }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const total = bookingState.services.reduce((acc, curr) => acc + curr.price, 0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in text-black">

            {/* Summary Card */}
            <div>
                <h2 className="text-3xl font-oswald font-bold text-black mb-8 uppercase tracking-widest">Resumen</h2>
                <div className="bg-gray-50 p-8 border border-gray-200 space-y-6">

                    <div className="border-b border-gray-200 pb-4">
                        <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Barbero</p>
                        <p className="text-2xl font-oswald font-bold text-black uppercase">{bookingState.barber?.name}</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                        <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Fecha y Hora</p>
                        <p className="text-xl font-oswald font-bold text-black capitalize">
                            {bookingState.date && format(bookingState.date, "EEEE d MMMM", { locale: es })}
                        </p>
                        <p className="text-xl font-oswald font-bold text-black">
                            @ {bookingState.time}
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Servicios</p>
                        <ul className="space-y-3">
                            {bookingState.services.map(s => (
                                <li key={s.id} className="flex justify-between text-black border-b border-gray-100 pb-1">
                                    <span className="font-oswald uppercase text-sm">{s.name}</span>
                                    <span className="font-bold font-oswald">{s.price}€</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t border-black pt-4 flex justify-between items-center mt-4">
                        <span className="text-lg uppercase font-bold text-black tracking-widest">Total</span>
                        <span className="text-3xl font-oswald font-bold text-black">{total}€</span>
                    </div>

                </div>
            </div>

            {/* Form */}
            <div>
                <h2 className="text-3xl font-oswald font-bold text-black mb-8 uppercase tracking-widest">Tus Datos</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Nombre Completo</label>
                        <input
                            required
                            type="text"
                            className="w-full bg-white border border-gray-300 p-4 text-black font-sans focus:border-black focus:outline-none transition-colors rounded-sm"
                            placeholder="Ej: Carlos Ruiz"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Teléfono</label>
                        <input
                            required
                            type="tel"
                            className="w-full bg-white border border-gray-300 p-4 text-black font-sans focus:border-black focus:outline-none transition-colors rounded-sm"
                            placeholder="Ej: 600 000 000"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Email</label>
                        <input
                            required
                            type="email"
                            className="w-full bg-white border border-gray-300 p-4 text-black font-sans focus:border-black focus:outline-none transition-colors rounded-sm"
                            placeholder="Ej: carlos@gmail.com"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <button
                        type="button"
                        onClick={onBack}
                        className="w-full py-4 mt-8 bg-white border border-black text-black font-oswald font-bold text-sm uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors"
                    >
                        Volver
                    </button>

                    <button
                        type="submit"
                        className="w-full py-4 mt-4 bg-black text-white font-oswald font-bold text-sm uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors"
                    >
                        Confirmar Reserva
                    </button>
                </form>
            </div>

        </div>
    );
};
