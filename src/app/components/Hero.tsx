"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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
  const [isClient, setIsClient] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Scroll tracking
  useEffect(() => {
    if (!isClient) return;
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  // Scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('expertise');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring-based transforms for fluid motion
  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax layers moving at different speeds
  const backgroundY = useTransform(smoothScrollY, [0, 1], [0, 100]);
  const foregroundY = useTransform(smoothScrollY, [0, 1], [0, 50]);
  const contentY = useTransform(smoothScrollY, [0, 1], [0, 25]);
  const opacity = useTransform(smoothScrollY, [0, 0.5], [1, 0]);

  // Animation variants for smooth reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
        duration: 0.8
      }
    }
  };

  return (
    <motion.section
      ref={heroRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Rest of your hero section remains exactly the same... */}
      {/* Parallax Background Layer */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(rgba(26, 25, 29, 0.3), rgba(26, 25, 29, 0.3)), linear-gradient(to bottom, transparent 60%, #252529 100%), url('/assets/hero-poster.jpg')`,
            backgroundSize: 'cover, cover, cover',
            backgroundPosition: 'center, center, center',
            backgroundBlendMode: 'normal, normal, normal',
          }}
        />
      </motion.div>

      {/* Hero image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: foregroundY }}
      >
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
      </motion.div>

      {/* Bottom gradient overlay fading into the Expertise section color (#252529) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#252529] to-transparent z-10" />

      {/* Main Content */}
      <motion.div
        ref={containerRef}
        className="relative z-20 text-center px-4 -translate-y-12"
        style={{ y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-9xl font-bold uppercase tracking-wider text-white translate-y-8"
          variants={itemVariants}
        >
          Moss Victor
        </motion.h1>
      
        <motion.p
          className="text-gray-400 text-center mb-6 text-sm tracking-widest uppercase"
          variants={itemVariants}
        >
          <motion.span className="mr-4" whileHover={{ scale: 1.05 }}>SOFTWARE</motion.span>
          <motion.span className="mr-4" whileHover={{ scale: 1.05 }}>ENGINEER,</motion.span>
          <motion.span className="mr-4" whileHover={{ scale: 1.05 }}>AI</motion.span>
          <motion.span className="mr-4" whileHover={{ scale: 1.05 }}>PROMPT</motion.span>
          <motion.span className="mr-4" whileHover={{ scale: 1.05 }}>ENGINEER</motion.span>
          <motion.span className="mr-4" whileHover={{ scale: 1.05 }}>&</motion.span>
          <motion.span className="mr-4" whileHover={{ scale: 1.05 }}>FRONT</motion.span>
          <motion.span whileHover={{ scale: 1.05 }}>END</motion.span>
        </motion.p>

        <motion.div
          className="mt-12 translate-y-16 group"
          variants={itemVariants}
        >
          <motion.p
            className="text-xl md:text-2xl text-white mt-2 font-semibold font-['Poppins'] uppercase translate-y-2 opacity-30 group-hover:opacity-100 transition-opacity duration-200"
          >
            <span className="mr-4">AS</span>
            <span className="mr-4">FEATURED</span>
            <span className="mr-4">IN</span>
          </motion.p>
          <motion.div
            className="flex justify-center items-center space-x-12 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          >
            {[
              { name: "GitHub", href: "https://github.com/Moss-Topman" },
              { name: "Dev.to", href: "https://dev.to/moss_victor_afbfaf0f371c9" },
              { name: "Medium", href: "https://medium.com/@mossvictor600" }
            ].map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-lg font-semibold hover:text-white transition-colors opacity-30 group-hover:opacity-100 transition-opacity duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1 + index * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator - static in hero section only */}
      <motion.div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-40 ${
          showScrollIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      >
        {/* Old structure: rounded tall container holding the two redesigned elements */}
        <motion.div
          role="button"
          onClick={scrollToNextSection}
          className="w-10 h-14 border border-gray-400 rounded-full flex items-center justify-center px-2 cursor-pointer bg-transparent"
          animate={{ borderColor: ["rgb(156 163 175)", "rgb(56 189 248)", "rgb(156 163 175)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Scroll down"
        >
          {/* Centered arrow only (no left cyan dot, no white oval) */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-600"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </motion.svg>
        </motion.div>

        {/* Scroll label under the indicator (old structure) */}
        <motion.span
          className="text-gray-400 text-xs tracking-widest cursor-pointer"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ color: "rgb(192 132 252)" }}
          onClick={scrollToNextSection}
        >
          Scroll
        </motion.span>
      </motion.div>

      {/* Progress Bar */}
      {isClient && (
        <motion.div
          className="fixed top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      )}

      {/* Manual blend edge */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-30"
        style={{
          background: 'linear-gradient(to bottom, rgba(37, 38, 41, 0) 0%, var(--hero-cut-color, #252629) 100%)',
        }}
      />

      {/* Subtle floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-2 h-2 bg-purple-400/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0
        }}
      />
      <motion.div
        className="absolute bottom-40 right-32 w-1 h-1 bg-green-400/20 rounded-full"
        animate={{
          y: [0, 15, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.section>
  );
}