import React from "react";
import { CheckCircle, Target, MapPin, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Page = () => {
  const cards = [
    {
      title: "Readiness Engine",
      description:
        "Readiness is sensed — not assumed. We determine when capability is truly deployable.",
      icon: CheckCircle,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Capability Building",
      description:
        "Capability is formed through guided, pressure-tested, outcome-driven journeys.",
      icon: Target,
      color: "from-cyan-500 to-teal-500",
    },
    {
      title: "Mapping Talent",
      description:
        "Talent is mapped credibly through observed performance, adaptability, and context.",
      icon: MapPin,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-slate-50 via-white to-green-50">
        {/* Hero Section */}
        <div className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/video/model.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto mt-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-light leading-relaxed">
              THE INTELLIGENCE LAYER BENEATH TALENT
            </h1>

            <div className="mt-6 space-y-4 max-w-3xl">
              <p className="text-lg text-white/90 font-light leading-relaxed">
                At CELTM, we don’t run programs. We build systems that understand
                how capability forms, evolves, and becomes deployable.
              </p>
              <p className="text-base text-white/80 font-light leading-relaxed">
                Talent does not emerge fully formed. It is shaped by context,
                pressure, learning, and time.
              </p>
              <p className="text-base text-white/80 font-light leading-relaxed">
                The CELTM model is designed to observe that process — not guess it.
              </p>
            </div>
          </div>
        </div>

        {/* System Flow */}
        <div className="py-20 px-6 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
              The CELTM System Flow
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              CELTM operates as a learning ecosystem — not a linear pipeline.
              Readiness is sensed. Capability is formed. Talent is mapped —
              credibly.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group transition-all duration-500 hover:scale-110"
              >
                <div
                  className={`bg-gradient-to-r ${card.color} rounded-2xl p-6 shadow-lg min-w-[280px] max-w-[280px] min-h-[250px] flex flex-col justify-center`}
                >
                  <div className="flex justify-center mb-3">
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/90 text-center leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem */}
       {/* Ecosystem */}
<div className="py-5 px-6 md:px-16 lg:px-24 bg-white">
  <div className="max-w-6xl mx-auto text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
      The CELTM Ecosystem
    </h2>
    <p className="text-slate-600 text-lg max-w-3xl mx-auto">
      CELTM connects multiple participants through a shared intelligence layer —
      each playing a distinct role in capability formation and deployment.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {/* Learners */}
    <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">
        Learners
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        Grow through guided capability journeys that surface readiness,
        adaptability, and applied skill over time.
      </p>
    </div>

    {/* Institutions */}
    <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">
        Institutions
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        Gain real visibility into learner readiness, progression, and outcome
        credibility — beyond completion metrics.
      </p>
    </div>

    {/* Organizations */}
    <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">
        Organizations
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        Access deployable, future-ready capability mapped through real
        performance, not static credentials.
      </p>
    </div>

    {/* Mentors */}
    <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">
        Mentors & Practitioners
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        Add human judgment, domain context, and signal validation where
        intelligence systems alone are insufficient.
      </p>
    </div>
  </div>
</div>

      </section>

      <div className="mt-5">
      <Footer />
      </div>
    </>
  );
};

export default Page;
