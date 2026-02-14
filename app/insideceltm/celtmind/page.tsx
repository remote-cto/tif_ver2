"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import React from "react";

const CeltMindPage = () => {
    const router = useRouter();
  return (
    <>
    <Navbar/>
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
            CELTMind™
          </h1>

          <h2 className="mt-8 text-2xl md:text-3xl font-medium text-slate-600">
            The Cognitive Intelligence Layer for Capability Systems
          </h2>

          <h3 className="mt-10 text-xl md:text-2xl font-semibold text-slate-900">
            Beyond Information. Toward Intelligence.
          </h3>

          <p className="mt-12 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            In a world flooded with content, the real differentiator is not access to knowledge —
          </p>

          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            it is structured cognition.
          </p>

          <p className="mt-10 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            CELTMind™ is an intelligent capability engine designed to support learning, decision-making, and execution across disciplines.
          </p>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            It does not merely generate responses.
          </p>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            It structures understanding.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">
            Why CELTMind™ Exists
          </h2>

          <div className="space-y-8 text-lg text-slate-700 max-w-3xl mx-auto text-center">
            <p>Traditional learning systems focus on content delivery.</p>
            <p>Modern AI tools focus on prompt-response automation.</p>
            <p>
              Neither ensures structured thinking, contextual depth, or deployment readiness.
            </p>
            <p>
              CELTMind™ bridges this gap by embedding cognitive intelligence into capability systems.
            </p>
            <p>It is built to:</p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 md:col-span-2">
              <ul className="space-y-4 text-lg text-slate-700">
                <li>- Enhance reasoning</li>
                <li>• Structure problem-solving</li>
                <li>• Support domain-specific learning</li>
                <li>• Strengthen applied decision logic</li>
                <li>• Align understanding to real-world execution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">
            What CELTMind™ Does
          </h2>

          <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-16">
            CELTMind™ functions as an intelligent layer within capability ecosystems.
          </p>

          <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-16">
            It enables:
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Contextual Learning Intelligence",
                text: "Transforms static content into interactive reasoning flows.",
              },
              {
                title: "Structured Thinking Support",
                text: "Guides users through logical frameworks rather than giving isolated answers.",
              },
              {
                title: "Domain-Aware Interpretation",
                text: "Adapts to discipline-specific knowledge environments.",
              },
              {
                title: "Execution-Oriented Assistance",
                text: "Supports deployment-level thinking, not just theoretical inquiry.",
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

          <p className="mt-16 text-center text-lg text-slate-700 max-w-3xl mx-auto">
            It augments human capability — it does not replace it.
          </p>
        </div>
      </section>

      {/* Designed Section */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">
            Designed for Institutions & Enterprises
          </h2>

          <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-16">
            CELTMind™ integrates into:
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 max-w-3xl mx-auto">
            <ul className="space-y-4 text-lg text-slate-700">
              <li>- Academic programs</li>
              <li>• Corporate upskilling initiatives</li>
              <li>• Capability assessment systems</li>
              <li>• Industry-aligned training environments</li>
            </ul>
          </div>

          <p className="mt-16 text-lg text-slate-700 text-center max-w-3xl mx-auto">
            It strengthens how individuals process, apply, and operationalize knowledge.
          </p>
        </div>
      </section>

      {/* Architecture Philosophy */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">
            Architecture Philosophy
          </h2>

          <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-16">
            CELTMind™ is built on three foundational principles:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center font-medium">
              1. Cognitive Structure over Content Volume
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center font-medium">
              2. Execution Intelligence over Information Retrieval
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center font-medium">
              3. Capability Augmentation over Automation Dependence
            </div>
          </div>

          <p className="mt-16 text-lg text-slate-700 text-center max-w-3xl mx-auto">
            It aligns seamlessly with CELTM’s broader capability infrastructure model — assess, build, calibrate, and align.
          </p>
        </div>
      </section>

      {/* Strategic Advantage */}
      <section>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-36 text-center">
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
            The Strategic Advantage
          </h2>

          <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-12">
            Organizations and institutions that deploy cognitive intelligence layers will:
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
            <ul className="space-y-4 text-lg text-slate-700">
              <li>- Accelerate applied learning</li>
              <li>• Improve reasoning quality</li>
              <li>• Reduce capability gaps</li>
              <li>• Increase execution confidence</li>
            </ul>
          </div>

          <p className="mt-20 text-xl font-semibold max-w-3xl mx-auto">
            The future belongs not to those who access AI —
          </p>

          <p className="mt-4 text-xl font-semibold max-w-3xl mx-auto">
            but to those who structure intelligence.
          </p>

          <h3 className="mt-24 text-3xl font-semibold">
            CELTMind™
          </h3>

          <p className="mt-4 text-lg text-slate-600">
            Cognitive Infrastructure for the Capability Era.
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

export default CeltMindPage;
