"use client";
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const components = [
  {
    title: "CELTMAP™",
    subtitle: "Readiness Layer",
    description:
      "Readiness, understood before outcomes exist. A context-aware assessment layer that senses preparedness, direction, and alignment — without labeling people too early.",
  },
  {
    title: "CELTMind™",
    subtitle: "Intelligence Core",
    description:
      "The intelligence layer beneath the system. Connects signals from readiness, learning, and outcomes to continuously refine how capability is interpreted.",
  },
  {
    title: "XWORKS",
    subtitle: "Capability Formation",
    description:
      "Applied learning environments where real-world constraints shape skills, thinking, and adaptability through guided effort.",
  },
  {
    title: "Vetta",
    subtitle: "Credibility Engine",
    description:
      "Validates talent based on observed performance and demonstrated readiness — creating signals institutions and industry can trust.",
  },
  {
    title: "CELTM Talent Pool",
    subtitle: "Opportunity Network",
    description:
      "A curated network of validated, future-ready individuals connected to organizations through evidence-based capability mapping.",
  },
];

const CELTMSystem = () => {
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
              "Everything is connected by intent"
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

        {/* Component Cards */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
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

                <button className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:text-indigo-600 transition-all">
                  <span>Explore More</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 group-hover:bg-indigo-50 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CELTMSystem;
