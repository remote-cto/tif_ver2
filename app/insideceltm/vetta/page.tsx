"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";

const VettaPage = () => {
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
          
          {/* Soft lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.15),transparent_40%)]" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-32 text-center animate-fadeUp">
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight 
            bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 
            bg-clip-text text-transparent">
              VETTA™
            </h1>

            <p className="mt-8 text-xl text-slate-400">
              Enterprise-Grade Capability Network
            </p>

            <p className="mt-12 text-lg text-slate-400 max-w-2xl mx-auto">
              Validated talent. Structured readiness. Reduced hiring risk.
            </p>

          </div>
        </section>

        {/* ENTERPRISE CHALLENGE */}
        <section className="border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-28 text-center animate-fadeUp delay-1">
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              The Enterprise Challenge
            </h2>

            <p className="text-slate-400 max-w-3xl mx-auto mb-12">
              Organizations face a widening gap between claimed skill,
              demonstrated capability, and deployment readiness.
            </p>

            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 
            rounded-2xl p-10 shadow-xl max-w-3xl mx-auto">
              <ul className="space-y-4 text-slate-300">
                <li>• Slower hiring cycles</li>
                <li>• Increased evaluation cost</li>
                <li>• Deployment risk</li>
                <li>• Capability mismatch</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WHAT IS VETTA */}
        <section className="border-b border-slate-800 bg-slate-950/40">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-28 text-center animate-fadeUp delay-2">
            
            <h2 className="text-4xl md:text-5xl font-bold mb-12 
            bg-gradient-to-r from-blue-400 to-indigo-400 
            bg-clip-text text-transparent">
              What is VETTA™
            </h2>

            <p className="text-slate-400 max-w-3xl mx-auto mb-12">
              A curated, multi-sector capability network built on structured
              validation frameworks.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Capability assessment",
                "Functional benchmarking",
                "Applied evaluation",
                "Readiness scoring"
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-900/60 backdrop-blur-lg border border-slate-800 
                  rounded-2xl p-8 shadow-lg 
                  transition-all duration-300 hover:-translate-y-2 
                  hover:shadow-blue-500/20"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIMENSIONS */}
        <section className="border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-28 text-center animate-fadeUp delay-3">
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Measurable Dimensions
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Technical depth",
                "Applied problem-solving",
                "Systems thinking",
                "Contextual judgment",
                "Industry alignment"
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 
                  rounded-2xl p-8 text-slate-300
                  shadow-lg transition-all duration-300 
                  hover:-translate-y-2 hover:shadow-indigo-500/20"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent" />
          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-32 text-center animate-fadeUp delay-4">
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 
            bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 
            bg-clip-text text-transparent">
              Where Validated Capability Meets Enterprise Demand
            </h2>

            <p className="text-slate-400 mb-12">
              Enterprise Partnerships · Institutional Collaboration · Select Talent Admission
            </p>

          
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default VettaPage;
