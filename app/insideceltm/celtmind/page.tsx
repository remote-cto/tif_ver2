"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";

const CeltMindPage = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />

      {/* Back Button */}
      <div className="sticky top-20 z-40 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
        <div className=" mx-auto px-6 py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-sm font-medium text-white
            bg-gradient-to-r from-blue-600 to-indigo-600
            hover:from-blue-500 hover:to-indigo-500
            px-5 py-2.5 rounded-lg shadow-md
            transition-all duration-300 hover:scale-105"
          >
            ← Back
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 selection:bg-blue-500 selection:text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_75%_30%,rgba(99,102,241,0.12),transparent_40%)]" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-25 grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <h1
                className="text-5xl md:text-6xl font-bold tracking-tight
              bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400
              bg-clip-text text-transparent"
              >
                CELTMind™
              </h1>

              <p className="mt-6 text-xl text-slate-300">
                The Cognitive Intelligence Layer
              </p>

              <p className="mt-4 text-lg text-white font-medium">
                Beyond Information. Toward Intelligence.
              </p>
            </div>

            {/* Right */}
            <div className="text-slate-400 leading-relaxed space-y-4">
              <p>
                In a world flooded with content, the real differentiator is not
                access to knowledge —
                <span className="text-white font-medium">
                  {" "}
                  it is structured cognition.
                </span>
              </p>

              <p>
                CELTMind™ is an intelligent capability engine designed to
                support learning, reasoning, and execution across disciplines.
              </p>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Why CELTMind™ Exists
            </h2>

            <div className="text-slate-400 max-w-2xl mx-auto space-y-4 mb-12">
              <p>Traditional systems focus on content delivery.</p>
              <p>Modern AI tools focus on prompt-response automation.</p>
              <p className="text-white font-medium">
                Neither guarantees structured thinking or deployment readiness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              {[
                "Enhance reasoning",
                "Structure problem-solving",
                "Support domain-specific learning",
                "Strengthen applied decision logic",
                "Align understanding to real-world execution",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800
                  rounded-xl p-6 transition-all duration-300
                  hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg"
                >
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT IT DOES */}
        <section className="border-b border-slate-800 bg-slate-950/40">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              What CELTMind™ Does
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
              {[
                {
                  title: "Contextual Learning Intelligence",
                  text: "Transforms static content into interactive reasoning flows.",
                },
                {
                  title: "Structured Thinking Support",
                  text: "Guides users through logical frameworks rather than isolated answers.",
                },
                {
                  title: "Domain-Aware Interpretation",
                  text: "Adapts to discipline-specific knowledge environments.",
                },
                {
                  title: "Execution-Oriented Assistance",
                  text: "Supports deployment-level thinking, not just theoretical inquiry.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800
                  rounded-xl p-6 transition-all duration-300
                  hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-slate-300 max-w-2xl mx-auto">
              It augments human capability — it does not replace it.
            </p>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Architecture Philosophy
            </h2>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                "Cognitive Structure over Content Volume",
                "Execution Intelligence over Information Retrieval",
                "Capability Augmentation over Automation Dependence",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800
                  rounded-xl p-6 transition-all duration-300
                  hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg"
                >
                  <p className="text-white font-medium">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-slate-400 max-w-2xl mx-auto">
              It integrates seamlessly into CELTM’s capability ecosystem —
              assess, build, calibrate, and align.
            </p>
          </div>
        </section>

        {/* STRATEGIC ADVANTAGE */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-10
            bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400
            bg-clip-text text-transparent"
            >
              The Strategic Advantage
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              {[
                "Accelerate applied learning",
                "Improve reasoning quality",
                "Reduce capability gaps",
                "Increase execution confidence",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800
                  rounded-xl p-6 transition-all duration-300
                  hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-lg"
                >
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-16 text-white font-semibold text-lg">
              The future belongs not to those who access AI —
            </p>
            <p className="text-white font-semibold text-lg">
              but to those who structure intelligence.
            </p>

            <h3 className="mt-16 text-2xl font-semibold text-white">
              CELTMind™
            </h3>

            <p className="mt-2 text-slate-400">
              Cognitive Infrastructure for the Capability Era.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CeltMindPage;
