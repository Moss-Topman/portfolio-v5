"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { LazyMotion, domAnimation, m, useScroll, useTransform, useSpring } from "framer-motion";

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY <= 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  const scrollToNextSection = () => {
    document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
  };

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const foregroundY = useTransform(smoothScrollY, [0, 1], [0, 50]);
  const contentY = useTransform(smoothScrollY, [0, 1], [0, 25]);

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={heroRef}
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* LAYER 1 — Hero image */}
        {!isClient ? (
          <div className="absolute inset-0 z-0 will-change-transform">
            <Image
              src="/assets/hero-poster.webp"
              alt="Hero background"
              fill
              priority
              quality={85}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ) : (
          <m.div className="absolute inset-0 z-0 will-change-transform" style={{ y: foregroundY }}>
            <Image
              src="/assets/hero-poster.webp"
              alt="Hero background"
              fill
              priority
              quality={85}
              className="object-cover"
              sizes="100vw"
            />
          </m.div>
        )}

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#252529] to-transparent z-10" />

        {/* LAYER 2 — Text content */}
        <div
          ref={containerRef}
          className="relative z-20 text-center px-4 -translate-y-12"
        >
          <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-wider text-white translate-y-8">
            Moss Victor
          </h1>

          <p className="text-gray-400 text-center mb-6 text-sm tracking-widest uppercase">
            SOFTWARE ENGINEER, AI PROMPT ENGINEER & FRONT END
          </p>

          <div className="mt-12 translate-y-16 group hero-content-enter">
            <p className="text-xl md:text-2xl text-white mt-2 font-semibold font-['Poppins'] uppercase translate-y-2 opacity-30 group-hover:opacity-100 transition-opacity duration-200">
              <span className="mr-4">AS</span>
              <span className="mr-4">FEATURED</span>
              <span className="mr-4">IN</span>
            </p>
            <div className="flex justify-center items-center space-x-12 mt-6">
              {[
                { name: "GitHub", href: "https://github.com/Moss-Topman", delay: "hero-fade-up-delay-1" },
                { name: "Dev.to", href: "https://dev.to/moss_victor_afbfaf0f371c9", delay: "hero-fade-up-delay-2" },
                { name: "Medium", href: "https://medium.com/@mossvictor600", delay: "hero-fade-up-delay-3" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 text-lg font-semibold hover:text-white hover:scale-105 transition-all duration-200 opacity-30 group-hover:opacity-100 ${item.delay}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-40 transition-opacity duration-300 hero-fade-up ${
            showScrollIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <button
            onClick={scrollToNextSection}
            className="hero-border-pulse w-10 h-14 border border-gray-400 rounded-full flex items-center justify-center px-2 cursor-pointer bg-transparent hover:scale-105 transition-transform duration-200"
            aria-label="Scroll down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hero-arrow-bounce"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </button>
          <span
            onClick={scrollToNextSection}
            className="hero-pulse text-gray-400 text-xs tracking-widest cursor-pointer hover:text-purple-400 transition-colors duration-200"
          >
            Scroll
          </span>
        </div>

        {/* Progress bar */}
        {isClient && (
          <m.div
            className="fixed top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 z-50 origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        )}

        {/* Blend edge */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-30"
          style={{
            background: 'linear-gradient(to bottom, rgba(37, 38, 41, 0) 0%, var(--hero-cut-color, #252629) 100%)',
          }}
        />

        {/* Floating dots */}
        <div className="hero-float-up absolute top-20 left-20 w-2 h-2 bg-purple-400/30 rounded-full" />
        <div className="hero-float-down absolute bottom-40 right-32 w-1 h-1 bg-green-400/20 rounded-full" />
      </section>
    </LazyMotion>
  );
}