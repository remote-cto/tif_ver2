"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

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
    <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(99,102,241,0.08),transparent_40%)] pointer-events-none" />

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Intro */}
        <div className="relative container mx-auto px-6 max-w-7xl">
          {/* Intro */}
          <div className="relative max-w-3xl mb-24">
            {/* Accent line */}
            <div className="absolute -left-6 top-2 h-full w-[3px] bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full" />

            <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">
              System Philosophy
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight mb-6">
              Not a collection of tools.
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                A system by design.
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              Most platforms offer tools in isolation.
              <br />
              CELTM was built from the ground up as an integrated system — where
              every component strengthens the others.
            </p>

            {/* Structured list */}
            <div className="grid gap-3 text-slate-700 mb-8">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <span>Each component serves a specific role</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                <span>Each one feeds intelligence into the others</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                <span>The system improves as a whole over time</span>
              </div>
            </div>

            {/* Closing statement */}
            <p className="text-lg font-medium text-slate-900">
              Nothing here exists independently.
              <br />
              <span className="text-slate-600">
                Everything is connected by intent.
              </span>
            </p>
          </div>
        </div>

        {/* Tiles */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur-xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
            >
              {/* Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="text-sm uppercase tracking-wider text-slate-400">
                {item.subtitle}
              </span>

              <h3 className="text-2xl font-semibold text-slate-900 mt-2 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed mb-8">
                {item.description}
              </p>

              <button className="inline-flex items-center text-blue-600 font-medium gap-1 group-hover:gap-2 transition-all">
                Explore More
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CELTMSystem;
