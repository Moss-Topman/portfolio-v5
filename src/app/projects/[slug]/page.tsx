// app/projects/[slug]/page.tsx
"use client";

import React, { useState, useEffect, Suspense, useRef } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import VerticalThemeToggle from "./VerticalThemeToggle";

// Temporary projects data - MUST BE INCLUDED
const tempProjects = [
  {
    slug: 'trend-following-strategy',
    title: 'Trend Following Strategy',
    image: '/assets/trading-strategy-1.png',
    nextProject: 'trend-rider',
    coreLogic: [
      {
        phase: "Phase 1: Market Analysis",
        details: [
          "Analyze historical price data for identified trends",
          "Calculate 50-day and 200-day Exponential Moving Averages (EMA)",
          "Monitor Relative Strength Index (RSI) for overbought/oversold conditions"
        ]
      },
      {
        phase: "Phase 2: Signal Generation",
        details: [
          "Generate Buy signal when 50-day EMA crosses above 200-day EMA",
          "Generate Sell signal when 50-day EMA crosses below 200-day EMA",
          "Confirm signals with RSI below 30 (oversold) for Buy or above 70 (overbought) for Sell"
        ]
      },
      {
        phase: "Phase 3: Trade Execution",
        details: [
          "Execute trades only when both EMA crossover and RSI conditions are met",
          "Set stop-loss at 2% below entry for Buy, 2% above entry for Sell",
          "Take profit at 5% gain or when opposite signal is generated"
        ]
      }
    ]
  },
  {
    slug: 'trend-rider',
    title: 'Trend Rider',
    image: '/assets/trading-strategy-2.png',
    nextProject: 'trend-rider-v2',
    coreLogic: [
      {
        phase: "Phase 1: Market Analysis",
        details: [
          "Enhanced trend detection using machine learning",
          "Real-time market sentiment analysis",
          "Multi-timeframe confirmation"
        ]
      },
      {
        phase: "Phase 2: Signal Generation",
        details: [
          "AI-powered signal confirmation",
          "Risk-adjusted position sizing",
          "Dynamic stop-loss adjustment"
        ]
      }
    ]
  },
  {
    slug: 'trend-rider-v2',
    title: 'v2.2',
    image: '/assets/trading-strategy-3.png',
    nextProject: 'trend-following-strategy',
    coreLogic: [
      {
        phase: "Phase 1: Market Analysis",
        details: [
          "Advanced neural network predictions",
          "Sentiment analysis from social media",
          "Institutional order flow tracking"
        ]
      }
    ]
  }
];

interface Params {
  params: Promise<{ slug: string }>;
}

// Main component
export default function ProjectPage({ params }: Params) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

// Loading screen component
function LoadingScreen() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#252529] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500 mb-4"></div>
        <p className="text-gray-600 dark:text-gray-300">Loading project...</p>
      </div>
    </div>
  );
}

