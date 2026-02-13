import React from 'react';
import { format, addDays, startOfToday } from 'date-fns';
import { es } from 'date-fns/locale';

import { cn } from '../../utils/cn';

interface StepDateTimeProps {
    selectedDate: Date | null;
    selectedTime: string | null;
    onSelectDate: (date: Date) => void;
    onSelectTime: (time: string) => void;
}

export const StepDateTime: React.FC<StepDateTimeProps> = ({ selectedDate, selectedTime, onSelectDate, onSelectTime }) => {
    const today = startOfToday();
    const nextDays = Array.from({ length: 7 }, (_, i) => addDays(today, i));

    const timeSlots = [
        '10:00', '10:45', '11:30', '12:15', '13:00',
        '16:00', '16:45', '17:30', '18:15', '19:00', '19:45'
    ];

    return (
        <div className="animate-fade-in text-black">
            <h2 className="text-3xl font-oswald font-bold text-black mb-10 text-center uppercase tracking-widest">3. Día y Hora</h2>

            {/* Date Picker (Horizontal Scroll) */}
            <div className="mb-12">
                <h3 className="text-xs font-oswald font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-gray-200 pb-2">Días Disponibles</h3>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {nextDays.map((date) => {
                        const isSelected = selectedDate?.toDateString() === date.toDateString();
                        return (
                            <button
                                key={date.toString()}
                                onClick={() => onSelectDate(date)}
                                className={cn(
                                    "flex-shrink-0 w-24 h-28 flex flex-col items-center justify-center border transition-all",
                                    isSelected
                                        ? "bg-black text-white border-black"
                                        : "bg-white text-gray-400 border-gray-200 hover:border-black hover:text-black"
                                )}
                            >
                                <span className="text-xs font-sans uppercase tracking-widest">{format(date, 'EE', { locale: es })}</span>
                                <span className="text-3xl font-oswald font-bold my-1">{format(date, 'd')}</span>
                                <span className="text-[10px] font-sans uppercase tracking-widest">{format(date, 'MMM', { locale: es })}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
                <div className="animate-fade-in">
                    <h3 className="text-xs font-oswald font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-gray-200 pb-2">Horas Disponibles</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                        {timeSlots.map((time) => {
                            const isSelected = selectedTime === time;
                            return (
                                <button
                                    key={time}
                                    onClick={() => onSelectTime(time)}
                                    className={cn(
                                        "py-3 text-center border font-oswald font-bold text-sm tracking-wider transition-all",
                                        isSelected
                                            ? "bg-black text-white border-black"
                                            : "bg-white text-black border-gray-200 hover:border-black"
                                    )}
                                >
                                    {time}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
