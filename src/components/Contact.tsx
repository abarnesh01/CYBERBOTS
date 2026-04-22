"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Instagram, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        setTimeout(() => {
            setFormState("success");
            setTimeout(() => setFormState("idle"), 3000);
        }, 1500);
    };

    return (
        <section className="py-32 bg-black relative" id="contact">
            <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">

                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-[#D4AF37] font-mono text-sm tracking-[0.3em] mb-6 uppercase">Get in touch</div>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
                        Let’s Build Your <br />
                        <span className="text-[#D4AF37]">Project</span>
                    </h2>
                    <p className="text-gray-400 text-xl font-light mb-12 max-w-md leading-relaxed">
                        Ready to transform your digital presence? Send us a message and we'll get back to you within 24 hours.
                    </p>

                    <div className="flex flex-wrap gap-8 mb-16">
                        <a
                            href="https://wa.me/your-number"
                            className="group flex items-center gap-3 text-white hover:text-[#D4AF37] transition-all font-bold text-lg"
                        >
                            <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37] transition-all">
                                W
                            </span>
                            WhatsApp Us
                        </a>
                        <a
                            href="https://instagram.com/cyberbots"
                            className="group flex items-center gap-3 text-white hover:text-[#D4AF37] transition-all font-bold text-lg"
                        >
                            <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37] transition-all">
                                <Instagram size={20} />
                            </span>
                            Instagram
                        </a>
                    </div>

                    <div className="space-y-10">
                        <div>
                            <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-3">Our Office</h4>
                            <p className="text-white text-xl font-light leading-relaxed">
                                123 Innovation Way,<br />San Francisco, CA 94103
                            </p>
                        </div>

                        <div>
                            <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-3">Project Inquiries</h4>
                            <p className="text-[#D4AF37] text-2xl font-bold">hello@cyberbots.tech</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative lg:pt-10"
                >
                    <div className="bg-[#0a0a0a] p-12 rounded-[40px] border border-white/5 shadow-2xl relative z-10">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <input
                                    required
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl focus:border-[#D4AF37] focus:bg-white/[0.05] outline-none transition-all text-white placeholder:text-gray-600"
                                />
                            </div>
                            <div>
                                <input
                                    required
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl focus:border-[#D4AF37] focus:bg-white/[0.05] outline-none transition-all text-white placeholder:text-gray-600"
                                />
                            </div>
                            <div>
                                <textarea
                                    required
                                    placeholder="Tell us about your project..."
                                    rows={5}
                                    className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-3xl focus:border-[#D4AF37] focus:bg-white/[0.05] outline-none transition-all text-white placeholder:text-gray-600 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={formState !== "idle"}
                                className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all ${formState === "success"
                                        ? "bg-green-500 text-white"
                                        : "bg-[#D4AF37] text-black hover:bg-[#f7e09a] shadow-[0_20px_40px_rgba(212,175,55,0.2)]"
                                    }`}
                            >
                                {formState === "idle" && <><Send size={18} /> Send Message</>}
                                {formState === "submitting" && <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />}
                                {formState === "success" && <><CheckCircle2 size={18} /> Sent Successfully</>}
                            </button>
                        </form>
                    </div>

                    {/* Decorative Glow */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#D4AF37] rounded-full blur-[150px] opacity-[0.07] pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
