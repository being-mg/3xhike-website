'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

export default function MenuOverlay({ isOpen, onClose }) {
    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const menuVariants = {
        closed: { y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
        open: { y: "0%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
    };

    const linkVariants = {
        closed: { y: 80, opacity: 0 },
        open: (i) => ({ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 * i } })
    };

    const links = [
        { title: "Our Work", href: "/work" },
        { title: "Let's Talk", href: "#contact", action: true } // Action true triggers scroll to footer
    ];

    const handleLinkClick = (e, link) => {
        onClose();
        if (link.action) {
            e.preventDefault();
            const footer = document.getElementById('contact');
            if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                    className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center"
                >
                    <div className="flex flex-col gap-8 text-center">
                        {links.map((link, i) => (
                            <div key={i} className="overflow-hidden">
                                <motion.div
                                    custom={i}
                                    variants={linkVariants}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link)}
                                        className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-white hover:text-gray-400 transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Background enhancement */}
                    <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
