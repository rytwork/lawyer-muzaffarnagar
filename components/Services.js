"use client";

import {
    Scale,
    FileText,
    Home,
    Shield,
    Users,
    ShoppingCart,
    Building2,
    Briefcase,
    FileCheck
} from "lucide-react";

const services = [
    {
        title: "कानूनी नोटिस (Legal Notices)",
        description:
            "भुगतान विवाद, संपत्ति विवाद, अनुबंध उल्लंघन तथा अन्य कानूनी मामलों में प्रभावी और वैध कानूनी नोटिस तैयार करना एवं भेजना।",
        icon: FileText
    },
    {
        title: "प्रॉपर्टी वकील (Property Lawyer)",
        description:
            "जमीन और संपत्ति से जुड़े मामलों में विशेषज्ञ सलाह जैसे रजिस्ट्री, टाइटल वेरिफिकेशन, जमीन विवाद और संपत्ति ट्रांसफर।",
        icon: Home
    },
    {
        title: "सिविल वकील (Civil Lawyer)",
        description:
            "सिविल मामलों जैसे अनुबंध विवाद, संपत्ति विवाद, धन वसूली और अन्य सिविल मुकदमों में पेशेवर कानूनी सहायता।",
        icon: Scale
    },
    {
        title: "क्रिमिनल वकील (Criminal Lawyer)",
        description:
            "एफआईआर, जमानत, आपराधिक मुकदमे और अदालत में प्रभावी कानूनी प्रतिनिधित्व प्रदान करना।",
        icon: Shield
    },
    {
        title: "फैमिली वकील (Family Lawyer)",
        description:
            "तलाक, गुजारा भत्ता, बच्चों की कस्टडी, घरेलू हिंसा और पारिवारिक विवादों में कानूनी सलाह और सहायता।",
        icon: Users
    },
    {
        title: "कंज्यूमर वकील (Consumer Lawyer)",
        description:
            "खराब उत्पाद, सेवा में कमी और अनुचित व्यापार प्रथाओं के खिलाफ उपभोक्ता फोरम में शिकायत दर्ज कराना।",
        icon: ShoppingCart
    },
    {
        title: "कंपनी लॉ मैटर्स",
        description:
            "कंपनी रजिस्ट्रेशन, कॉर्पोरेट कंप्लायंस, पार्टनरशिप विवाद और व्यापारिक कानूनी मामलों में विशेषज्ञ सलाह।",
        icon: Building2
    },
    {
        title: "लेबर वकील (Labour Lawyer)",
        description:
            "कर्मचारी अधिकार, नौकरी से निकाले जाने के मामले, वेतन विवाद और श्रम कानून से जुड़े मामलों में सहायता।",
        icon: Briefcase
    },
    {
        title: "कानूनी दस्तावेज़ (Legal Documentation)",
        description:
            "एग्रीमेंट, एफिडेविट, कॉन्ट्रैक्ट, डीड और अन्य महत्वपूर्ण कानूनी दस्तावेज़ों की तैयारी और सत्यापन।",
        icon: FileCheck
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gradient-to-b from-gray-950 to-black text-white">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-yellow-400">
                    हमारी कानूनी सेवाएँ
                </h2>

                <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
                    हम आपको विभिन्न कानूनी मामलों में अनुभवी और विश्वसनीय सहायता प्रदान करते हैं।
                    हमारी टीम आपके अधिकारों की रक्षा करने के लिए प्रतिबद्ध है।
                </p>

                <div className="grid md:grid-cols-3 gap-10">

                    {services.map((service, i) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={i}
                                className="group bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 hover:border-yellow-400 hover:shadow-yellow-500/20 hover:shadow-xl transition duration-300"
                            >
                                <div className="mb-6">

                                    <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-yellow-400/10 group-hover:bg-yellow-400 transition">

                                        <Icon className="text-yellow-400 group-hover:text-black" size={28} />

                                    </div>

                                </div>

                                <h3 className="text-xl font-semibold mb-3 text-white">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}