"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import React from "react";

const XworksPage = () => {
    const router = useRouter();
  return (
    <>
    <Navbar/>
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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-25 text-center">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            XWORKS
          </h1>

          <h2 className="mt-8 text-2xl md:text-3xl font-medium text-slate-600">
            Programs & Workshops Across Disciplines
          </h2>

          <h3 className="mt-10 text-xl md:text-2xl font-semibold text-slate-900">
            Built for Real-World Capability.
          </h3>

          <p className="mt-12 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            XWORKS is CELTM’s upskilling and capability-building vertical — delivering structured programs and workshops across disciplines and sectors.
          </p>

          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We help learners and teams move beyond “learning content” to building real execution ability.
          </p>

          <p className="mt-10 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Not hype. Not theory.
          </p>

          <p className="mt-4 text-lg font-medium text-slate-900">
            Measurable capability.
          </p>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">
            What We Deliver
          </h2>

          <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-16">
            XWORKS runs high-impact learning experiences designed for real-world application:
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Capability Programs",
                text: "Structured pathways that build competence, confidence, and execution readiness.",
              },
              {
                title: "Workshops",
                text: "Short, high-intensity sessions that unlock clarity, skill acceleration, and practical momentum.",
              },
              {
                title: "Institution Cohorts",
                text: "Semester-aligned interventions for final-year readiness and industry alignment.",
              },
              {
                title: "Corporate Tracks",
                text: "Role-aligned capability building for teams adopting modern technologies and workflows.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
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
        </div>
      </section>

      {/* What Makes XWORKS Different */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">
            What Makes XWORKS Different
          </h2>

          <div className="space-y-8 text-lg text-slate-700 max-w-3xl mx-auto text-center">
            <p>Most training focuses on coverage.</p>
            <p className="font-medium text-slate-900">XWORKS focuses on capability.</p>
            <p>We emphasize:</p>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-slate-200 max-w-3xl mx-auto">
            <ul className="space-y-4 text-lg text-slate-700">
              <li>- Applied learning over passive listening</li>
              <li>• Real scenarios over generic slides</li>
              <li>• Strong fundamentals with modern context</li>
              <li>• Structured outcomes over attendance certificates</li>
              <li>• Discipline, practice, and execution</li>
            </ul>
          </div>

          <p className="mt-16 text-lg text-slate-700 text-center max-w-3xl mx-auto">
            We don’t just teach tools.
          </p>

          <p className="mt-4 text-lg font-medium text-center text-slate-900 max-w-3xl mx-auto">
            We build judgement.
          </p>
        </div>
      </section>

      {/* Areas We Work In */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">
            Areas We Work In
          </h2>

          <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-16">
            XWORKS is intentionally multi-disciplinary. Our programs span:
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 max-w-3xl mx-auto">
            <ul className="space-y-4 text-lg text-slate-700">
              <li>- AI & Emerging Technologies</li>
              <li>• Data & Analytics</li>
              <li>• Cybersecurity & Digital Trust</li>
              <li>• Business, Leadership & Strategy</li>
              <li>• Domain-specific capability tracks (custom)</li>
            </ul>
          </div>

          <p className="mt-16 text-lg text-slate-700 text-center max-w-3xl mx-auto">
            If it matters in the future of work — we build capability for it.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">
            Who We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center">
              <h3 className="font-semibold mb-3">Institutions</h3>
              <p className="text-slate-600 leading-relaxed">
                To help students become industry-ready with measurable capability progression.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center">
              <h3 className="font-semibold mb-3">Organizations</h3>
              <p className="text-slate-600 leading-relaxed">
                To build workforce readiness aligned to real job roles and business outcomes.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center">
              <h3 className="font-semibold mb-3">Individuals & Professionals</h3>
              <p className="text-slate-600 leading-relaxed">
                To accelerate growth with structured learning and execution practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-36 text-center">
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
            How Engagement Starts
          </h2>

          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Most engagements begin with a simple step:
          </p>

          <p className="mt-8 text-lg text-slate-700 max-w-3xl mx-auto">
            A short discovery conversation to understand your goals, audience, and desired outcomes — followed by a structured program recommendation.
          </p>

          <h3 className="mt-24 text-3xl font-semibold">
            XWORKS
          </h3>

          <p className="mt-4 text-lg text-slate-600">
            Capability Building. Delivered with Structure.
          </p>
        </div>
      </section>
      <div>
        <Footer/>
      </div>
    </div>
    </>
  );
};

export default XworksPage;
