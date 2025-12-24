import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Link from 'next/link';
import ContactForm from "./components/ContactForm";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from 'next/dynamic';

// Lazy load heavy components
const TradingImage1 = dynamic(() => import('./components/TradingImage1'), { 
  loading: () => <div className="h-64 bg-gray-800 animate-pulse" />
});
const TradingImage2 = dynamic(() => import('./components/TradingImage2'), { 
  loading: () => <div className="h-64 bg-gray-800 animate-pulse" />
});
const TradingImage3 = dynamic(() => import('./components/TradingImage3'), { 
  loading: () => <div className="h-64 bg-gray-800 animate-pulse" />
});

// Define blur data URLs for image placeholders
const blurDataURL = "data:image/webp;base64,UklGRkIAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABABAJ0BKgEAAQADADQlpAADcAD+/gbQAA==";

export default function Home() {
  const expertiseCards = [
    {
      title: "# Software Development",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="10" width="32" height="24" stroke="white" strokeWidth="2"/>
          <line x1="18" y1="34" x2="18" y2="38" stroke="white" strokeWidth="2"/>
          <line x1="30" y1="34" x2="30" y2="38" stroke="white" strokeWidth="2"/>
          <line x1="18" y1="38" x2="30" y2="38" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      description: "Experienced in Python, Java, JavaScript, TypeScript."
    },
    {
      title: "# Frontend Dev, React, NextJS",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="12" width="36" height="24" stroke="white" strokeWidth="2"/>
          <line x1="8" y1="16" x2="40" y2="16" stroke="white" strokeWidth="2"/>
          <rect x="8" y="18" width="12" height="2" stroke="white" strokeWidth="1"/>
          <line x1="10" y1="24" x2="30" y2="24" stroke="white" strokeWidth="1"/>
          <line x1="10" y1="28" x2="25" y2="28" stroke="white" strokeWidth="1"/>
          <line x1="10" y1="32" x2="20" y2="32" stroke="white" strokeWidth="1"/>
        </svg>
      ),
      description: "Passionate about UI/UX. Over 1 years of development experience in HTML, CSS, JS, React and NextJS frameworks."
    },
    {
      title: "# AI Prompt Engineer",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12 C20 8 12 10 12 16 C12 22 16 24 16 28 C16 32 12 34 12 38 C12 42 18 44 24 44 C30 44 36 42 36 38 C36 34 32 32 32 28 C32 24 36 22 36 16 C36 10 28 8 24 12 Z" stroke="white" strokeWidth="2"/>
          <line x1="20" y1="20" x2="28" y2="20" stroke="white" strokeWidth="1"/>
          <line x1="18" y1="26" x2="30" y2="26" stroke="white" strokeWidth="1"/>
          <line x1="20" y1="32" x2="28" y2="32" stroke="white" strokeWidth="1"/>
          <circle cx="20" cy="20" r="2" stroke="white" strokeWidth="1"/>
          <circle cx="28" cy="20" r="2" stroke="white" strokeWidth="1"/>
          <circle cx="18" cy="26" r="2" stroke="white" strokeWidth="1"/>
          <circle cx="30" cy="26" r="2" stroke="white" strokeWidth="1"/>
          <circle cx="20" cy="32" r="2" stroke="white" strokeWidth="1"/>
          <circle cx="28" cy="32" r="2" stroke="white" strokeWidth="1"/>
        </svg>
      ),
      description: "Proficient in designing high-impact prompts for AI models and leveraging large language models (LLMs) to solve complex, mission-critical challenges."
    }
  ];

  const experienceData = [
    {
      title: "Software Engineer",
      color: "purple",
      points: [
        "Built responsive portfolio with Next.js 15, Framer Motion animations, and WCAG AA accessibility standards",
        "Implemented CI/CD with GitHub Actions, automated testing with Jest & Playwright",
        "Integrated SendGrid API for contact forms with async handling and status feedback"
      ],
      technologies: ["Next.js 15", "TypeScript", "Framer Motion", "GitHub Actions"]
    },
    {
      title: "AI Prompt Engineer",
      color: "pink",
      points: [
        "Designed high-impact prompts for AI models to solve complex technical challenges",
        "Leveraged large language models (LLMs) for research, customization, and project refinement",
        "Utilized AI tools (ChatGPT, DeepSeek) to accelerate development and problem-solving"
      ],
      technologies: ["Prompt Design", "AI Integration", "LLM Optimization", "Research"]
    },
    {
      title: "Trading Strategy Developer",
      color: "blue",
      points: [
        "Developed trend-following trading strategies using EMA crossovers and RSI indicators",
        "Built interactive project showcases with detailed technical explanations and visualizations",
        "Transformed complex trading concepts into functional, well-documented projects"
      ],
      technologies: ["EMA Crossovers", "RSI Analysis", "Trend Analysis", "Risk Management"]
    }
  ];

  return (
    <>
      <header role="banner">
        <NavBar />
      </header>

      <main role="main">
        <Hero />
        
        <section 
          id="expertise" 
          className="py-16 sm:py-20 bg-[#252529] font-sans relative overflow-hidden"
          aria-labelledby="expertise-heading"
          role="region"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 id="expertise-heading" className="font-poppins text-3xl sm:text-4xl md:text-6xl font-bold text-white text-center mb-8 sm:mb-12 tracking-wide">
              My Expertise
            </h2>
            
            <div className="border-4 border-white bg-[#1A191D] overflow-hidden mx-2 sm:mx-4 md:mx-8 lg:mx-16">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-white">
                {expertiseCards.map((card, index) => (
                  <article key={index} className="p-6 sm:p-8 md:p-10 hover:bg-[#252529] transition-colors">
                    <div className="flex items-start mb-4">
                      <div className="text-white mr-4" aria-hidden="true">
                        {card.icon}
                      </div>
                      <h3 className="font-poppins text-xl sm:text-2xl md:text-3xl font-bold text-white">
                        {card.title}
                      </h3>
                    </div>
                   
                    <div className="font-roboto-mono text-white mb-2" aria-hidden="true">
                      <span className="text-red-500 font-bold">&lt;h2&gt;</span>
                    </div>
                   
                    <div className="border-l-4 border-red-500 pl-4 ml-2">
                      <p className="font-roboto-mono text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                   
                    <div className="font-roboto-mono text-white mt-2" aria-hidden="true">
                      <span className="text-red-500 font-bold">&lt;/h2&gt;</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section 
          id="work" 
          className="py-16 sm:py-20 bg-[#252529] font-sans relative overflow-hidden"
          aria-labelledby="work-heading"
          role="region"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex justify-start mb-12 sm:mb-16">
              <h2 id="work-heading" className="font-poppins text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white opacity-90 leading-none tracking-tight">
                MY<br />WORK
              </h2>
            </div>

            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Trend Following Strategy", image: "/assets/trading-strategy-1.webp", href: "/projects/trend-following-strategy" },
                  { title: "Trend Rider", image: "/assets/trading-strategy-2.webp", href: "/projects/trend-rider" },
                  { title: "v2.2", image: "/assets/trading-strategy-3.webp", href: "/projects/trend-rider-v2" }
                ].map((project, index) => (
                  <article key={index} className="group cursor-pointer">
                    <Link href={project.href} aria-label={`View ${project.title} project`}>
                      <div className="relative overflow-hidden bg-transparent transition-all duration-500">
                        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-[5px]">
                          <Image 
                            src={project.image}
                            alt={project.title}
                            width={569}
                            height={320}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            quality={85}
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                          />
                        </div>
                        
                        <div className="bg-[#252529] p-4 sm:p-6 rounded-b-[5px] min-h-[100px] sm:min-h-[120px] flex flex-col justify-center">
                          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-3 sm:mb-4">
                            {project.title}
                          </h3>
                          
                          <div className="flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
                            <div className="w-6 sm:w-8 h-[2px] bg-white"></div>
                            <div className="text-white text-xs sm:text-sm font-mono tracking-wide">
                              OPEN PROJECT
                            </div>
                            <div className="w-6 sm:w-8 h-[2px] bg-white"></div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section 
          id="experience" 
          className="py-16 sm:py-20 bg-[#252529] relative overflow-hidden"
          aria-labelledby="experience-heading"
          role="region"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="experience-heading" className="font-poppins text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">
                // EXPERIENCE
              </h2>
              <p className="font-roboto-mono text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                A journey of continuous learning and hands-on project development
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 via-pink-600 to-transparent"></div>

              <div className="space-y-12 sm:space-y-16 md:space-y-24">
                {experienceData.map((exp, index) => (
                  <div key={index} className="relative md:flex md:items-center">
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-600 rounded-full z-10 border-4 border-[#252529]"></div>
                    
                    <div className="md:w-5/12 ml-12 md:ml-0 md:pr-16">
                      <div className="bg-[#1A191D] border border-gray-800 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/50">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-900 to-purple-700 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-poppins text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                          </div>
                        </div>
                        
                        <div className="space-y-2 sm:space-y-3">
                          {exp.points.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex items-start">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                              <p className="font-roboto-mono text-gray-300 text-xs sm:text-sm">{point}</p>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-800">
                          <p className="font-roboto-mono text-xs text-gray-400 mb-2">Technologies:</p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 sm:px-3 py-1 bg-purple-900/30 text-purple-300 text-xs font-roboto-mono rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { value: "1+", label: "Years Experience" },
                { value: "2+", label: "Projects Completed" },
                { value: "100%", label: "Test Coverage" },
                { value: "∞", label: "Learning Mindset" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 sm:p-6 bg-[#1A191D] border border-gray-800 rounded-lg">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-white mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="font-roboto-mono text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section 
          id="contact" 
          className="py-16 sm:py-20 bg-[#252529] font-roboto-mono"
          aria-labelledby="contact-heading"
          role="region"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="contact-heading" className="font-poppins text-3xl sm:text-4xl md:text-6xl font-bold text-white text-center mb-8 sm:mb-12 tracking-wide">
              Contact
            </h2>
            <p className="text-gray-400 text-center mb-8 text-sm sm:text-base">Get in touch for opportunities.</p>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}