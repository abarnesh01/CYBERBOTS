"use client";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-24 bg-[#D4AF37] text-black">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to scale your business?</h2>
                    <p className="text-lg mb-10 max-w-2xl mx-auto opacity-80">
                        Let's build something extraordinary together. Contact us for a free consultation and project demo.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-black text-[#D4AF37] font-bold rounded-full hover:scale-105 transition-transform">
                            Get Started Now
                        </button>
                        <a
                            href="https://wa.me/your-number"
                            className="px-8 py-4 border-2 border-black font-bold rounded-full hover:bg-black hover:text-[#D4AF37] transition-all"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
