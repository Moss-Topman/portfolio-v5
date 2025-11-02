"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const svgMask = encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' preserveAspectRatio='none'>
    <defs>
      <linearGradient id='fade' x1='0' x2='0' y1='0' y2='1'>
        <stop offset='55%' stop-color='white' />
        <stop offset='85%' stop-color='black' />
      </linearGradient>
    </defs>
    <rect width='100' height='100' fill='url(#fade)'/>
  </svg>
`);

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide scroll indicator when user starts scrolling
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(rgba(26, 25, 29, 0.3), rgba(26, 25, 29, 0.3)), linear-gradient(to bottom, transparent 60%, #1A191D 100%), url('/assets/hero-poster.jpg')`,
          backgroundSize: 'cover, cover, cover',
          backgroundPosition: 'center, center, center',
          backgroundBlendMode: 'normal, normal, normal',
        }}
      />

      {/* Hero image */}
      <Image
        src="/assets/hero-poster.jpg"
        alt="Hero background"
        fill
        priority
        unoptimized
        className="object-cover"
        quality={100}
        sizes="100vw"
      />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#252529] to-transparent" />

      {/* Content wrapper */}
      <div className="relative z-10 text-center px-4">
        {/* Optional content */}
      </div>

      {/* Hero content - moved upward */}
      <div className="relative z-20 text-center px-4 -translate-y-12">
        {/* MOSS VICTOR moved upward */}
        <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-wider text-white -translate-y-4">
          Moss Victor
        </h1>
        
        {/* Subtitle also moved upward */}
        <p className="text-xl md:text-2xl text-white mt-2 font-semibold font-['Poppins'] uppercase -translate-y-2">
          <span className="mr-4">SOFTWARE</span>
          <span className="mr-4">ENGINEER,</span>
          <span className="mr-4">AI</span>
          <span className="mr-4">PROMPT</span>
          <span className="mr-4">ENGINEER</span>
          <span className="mr-4">&</span>
          <span className="mr-4">FRONT</span>
          <span>END</span>
        </p>
      </div>

      {/* As featured in - added at bottom before scroll indicator */}
      <div className="mt-12">
        <p className="text-gray-400 text-center mb-6 text-sm tracking-widest uppercase">
          As featured in
        </p>
        <div className="flex justify-center items-center space-x-12">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 text-lg font-semibold hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://dev.to/yourusername" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 text-lg font-semibold hover:text-white transition-colors">
            Dev.to
          </a>
          <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 text-lg font-semibold hover:text-white transition-colors">
            Medium
          </a>
        </div>
      </div>

      {/* Scroll indicator - moved to hero bottom with fade effect */}
      <div 
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-40 transition-all duration-500 ${
          showScrollIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-[30px] h-[50px] border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
        <span className="text-gray-400 text-sm tracking-widest">Scroll</span>
      </div>

      {/* Manual blend edge */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-30"
        style={{
          background: 'linear-gradient(to bottom, rgba(37, 38, 41, 0) 0%, var(--hero-cut-color, #252629) 100%)',
        }}
      />
    </section>
  );
}