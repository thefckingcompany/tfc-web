import { BookingWizard } from '../components/booking/BookingWizard';

const Booking = () => {
    return (
        <div className="py-12 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 animate-fade-in-up">
                    <p className="font-script text-4xl text-gray-500 mb-2">Reserva tu cita</p>
                    <h2 className="text-5xl md:text-6xl font-oswald font-bold uppercase tracking-tighter text-black">
                        Online
                    </h2>
                </div>

                <BookingWizard />
            </div>
        </div>
    );
};

export default Booking;
