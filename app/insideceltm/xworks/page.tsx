"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";

const XworksPage = () => {
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.12),transparent_40%)]" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-25 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                XWORKS
              </h1>

              <p className="mt-6 text-xl text-slate-300">
                Programs & Workshops Across Disciplines
              </p>

              <p className="mt-4 text-lg text-white font-medium">
                Built for Real-World Capability.
              </p>
            </div>

            <div className="text-slate-400 leading-relaxed space-y-4">
              <p>
                XWORKS is CELTM’s upskilling and capability-building vertical —
                delivering structured programs and workshops across disciplines
                and sectors.
              </p>

              <p>
                Not hype. Not theory.{" "}
                <span className="text-white font-medium">
                  Measurable capability.
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              What We Deliver
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                {
                  title: "Capability Programs",
                  text: "Structured pathways that build competence, confidence, and execution readiness.",
                },
                {
                  title: "Workshops",
                  text: "High-intensity sessions that unlock clarity and practical momentum.",
                },
                {
                  title: "Institution Cohorts",
                  text: "Semester-aligned interventions for final-year readiness and industry alignment.",
                },
                {
                  title: "Corporate Tracks",
                  text: "Role-aligned capability building for teams adopting modern technologies.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-6
                  transition-all duration-300 hover:-translate-y-1
                  hover:border-blue-500/40 hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-800 bg-slate-950/40">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              What Makes XWORKS Different
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                "Applied learning over passive listening",
                "Real scenarios over generic slides",
                "Strong fundamentals with modern context",
                "Structured outcomes over attendance certificates",
                "Discipline, practice, and execution",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-5"
                >
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-slate-400">We don’t just teach tools.</p>
            <p className="mt-2 text-white font-semibold text-lg">
              We build judgement.
            </p>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className="border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Who We Serve
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "Institutions",
                  text: "Helping students become industry-ready with measurable progression.",
                },
                {
                  title: "Organizations",
                  text: "Building workforce readiness aligned to real business outcomes.",
                },
                {
                  title: "Individuals",
                  text: "Accelerating growth with structured learning and execution practice.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-6
                  transition-all duration-300 hover:-translate-y-1
                  hover:border-indigo-500/40 hover:shadow-lg"
                >
                  <h3 className="font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Capability Building. Delivered with Structure.
            </h2>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default XworksPage;
