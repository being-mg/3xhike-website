'use client';
import { motion } from 'framer-motion';
import Hero from '../components/ui/Hero';
import Services from '../components/ui/Services';
import TrustedBy from '../components/ui/TrustedBy';
import WorkGrid from '../components/ui/WorkGrid';
import ContactForm from '../components/ui/ContactForm';
import ParticleCanvas from '../components/3d/ParticleField';

export default function Home() {
    return (
        <main className="relative w-full min-h-screen">

            {/* 1. 3D Background Layer */}
            <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
                <ParticleCanvas />
            </div>

            {/* 2. Navigation (Floating) - MOVED TO LAYOUT */}
            {/* <nav className="fixed top-0 w-full p-8 flex justify-between z-50 mix-blend-difference text-white">...</nav> */}

            {/* 3. Hero Section */}
            <Hero />

            {/* 4. Trusted By Section */}
            <TrustedBy />

            {/* 5. Services Section */}
            <Services />

            {/* 6. Projects Grid (Fetched from Express) */}
            <section className="relative z-10 px-4 md:px-12 py-24 bg-zinc-950">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-light tracking-tight text-white mb-4"
                    >
                        Selected <span className="text-gray-500">Works.</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-xl">
                        A showcase of our most impactful digital transformations.
                    </p>
                </div>
                <WorkGrid />
            </section>

            {/* 7. Contact Form Footer */}
            <ContactForm />
        </main>
    );
}
