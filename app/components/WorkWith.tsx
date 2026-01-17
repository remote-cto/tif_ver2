"use client";

import React from "react";
import { GraduationCap, Building2, Brain, Handshake } from "lucide-react";

const WorkWith: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight font-['InterBold']">
          Who We Work With
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600 mb-14 font-['Inter']">
          We collaborate with forward-thinking institutions and leaders shaping
          the future of education, employment, and skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card
            icon={<GraduationCap className="w-6 h-6 text-indigo-600" />}
            title="Progressive Colleges"
            description="Redefining placement and skill-readiness through future-forward academic models."
          />
          <Card
            icon={<Building2 className="w-6 h-6 text-blue-600" />}
            title="Future-Ready Businesses"
            description="Organizations that prioritize intelligent hiring over resumes and test scores."
          />
          <Card
            icon={<Brain className="w-6 h-6 text-pink-600" />}
            title="Innovation-Driven Policymakers"
            description="Leaders enabling systemic change through scalable, skills-based interventions."
          />
          <Card
            icon={<Handshake className="w-6 h-6 text-yellow-600" />}
            title="Strategic Partners"
            description="Collaborators building regional and national talent ecosystems with us."
          />
        </div>

        <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4 font-['Inter']">
            A Vision Beyond Logos
          </h3>
          <p className="text-gray-700 text-base leading-relaxed font-['Inter']">
            We don’t just work with clients — we collaborate with{" "}
            <strong>educators</strong>, <strong>business leaders</strong>, and{" "}
            <strong>ecosystem builders</strong> who believe in transforming
            talent from the inside out.
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 mt-6 font-['Inter']">
          * References to being “first” or “pioneering” are based on CELTM
          Global Pvt Ltd’s internal research as of September 2025 and are not
          certified by any third party.
        </p>
      </div>
    </section>
  );
};

const Card: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
    <div className="flex items-center gap-3 mb-3">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 group-hover:bg-indigo-50 transition">
        {icon}
      </div>
      <h4 className="font-semibold text-gray-900 font-['Inter']">{title}</h4>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed font-['Inter']">
      {description}
    </p>
  </div>
);

export default WorkWith;
