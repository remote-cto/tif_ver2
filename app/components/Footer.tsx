// /components/Footer.tsx
"use client";
import Image from "next/image";
import React, { useState } from "react";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import RefundAndCancellationPolicy from "./RefundAndCancellationPolicy";
import DataPolicy from "./DataPolicy";
import CodeOfConduct from "./CodeOfConduct";
import { Link, Linkedin, Mail, Youtube } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  const [isDataPolicyModalOpen, setIsDataPolicyModalOpen] = useState(false);

  const [isConductModalOpen, setIsConductModalOpen] = useState(false);

  const openTermsModal = () => setIsTermsModalOpen(true);
  const closeTermsModal = () => setIsTermsModalOpen(false);

  const openPrivacyModal = () => setIsPrivacyModalOpen(true);
  const closePrivacyModal = () => setIsPrivacyModalOpen(false);

  const openRefundModal = () => setIsRefundModalOpen(true);
  const closeRefundModal = () => setIsRefundModalOpen(false);

  const openDataPolicyModal = () => setIsDataPolicyModalOpen(true);
  const closeDataPolicyModal = () => setIsDataPolicyModalOpen(false);

  const openConductModal = () => setIsConductModalOpen(true);
  const closeConductModal = () => setIsConductModalOpen(false);

  return (
    <>
      <footer className={`bg-white px-4 ${className}`}>
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            {/* LEFT: Logo + Policy Links */}
            <div className="flex flex-col items-start">
              {/* Logo */}
              <Image
                src="/images/CELTMLOGO.png"
                alt="CELTM Logo"
                width={168}
                height={168}
              />

              {/* Policy Links under logo */}
              <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-3 text-sm">
                <button
                  onClick={openPrivacyModal}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={openTermsModal}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  Terms & Conditions
                </button>
                <button
                  onClick={openRefundModal}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  Refund & Cancellation Policy
                </button>
                <button
                  onClick={openDataPolicyModal}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  Data Policy
                </button>
                <button
                  onClick={openConductModal}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  Code of Conduct
                </button>
              </div>
            </div>

            {/* RIGHT: Social + Contact Info */}
            <div className="flex flex-col items-start lg:items-end gap-4">
              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/celtm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-gray-300 hover:bg-gray-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 hover:text-blue-600" />
                </a>

                <a
                  href="https://www.youtube.com/@CELTM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-gray-300 hover:bg-gray-400"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-gray-700 hover:text-red-600" />
                </a>
              </div>

              {/* Contact Info */}
              <div className="text-sm text-gray-600 space-y-1 text-left lg:text-right">
                <p>📞 +91 966-251-2899</p>
                <p>
                  ✉️{" "}
                  <a
                    href="mailto:team@celtm.com"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    team@celtm.com
                  </a>
                </p>

                <p>📍 E-704, Titanium City Center, Nr Income Tax office, Satellite, Ahmedabad - 380015</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-8 pt-4 mb-4">
            <p className="text-center text-sm text-gray-600">
              © 2026 CELTM, All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <TermsAndConditions isOpen={isTermsModalOpen} onClose={closeTermsModal} />
      <PrivacyPolicy isOpen={isPrivacyModalOpen} onClose={closePrivacyModal} />
      <RefundAndCancellationPolicy
        isOpen={isRefundModalOpen}
        onClose={closeRefundModal}
      />
      <DataPolicy
        isOpen={isDataPolicyModalOpen}
        onClose={closeDataPolicyModal}
      />

      <CodeOfConduct isOpen={isConductModalOpen} onClose={closeConductModal} />
    </>
  );
};

export default Footer;
