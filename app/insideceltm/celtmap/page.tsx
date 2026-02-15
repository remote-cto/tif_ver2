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
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight
              bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400
              bg-clip-text text-transparent">
                CELTMap™
              </h1>

              <p className="mt-6 text-xl text-slate-300">
                Capability & Readiness Intelligence System
              </p>

              <p className="mt-4 text-lg text-white font-medium">
                Measure What Matters.
              </p>
            </div>

            {/* Right */}
            <div className="text-slate-400 leading-relaxed space-y-4">
              <p>
                In today’s world, knowledge is available everywhere.
                Capability is not.
              </p>

              <p>
                CELTMap™ is a structured capability and readiness intelligence system
                designed to measure real-world execution ability —
                <span className="text-white font-medium">
                  {" "}not just theory.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* WHY SECTION */}
        <section className="border-b border-slate-800 bg-slate-950/40">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
            
            <h2 className="text-3xl md:text-4xl font-bold mb-10
            bg-gradient-to-r from-blue-400 to-indigo-400
            bg-clip-text text-transparent">
              Why CELTMap™ Exists
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              
              <div className="bg-slate-900/50 border border-slate-800
              rounded-xl p-6 transition-all duration-300
              hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg">
                <ul className="space-y-3 text-slate-300">
                  <li>• Curriculum is delivered.</li>
                  <li>• Training is conducted.</li>
                  <li>• Certifications are awarded.</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 border border-slate-800
              rounded-xl p-6 transition-all duration-300
              hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-lg">
                <ul className="space-y-3 text-slate-300">
                  <li>• Where do people truly stand?</li>
                  <li>• What are measurable capability gaps?</li>
                  <li>• How aligned to industry expectations?</li>
                  <li>• What differentiates talent?</li>
                </ul>
              </div>
            </div>

            <p className="mt-12 text-slate-400 max-w-2xl mx-auto">
              Without structured measurement, readiness remains assumed — not validated.
            </p>

            <p className="mt-4 text-white font-semibold text-lg">
              CELTMap™ transforms capability into measurable intelligence.
            </p>

          </div>
        </section>

        {/* WHAT IT MEASURES */}
        <section className="border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              What CELTMap™ Measures
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
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
                  className={`bg-slate-900/50 border border-slate-800
                  rounded-xl p-6 transition-all duration-300
                  hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg
                  ${item.full ? "md:col-span-2" : ""}`}
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-16 text-white text-lg font-semibold">
              Not just a score —
            </p>
            <p className="text-white text-lg font-semibold">
              A comprehensive capability profile.
            </p>

          </div>
        </section>

        {/* OPTIONAL CTA SECTION (Aligned with other pages) */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6
            bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400
            bg-clip-text text-transparent">
              Structured Measurement. Actionable Insight.
            </h2>

            <p className="text-slate-400 mb-3">
              Institutional Deployment · Enterprise Integration · Strategic Readiness Mapping
            </p>

           
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Page;
