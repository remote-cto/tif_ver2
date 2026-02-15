"use client";
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

const components = [
  {
    title: "CELTMAP™",
    subtitle: "Readiness Layer",
    description:
      "Readiness, understood before outcomes exist. A context-aware assessment layer that senses preparedness, direction, and alignment — without labeling people too early.",
    pageName: "celtmap",
  },

  {
    title: "XWORKS",
    subtitle: "Capability Formation",
    description:
      "Applied learning environments where real-world constraints shape skills, thinking, and adaptability through guided effort.",
    pageName: "xworks",
  },
  {
    title: "VETTA",
    subtitle: "Credibility Engine",
    description:
      "Validates talent based on observed performance and demonstrated readiness — creating signals institutions and industry can trust.",
    pageName: "vetta",
  },
  {
    title: "CELTMIND™",
    subtitle: "Intelligence Core",
    description:
      "The intelligence layer beneath the system. Connects signals from readiness, learning, and outcomes to continuously refine how capability is interpreted.",
    pageName: "celtmind",
  },
];

const CELTMSystem = () => {
  const router = useRouter();

  const handleReadMore = (pageName: string) => {
    router.push(`/insideceltm/${pageName}`);
  };
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Animated ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_85%_65%,rgba(168,85,247,0.12),transparent_40%)]" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Intro */}
        <div className="relative max-w-3xl mb-28">
          {/* Accent rail */}
          <div className="absolute -left-6 top-1 h-full w-[4px] rounded-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500" />

          <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-slate-400 mb-4">
            <Sparkles className="h-4 w-4 text-indigo-500" />
            System Philosophy
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-tight mb-8">
            Not a collection of tools.
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              A system by design.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
            Most platforms offer tools in isolation.
            <br />
            CELTM was built from the ground up as an integrated system — where
            every component strengthens the others.
          </p>

          {/* Philosophy bullets */}
          <div className="grid gap-4 mb-10">
            {[
              "Each component serves a specific role",
              "Each one feeds intelligence into the others",
              "Each Compoenent improves the system as a whole",
              "Nothing here exists independently",
              "Everything is connected by intent",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                <span className="text-slate-700">{text}</span>
              </div>
            ))}
          </div>

          <p className="text-lg font-medium text-slate-900">
            Nothing here exists independently.
            <br />
            <span className="text-slate-600">
              Everything is connected by intent.
            </span>
          </p>
        </div>

        
        <div className="relative">
          {/* Desktop Layout (lg and above) */}
          <div className="hidden lg:block">
            {/* First Row - 3 Cards */}
            <div className="grid gap-12 grid-cols-3 mb-24" id="top-cards">
              {components.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-blue-500/40 via-indigo-500/40 to-purple-500/40 hover:from-blue-500 hover:to-purple-500 transition-all duration-500"
                >
                  <div className="relative h-full rounded-3xl bg-white/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />

                    <span className="text-xs uppercase tracking-widest text-slate-400">
                      {item.subtitle}
                    </span>

                    <h3 className="text-2xl font-semibold text-slate-900 mt-3 mb-4">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-10">
                      {item.description}
                    </p>

                    <button
                      onClick={() => handleReadMore(item.pageName)}
                      className="flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-md shadow-md cursor-pointer"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* SVG Arrows Container - positioned between rows */}
            <div className="absolute left-0 right-0 pointer-events-none" style={{ top: '400px', height: '140px' }}>
              <svg className="w-full h-full" viewBox="0 0 1200 150" preserveAspectRatio="none">
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="15"
                    markerHeight="15"
                    refX="11"
                    refY="6"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 12 6, 0 12"
                      fill="#6366f1"
                    />
                  </marker>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 0.8 }} />
                  </linearGradient>
                </defs>

                {/* Arrow from CELTMind to CELTMAP (left) */}
                <path
                  d="M 600 150 Q 300 75, 200 0"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  opacity="1"
                />

                {/* Arrow from CELTMind to XWORKS (center) */}
                <path
                    d="M 600 150 Q 600 75, 600 0"

                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  opacity="1"
                />

                {/* Arrow from CELTMind to Vetta (right) */}
                <path
                  d="M 600 150 Q 900 75, 1000 0"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  opacity="1"
                />
              </svg>
            </div>

            {/* Second Row - 1 Card Centered */}
            <div className="flex justify-center relative" style={{ zIndex: 10 }}>
              <div className="w-full max-w-md lg:max-w-lg">
                {components.slice(3, 4).map((item, index) => (
                  <div
                    key={index}
                    className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-blue-500/40 via-indigo-500/40 to-purple-500/40 hover:from-blue-500 hover:to-purple-500 transition-all duration-500"
                  >
                    <div className="relative h-full rounded-3xl bg-white/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />

                      <span className="text-xs uppercase tracking-widest text-slate-400">
                        {item.subtitle}
                      </span>

                      <h3 className="text-2xl font-semibold text-slate-900 mt-3 mb-4">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 leading-relaxed mb-10">
                        {item.description}
                      </p>

                      <button
                        onClick={() => handleReadMore(item.pageName)}
                        className="flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-md shadow-md cursor-pointer"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout (below lg) - All cards vertical, no arrows */}
          <div className="lg:hidden grid gap-12">
            {components.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-blue-500/40 via-indigo-500/40 to-purple-500/40 hover:from-blue-500 hover:to-purple-500 transition-all duration-500"
              >
                <div className="relative h-full rounded-3xl bg-white/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />

                  <span className="text-xs uppercase tracking-widest text-slate-400">
                    {item.subtitle}
                  </span>

                  <h3 className="text-2xl font-semibold text-slate-900 mt-3 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-10">
                    {item.description}
                  </p>

                  <button
                    onClick={() => handleReadMore(item.pageName)}
                    className="flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-md shadow-md cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CELTMSystem;