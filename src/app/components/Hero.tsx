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

interface MousePosition {
  x: number;
  y: number;
}

interface DotOffset {
  x: number;
  y: number;
}

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [dotOffset, setDotOffset] = useState<DotOffset>({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const lastUpdateTime = useRef<number>(0);

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 🔥 ANALOG-STYLE MOUSE TRACKING
  useEffect(() => {
    if (!isClient) return;
    
    const mouseMove = (e: MouseEvent) => {
      const newMousePosition = {
        x: e.clientX,
        y: e.clientY
      };
      
      // Calculate velocity
      const deltaX = newMousePosition.x - lastMousePosition.current.x;
      const deltaY = newMousePosition.y - lastMousePosition.current.y;
      
      // Update velocity with smoothing
      setVelocity(prev => ({
        x: prev.x * 0.3 + deltaX * 0.7,
        y: prev.y * 0.3 + deltaY * 0.7
      }));
      
      setMousePosition(newMousePosition);
      lastMousePosition.current = newMousePosition;
      lastUpdateTime.current = Date.now();
    };
    
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isClient]);

  // 🔥 ANALOG PHYSICS ANIMATION LOOP
  useEffect(() => {
    if (!isClient) return;
    
    const updateDotPosition = () => {
      const currentTime = Date.now();
      const timeSinceLastMove = currentTime - lastUpdateTime.current;
      
      setDotOffset(prev => {
        let newX = prev.x;
        let newY = prev.y;
        
        // Apply velocity
        newX += velocity.x * 0.4;
        newY += velocity.y * 0.4;
        
        // Spring force pulling back to center
        const springStrength = 0.25;
        const damping = 0.82;
        
        // Calculate distance from center
        const distanceFromCenter = Math.sqrt(newX * newX + newY * newY);
        
        if (distanceFromCenter > 0) {
          // Spring force (stronger when further from center)
          const springForce = -newX * springStrength;
          const springForceY = -newY * springStrength;
          
          newX += springForce;
          newY += springForceY;
          
          // Apply damping
          newX *= damping;
          newY *= damping;
        }
        
        // Boundary constraints
        const maxDistance = 9;
        const newDistance = Math.sqrt(newX * newX + newY * newY);
        
        if (newDistance > maxDistance) {
          const angle = Math.atan2(newY, newX);
          newX = Math.cos(angle) * maxDistance;
          newY = Math.sin(angle) * maxDistance;
        }
        
        // Snap to center if idle and close
        if (timeSinceLastMove > 300 && newDistance < 0.3) {
          return { x: 0, y: 0 };
        }
        
        // Decay velocity
        setVelocity(prev => ({
          x: prev.x * 0.88,
          y: prev.y * 0.88
        }));
        
        return { x: newX, y: newY };
      });
      
      animationFrameRef.current = requestAnimationFrame(updateDotPosition);
    };
    
    animationFrameRef.current = requestAnimationFrame(updateDotPosition);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isClient, velocity]);

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
      className="relative h-screen flex items-center justify-center overflow-hidden cursor-none"
    >
      {/* 🔥 ANALOG-STYLE CURSOR */}
      {isClient && (
        <div
          className="cursor-circle fixed pointer-events-none z-50"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div 
            className="border border-purple-400/70 rounded-full relative"
            style={{
              width: '25px',
              height: '25px',
            }}
          >
            <div
              className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(${dotOffset.x}px, ${dotOffset.y}px)`,
                transition: 'transform 0.05s linear',
              }}
            />
          </div>
        </div>
      )}

      {/* Rest of your hero section remains exactly the same... */}
      {/* Parallax Background Layer */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(rgba(26, 25, 29, 0.3), rgba(26, 25, 29, 0.3)), linear-gradient(to bottom, transparent 60%, #1A191D 100%), url('/assets/hero-poster.jpg')`,
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

      {/* Bottom gradient */}
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
          className="text-white-400 text-center mb-6 text-sm tracking-widest uppercase translate-y-12"
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
          className="mt-12 translate-y-16"
          variants={itemVariants}
        >
          <motion.p
            className="text-xl md:text-2xl text-white mt-2 font-semibold font-['Poppins'] uppercase translate-y-2"
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
                className="text-gray-400 text-lg font-semibold hover:text-white transition-colors"
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

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-40 ${
          showScrollIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="w-6 h-10 border border-gray-400 rounded-full flex justify-center items-start pt-2 cursor-pointer"
          animate={{
            borderColor: ["rgb(156 163 175)", "rgb(192 132 252)", "rgb(156 163 175)"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.1,
            borderColor: "rgb(192 132 252)",
            transition: { type: "spring", stiffness: 400 }
          }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full"
            animate={{
              y: [0, 12, 0],
              backgroundColor: ["rgb(156 163 175)", "rgb(192 132 252)", "rgb(156 163 175)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        <motion.span
          className="text-gray-400 text-xs tracking-widest cursor-pointer"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ color: "rgb(192 132 252)" }}
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