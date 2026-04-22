"use client";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="pt-40 px-6 max-w-[1200px] mx-auto pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter">
                        We are <span className="text-[#D4AF37]">Architects</span> of the Digital Age.
                    </h1>

                    <div className="grid md:grid-cols-2 gap-20 items-start italic border-t border-white/10 pt-16">
                        <p className="text-2xl md:text-3xl text-gray-400 font-light leading-snug">
                            At CyberBots, we believe that technology should be as beautiful as it is functional. Our mission is to bridge the gap between human intuition and machine intelligence.
                        </p>
                        <div className="space-y-8 not-italic">
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Founded in 2024, CyberBots has quickly become a leader in immersive web technology and process automation. We work with forward-thinking companies to build systems that scale effortlessly.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-[#D4AF37] font-bold text-3xl mb-2">50+</h4>
                                    <p className="text-gray-600 uppercase text-xs tracking-widest font-bold">Projects Delivered</p>
                                </div>
                                <div>
                                    <h4 className="text-[#D4AF37] font-bold text-3xl mb-2">12</h4>
                                    <p className="text-gray-600 uppercase text-xs tracking-widest font-bold">Global Awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
