"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />

      {/* Back Button Section */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md">
        <div className=" mx-auto px-3 py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-sm font-medium text-white 
            bg-gradient-to-r from-blue-600 to-blue-700 
            hover:from-blue-700 hover:to-blue-800
            px-5 py-2.5 rounded-lg shadow-md 
            transition-all duration-200 hover:shadow-lg cursor-pointer"
          >
            <span className="text-base">←</span>
            Back
          </button>
        </div>
      </div>

      <div className="bg-white text-slate-900 antialiased selection:bg-slate-900 selection:text-white">

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
          <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-25 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              CELTMap™
            </h1>

            <h2 className="mt-10 text-2xl md:text-3xl font-medium text-slate-600">
              Capability & Readiness Intelligence System
            </h2>

            <h3 className="mt-12 text-xl md:text-2xl font-semibold text-slate-900">
              Measure What Matters.
            </h3>

            <p className="mt-14 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
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
              visibility into how prepared their students and professionals
              truly are.
            </p>
          </div>
        </section>

        {/* Why Section */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-32">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">
              Why CELTMap™ Exists
            </h2>

            <p className="text-lg text-slate-600 mb-16 text-center">
              Across education and industry, a common gap remains:
            </p>

            <div className="grid md:grid-cols-2 gap-10 text-lg text-slate-700">
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-200 hover:shadow-md transition">
                <ul className="space-y-4">
                  <li>• Curriculum is delivered.</li>
                  <li>• Training is conducted.</li>
                  <li>• Certifications are awarded.</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-200 hover:shadow-md transition">
                <ul className="space-y-4">
                  <li>• Where do our people truly stand?</li>
                  <li>• What are the measurable capability gaps?</li>
                  <li>• How aligned are we to industry expectations?</li>
                  <li>• What differentiates our talent?</li>
                </ul>
              </div>
            </div>

            <p className="mt-20 text-lg text-slate-700 text-center max-w-3xl mx-auto">
              But real-world readiness is rarely measured in a structured way.
            </p>

            <p className="mt-6 text-lg text-slate-700 text-center max-w-3xl mx-auto">
              Without structured measurement, readiness remains assumed — not validated.
            </p>

            <p className="mt-10 text-xl font-semibold text-center">
              CELTMap™ transforms capability into measurable intelligence.
            </p>
          </div>
        </section>

        {/* What It Measures */}
        <section className="border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-32">
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
                  text: "Capacity to connect knowledge across functions and contexts.",
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
                  className={`bg-white border border-slate-200 rounded-2xl p-10 shadow-sm hover:shadow-md transition ${
                    item.full ? "md:col-span-2" : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-24 text-center text-xl font-semibold">
              The result is not just a score —
            </p>
            <p className="text-center text-xl font-semibold">
              it is a comprehensive capability profile.
            </p>
          </div>
        </section>

       

        <Footer />
      </div>
    </>
  );
};

export default Page;
