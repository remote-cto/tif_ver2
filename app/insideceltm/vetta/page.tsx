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
      <div className="sticky top-20 z-40 backdrop-blur-xl bg-white/80 border-b border-slate-200">
        <div className="mx-auto px-6 py-4">
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

      <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-100 text-slate-800 selection:bg-blue-100 selection:text-blue-900">
        
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.08),transparent_40%)]" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h1
                className="text-5xl md:text-6xl font-bold tracking-tight 
                bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 
                bg-clip-text text-transparent"
              >
                VETTA™
              </h1>

              <p className="mt-6 text-xl text-slate-600">
                Enterprise-Grade Capability Network
              </p>

              <p className="mt-4 text-lg text-slate-900 font-medium">
                Validated talent. Structured readiness.
              </p>
            </div>

            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>
                VETTA™ bridges the gap between claimed skill, demonstrated
                capability, and enterprise deployment readiness.
              </p>

              <p>
                Reduced hiring risk. Faster deployment.{" "}
                <span className="text-slate-900 font-medium">
                  Measurable performance alignment.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ENTERPRISE CHALLENGE */}
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              The Enterprise Challenge
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto mb-10">
              Organizations face widening gaps between hiring claims and
              operational performance.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              {[
                "Slower hiring cycles",
                "Increased evaluation cost",
                "Deployment risk",
                "Capability mismatch",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-xl p-6
                  transition-all duration-300 hover:-translate-y-1
                  hover:border-blue-300 hover:shadow-md"
                >
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT IS VETTA */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 
              bg-gradient-to-r from-blue-600 to-indigo-600 
              bg-clip-text text-transparent"
            >
              What is VETTA™
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto mb-12">
              A curated, multi-sector capability network built on structured
              validation frameworks.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              {[
                "Capability assessment",
                "Functional benchmarking",
                "Applied evaluation",
                "Readiness scoring",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 
                  rounded-xl p-6
                  transition-all duration-300 hover:-translate-y-1 
                  hover:border-indigo-300 hover:shadow-md"
                >
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEASURABLE DIMENSIONS */}
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
              Measurable Dimensions
            </h2>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                "Technical depth",
                "Applied problem-solving",
                "Systems thinking",
                "Contextual judgment",
                "Industry alignment",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 
                  rounded-xl p-6 text-slate-700
                  transition-all duration-300 
                  hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 
              bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 
              bg-clip-text text-transparent"
            >
              Where Validated Capability Meets Enterprise Demand
            </h2>

            <p className="text-slate-600 mb-3">
              Enterprise Partnerships · Institutional Collaboration · Select
              Talent Admission
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default VettaPage;
