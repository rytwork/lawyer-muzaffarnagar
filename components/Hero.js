"use client"

import { motion } from "framer-motion"
import Courthouse3D from "./Courthouse3D"
import Counter from "./Counter"


export default function Hero() {

    return (

        <section className="relative min-h-screen pt-24 flex items-center justify-center text-white">

            <div className="absolute inset-0 z-0">

            </div>
            <Courthouse3D />

            {/* Dark overlay */}

            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative max-w-6xl mx-auto px-6 text-center">

                {/* Badge */}

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block border border-yellow-500 px-4 py-1 text-sm tracking-widest text-yellow-400 mb-6"
                >

                    ADVOCATE | DISTRICT COURT MUZAFFARNAGAR

                </motion.div>

                {/* Heading */}

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent"
                >

                    Trusted Legal Advocate <br />

                    in Muzaffarnagar District Court

                </motion.h1>

                {/* Description */}

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl mx-auto text-gray-300 text-lg mb-8"
                >

                    सिविल विवाद, क्रिमिनल केस, ज़मानत, प्रॉपर्टी विवाद,
                    फैमिली कोर्ट और अन्य कानूनी मामलों में अनुभवी अधिवक्ता द्वारा
                    विश्वसनीय कानूनी सलाह।

                </motion.p>

                {/* WhatsApp */}

                <motion.a
                    href="https://wa.me/+919917730508"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="inline-block bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold mb-12"
                >

                    Free Consultation on WhatsApp

                </motion.a>

                {/* Stats */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

                    <Counter value={10} label="Years Legal Experience" />

                    <Counter value={800} label="Cases Handled" />

                    <Counter value={95} label="Client Satisfaction" />

                    <Counter value={24} label="Legal Guidance" />

                </div>

            </div>

        </section>

    )
}