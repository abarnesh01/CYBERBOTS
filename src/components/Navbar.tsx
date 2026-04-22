"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Work", href: "/portfolio" },
    ];

    return (
        <>
            <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-8"}`}>
                <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
                        <span className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center text-black text-sm">CB</span>
                        CYBER<span className="text-[#D4AF37]">BOTS</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-10 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold tracking-widest uppercase text-gray-300 hover:text-[#D4AF37] transition-all relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all group-hover:w-full" />
                            </Link>
                        ))}
                        <Link href="/contact" className="px-8 py-3 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-[#D4AF37] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[90] bg-black flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-3xl font-black text-white hover:text-[#D4AF37] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-10 py-4 bg-[#D4AF37] text-black font-black text-xl rounded-full"
                        >
                            Contact
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
