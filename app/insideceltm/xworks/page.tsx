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
          {/* Soft glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_75%_30%,rgba(99,102,241,0.15),transparent_40%)]" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-32 text-center animate-fadeUp">
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight 
            bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 
            bg-clip-text text-transparent"
            >
              XWORKS
            </h1>

            <p className="mt-8 text-2xl text-slate-400">
              Programs & Workshops Across Disciplines
            </p>

            <p className="mt-10 text-xl font-semibold text-white">
              Built for Real-World Capability.
            </p>

            <p className="mt-12 text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              XWORKS is CELTM’s upskilling and capability-building vertical —
              delivering structured programs and workshops across disciplines
              and sectors.
            </p>

            <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Not hype. Not theory.{" "}
              <span className="text-white font-medium">
                Measurable capability.
              </span>
            </p>
          </div>
        </section>

        {/* WHAT WE DELIVER */}
        <section className="border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-28 text-center animate-fadeUp delay-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              What We Deliver
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
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
                  className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 
                  rounded-2xl p-8 shadow-lg text-left
                  transition-all duration-300 hover:-translate-y-2 
                  hover:shadow-blue-500/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFERENT */}
        <section className="border-b border-slate-800 bg-slate-950/40">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-28 text-center animate-fadeUp delay-2">
            <h2
              className="text-4xl md:text-5xl font-bold mb-12 
            bg-gradient-to-r from-blue-400 to-indigo-400 
            bg-clip-text text-transparent"
            >
              What Makes XWORKS Different
            </h2>

            <div
              className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 
            rounded-2xl p-10 shadow-xl max-w-3xl mx-auto"
            >
              <ul className="space-y-4 text-slate-300 text-left">
                <li>• Applied learning over passive listening</li>
                <li>• Real scenarios over generic slides</li>
                <li>• Strong fundamentals with modern context</li>
                <li>• Structured outcomes over attendance certificates</li>
                <li>• Discipline, practice, and execution</li>
              </ul>
            </div>

            <p className="mt-16 text-slate-400">We don’t just teach tools.</p>

            <p className="mt-4 text-white font-semibold text-lg">
              We build judgement.
            </p>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className="border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-28 text-center animate-fadeUp delay-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Who We Serve
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
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
                  className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 
                  rounded-2xl p-8 shadow-lg 
                  transition-all duration-300 hover:-translate-y-2 
                  hover:shadow-indigo-500/20"
                >
                  <h3 className="font-semibold text-white mb-4">
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

          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-32 text-center animate-fadeUp delay-4">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 
            bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 
            bg-clip-text text-transparent"
            >
              Capability Building. Delivered with Structure.
            </h2>

            <p className="text-slate-400 mb-12">
              Start with a short discovery conversation.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default XworksPage;
