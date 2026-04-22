"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "SaaS Dashboard",
        description: "Cloud-native resource management system with real-time analytics and predictive modeling.",
        category: "Automation",
        image: "https://images.unsplash.com/photo-1551288049-bbdac8626ad1?q=80&w=1200",
    },
    {
        title: "Fintech App UI",
        description: "A secure, decentralized finance platform featuring smooth trading interfaces and wallet integration.",
        category: "Mobile Design",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200",
    },
    {
        title: "3D Landing Page",
        description: "Immersive WebGL-powered experience for a futuristic hardware manufacturer.",
        category: "3D Web",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    },
];

export default function Portfolio() {
    return (
        <section className="py-32 bg-black overflow-hidden" id="portfolio">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Selected Work</h2>
                    <div className="h-1.5 w-24 bg-[#D4AF37] mx-auto rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 transition-all duration-500 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                                <div className="aspect-[4/5] relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                        <button className="px-6 py-3 bg-[#D4AF37] text-black font-bold rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            View Project <ExternalLink size={18} />
                                        </button>
                                    </div>

                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-[#D4AF37] text-xs font-bold rounded-full uppercase tracking-widest">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#D4AF37] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
