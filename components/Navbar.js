"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

                {/* Logo */}

                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Lawyer Muzaffarnagar"
                        width={400}
                        height={120}
                        className="h-10 md:h-12 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}

                <div className="hidden md:flex gap-8 text-white font-medium">

                    <a href="#services" className="hover:text-yellow-400 transition">
                        Services
                    </a>

                    <a href="#documents" className="hover:text-yellow-400 transition">
                        Documents
                    </a>

                    <a href="#advocates" className="hover:text-yellow-400 transition">
                        Advocates
                    </a>

                    <a
                        href="https://wa.me/+919917730508"
                        className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
                    >
                        WhatsApp
                    </a>

                </div>

                {/* Mobile Menu Button */}

                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

            </div>

            {/* Mobile Menu */}

            {menuOpen && (

                <div className="md:hidden bg-black/95 text-white flex flex-col items-center gap-6 py-6">

                    <a href="#services" onClick={() => setMenuOpen(false)}>
                        Services
                    </a>

                    <a href="#documents" onClick={() => setMenuOpen(false)}>
                        Documents
                    </a>

                    <a href="#advocates" onClick={() => setMenuOpen(false)}>
                        Advocates
                    </a>

                    <a
                        href="https://wa.me/+919917730508"
                        className="bg-green-500 px-6 py-2 rounded-lg"
                    >
                        WhatsApp
                    </a>

                </div>

            )}

        </nav>

    )

}