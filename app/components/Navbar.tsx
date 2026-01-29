"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, LogIn, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const scrollToCampusToCareer = () => {
  //   const element = document.getElementById('campus-to-career');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed w-full z-80 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-slate-200/50"
            : "bg-transparent"
        }`}
      >
        <div className=" mx-auto px-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <Image
                src="/images/CELTMLOGO.png"
                alt="CELTM Logo"
                width={158}
                height={40}
                className="h-25 w-50 object-contain"
                priority
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`relative transition-colors duration-300 group font-semibold text-base  ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link
                href="/model"
                className={`relative transition-colors duration-300 group font-semibold text-base  ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                The Model
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link
                href="/insideceltm"
                className={`relative transition-colors duration-300 group font-semibold text-base  ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Inside CELTM
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link
                href="/access"
                className={`relative transition-colors duration-300 group font-semibold text-base  ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Access
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link
                href="/contact"
                className={`relative transition-colors duration-300 group font-semibold text-base  ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Let's Talk
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* <button
                onClick={scrollToCampusToCareer}
                className={`cursor-pointer px-6 py-2 rounded-lg font-semibold text-base  transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isScrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-blue-600 hover:bg-blue-50"
                }`}
              >
                Get Started
              </button> */}
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    isScrolled ? "text-slate-700" : "text-slate-700"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    isScrolled ? "text-slate-700" : "text-slate-700"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-lg z-30 md:hidden">
          <div className="flex flex-col h-full pt-24 pb-8 px-6">
            {/* Navigation Links */}
            <div className="flex flex-col items-center justify-center flex-1 space-y-6">
              <Link
                href="/"
                className=" text-lg text-slate-800 hover:text-slate-900 transition-colors hover:scale-110 transform duration-300 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/model"
                className=" text-lg text-slate-800 hover:text-slate-900 transition-colors hover:scale-110 transform duration-300 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                The Model
              </Link>
              <Link
                href="/insideceltm"
                className=" text-lg text-slate-800 hover:text-slate-900 transition-colors hover:scale-110 transform duration-300 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Inside CELTM
              </Link>
              <Link
                href="/access"
                className=" text-lg text-slate-800 hover:text-slate-900 transition-colors hover:scale-110 transform duration-300 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Access
              </Link>
              <Link
                href="/contact"
                className=" text-lg text-slate-800 hover:text-slate-900 transition-colors hover:scale-110 transform duration-300 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
