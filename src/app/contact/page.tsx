"use client";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold mb-8 text-center"
                >
                    Get in <span className="text-[#D4AF37]">Touch</span>
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-12 mt-16">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-[#D4AF37] font-bold text-xl mb-2">Our Office</h3>
                            <p className="text-gray-400">123 Tech Lane, Silicon Valley, CA</p>
                        </div>
                        <div>
                            <h3 className="text-[#D4AF37] font-bold text-xl mb-2">Email Us</h3>
                            <p className="text-gray-400">hello@cyberbots.tech</p>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-gray-900 border border-gray-800 p-4 rounded-lg focus:border-[#D4AF37] outline-none transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-gray-900 border border-gray-800 p-4 rounded-lg focus:border-[#D4AF37] outline-none transition-colors"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="w-full bg-gray-900 border border-gray-800 p-4 rounded-lg focus:border-[#D4AF37] outline-none transition-colors"
                        ></textarea>
                        <button className="w-full py-4 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#b8962f] transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
