'use client';
import { motion } from 'framer-motion';

const services = [
    {
        id: '01',
        title: 'Design',
        description: 'We craft immersive digital experiences that captivate and convert. From UI/UX to 3D branding, we define the future of visual identity.',
    },
    {
        id: '02',
        title: 'SEO',
        description: 'Dominate search rankings with data-driven strategies. We optimize your digital footprint to ensure visibility where it matters most.',
    },
    {
        id: '03',
        title: 'Social',
        description: 'ignite conversations and build communities. Our viral campaigns leverage the latest trends to maximize engagement and ROI.',
    },
];

export default function Services() {
    return (
        <section className="relative z-10 py-24 px-4 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 border-t border-white/20 pt-8"
                >
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-400">Our Expertise</h2>
                    <h3 className="text-4xl md:text-6xl font-light tracking-tight max-w-3xl">
                        Results driven by <span className="text-gray-500">creativity & data.</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group p-8 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-500 rounded-sm"
                        >
                            <span className="block text-xs font-mono text-gray-500 mb-8">{service.id}</span>
                            <h4 className="text-2xl font-semibold mb-4 group-hover:text-red-500 transition-colors">{service.title}</h4>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
