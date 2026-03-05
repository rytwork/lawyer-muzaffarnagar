"use client";

import Image from "next/image";
import Link from "next/link";
import { Scale, Shield, Code, ArrowRight } from "lucide-react";

const team = [
  {
    name: "Advocate Amit Saini",
    slug: "amit-saini",
    image: "/amit.jpg",
    role: "क्रिमिनल लॉयर (Criminal Lawyer)",
    icon: Shield
  },
  {
    name: "Advocate Ravi Saini",
    slug: "ravi-saini",
    image: "/ravi.jpg",
    role: "सिविल एवं प्रॉपर्टी लॉयर (Civil & Property Lawyer)",
    icon: Scale
  },
  {
    name: "Advocate Alok Saini",
    slug: "alok-saini",
    image: "/alok.jpg",
    role: "कानूनी सलाहकार (Legal Consultant)",
    icon: Scale
  },
  {
    name: "Banti Saini",
    slug: "banti-saini",
    image: "/banti.jpg",
    role: "टेक्निकल सपोर्ट (Technical Support)",
    icon: Code
  }
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-24 bg-gradient-to-b from-gray-950 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-6">
          हमारी टीम
        </h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          हमारी अनुभवी अधिवक्ताओं और तकनीकी टीम का उद्देश्य आपको विश्वसनीय
          और प्रभावी कानूनी सेवाएं प्रदान करना है।
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {team.map((member, i) => {
            const Icon = member.icon;

            return (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-400 transition duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
              >

                {/* Image */}

                <div className="relative w-56 h-56 mx-auto mb-6">
                  <Image
                    src={member.image}
                    fill
                    alt={member.name}
                    className="rounded-full object-cover border-2 border-yellow-400"
                  />
                </div>

                {/* Icon */}

                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400/10">
                    <Icon className="text-yellow-400" size={28} />
                  </div>
                </div>

                {/* Name */}

                <h3 className="text-xl font-semibold mb-2">
                  {member.name}
                </h3>

                {/* Role */}

                <p className="text-gray-400 text-sm mb-6">
                  {member.role}
                </p>

                {/* Portfolio Button */}

                <Link
                  href={`/team/${member.slug}`}
                  className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-300 transition"
                >
                  प्रोफाइल देखें
                  <ArrowRight size={16} />
                </Link>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}