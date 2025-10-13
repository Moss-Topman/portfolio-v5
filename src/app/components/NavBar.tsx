"use client"; // Client component for state

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const menuItems = [
    { label: "// home", href: "#home" },
    { label: "// expertise", href: "#expertise" },
    { label: "// work", href: "#work" },
    { label: "// experience", href: "#experience" },
    { label: "// contact", href: "#contact" },
  ];

  return (
    <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              MOSS VICTOR<span className="text-orange-500">.</span>_
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-orange-500 transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="text-gray-400 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon - use SVG or Tailwind */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#001022]/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)} // Close on click
                className="block px-3 py-2 text-base font-bold text-gray-400 hover:text-orange-500 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}