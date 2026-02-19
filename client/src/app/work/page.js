'use client';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        client: "Velvet",
        title: "E-Commerce Scale",
        videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
        id: 2,
        client: "Nexus",
        title: "Brand Identity",
        videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
        id: 3,
        client: "Pulse",
        title: "Social Viral",
        videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    },
    {
        id: 4,
        client: "Strata",
        title: "Data Analytics",
        videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    },
    {
        id: 5,
        client: "Aura",
        title: "Lifestyle Campaign",
        videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    },
    {
        id: 6,
        client: "Echo",
        title: "Sound Design",
        videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    }
];

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-black pt-32 px-4 pb-20">
            <div className="max-w-7xl mx-auto mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8"
                >
                    SELECTED<br /><span className="text-gray-600">WORK</span>
                </motion.h1>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative aspect-[9/16] bg-zinc-900 rounded-lg overflow-hidden group cursor-pointer"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform ease-out"
                            src={project.videoSrc}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                        <div className="absolute bottom-0 left-0 p-6">
                            <p className="text-xs font-mono text-gray-400 mb-2 uppercase tracking-widest">{project.client}</p>
                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
