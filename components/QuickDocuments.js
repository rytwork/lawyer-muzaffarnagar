"use client";

import { FileText, Upload, CheckCircle, MessageCircle } from "lucide-react";

export default function QuickDocuments() {
    return (
        <section
            id="documents"
            className="py-24 bg-gradient-to-b from-black to-gray-950 text-white"
        >
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
                    Do Not Wait for Affidavits or Legal Documents
                </h2>

                <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
                    अब Affidavit या अन्य कानूनी दस्तावेज़ बनवाने के लिए लंबा इंतजार करने की
                    आवश्यकता नहीं। आप पहले ही अपने दस्तावेज़ WhatsApp पर भेज सकते हैं और
                    हमारे कार्यालय पहुँचने पर तुरंत तैयार दस्तावेज़ प्राप्त कर सकते हैं।
                </p>

                {/* Steps */}

                <div className="grid md:grid-cols-3 gap-10 mb-14">

                    <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                        <Upload className="mx-auto text-yellow-400 mb-4" size={36} />
                        <h3 className="text-xl font-semibold mb-3">
                            1. दस्तावेज़ भेजें
                        </h3>
                        <p className="text-gray-400">
                            आवश्यक जानकारी और दस्तावेज़ WhatsApp पर पहले ही भेज दें।
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                        <FileText className="mx-auto text-yellow-400 mb-4" size={36} />
                        <h3 className="text-xl font-semibold mb-3">
                            2. दस्तावेज़ तैयार
                        </h3>
                        <p className="text-gray-400">
                            हमारे विशेषज्ञ आपके दस्तावेज़ों को तुरंत तैयार कर देंगे।
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                        <CheckCircle className="mx-auto text-yellow-400 mb-4" size={36} />
                        <h3 className="text-xl font-semibold mb-3">
                            3. कार्यालय से प्राप्त करें
                        </h3>
                        <p className="text-gray-400">
                            कार्यालय पहुंचें और बिना देरी के अपने तैयार दस्तावेज़ प्राप्त करें।
                        </p>
                    </div>

                </div>

                {/* WhatsApp Button */}

                <a
                    href="https://wa.me/+919917730508"
                    target="_blank"
                    className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
                >
                    <MessageCircle size={22} />
                    WhatsApp पर दस्तावेज़ भेजें
                </a>

            </div>
        </section>
    );
}