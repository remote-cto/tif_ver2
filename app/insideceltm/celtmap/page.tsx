"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

const Page = () => {
  return (
   <>
   <Navbar/>
    <div className="bg-white text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-36 text-center">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            CELTMap™
          </h1>

          <h2 className="mt-8 text-2xl md:text-3xl font-medium text-slate-600">
            Capability & Readiness Intelligence System
          </h2>

          <h3 className="mt-10 text-xl md:text-2xl font-semibold text-slate-900">
            Measure What Matters.
          </h3>

          <p className="mt-12 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            In today’s world, knowledge is available everywhere.
            <br />
            Capability is not.
          </p>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            CELTMap™ is a structured capability and readiness intelligence
            system designed to measure real-world execution ability across
            disciplines — not just theoretical understanding.
          </p>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            It provides institutions and organizations with measurable
            visibility into how prepared their students and professionals truly
            are.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-14">
            Why CELTMap™ Exists
          </h2>

          <p className="text-lg text-slate-600 mb-14 text-center">
            Across education and industry, a common gap remains:
          </p>

          <div className="grid md:grid-cols-2 gap-10 text-lg text-slate-700">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <ul className="space-y-4">
                <li>• Curriculum is delivered.</li>
                <li>• Training is conducted.</li>
                <li>• Certifications are awarded.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <ul className="space-y-4">
                <li>• Where do our people truly stand?</li>
                <li>• What are the measurable capability gaps?</li>
                <li>• How aligned are we to industry expectations?</li>
                <li>• What differentiates our talent?</li>
              </ul>
            </div>
          </div>

          <p className="mt-16 text-lg text-slate-700 text-center max-w-3xl mx-auto">
            But real-world readiness is rarely measured in a structured way.
          </p>

          <p className="mt-6 text-lg text-slate-700 text-center max-w-3xl mx-auto">
            Without structured measurement, readiness remains assumed — not
            validated.
          </p>

          <p className="mt-8 text-xl font-semibold text-center">
            CELTMap™ transforms capability into measurable intelligence.
          </p>
        </div>
      </section>

      {/* What It Measures */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-20">
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
                text:
                  "Capacity to connect knowledge across functions and contexts.",
              },
              {
                title: "Deployment Readiness",
                text:
                  "Practical maturity aligned to job-role expectations.",
              },
              {
                title: "Industry Fit Mapping",
                text:
                  "Structured alignment to defined workforce standards.",
                full: true,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white border border-slate-200 rounded-2xl p-8 shadow-sm ${
                  item.full ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-20 text-center text-xl font-semibold">
            The result is not just a score —
          </p>
          <p className="text-center text-xl font-semibold">
            it is a comprehensive capability profile.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-20">
            How It Works
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-lg text-slate-700">
            {[
              {
                title: "1. Structured Assessment Framework",
                text:
                  "Multi-layered evaluations aligned to industry and academic standards.",
              },
              {
                title: "2. Capability Mapping Engine",
                text:
                  "Identifies strengths, developmental gaps, and readiness levels.",
              },
              {
                title: "3. Cohort & Organizational Benchmarking",
                text:
                  "Comparative visibility across programs, departments, or teams.",
              },
              {
                title: "4. Strategic Gap Reports",
                text:
                  "Actionable insights to guide curriculum design or workforce development.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
              >
                <h3 className="font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-20 text-center text-lg text-slate-700 max-w-3xl mx-auto">
            CELTMap™ integrates seamlessly into academic programs, professional
            upskilling initiatives, and organizational transformation journeys.
          </p>
        </div>
      </section>

      {/* Who It Serves */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-20">
            Who It Serves
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">
              <h3 className="text-2xl font-semibold mb-8">
                Institutions
              </h3>
              <ul className="space-y-4 text-slate-600 text-lg">
                <li>• Structured readiness benchmarking</li>
                <li>• Differentiated graduate positioning</li>
                <li>• Data-backed placement narratives</li>
                <li>• Stream-specific capability validation</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">
              <h3 className="text-2xl font-semibold mb-8">
                Organizations
              </h3>
              <ul className="space-y-4 text-slate-600 text-lg">
                <li>• Workforce readiness intelligence</li>
                <li>• Role-aligned capability diagnostics</li>
                <li>• Targeted upskilling decisions</li>
                <li>• Risk-aware talent planning</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section>
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-36 text-center">
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">
            From Assumption to Infrastructure
          </h2>

          <p className="text-xl text-slate-700 mb-6">
            CELTMap™ is not an exam platform.
          </p>

          <p className="text-xl text-slate-700 mb-6">
            It is a capability intelligence system.
          </p>

          <p className="text-xl font-semibold">
            When readiness becomes measurable,
          </p>

          <p className="text-xl font-semibold">
            capability becomes strategic.
          </p>

          <h3 className="mt-20 text-3xl font-semibold">
            CELTMap™
          </h3>

          <p className="mt-4 text-lg text-slate-600">
            Structured Capability Intelligence Across Disciplines.
          </p>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Page;
