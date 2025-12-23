import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Link from 'next/link';
import ContactForm from "./components/ContactForm";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Header with navigation */}
      <header role="banner">
        <NavBar />
      </header>

      {/* Main content area */}
      <main role="main">
        {/* Hero section */}
        <Hero />
        
        {/* Expertise Section */}
        <section 
          id="expertise" 
          className="py-20 bg-[#252529] font-sans relative overflow-hidden"
          aria-labelledby="expertise-heading"
          role="region"
        >
          {/* IDE Code Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-mono text-sm pt-20">
              <div className="text-gray-400 ml-4">{"1 "}<span className="text-blue-400">function</span> <span className="text-yellow-300">Expertise</span>() {"{"}</div>
              <div className="text-gray-400 ml-8">{"2 "}<span className="text-purple-400">return</span> (</div>
              <div className="text-gray-400 ml-12">{"3 "}<span className="text-gray-300">&lt;<span className="text-red-400">div</span> <span className="text-green-400">className</span>=<span className="text-yellow-300">"skills-grid"</span>&gt;</span></div>
              <div className="text-gray-400 ml-16">{"4 "}<span className="text-gray-300">&lt;<span className="text-red-400">Skill</span> <span className="text-green-400">title</span>=<span className="text-yellow-300">"Software"</span>/&gt;</span></div>
              <div className="text-gray-400 ml-16">{"5 "}<span className="text-gray-300">&lt;<span className="text-red-400">Skill</span> <span className="text-green-400">title</span>=<span className="text-yellow-300">"Frontend"</span>/&gt;</span></div>
              <div className="text-gray-400 ml-16">{"6 "}<span className="text-gray-300">&lt;<span className="text-red-400">Skill</span> <span className="text-green-400">title</span>=<span className="text-yellow-300">"AI Prompt"</span>/&gt;</span></div>
              <div className="text-gray-400 ml-12">{"7 "}<span className="text-gray-300">&lt;/<span className="text-red-400">div</span>&gt;</span></div>
              <div className="text-gray-400 ml-8">{"8 "});</div>
              <div className="text-gray-400 ml-4">{"9 "}{"}"}</div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 id="expertise-heading" className="font-poppins text-4xl md:text-6xl font-bold text-white text-center mb-12 tracking-wide">
              My Expertise
            </h2>
            
            {/* Single Rectangle Container with bold white borders and no radius */}
            <div className="elementor-heading-title code-editor-style border-4 border-white bg-[#1A191D] overflow-hidden mx-4 md:mx-8 lg:mx-16">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-white">
                {/* Card 1 - Software Development */}
                <article className="p-10 hover:bg-[#252529] transition-colors">
                  <div className="flex items-start mb-4">
                    {/* Monitor icon */}
                    <div className="text-white mr-4">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="10" width="32" height="24" stroke="white" strokeWidth="2"/>
                        <line x1="18" y1="34" x2="18" y2="38" stroke="white" strokeWidth="2"/>
                        <line x1="30" y1="34" x2="30" y2="38" stroke="white" strokeWidth="2"/>
                        <line x1="18" y1="38" x2="30" y2="38" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <h3 className="font-poppins text-3xl font-bold text-white"># Software Development</h3>
                  </div>
                 
                  <div className="font-roboto-mono text-white mb-2">
                    <span className="text-red-500 font-bold">&lt;h2&gt;</span>
                  </div>
                 
                  <div className="border-l-4 border-red-500 pl-4 ml-2">
                    <p className="font-roboto-mono text-gray-300 text-lg leading-relaxed">
                      Experienced in Python, Java, JavaScript, TypeScript.
                    </p>
                  </div>
                 
                  <div className="font-roboto-mono text-white mt-2">
                    <span className="text-red-500 font-bold">&lt;/h2&gt;</span>
                  </div>
                </article>

                {/* Card 2 - Frontend Dev */}
                <article className="p-10 hover:bg-[#252529] transition-colors">
                  <div className="flex items-start mb-4">
                    {/* Frontend symbol */}
                    <div className="text-white mr-4">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="12" width="36" height="24" stroke="white" strokeWidth="2"/>
                        <line x1="8" y1="16" x2="40" y2="16" stroke="white" strokeWidth="2"/>
                        <rect x="8" y="18" width="12" height="2" stroke="white" strokeWidth="1"/>
                        <line x1="10" y1="24" x2="30" y2="24" stroke="white" strokeWidth="1"/>
                        <line x1="10" y1="28" x2="25" y2="28" stroke="white" strokeWidth="1"/>
                        <line x1="10" y1="32" x2="20" y2="32" stroke="white" strokeWidth="1"/>
                      </svg>
                    </div>
                    <h3 className="font-poppins text-3xl font-bold text-white"># Frontend Dev, React, NextJS</h3>
                  </div>
                 
                  <div className="font-roboto-mono text-white mb-2">
                    <span className="text-red-500 font-bold">&lt;h2&gt;</span>
                  </div>
                 
                  <div className="border-l-4 border-red-500 pl-4 ml-2">
                    <p className="font-roboto-mono text-gray-300 text-lg leading-relaxed">
                      Passionate about UI/UX. Over 1 years of development experience in HTML, CSS, JS, React and NextJS frameworks.
                    </p>
                  </div>
                 
                  <div className="font-roboto-mono text-white mt-2">
                    <span className="text-red-500 font-bold">&lt;/h2&gt;</span>
                  </div>
                </article>

                {/* Card 3 - AI Prompt Engineer */}
                <article className="p-10 hover:bg-[#252529] transition-colors">
                  <div className="flex items-start mb-4">
                    {/* AI Brain icon */}
                    <div className="text-white mr-4">
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
                    </div>
                    <h3 className="font-poppins text-3xl font-bold text-white"># AI Prompt Engineer</h3>
                  </div>
                 
                  <div className="font-roboto-mono text-white mb-2">
                    <span className="text-red-500 font-bold">&lt;h2&gt;</span>
                  </div>
                 
                  <div className="border-l-4 border-red-500 pl-4 ml-2">
                    <p className="font-roboto-mono text-gray-300 text-lg leading-relaxed">
                      Proficient in designing high-impact prompts for AI models and leveraging large language models (LLMs) to solve complex, mission-critical challenges.
                    </p>
                  </div>
                 
                  <div className="font-roboto-mono text-white mt-2">
                    <span className="text-red-500 font-bold">&lt;/h2&gt;</span>
                  </div>
                </article>
              </div>
            </div>

            {/* Additional IDE Code Pattern */}
            <div className="mt-12 mx-4 md:mx-8 lg:mx-16 opacity-40">
              <div className="font-roboto-mono text-sm text-gray-400 border-l-4 border-gray-600 pl-4 py-2">
                <div className="flex">
                  <span className="text-purple-400 mr-4">1</span>
                  <span className="text-blue-400">const</span> 
                  <span className="text-green-400"> aiPromptEngineer</span> 
                  <span className="text-gray-300"> = </span>
                  <span className="text-yellow-300">{`{`}</span>
                </div>
                <div className="flex ml-8">
                  <span className="text-purple-400 mr-4">2</span>
                  <span className="text-red-400">skills</span>
                  <span className="text-gray-300">: </span>
                  <span className="text-orange-300">['Prompt Design', 'AI Integration', 'LLM Optimization']</span>
                  <span className="text-gray-300">,</span>
                </div>
                <div className="flex ml-8">
                  <span className="text-purple-400 mr-4">3</span>
                  <span className="text-red-400">tools</span>
                  <span className="text-gray-300">: </span>
                  <span className="text-orange-300">['OpenAI', 'LangChain', 'Custom APIs']</span>
                </div>
                <div className="flex">
                  <span className="text-purple-400 mr-4">4</span>
                  <span className="text-yellow-300">{`}`}</span>
                  <span className="text-gray-300">;</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Work Section */}
        <section 
          id="work" 
          className="py-20 bg-[#252529] font-sans relative overflow-hidden"
          aria-labelledby="work-heading"
          role="region"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Big Bold MY WORK Header */}
            <div className="flex justify-start mb-16">
              <h2 id="work-heading" className="font-poppins text-7xl md:text-8xl lg:text-9xl font-black text-white opacity-90 leading-none tracking-tight">
                MY<br />WORK
              </h2>
            </div>

            {/* Background Sentence */}
            <div className="relative mt-8 flex justify-end">
              <div className="font-roboto-mono text-lg md:text-xl font-bold text-white opacity-100 space-y-2 max-w-4xl mr-auto">
                <div>Developed a trend-following trading strategy</div>
                <div>that generates Buy and Sell signals</div>
                <div>using EMA crossovers and RSI.</div>
                <div>This portfolio was inspired by Tamal Sen's work</div>
                <div>and was carefully built through</div>
                <div>advanced use of AI tools</div>
                <div>such as ChatGPT and DeepSeek</div>
                <div>to research, customize, and refine the system.</div>
                <div>It reflects my growing skills</div>
                <div>in AI prompting and software engineering,</div>
                <div>showcasing my ability to turn ideas</div>
                <div>into functional technical projects.</div>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="mt-32 mb-8">
              <nav aria-label="Project filter">
                <div className="flex items-baseline space-x-2 border-b border-gray-600 pb-4">
                  <span className="text-white text-sm font-bold uppercase tracking-wide opacity-70 hover:opacity-100 hover:text-purple-400 transition-all duration-300">
                    Filter By
                  </span>
                  
                  <span className="w-2"></span>

                  {/* All Filter */}
                  <div className="relative flex flex-col items-center cursor-pointer group">
                    <span className="relative left-5 -top-3 text-white text-xs font-bold leading-none group-hover:text-purple-400 transition-all duration-300 opacity-70 group-hover:opacity-100">
                      01
                    </span>
                    <button 
                      type="button"
                      className="text-white text-sm font-bold uppercase tracking-wide group-hover:text-purple-400 transition-all duration-300 opacity-70 group-hover:opacity-100 -mt-4"
                    >
                      All
                    </button>
                  </div>

                  <span className="w-1"></span>
                  <span className="text-white mx-1 opacity-70 hover:opacity-100 hover:text-purple-400 transition-all duration-300">/</span>
                  <span className="w-1"></span>

                  {/* Trading Strategy Filter */}
                  <div className="relative flex flex-col items-center cursor-pointer group">
                    <span
                      className="relative text-white text-xs font-bold leading-none group-hover:text-purple-400 transition-all duration-300 opacity-70 group-hover:opacity-100"
                      style={{ left: "78px", top: "-12px" }}
                    >
                      01
                    </span>
                    <button 
                      type="button"
                      className="text-white text-sm font-bold uppercase tracking-wide group-hover:text-purple-400 transition-all duration-300 opacity-70 group-hover:opacity-100 -mt-4"
                    >
                      Trading Strategy
                    </button>
                  </div>

                  <span className="w-1"></span>
                  <span className="text-white mx-1 opacity-70 hover:opacity-100 hover:text-purple-400 transition-all duration-300">/</span>
                </div>
              </nav>
            </div>

            {/* Project Showcase */}
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Project 1 - Trend Following Strategy */}
                <article className="group cursor-pointer">
                  <Link href="/projects/trend-following-strategy" aria-label="View Trend Following Strategy project">
                    <div className="relative overflow-hidden bg-transparent transition-all duration-500">
                      <div className="relative h-64 overflow-hidden rounded-t-[5px]">
                        <img 
                          src="/assets/trading-strategy-1.png" 
                          alt="Trend Following Strategy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      
                      <div className="bg-[#252529] p-6 rounded-b-[5px] min-h-[120px] flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white text-center mb-4">
                          Trend Following Strategy
                        </h3>
                        
                        <div className="flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
                          <div className="w-8 h-[2px] bg-white"></div>
                          <div className="text-white text-sm font-mono tracking-wide">
                            OPEN PROJECT
                          </div>
                          <div className="w-8 h-[2px] bg-white"></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>

                {/* Project 2 - Trend Rider */}
                <article className="group cursor-pointer">
                  <Link href="/projects/trend-rider" aria-label="View Trend Rider project">
                    <div className="relative overflow-hidden bg-transparent transition-all duration-500">
                      <div className="relative h-64 overflow-hidden rounded-t-[5px]">
                        <img 
                          src="/assets/trading-strategy-2.png" 
                          alt="Trend Rider"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      
                      <div className="bg-[#252529] p-6 rounded-b-[5px] min-h-[120px] flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white text-center mb-4">
                          Trend Rider
                        </h3>
                        
                        <div className="flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
                          <div className="w-8 h-[2px] bg-white"></div>
                          <div className="text-white text-sm font-mono tracking-wide">
                            OPEN PROJECT
                          </div>
                          <div className="w-8 h-[2px] bg-white"></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>

                {/* Project 3 - v2.2 */}
                <article className="group cursor-pointer">
                  <Link href="/projects/trend-rider-v2" aria-label="View v2.2 project">
                    <div className="relative overflow-hidden bg-transparent transition-all duration-500">
                      <div className="relative h-64 overflow-hidden rounded-t-[5px]">
                        <img 
                          src="/assets/trading-strategy-3.png" 
                          alt="v2.2"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      
                      <div className="bg-[#252529] p-6 rounded-b-[5px] min-h-[120px] flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white text-center mb-4">
                          v2.2
                        </h3>
                        
                        <div className="flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
                          <div className="w-8 h-[2px] bg-white"></div>
                          <div className="text-white text-sm font-mono tracking-wide">
                            OPEN PROJECT
                          </div>
                          <div className="w-8 h-[2px] bg-white"></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section 
          id="experience" 
          className="py-20 bg-[#252529] relative overflow-hidden"
          aria-labelledby="experience-heading"
          role="region"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 id="experience-heading" className="font-poppins text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">
                // EXPERIENCE
              </h2>
              <p className="font-roboto-mono text-gray-400 text-lg max-w-2xl mx-auto">
                A journey of continuous learning and hands-on project development
              </p>
            </div>

            {/* Modern Timeline Design */}
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 via-pink-600 to-transparent"></div>

              {/* Experience Cards */}
              <div className="space-y-12 md:space-y-24">
                
                {/* Card 1 - Software Engineering */}
                <div className="relative md:flex md:items-center">
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full z-10 border-4 border-[#252529]"></div>
                  
                  <div className="md:w-5/12 ml-12 md:ml-0 md:pr-16">
                    <div className="bg-[#1A191D] border border-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/50">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-900 to-purple-700 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-poppins text-xl font-bold text-white">Software Engineer</h3>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="font-roboto-mono text-gray-300 text-sm">Built responsive portfolio with Next.js 15, Framer Motion animations, and WCAG AA accessibility standards</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="font-roboto-mono text-gray-300 text-sm">Implemented CI/CD with GitHub Actions, automated testing with Jest & Playwright</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="font-roboto-mono text-gray-300 text-sm">Integrated SendGrid API for contact forms with async handling and status feedback</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-800">
                        <p className="font-roboto-mono text-xs text-gray-400 mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs font-roboto-mono rounded-full">Next.js 15</span>
                          <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs font-roboto-mono rounded-full">TypeScript</span>
                          <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs font-roboto-mono rounded-full">Framer Motion</span>
                          <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs font-roboto-mono rounded-full">GitHub Actions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - AI & Prompt Engineering */}
                <div className="relative md:flex md:items-center md:flex-row-reverse">
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-pink-600 rounded-full z-10 border-4 border-[#252529]"></div>
                  
                  <div className="md:w-5/12 ml-12 md:mr-0 md:pl-16">
                    <div className="bg-[#1A191D] border border-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-pink-500/50">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-900 to-pink-700 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-poppins text-xl font-bold text-white">AI Prompt Engineer</h3>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="font-roboto-mono text-gray-300 text-sm">Designed high-impact prompts for AI models to solve complex technical challenges</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="font-roboto-mono text-gray-300 text-sm">Leveraged large language models (LLMs) for research, customization, and project refinement</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="font-roboto-mono text-gray-300 text-sm">Utilized AI tools (ChatGPT, DeepSeek) to accelerate development and problem-solving</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-800">
                        <p className="font-roboto-mono text-xs text-gray-400 mb-2">Tools & Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-pink-900/30 text-pink-300 text-xs font-roboto-mono rounded-full">Prompt Design</span>
                          <span className="px-3 py-1 bg-pink-900/30 text-pink-300 text-xs font-roboto-mono rounded-full">AI Integration</span>
                          <span className="px-3 py-1 bg-pink-900/30 text-pink-300 text-xs font-roboto-mono rounded-full">LLM Optimization</span>
                          <span className="px-3 py-1 bg-pink-900/30 text-pink-300 text-xs font-roboto-mono rounded-full">Research</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Trading Strategy Development */}
                <div className="relative md:flex md:items-center">
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full z-10 border-4 border-[#252529]"></div>
                  
                  <div className="md:w-5/12 ml-12 md:ml-0 md:pr-16">
                    <div className="bg-[#1A191D] border border-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/50">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-poppins text-xl font-bold text-white">Trading Strategy Developer</h3>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="font-roboto-mono text-gray-300 text-sm">Developed trend-following trading strategies using EMA crossovers and RSI indicators</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="font-roboto-mono text-gray-300 text-sm">Built interactive project showcases with detailed technical explanations and visualizations</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="font-roboto-mono text-gray-300 text-sm">Transformed complex trading concepts into functional, well-documented projects</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-800">
                        <p className="font-roboto-mono text-xs text-gray-400 mb-2">Techniques:</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-roboto-mono rounded-full">EMA Crossovers</span>
                          <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-roboto-mono rounded-full">RSI Analysis</span>
                          <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-roboto-mono rounded-full">Trend Analysis</span>
                          <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-roboto-mono rounded-full">Risk Management</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-[#1A191D] border border-gray-800 rounded-lg">
                <div className="text-3xl md:text-4xl font-poppins font-bold text-white mb-2">1+</div>
                <div className="font-roboto-mono text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-[#1A191D] border border-gray-800 rounded-lg">
                <div className="text-3xl md:text-4xl font-poppins font-bold text-white mb-2">2+</div>
                <div className="font-roboto-mono text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-[#1A191D] border border-gray-800 rounded-lg">
                <div className="text-3xl md:text-4xl font-poppins font-bold text-white mb-2">100%</div>
                <div className="font-roboto-mono text-gray-400 text-sm">Test Coverage</div>
              </div>
              <div className="text-center p-6 bg-[#1A191D] border border-gray-800 rounded-lg">
                <motion.div
                  className="text-3xl md:text-4xl font-poppins font-bold text-white mb-2"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ∞
                </motion.div>
                <div className="font-roboto-mono text-gray-400 text-sm">Learning Mindset</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-20 text-center">
              <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                <div className="bg-[#252529] px-8 py-4 rounded-md">
                  <p className="font-poppins text-white text-lg mb-2">Ready for the next challenge</p>
                  <p className="font-roboto-mono text-gray-400 text-sm">Always learning, always building</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          className="py-20 bg-[#252529] font-roboto-mono"
          aria-labelledby="contact-heading"
          role="region"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="contact-heading" className="font-poppins text-4xl md:text-6xl font-bold text-white text-center mb-12 tracking-wide">
              Contact
            </h2>
            <p className="text-gray-400 text-center mb-8">Get in touch for opportunities.</p>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}