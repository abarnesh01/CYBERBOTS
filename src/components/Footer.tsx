import Link from "next/link";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 py-20">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-2">
                        <Link href="/" className="text-3xl font-black tracking-tighter text-white mb-8 block">
                            CYBER<span className="text-[#D4AF37]">BOTS</span>
                        </Link>
                        <p className="text-gray-500 text-lg max-w-sm mb-8 leading-relaxed font-light">
                            Building the next generation of digital experiences. From immersive 3D interfaces to robust automation systems.
                        </p>
                        <div className="flex gap-6">
                            <Instagram className="text-gray-600 hover:text-[#D4AF37] cursor-pointer transition-colors" />
                            <Twitter className="text-gray-600 hover:text-[#D4AF37] cursor-pointer transition-colors" />
                            <Linkedin className="text-gray-600 hover:text-[#D4AF37] cursor-pointer transition-colors" />
                            <Github className="text-gray-600 hover:text-[#D4AF37] cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div>
                        <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Company</h5>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-gray-500 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/#services" className="text-gray-500 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/#portfolio" className="text-gray-500 hover:text-white transition-colors">Our Work</Link></li>
                            <li><Link href="/contact" className="text-gray-500 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Services</h5>
                        <ul className="space-y-4">
                            <li className="text-gray-500 hover:text-white cursor-pointer transition-colors">UI/UX Design</li>
                            <li className="text-gray-500 hover:text-white cursor-pointer transition-colors">Development</li>
                            <li className="text-gray-500 hover:text-white cursor-pointer transition-colors">3D Experience</li>
                            <li className="text-gray-500 hover:text-white cursor-pointer transition-colors">Automation</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-sm">
                        © 2026 CYBERBOTS SYSTEMS. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8 text-xs text-gray-600 uppercase tracking-widest font-bold">
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
