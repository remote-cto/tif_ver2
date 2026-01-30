// app/access/page.tsx

import React from "react";
import { GraduationCap, Building2, User, Handshake } from "lucide-react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Page = () => {
  const cards = [
    {
      title: "Academia",
      description:
        "CELTM partners with academic institutions to move beyond degrees and towards real-world readiness, capability validation, and employability outcomes.",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
      // cta: "Explore Institutional Engagement →",
    },
    {
      title: "Organizations & Enterprises",
      description:
        "CELTM works with organizations as long-term learning and readiness partners — strengthening capability across roles, leadership levels, and future demands.",
      icon: Building2,
      color: "from-purple-500 to-pink-500",
      // cta: "Explore Organizational Engagement →",
    },
    {
      title: "Talent & Professionals",
      description:
        "For individuals seeking clarity, direction, and long-horizon growth — understand readiness, build real capability, and grow with confidence.",
      icon: User,
      color: "from-green-500 to-emerald-500",
      // cta: "Explore Individual Engagement →",
    },
    {
      title: "Mentors & Collaborators",
      description:
        "CELTM collaborates with practitioners, educators, and domain experts who want to contribute perspective and help shape how capability is understood.",
      icon: Handshake,
      color: "from-yellow-500 to-orange-500",
      // cta: "Explore Collaboration →",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-slate-50 via-white to-green-50">
        {/* Hero Section with Video Background */}
        <div className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/video/Access.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mt-20">
            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed mt-5">
                How Meaningful Collaboration with CELTM Begins
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                CELTM engagements are not one-size-fits-all. They are shaped by
                context, intent, and long-term outcomes.
              </p>

              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Engagement with CELTM begins with understanding — not
                transactions.
              </p>

              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Whether you are an institution, an organization, or an
                individual, this page helps you find the right way to engage.
              </p>
            </div>

            {/* Right Side left intentionally open for video presence */}
            <div className="flex-1 hidden md:block"></div>
          </div>
        </div>

        {/* Ways to Engage Cards */}
        <div className="py-16 px-6 md:px-16 lg:px-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-12">
            Ways to Engage with CELTM
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-8 max-w-7xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative transition-all duration-300 hover:scale-110"
              >
                <div
                  className={`bg-gradient-to-r ${card.color} rounded-2xl p-6 shadow-lg min-w-[280px] max-w-[280px] min-h-[300px] flex flex-col`}
                >
                  <div className="flex items-center justify-center mb-4">
                    <card.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white text-center mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm text-white/90 text-center leading-relaxed mb-6">
                    {card.description}
                  </p>

                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How Engagement Begins */}
        <div className="py-20 px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              How Engagement Typically Begins
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Engagement usually starts with a conversation — not a contract.
              This allows both sides to understand:
            </p>

            <ul className="text-gray-600 leading-relaxed mb-8 space-y-2">
              <li>• Context and intent</li>
              <li>• Readiness gaps</li>
              <li>• Alignment of outcomes</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              The structure follows clarity — not templates.
            </p>

            <p className="text-gray-800 font-medium">
              Engagement with CELTM is about starting with clarity — not speed.
            </p>

            <div className="mt-10">
              <Link href="/contact">
              <span className="inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-medium cursor-pointer hover:bg-indigo-700 transition">
                Begin a Conversation →
              </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
