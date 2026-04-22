"use client";
import { motion } from "framer-motion";
import ThreeBackground from "./ThreeBackground";

export default function Hero() {
    return (
        <section className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden bg-black px-6 pt-20">
            <ThreeBackground />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1200px] mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.05] max-w-4xl">
                        Automate Your <br />
                        <span className="text-[#D4AF37]">Growth</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-light tracking-wide opacity-80">
                        We design and build high-performance digital systems — from static websites to immersive 3D experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212,175,55,0.2)" }}
                            whileTap={{ scale: 0.98 }}
                            className="px-10 py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-300 min-w-[200px]"
                        >
                            Get Demo
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                            whileTap={{ scale: 0.98 }}
                            className="px-10 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-300 min-w-[200px]"
                        >
                            View Work
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Subtle bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none" />
        </section>
    );
}
