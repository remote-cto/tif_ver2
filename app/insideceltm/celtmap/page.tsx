"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";

const Page = () => {
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

          {/* Soft radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.15),transparent_40%)]" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-32 text-center animate-fadeUp">

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight 
            bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 
            bg-clip-text text-transparent">
              CELTMap™
            </h1>

            <p className="mt-10 text-2xl text-slate-400">
              Capability & Readiness Intelligence System
            </p>

            <p className="mt-12 text-xl font-semibold text-white">
              Measure What Matters.
            </p>

            <p className="mt-14 text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              In today’s world, knowledge is available everywhere.
              Capability is not.
            </p>

            <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              CELTMap™ is a structured capability and readiness intelligence system
              designed to measure real-world execution ability — not just theory.
            </p>

          </div>
        </section>

        {/* WHY SECTION */}
        <section className="border-b border-slate-800 bg-slate-950/40">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-28 text-center animate-fadeUp delay-1">

            <h2 className="text-4xl md:text-5xl font-bold mb-16 
            bg-gradient-to-r from-blue-400 to-indigo-400 
            bg-clip-text text-transparent">
              Why CELTMap™ Exists
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 
              rounded-2xl p-10 shadow-lg text-left
              transition-all duration-300 hover:-translate-y-2 
              hover:shadow-blue-500/20">
                <ul className="space-y-4 text-slate-300">
                  <li>• Curriculum is delivered.</li>
                  <li>• Training is conducted.</li>
                  <li>• Certifications are awarded.</li>
                </ul>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 
              rounded-2xl p-10 shadow-lg text-left
              transition-all duration-300 hover:-translate-y-2 
              hover:shadow-indigo-500/20">
                <ul className="space-y-4 text-slate-300">
                  <li>• Where do people truly stand?</li>
                  <li>• What are measurable capability gaps?</li>
                  <li>• How aligned to industry expectations?</li>
                  <li>• What differentiates talent?</li>
                </ul>
              </div>
            </div>

            <p className="mt-20 text-slate-400 max-w-3xl mx-auto">
              Without structured measurement, readiness remains assumed — not validated.
            </p>

            <p className="mt-8 text-xl font-semibold text-white">
              CELTMap™ transforms capability into measurable intelligence.
            </p>

          </div>
        </section>

        {/* WHAT IT MEASURES */}
        <section className="border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-28 text-center animate-fadeUp delay-2">

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-20">
              What CELTMap™ Measures
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: "Foundational Competence",
                  text: "Core conceptual clarity and domain understanding.",
                },
                {
                  title: "Applied Execution",
                  text: "Ability to solve real-world, scenario-based problems.",
                },
                {
                  title: "Systems & Integration Thinking",
                  text: "Connecting knowledge across functions and contexts.",
                },
                {
                  title: "Deployment Readiness",
                  text: "Practical maturity aligned to job-role expectations.",
                },
                {
                  title: "Industry Fit Mapping",
                  text: "Structured alignment to defined workforce standards.",
                  full: true,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-slate-900/60 backdrop-blur-xl border border-slate-800 
                  rounded-2xl p-10 shadow-lg text-left
                  transition-all duration-300 hover:-translate-y-2 
                  hover:shadow-blue-500/20 ${
                    item.full ? "md:col-span-2" : ""
                  }`}
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

            <p className="mt-24 text-white text-xl font-semibold">
              Not just a score —
            </p>
            <p className="text-white text-xl font-semibold">
              A comprehensive capability profile.
            </p>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Page;