// Inner component that uses the hook
function ProjectContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  
  const project = tempProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = tempProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? tempProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < tempProjects.length - 1 ? tempProjects[currentIndex + 1] : null;

  // 🔥 FIXED CURSOR STATE: Using delta calculation instead of movementX/Y
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const lastUpdateTime = useRef<number>(0);

  // Manual Positioning Controls
  const manualControls = {
    // Back arrow positioning
    backArrow: {
      marginTop: "80px",
      marginBottom: "10px",
    },
    
    // Project title positioning (MAIN FOCAL POINT)
    title: {
      marginTop: "10px",
      marginBottom: "120px",
      lineHeight: "1.2",
      fontSize: "7xl",
    },
    
    // Breadcrumb positioning (SECONDARY NAVIGATION)
    breadcrumb: {
      marginTop: "30px",
      marginBottom: "100px",
    },
    
    // Project description positioning
    description: {
      marginTop: "0px",
      marginBottom: "60px",
      lineSpacing: "1px",
    },
    
    // Project image positioning
    image: {
      marginTop: "0px",
      marginBottom: "80px",
    },
    
    // Core logic section positioning
    coreLogic: {
      marginTop: "0px",
      sectionSpacing: "48px",
    },
    
    // Navigation arrows positioning
    navigation: {
      topPosition: "50%",
      sideOffset: "40px",
      arrowSize: "60px",
    },
    
    // Next project link positioning
    nextProject: {
      marginTop: "80px",
      paddingTop: "32px",
    }
  };

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 🔥 FIXED: Mouse movement tracking with delta calculation
  useEffect(() => {
    if (!isClient) return;
    
    const mouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      const timeSinceLastMove = currentTime - lastUpdateTime.current;
      
      // Store previous position to calculate delta
      const previousX = lastMousePosition.current.x || e.clientX;
      const previousY = lastMousePosition.current.y || e.clientY;
      
      // Calculate delta (change in position)
      const deltaX = e.clientX - previousX;
      const deltaY = e.clientY - previousY;
      
      // Update mouse position
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
      // Update dot position based on delta
      if (Math.abs(deltaX) > 0 || Math.abs(deltaY) > 0) {
        setDotPosition(prev => {
          const sensitivity = 1.5; // Adjust for more/less movement
          let newX = prev.x + deltaX * sensitivity;
          let newY = prev.y + deltaY * sensitivity;
          
          // Apply boundary (keep within circle)
          const maxDistance = 10;
          const distance = Math.sqrt(newX * newX + newY * newY);
          
          if (distance > maxDistance) {
            // Normalize to circle edge
            const angle = Math.atan2(newY, newX);
            newX = Math.cos(angle) * maxDistance;
            newY = Math.sin(angle) * maxDistance;
          }
          
          return { x: newX, y: newY };
        });
      }
      
      // Update last positions
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
      lastUpdateTime.current = currentTime;
    };
    
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isClient]);

  // 🔥 FIXED: Center return animation
  useEffect(() => {
    if (!isClient) return;
    
    const returnToCenter = () => {
      const currentTime = Date.now();
      const timeSinceLastMove = currentTime - lastUpdateTime.current;
      
      // If no movement for 100ms, start returning to center
      if (timeSinceLastMove > 100) {
        setDotPosition(prev => {
          const returnStrength = 0.15;
          const damping = 0.9;
          
          // Calculate distance from center
          const distance = Math.sqrt(prev.x * prev.x + prev.y * prev.y);
          
          if (distance < 0.1) {
            return { x: 0, y: 0 };
          }
          
          // Apply spring force towards center
          const springForceX = -prev.x * returnStrength;
          const springForceY = -prev.y * returnStrength;
          
          let newX = prev.x + springForceX;
          let newY = prev.y + springForceY;
          
          // Apply damping
          newX *= damping;
          newY *= damping;
          
          return { x: newX, y: newY };
        });
      }
      
      animationFrameRef.current = requestAnimationFrame(returnToCenter);
    };
    
    animationFrameRef.current = requestAnimationFrame(returnToCenter);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isClient]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#252529] text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      
      {/* 🔥 FIXED CURSOR: Proper movement in all directions */}
      {isClient && (
        <>
          <div
            className="cursor-circle fixed pointer-events-none z-40"
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
                  transform: `translate(${dotPosition.x}px, ${dotPosition.y}px)`,
                  transition: 'transform 0.1s ease-out',
                }}
              />
            </div>
          </div>
          
          <div className="fixed top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 z-30 origin-left" />
        </>
      )}

      {/* Vertical Theme Toggle */}
      <VerticalThemeToggle />
      
      {/* Header Navigation */}
      <header className="pt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Arrow Only - Positioned at top */}
          <div style={{ marginTop: manualControls.backArrow.marginTop, marginBottom: manualControls.backArrow.marginBottom }}>
            <Link 
              href="/" 
              className="inline-flex items-center p-4 -m-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group relative"
              id="back-arrow"
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="absolute left-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                Back
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Project Content */}
      <section className="pb-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 1. PRIMARY: BIG BOLD PROJECT TITLE (Main Focal Point) */}
          <h1 
            className={`text-${manualControls.title.fontSize} font-bold`}
            style={{
              marginTop: manualControls.title.marginTop,
              marginBottom: manualControls.title.marginBottom,
              lineHeight: manualControls.title.lineHeight
            }}
          >
            {slug === 'trend-following-strategy' ? (
              <>
                <span className="block">Trend Following</span>
                <span className="block">Strategy</span>
              </>
            ) : slug === 'trend-rider' ? (
              "Trend Rider"
            ) : (
              "v2.2"
            )}
          </h1>
          
          {/* 2. SECONDARY: BREADCRUMB NAVIGATION (Contextual Navigation) */}
          <nav 
            className="flex items-center space-x-3 text-lg text-gray-600 dark:text-gray-400"
            style={{
              marginTop: manualControls.breadcrumb.marginTop,
              marginBottom: manualControls.breadcrumb.marginBottom
            }}
          >
            <Link 
              href="/" 
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <span>&gt;</span>
            <Link 
              href="/#work" 
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <span>&gt;</span>
            <span className="text-gray-900 dark:text-white">
              {slug === 'trend-following-strategy' ? 'Trading Strategy' : 
               slug === 'trend-rider' ? 'Trend Rider' : 'v2.2'}
            </span>
          </nav>
          
          {/* Project Description */}
          <div 
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl"
            style={{
              marginTop: manualControls.description.marginTop,
              marginBottom: manualControls.description.marginBottom
            }}
          >
            <p style={{ marginBottom: manualControls.description.lineSpacing }}>Developed a trend-following trading strategy</p>
            <p style={{ marginBottom: manualControls.description.lineSpacing }}>that generates Buy and Sell signals</p>
            <p style={{ marginBottom: manualControls.description.lineSpacing }}>using EMA crossovers and RSI.</p>
            <p style={{ marginBottom: manualControls.description.lineSpacing }}>This system identifies market trends</p>
            <p>and executes trades based on confirmed momentum signals.</p>
          </div>
          
          {/* Project Image */}
          <div 
            className="rounded-[5px] overflow-hidden border border-gray-200 dark:border-gray-700"
            style={{
              marginTop: manualControls.image.marginTop,
              marginBottom: manualControls.image.marginBottom
            }}
          >
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Core Logic Section */}
          <div 
            className="space-y-12 max-w-4xl"
            style={{
              marginTop: manualControls.coreLogic.marginTop
            }}
          >
            <h2 className="text-3xl font-bold mb-8">Core Strategy Logic</h2>
            
            {project.coreLogic && project.coreLogic.map((phase, index) => (
              <div 
                key={index} 
                className="border-l-4 border-gray-900 dark:border-white pl-6 py-2"
                style={{
                  marginBottom: manualControls.coreLogic.sectionSpacing
                }}
              >
                <h3 className="text-2xl font-bold mb-4">{phase.phase}</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {phase.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="text-gray-900 dark:text-white mr-3">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Previous/Next Project Navigation */}
          {prevProject && (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="fixed left-0 transform -translate-y-1/2 z-30 group"
              style={{
                top: manualControls.navigation.topPosition,
                left: manualControls.navigation.sideOffset
              }}
            >
              <div className="flex items-center space-x-2 group-hover:space-x-4 transition-all duration-300">
                <svg 
                  className="transition-transform group-hover:scale-110 duration-300" 
                  width={manualControls.navigation.arrowSize} 
                  height={manualControls.navigation.arrowSize} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                  Previous
                </span>
              </div>
            </Link>
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="fixed right-0 transform -translate-y-1/2 z-30 group"
              style={{
                top: manualControls.navigation.topPosition,
                right: manualControls.navigation.sideOffset
              }}
            >
              <div className="flex items-center space-x-2 group-hover:space-x-4 transition-all duration-300">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                  Next
                </span>
                <svg 
                  className="transition-transform group-hover:scale-110 duration-300" 
                  width={manualControls.navigation.arrowSize} 
                  height={manualControls.navigation.arrowSize} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          )}

          {/* Next Project Navigation */}
          {nextProject && (
            <div 
              className="border-t border-gray-200 dark:border-gray-700 flex justify-between items-center"
              style={{
                marginTop: manualControls.nextProject.marginTop,
                paddingTop: manualControls.nextProject.paddingTop
              }}
            >
              <div></div>
              <Link 
                href={`/projects/${nextProject.slug}`}
                className="flex items-center space-x-4 text-lg hover:text-gray-700 dark:hover:text-gray-300 transition-colors group"
              >
                <span>Next Project</span>
                <div className="w-16 h-[2px] bg-gray-900 dark:bg-white group-hover:w-20 transition-all duration-300"></div>
                <span className="font-mono text-sm">
                  {nextProject.title}
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}