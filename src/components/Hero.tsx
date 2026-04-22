"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import ThreeBackground from "./ThreeBackground";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null!);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pb-20 pt-32">
            <ThreeBackground />

            {/* Overlay Content */}
            <motion.div
                style={{ y: y1, opacity }}
                className="relative z-10 text-center px-6 max-w-5xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                        Automate Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f7e09a] to-[#D4AF37] animate-gradient-x">Growth</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                        We design and build high-performance digital systems — from static websites to immersive 3D experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="group relative px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                            <span className="relative z-10">Get Demo</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                        </button>

                        <button className="px-10 py-5 border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all bg-white/[0.03] backdrop-blur-md active:scale-95">
                            View Work
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
            >
                <span className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-bold">Explore</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />
            </motion.div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80 pointer-events-none" />
        </section>
    );
}
