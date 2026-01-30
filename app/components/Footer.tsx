"use client";

import Image from "next/image";
import React, { useState } from "react";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import RefundAndCancellationPolicy from "./RefundAndCancellationPolicy";
import DataPolicy from "./DataPolicy";
import CodeOfConduct from "./CodeOfConduct";
import { Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  const [isDataPolicyModalOpen, setIsDataPolicyModalOpen] = useState(false);
  const [isConductModalOpen, setIsConductModalOpen] = useState(false);

  return (
    <>
      <footer className={`bg-white px-4 ${className}`}>
        <div className="max-w-7xl mx-auto py-8">
          {/* ================= TOP SECTION ================= */}
          <div className="flex flex-col gap-6">
            {/* Logo + Social Icons (Straight Line) */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/CELTMLOGO.png"
                alt="CELTM Logo"
                width={160}
                height={60}
                priority
              />

              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/celtm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 hover:text-blue-600" />
                </a>

                <a
                  href="https://www.youtube.com/@CELTM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-gray-700 hover:text-red-600" />
                </a>
              </div>
            </div>

            {/* Contact Info (Left aligned below CELTM) */}
            <div className="text-sm text-gray-600 space-y-2 max-w-xl">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 966-251-2899</span>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:team@celtm.com"
                  className="hover:text-gray-900 transition"
                >
                  team@celtm.com
                </a>
              </p>

              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  E-704, Titanium City Center, Nr Income Tax Office, Satellite,
                  Ahmedabad – 380015
                </span>
              </p>
            </div>

            {/* Policy Links (Inline as before) */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="hover:text-gray-900"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setIsTermsModalOpen(true)}
                className="hover:text-gray-900"
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => setIsRefundModalOpen(true)}
                className="hover:text-gray-900"
              >
                Refund & Cancellation Policy
              </button>
              <button
                onClick={() => setIsDataPolicyModalOpen(true)}
                className="hover:text-gray-900"
              >
                Data Policy
              </button>
              <button
                onClick={() => setIsConductModalOpen(true)}
                className="hover:text-gray-900"
              >
                Code of Conduct
              </button>
            </div>
          </div>

          {/* ================= BOTTOM SECTION ================= */}
          <div className="border-t border-gray-200 mt-8 pt-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 gap-2">
              <p>© 2026 CELTM</p>
              <p>All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= MODALS ================= */}
      <TermsAndConditions
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
      <PrivacyPolicy
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
      <RefundAndCancellationPolicy
        isOpen={isRefundModalOpen}
        onClose={() => setIsRefundModalOpen(false)}
      />
      <DataPolicy
        isOpen={isDataPolicyModalOpen}
        onClose={() => setIsDataPolicyModalOpen(false)}
      />
      <CodeOfConduct
        isOpen={isConductModalOpen}
        onClose={() => setIsConductModalOpen(false)}
      />
    </>
  );
};

export default Footer;
