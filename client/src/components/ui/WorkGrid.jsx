'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function WorkGrid() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch from Backend
        const apiUrl = '';
        fetch(`${apiUrl}/projects`)
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Backend connection failed", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-white">Loading works...</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-7xl mx-auto">
            {projects.map((project, index) => (
                <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer bg-zinc-900 ${project.size === 'large' ? 'md:col-span-2 aspect-[16/9]' : ''
                        }`}
                >
                    {/* Video Asset */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80"
                        src={project.videoSrc}
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

                    <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xs font-bold tracking-widest uppercase mb-2 text-gray-300">
                            {project.client}
                        </p>
                        <h3 className="text-3xl md:text-4xl font-semibold leading-tight mb-2 text-white">
                            {project.title}
                        </h3>
                        <p className="text-sm text-gray-300 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {project.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
