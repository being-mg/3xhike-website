'use client';
import { useState } from 'react';
import Link from 'next/link';
import MenuOverlay from './MenuOverlay';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToContact = () => {
        const footer = document.getElementById('contact');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
                <Link href="/" className="font-bold text-xl tracking-tighter">
                    3X HIKE
                </Link>

                <div className="flex items-center gap-4">
                    <button
                        onClick={scrollToContact}
                        className="hidden md:block bg-white text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
                    >
                        Let's Talk
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="text-sm uppercase tracking-widest border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all"
                    >
                        Menu
                    </button>
                </div>
            </nav>

            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
