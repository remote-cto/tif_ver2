"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

const VettaPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
          <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-36 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
              VETTA
            </h1>

            <h2 className="mt-8 text-2xl md:text-3xl font-medium text-slate-600">
              VETTA™
            </h2>

            <p className="mt-6 text-lg md:text-xl text-slate-600">
              Enterprise-Grade Capability Network
            </p>

            <p className="mt-8 text-lg text-slate-700">Validated talent.</p>
            <p className="text-lg text-slate-700">Structured readiness.</p>
            <p className="text-lg text-slate-700">Reduced hiring risk.</p>
          </div>
        </section>

        {/* Enterprise Challenge */}
        <section className="border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">
              The Enterprise Challenge
            </h2>

            <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-12">
              Across sectors, organizations face a growing gap between:
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 max-w-3xl mx-auto mb-16">
              <ul className="space-y-4 text-lg text-slate-700">
                <li>• Claimed skill</li>
                <li>• Demonstrated capability</li>
                <li>• Deployment readiness</li>
              </ul>
            </div>

            <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto">
              AI, Cybersecurity, Data, Engineering, Healthcare, Finance —
            </p>

            <p className="mt-4 text-lg text-slate-700 text-center max-w-3xl mx-auto">
              talent pipelines are noisy.
            </p>

            <div className="mt-12 space-y-6 text-lg text-slate-700 text-center max-w-3xl mx-auto">
              <p>Resumes do not reflect execution strength.</p>
              <p>Certifications do not reflect judgment.</p>
              <p>Interviews do not fully measure applied capability.</p>
            </div>

            <p className="mt-16 text-lg text-slate-700 text-center max-w-3xl mx-auto">
              For enterprises, this creates:
            </p>

            <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-slate-200 max-w-3xl mx-auto">
              <ul className="space-y-4 text-lg text-slate-700">
                <li>• Slower hiring cycles</li>
                <li>• Increased evaluation cost</li>
                <li>• Deployment risk</li>
                <li>• Capability mismatch</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What is VETTA */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">
              What is VETTA™
            </h2>

            <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-8">
              VETTA™ is a curated, multi-sector capability network built on
              structured validation frameworks.
            </p>

            <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-4">
              We begin with AI and emerging technologies.
            </p>

            <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-12">
              We expand across enterprise-critical domains.
            </p>

            <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-12">
              Every professional admitted into VETTA™ undergoes:
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 max-w-3xl mx-auto">
              <ul className="space-y-4 text-lg text-slate-700">
                <li>✓ Capability assessment</li>
                <li>✓ Functional benchmarking</li>
                <li>✓ Foundational & applied evaluation</li>
                <li>✓ Sector-specific mapping</li>
                <li>✓ Readiness scoring</li>
              </ul>
            </div>

            <div className="mt-16 space-y-4 text-lg text-slate-700 text-center max-w-3xl mx-auto">
              <p>No open marketplace.</p>
              <p>No resume flooding.</p>
              <p>No uncontrolled listings.</p>
            </div>

            <p className="mt-12 text-xl font-semibold text-center">
              Structured Capability Intelligence
            </p>
          </div>
        </section>

        {/* Dimensions */}
        <section className="border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
            <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-16">
              VETTA™ profiles are built on measurable dimensions:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {[
                "Technical depth",
                "Applied problem-solving",
                "Systems thinking",
                "Contextual judgment",
                "Industry alignment",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center font-medium"
                >
                  • {item}
                </div>
              ))}
            </div>

            <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto">
              Each professional carries a structured Readiness Index™, providing
              enterprises with defensible evaluation clarity.
            </p>
          </div>
        </section>

        {/* For Enterprises */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">
              For Enterprises
            </h2>

            <p className="text-lg text-slate-700 text-center mb-12">
              VETTA™ enables:
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 max-w-3xl mx-auto">
              <ul className="space-y-4 text-lg text-slate-700">
                <li>• Pre-validated talent pipelines</li>
                <li>• Reduced screening burden</li>
                <li>• Faster hiring cycles</li>
                <li>• Improved deployment confidence</li>
                <li>• Lower capability mismatch risk</li>
              </ul>
            </div>

            <div className="mt-16 space-y-4 text-lg text-slate-700 text-center max-w-3xl mx-auto">
              <p>You do not interview for fundamentals.</p>
              <p className="font-medium text-slate-900">
                You evaluate for strategic alignment.
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Talent */}
        <section className="border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">
              For Strategic Talent
            </h2>

            <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-12">
              Admission into VETTA™ is selective.
            </p>

            <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-12">
              It is designed for professionals who:
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 max-w-3xl mx-auto">
              <ul className="space-y-4 text-lg text-slate-700">
                <li>• Seek structured evaluation</li>
                <li>• Value credibility beyond credentials</li>
                <li>• Want measurable industry positioning</li>
                <li>• Operate at deployment-grade standards</li>
              </ul>
            </div>

            <p className="mt-16 text-lg text-slate-700 text-center max-w-3xl mx-auto">
              Signal integrity is maintained by design.
            </p>
          </div>
        </section>

        {/* Cross-Sector Expansion */}
        <section>
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-36 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
              Cross-Sector Expansion
            </h2>

            <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8">
              VETTA™ begins with AI and advanced technology clusters.
            </p>

            <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-12">
              The framework extends to:
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 max-w-3xl mx-auto mb-16">
              <ul className="space-y-4 text-lg text-slate-700">
                <li>• Cybersecurity</li>
                <li>• Data & Analytics</li>
                <li>• Healthcare & Applied AI</li>
                <li>• Engineering & Systems</li>
                <li>• Financial & Operational Intelligence</li>
              </ul>
            </div>

            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              The validation engine remains constant.
            </p>

            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              The sectors evolve.
            </p>

            <p className="mt-16 text-lg text-slate-700">
              Built on Structured Capability Architecture
            </p>

            <p className="mt-4 text-lg font-medium text-slate-900">
              Discovery → Upskill → Validate → Connect
            </p>

            <p className="mt-16 text-lg text-slate-700 max-w-3xl mx-auto">
              VETTA™ is the enterprise-facing Connect layer within the broader
              capability ecosystem.
            </p>

            <h3 className="mt-24 text-3xl font-semibold">VETTA™</h3>

            <p className="mt-4 text-lg text-slate-600">
              Where Validated Capability Meets Enterprise Demand
            </p>

            <p className="mt-8 text-lg text-slate-700">
              For Enterprise Partnerships
            </p>
            <p className="text-lg text-slate-700">
              For Institutional Collaboration
            </p>
            <p className="text-lg text-slate-700">
              For Select Talent Admission
            </p>
          </div>
        </section>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default VettaPage;
