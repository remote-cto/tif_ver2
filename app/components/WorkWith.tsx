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
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50 py-16 px-4 sm:px-6 lg:px-16">
      {/* Decorative background (subtle) */}
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-16 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-100 rounded-full">
            Our Ecosystem
          </span>

          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Who We Work With
          </h1>

          <p className="mt-4 text-gray-600">
            We collaborate with institutions and leaders shaping the future of
            education, employment, and skill intelligence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <GlassCard
            icon={<GraduationCap className="w-5 h-5" />}
            title="Progressive Colleges"
            description="Institutions reimagining placement, outcomes, and real-world skill readiness."
            accent="indigo"
          />

          <GlassCard
            icon={<Building2 className="w-5 h-5" />}
            title="Future-Ready Businesses"
            description="Organizations prioritizing capability, adaptability, and intelligence."
            accent="blue"
          />

          <GlassCard
            icon={<Brain className="w-5 h-5" />}
            title="Innovation-Driven Policymakers"
            description="Leaders enabling scalable, skills-based workforce systems."
            accent="pink"
          />

          <GlassCard
            icon={<Handshake className="w-5 h-5" />}
            title="Strategic Partners"
            description="Collaborators building regional and national talent ecosystems."
            accent="yellow"
          />
        </div>

        {/* Vision Box */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-white/40 bg-white/70 backdrop-blur-xl px-8 py-6 shadow-sm text-center">
          <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-3">
            A Vision Beyond Logos
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            We don’t just work with organizations — we collaborate with{" "}
            <strong>educators</strong>, <strong>business leaders</strong>, and{" "}
            <strong>ecosystem builders</strong> who believe in transforming
            talent from the inside out.
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center mt-6">
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
    <div className="group rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      {/* Icon + Title Row */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${accentMap[accent]} text-white shadow-sm`}
        >
          {icon}
        </div>

        <h4 className="text-base font-semibold text-gray-900">
          {title}
        </h4>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default WorkWith;
