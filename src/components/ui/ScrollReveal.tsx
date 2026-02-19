import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
}

export const ScrollReveal = ({ children, width = "fit-content", delay = 0, className = "" }: ScrollRevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            style={{ width }}
            className={`will-change-transform ${className}`}
        >
            {children}
        </motion.div>
    );
};
