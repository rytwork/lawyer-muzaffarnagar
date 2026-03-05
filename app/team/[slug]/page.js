import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Scale,
  Award,
  Phone,
  MapPin,
  Languages
} from "lucide-react";

const profiles = {
  "amit-saini": {
    name: "Advocate Amit Saini",
    image: "/amit.jpg",
    role: "Senior Criminal Lawyer",
    experience: "8+ Years of Practice",
    bar: "Bar Council of Uttar Pradesh",
    court: "District Court & High Court",
    education: "LLB – Chaudhary Charan Singh University",
    location: "Uttar Pradesh, India",
    languages: "Hindi, English",

    about:
      "Advocate Amit Saini is a dedicated criminal defense lawyer with more than eight years of professional legal experience. He specializes in handling criminal litigation including bail matters, FIR related disputes, anticipatory bail, and trial representation. Known for his strong courtroom presence and strategic legal approach, he has successfully assisted hundreds of clients in protecting their rights and securing fair legal outcomes.",

    services: [
      "Bail & Anticipatory Bail",
      "Criminal Defense",
      "FIR & Police Matters",
      "Cyber Crime Cases",
      "Trial Representation",
      "Legal Consultation"
    ],

    achievements: [
      "Successfully represented clients in 300+ criminal cases",
      "Recognized for strong courtroom advocacy",
      "Expert in bail and anticipatory bail matters",
      "Trusted legal advisor for criminal litigation"
    ],

    consultation: [
      "Initial legal consultation",
      "Case analysis and strategy",
      "Court representation",
      "Regular updates on case progress"
    ],

    phone: "91XXXXXXXXXX"
  },

  "ravi-saini": {
    name: "Advocate Ravi Saini",
    image: "/ravi.jpg",
    role: "Civil & Property Lawyer",
    experience: "10+ Years of Practice",
    bar: "Bar Council of Uttar Pradesh",
    court: "District Court",
    education: "LLB – Delhi University",
    location: "Uttar Pradesh, India",
    languages: "Hindi, English",

    about:
      "Advocate Ravi Saini specializes in civil and property law matters with over ten years of experience. He provides expert legal advice in property disputes, land ownership verification, registration processes, and civil litigation.",

    services: [
      "Property Disputes",
      "Land Registration",
      "Title Verification",
      "Civil Litigation",
      "Property Agreements",
      "Real Estate Legal Advice"
    ],

    achievements: [
      "Handled more than 500 civil and property cases",
      "Expert in real estate documentation",
      "Trusted legal advisor for property disputes"
    ],

    consultation: [
      "Legal consultation",
      "Document verification",
      "Case preparation",
      "Court representation"
    ],

    phone: "919917730508"
  },

  "alok-saini": {
    name: "Advocate Alok Saini",
    image: "/alok.jpg",
    role: "Legal Consultant & Documentation Specialist",
    experience: "7+ Years",
    bar: "Bar Council of Uttar Pradesh",
    court: "Legal Advisory Services",
    education: "LLB – CCS University",
    location: "Uttar Pradesh, India",
    languages: "Hindi, English",

    about:
      "Advocate Alok Saini provides legal consultancy and professional documentation services for individuals and businesses. He specializes in preparing legal notices, affidavits, agreements, and other legal documentation.",

    services: [
      "Legal Notices",
      "Affidavits & Notary Work",
      "Agreement Drafting",
      "Business Contracts",
      "Legal Documentation",
      "Legal Consultancy"
    ],

    achievements: [
      "Prepared 1000+ legal documents",
      "Trusted consultant for contract drafting",
      "Specialist in legal documentation"
    ],

    consultation: [
      "Requirement discussion",
      "Document drafting",
      "Legal verification",
      "Final documentation"
    ],

    phone: "91XXXXXXXXXX"
  },

  "banti-saini": {
    name: "Banti Saini",
    image: "/banti.jpg",
    role: "Technical Support & Digital Systems Manager",
    experience: "7+ Years",
    bar: "Technology Support for Legal Platforms",
    court: "Digital Systems Management",
    education: "Software & Mobile Application Development",
    location: "Uttar Pradesh, India",
    languages: "Hindi, English",

    about:
      "Banti Saini manages the digital infrastructure supporting legal services. With strong expertise in web and mobile application development, he ensures smooth technical operations and digital accessibility for clients.",

    services: [
      "Website Development",
      "Client Portal Systems",
      "Legal Platform Technology",
      "Digital Consultation Systems",
      "Technical Support"
    ],

    achievements: [
      "Developed multiple digital platforms",
      "Expert in web & mobile application systems",
      "Ensures seamless digital support for legal services"
    ],

    consultation: [
      "Technical system setup",
      "Client portal support",
      "Digital service integration",
      "Technical troubleshooting"
    ],

    phone: "919997934303"
  }
};

export default async function ProfilePage({ params }) {
  const { slug } = await params;
  const profile = profiles[slug];

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Profile Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-950 text-white py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* Hero Profile */}

        <div className="text-center mb-16">

          <Image
            src={profile.image}
            width={220}
            height={220}
            alt={profile.name}
            className="rounded-full mx-auto border-4 border-yellow-400 mb-6"
          />

          <h1 className="text-4xl font-bold text-yellow-400">
            {profile.name}
          </h1>

          <p className="text-lg text-gray-300 mt-2">
            {profile.role}
          </p>

        </div>

        {/* Basic Info */}

        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
            <Briefcase className="mx-auto text-yellow-400 mb-3" />
            <h3 className="font-semibold">Experience</h3>
            <p className="text-gray-400">{profile.experience}</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
            <Scale className="mx-auto text-yellow-400 mb-3" />
            <h3 className="font-semibold">Court Practice</h3>
            <p className="text-gray-400">{profile.court}</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
            <GraduationCap className="mx-auto text-yellow-400 mb-3" />
            <h3 className="font-semibold">Education</h3>
            <p className="text-gray-400">{profile.education}</p>
          </div>

        </div>

        {/* About */}

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Professional Summary
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {profile.about}
          </p>
        </section>

        {/* Services */}

        <section className="mb-16">

          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Areas of Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {profile.services.map((service, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-4 rounded-lg"
              >
                {service}
              </div>
            ))}

          </div>

        </section>

        {/* Achievements */}

        <section className="mb-16">

          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Professional Highlights
          </h2>

          <ul className="space-y-3 text-gray-300">

            {profile.achievements.map((a, i) => (
              <li key={i}>• {a}</li>
            ))}

          </ul>

        </section>

        {/* Consultation */}

        <section className="mb-16">

          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Consultation Process
          </h2>

          <ul className="space-y-3 text-gray-300">

            {profile.consultation.map((step, i) => (
              <li key={i}>• {step}</li>
            ))}

          </ul>

        </section>

        {/* Contact */}

        <div className="text-center">

          <a
            href={`https://wa.me/${profile.phone}`}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            <Phone size={20} />
            Book Consultation on WhatsApp
          </a>

        </div>

      </div>

    </div>
  );
}