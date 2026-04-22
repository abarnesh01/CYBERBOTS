"use client";
import { motion } from "framer-motion";
import { Monitor, Cpu, Workflow, Boxes } from "lucide-react";

const services = [
    {
        icon: <Monitor size={32} />,
        title: "UI/UX Design",
        description: "Creating intuitive and visually stunning interfaces that provide seamless user journeys across all platforms."
    },
    {
        icon: <Cpu size={32} />,
        title: "Frontend Engineering",
        description: "Developing high-performance, pixel-perfect web applications using the latest modern technologies."
    },
    {
        icon: <Workflow size={32} />,
        title: "Process Automation",
        description: "Streamlining complex business workflows through custom software solutions and AI integration."
    },
    {
        icon: <Boxes size={32} />,
        title: "Immersive 3D Web",
        description: "Pushing the boundaries of the web with interactive WebGL experiences and real-time 3D rendering."
    }
];

export default function Services() {
    return (
        <section className="py-32 bg-black" id="services">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Capabilites</h2>
                        <p className="text-gray-400 text-lg md:text-xl font-light">
                            We leverage cutting-edge technology to build digital products that move the needle for our clients.
                        </p>
                    </div>
                    <div className="text-[#D4AF37] font-mono text-sm tracking-widest hidden md:block">
                        CYBERBOTS / SERVICES / 2026
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group p-10 rounded-3xl border border-gray-800 bg-white/[0.02] backdrop-blur-sm hover:border-[#D4AF37]/50 hover:bg-white/[0.04] transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-8 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors uppercase tracking-tight">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-lg font-light leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
