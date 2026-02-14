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
        <div className="px-6 py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-sm font-medium text-white 
            bg-gradient-to-r from-blue-600 to-indigo-600
            hover:from-blue-500 hover:to-indigo-500
            px-6 py-3 rounded-xl shadow-lg 
            transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            ← Back
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 selection:bg-blue-500 selection:text-white">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 
          bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.15),transparent_40%),
          radial-gradient(circle_at_75%_30%,rgba(99,102,241,0.15),transparent_40%)]" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-32 text-center">
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight 
              bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 
              bg-clip-text text-transparent"
            >
              CELTMind™
            </h1>

            <h2 className="mt-8 text-2xl md:text-3xl text-slate-400">
              The Cognitive Intelligence Layer for Capability Systems
            </h2>

            <h3 className="mt-10 text-xl md:text-2xl font-semibold text-white">
              Beyond Information. Toward Intelligence.
            </h3>

            <p className="mt-12 text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              In a world flooded with content, the real differentiator is not access to knowledge —
              it is structured cognition.
            </p>

            <p className="mt-10 text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              CELTMind™ is an intelligent capability engine designed to support learning,
              decision-making, and execution across disciplines.
            </p>

            <p className="mt-6 text-lg text-white font-medium">
              It does not merely generate responses. It structures understanding.
            </p>
          </div>
        </section>

        {/* WHY */}
        <section className="border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-28 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Why CELTMind™ Exists
            </h2>

            <div className="text-slate-400 max-w-3xl mx-auto space-y-6">
              <p>Traditional learning systems focus on content delivery.</p>
              <p>Modern AI tools focus on prompt-response automation.</p>
              <p>
                Neither ensures structured thinking, contextual depth, or deployment readiness.
              </p>
              <p className="text-white font-medium">
                CELTMind™ bridges this gap by embedding cognitive intelligence into capability systems.
              </p>
            </div>

            <div className="mt-16 bg-slate-900/60 backdrop-blur-xl border border-slate-800 
            rounded-2xl p-10 shadow-lg max-w-3xl mx-auto 
            transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/20">
              <ul className="space-y-4 text-slate-300 text-left">
                <li>• Enhance reasoning</li>
                <li>• Structure problem-solving</li>
                <li>• Support domain-specific learning</li>
                <li>• Strengthen applied decision logic</li>
                <li>• Align understanding to real-world execution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WHAT IT DOES */}
        <section className="border-b border-slate-800 bg-slate-950/40">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-28 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              What CELTMind™ Does
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: "Contextual Learning Intelligence",
                  text: "Transforms static content into interactive reasoning flows.",
                },
                {
                  title: "Structured Thinking Support",
                  text: "Guides users through logical frameworks rather than giving isolated answers.",
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
                  className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 
                  rounded-2xl p-8 shadow-lg text-left
                  transition-all duration-300 hover:-translate-y-2 
                  hover:shadow-indigo-500/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-16 text-slate-300 max-w-3xl mx-auto">
              It augments human capability — it does not replace it.
            </p>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-28 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Architecture Philosophy
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Cognitive Structure over Content Volume",
                "Execution Intelligence over Information Retrieval",
                "Capability Augmentation over Automation Dependence",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 
                  rounded-2xl p-8 shadow-lg 
                  transition-all duration-300 hover:-translate-y-2 
                  hover:shadow-blue-500/20"
                >
                  <p className="text-white font-medium">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-16 text-slate-400 max-w-3xl mx-auto">
              It aligns seamlessly with CELTM’s broader capability infrastructure model — assess, build, calibrate, and align.
            </p>
          </div>
        </section>

        {/* STRATEGIC ADVANTAGE */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-32 text-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-12 
              bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 
              bg-clip-text text-transparent"
            >
              The Strategic Advantage
            </h2>

            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 
            rounded-2xl p-10 shadow-lg max-w-3xl mx-auto 
            transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-500/20">
              <ul className="space-y-4 text-slate-300 text-left">
                <li>• Accelerate applied learning</li>
                <li>• Improve reasoning quality</li>
                <li>• Reduce capability gaps</li>
                <li>• Increase execution confidence</li>
              </ul>
            </div>

            <p className="mt-20 text-xl font-semibold text-white">
              The future belongs not to those who access AI —
            </p>

            <p className="mt-4 text-xl font-semibold text-white">
              but to those who structure intelligence.
            </p>

            <h3 className="mt-24 text-3xl font-semibold text-white">
              CELTMind™
            </h3>

            <p className="mt-4 text-slate-400">
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
