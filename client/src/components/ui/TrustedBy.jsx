'use client';
import { motion } from 'framer-motion';

const brands = [
    "GOOGLE", "AMAZON", "NIKE", "APPLE", "SAMSUNG", "TESLA", "SONY", "SPOTIFY", "ADIDAS", "MICROSOFT"
];

export default function TrustedBy() {
    return (
        <section className="relative z-10 py-12 bg-zinc-950 overflow-hidden border-y border-white/5">
            <div className="flex whitespace-nowrap">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex gap-16 md:gap-32 items-center pr-16 md:pr-32"
                >
                    {[...brands, ...brands].map((brand, i) => (
                        <span key={i} className="text-2xl md:text-4xl font-bold text-white/20 uppercase tracking-tighter">
                            {brand}
                        </span>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex gap-16 md:gap-32 items-center pr-16 md:pr-32"
                >
                    {[...brands, ...brands].map((brand, i) => (
                        <span key={i} className="text-2xl md:text-4xl font-bold text-white/20 uppercase tracking-tighter">
                            {brand}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
