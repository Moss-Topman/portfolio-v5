"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring, type Variants } from "framer-motion";

// Define blur data URL for image placeholder
const blurDataURL = "data:image/webp;base64,UklGRkIAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABABAJ0BKgEAAQADADQlpAADcAD+/gbQAA==";

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Scroll tracking - useMemo for optimization
  useEffect(() => {
    if (!isClient) return;
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    
    // Throttle scroll handler
    let timeoutId: NodeJS.Timeout;
    const throttledScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = undefined as any;
        }, 100);
      }
    };
    
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isClient]);

  // Scroll to next section
  const scrollToNextSection = useMemo(() => () => {
    const nextSection = document.getElementById('expertise');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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

  // Parallax layers moving at different speeds - memoized
  const [backgroundY, foregroundY, contentY, opacity] = useMemo(() => [
    useTransform(smoothScrollY, [0, 1], [0, 100]),
    useTransform(smoothScrollY, [0, 1], [0, 50]),
    useTransform(smoothScrollY, [0, 1], [0, 25]),
    useTransform(smoothScrollY, [0, 0.5], [1, 0])
  ], [smoothScrollY]);

  // Animation variants for smooth reveal
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30
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

  // Memoize the social links array
  const socialLinks = useMemo(() => [
    { name: "GitHub", href: "https://github.com/Moss-Topman" },
    { name: "Dev.to", href: "https://dev.to/moss_victor_afbfaf0f371c9" },
    { name: "Dev.to", href: "https://dev.to/moss_victor_afbfaf0f371c9" },
    { name: "Medium", href: "https://medium.com/@mossvictor600" }
  ], []);

  // Memoize the title words array
  const titleWords = useMemo(() => [
    "SOFTWARE", "ENGINEER,", "AI", "PROMPT", "ENGINEER", "&", "FRONT", "END"
  ], []);

  return (
    <motion.section
      ref={heroRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Optimized Hero Image with gradients */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: foregroundY }}
      >
        <Image
          src="/assets/hero-poster.webp"  // Changed to webp
          alt="Hero background"
          fill
          priority
          className="object-cover"
          quality={85}  // Reduced from 100
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A191D]/60 to-[#1A191D]" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#252529] to-transparent" />
      </motion.div>

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
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-wider text-white translate-y-8"
          variants={itemVariants}
        >
          Moss Victor
        </motion.h1>
      
        <motion.p
          className="text-gray-400 text-center mb-6 text-xs sm:text-sm tracking-widest uppercase px-2"
          variants={itemVariants}
        >
          {titleWords.map((word, index) => (
            <motion.span 
              key={index}
              className="mr-2 sm:mr-4 last:mr-0 inline-block"
              whileHover={{ scale: 1.05 }}
              aria-label={word === "SOFTWARE" ? "Software Engineer" : word}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          className="mt-8 sm:mt-12 translate-y-12 sm:translate-y-16 group"
          variants={itemVariants}
        >
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white mt-2 font-semibold font-poppins uppercase translate-y-2 opacity-30 group-hover:opacity-100 transition-opacity duration-200"
          >
            <span className="mr-2 sm:mr-4">AS</span>
            <span className="mr-2 sm:mr-4">FEATURED</span>
            <span className="mr-2 sm:mr-4">IN</span>
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 sm:space-x-12 mt-4 sm:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          >
            {socialLinks.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm sm:text-lg font-semibold hover:text-white transition-colors opacity-30 group-hover:opacity-100 transition-opacity duration-200"
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
                aria-label={`Visit ${item.name}`}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-40 ${
          showScrollIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      >
        <motion.button
          type="button"
          onClick={scrollToNextSection}
          className="w-10 h-14 border border-gray-400 rounded-full flex items-center justify-center px-2 cursor-pointer bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
          animate={{ borderColor: ["rgb(156 163 175)", "rgb(56 189 248)", "rgb(156 163 175)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Scroll down to expertise section"
        >
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
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </motion.svg>
        </motion.button>

        <motion.button
          type="button"
          className="text-gray-400 text-xs tracking-widest cursor-pointer focus:outline-none hover:text-purple-300"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={scrollToNextSection}
          aria-label="Scroll down"
        >
          Scroll
        </motion.button>
      </motion.div>

      {/* Progress Bar - only show on client */}
      {isClient && (
        <motion.div
          className="fixed top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
      )}

      {/* Subtle floating elements - optimized with fewer elements */}
      <motion.div
        className="absolute top-20 left-4 sm:left-20 w-1 h-1 sm:w-2 sm:h-2 bg-purple-400/20 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-40 right-4 sm:right-32 w-1 h-1 bg-green-400/10 rounded-full"
        animate={{
          y: [0, 8, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        aria-hidden="true"
      />
    </motion.section>
  );
}