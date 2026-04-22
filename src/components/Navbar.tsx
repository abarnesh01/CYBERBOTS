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
            <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
                <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="text-xl font-medium tracking-tight text-white flex items-center gap-2">
                        Cyber<span className="text-[#D4AF37]">Bots</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-10 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs font-medium tracking-wider uppercase text-gray-400 hover:text-white transition-all relative group"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact" className="px-6 py-2.5 bg-white text-black font-semibold text-[11px] uppercase tracking-wider rounded-full hover:bg-gray-200 transition-all">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-0 z-[90] bg-black flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-light text-white hover:text-[#D4AF37] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-8 py-3 bg-[#D4AF37] text-black font-semibold text-lg rounded-full"
                        >
                            Contact
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
