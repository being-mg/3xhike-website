'use client';
import { motion } from 'framer-motion';

const logos = [
    { name: "Logo 1", src: "/logos/logo1.png" },
    { name: "Logo 2", src: "/logos/logo2.png" },
    { name: "Logo 3", src: "/logos/logo3.png" },
    { name: "Logo 4", src: "/logos/logo4.png" },
    { name: "Logo 5", src: "/logos/logo5.png" },
    { name: "Logo 6", src: "/logos/logo6.png" },
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
                    {[...logos, ...logos].map((logo, i) => (
                        <div key={`logo-1-${i}`} className="flex items-center justify-center shrink-0 w-32 md:w-48 h-16 md:h-24 relative">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="object-contain w-full h-full opacity-70 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex gap-16 md:gap-32 items-center pr-16 md:pr-32"
                >
                    {[...logos, ...logos].map((logo, i) => (
                        <div key={`logo-2-${i}`} className="flex items-center justify-center shrink-0 w-32 md:w-48 h-16 md:h-24 relative">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="object-contain w-full h-full opacity-70 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
