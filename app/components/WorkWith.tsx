"use client";

import React from "react";
import {
  GraduationCap,
  Building2,
  Brain,
  Handshake,
} from "lucide-react";

const WorkWith: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50 py-24 px-4 sm:px-6 lg:px-20">
      {/* Decorative background */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-24 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto text-center">
        <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full">
          Our Ecosystem
        </span>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
          Who We Work With
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600 mb-16">
          We collaborate with institutions and leaders shaping the future of
          education, employment, and skill intelligence.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <GlassCard
            icon={<GraduationCap className="w-6 h-6" />}
            title="Progressive Colleges"
            description="Institutions reimagining placement, outcomes, and real-world skill readiness."
            accent="indigo"
          />

          <GlassCard
            icon={<Building2 className="w-6 h-6" />}
            title="Future-Ready Businesses"
            description="Companies prioritizing capability, adaptability, and intelligence over resumes."
            accent="blue"
          />

          <GlassCard
            icon={<Brain className="w-6 h-6" />}
            title="Innovation-Driven Policymakers"
            description="Leaders designing scalable, skills-based workforce systems."
            accent="pink"
          />

          <GlassCard
            icon={<Handshake className="w-6 h-6" />}
            title="Strategic Partners"
            description="Collaborators building regional and national talent ecosystems."
            accent="yellow"
          />
        </div>

        {/* Vision box */}
        <div className="relative max-w-3xl mx-auto rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl p-10 shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">
            A Vision Beyond Logos
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We don’t just work with organizations — we collaborate with{" "}
            <strong>educators</strong>, <strong>business leaders</strong>, and{" "}
            <strong>ecosystem builders</strong> committed to transforming talent
            from the inside out.
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 mt-8">
          * References to being “first” or “pioneering” are based on CELTM Global
          Pvt Ltd’s internal research as of September 2025.
        </p>
      </div>
    </section>
  );
};

type GlassCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: "indigo" | "blue" | "pink" | "yellow";
};

const GlassCard: React.FC<GlassCardProps> = ({
  icon,
  title,
  description,
  accent,
}) => {
  const accentMap: Record<GlassCardProps["accent"], string> = {
    indigo: "from-indigo-500 to-indigo-600",
    blue: "from-blue-500 to-blue-600",
    pink: "from-pink-500 to-pink-600",
    yellow: "from-yellow-400 to-yellow-500",
  };

  return (
    <div className="group rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${accentMap[accent]} text-white mb-5 shadow-lg transition-transform group-hover:scale-105`}
      >
        {icon}
      </div>

      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h4>

      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default WorkWith;
