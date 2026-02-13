export type Barber = {
    id: string;
    name: string;
    role: string;
    image: string;
    setmoreUrl?: string; // Optional URL for booking via Setmore
};

export type Service = {
    id: string;
    name: string;
    price: number;
    duration: number; // minutes
    formattedDuration?: string; // e.g. "1h"
};

export type BookingState = {
    step: number;
    barber: Barber | null;
    services: Service[];
    date: Date | null;
    time: string | null;
    client: {
        name: string;
        phone: string;
        email: string;
    };
};
