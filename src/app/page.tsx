import Hero from "./components/Hero";
import Link from 'next/link';
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Expertise Section - Keep this as is */}
      <section id="expertise" className="py-20 bg-[#252529] font-sans relative overflow-hidden">
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
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 uppercase tracking-wide">
            // My Expertise
          </h2>
          
          {/* Single Rectangle Container with bold white borders and no radius */}
          <div className="border-4 border-white bg-[#242428] overflow-hidden mx-4 md:mx-8 lg:mx-16">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-white">
              {/* Card 1 - Software Development */}
              <div className="p-10 hover:bg-[#2a2a2e] transition-colors">
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
                  <h3 className="text-3xl font-bold text-white"># Software Development</h3>
                </div>
               
                <div className="font-mono text-white mb-2">
                  <span className="text-red-500 font-bold">&lt;h2&gt;</span>
                </div>
               
                <div className="border-l-4 border-red-500 pl-4 ml-2">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    <strong>Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.</strong>
                  </p>
                </div>
               
                <div className="font-mono text-white mt-2">
                  <span className="text-red-500 font-bold">&lt;/h2&gt;</span>
                </div>
              </div>

              {/* Card 2 - Frontend Dev */}
              <div className="p-10 hover:bg-[#2a2a2e] transition-colors">
                <div className="flex items-start mb-4">
                  {/* Frontend symbol */}
                  <div className="text-white mr-4">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Browser window */}
                      <rect x="6" y="12" width="36" height="24" stroke="white" strokeWidth="2"/>
                      {/* Address bar */}
                      <line x1="8" y1="16" x2="40" y2="16" stroke="white" strokeWidth="2"/>
                      {/* Tab */}
                      <rect x="8" y="18" width="12" height="2" stroke="white" strokeWidth="1"/>
                      {/* Content lines */}
                      <line x1="10" y1="24" x2="30" y2="24" stroke="white" strokeWidth="1"/>
                      <line x1="10" y1="28" x2="25" y2="28" stroke="white" strokeWidth="1"/>
                      <line x1="10" y1="32" x2="20" y2="32" stroke="white" strokeWidth="1"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white"># Frontend Dev, React, NextJS</h3>
                </div>
               
                <div className="font-mono text-white mb-2">
                  <span className="text-red-500 font-bold">&lt;h2&gt;</span>
                </div>
               
                <div className="border-l-4 border-red-500 pl-4 ml-2">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    <strong>Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</strong>
                  </p>
                </div>
               
                <div className="font-mono text-white mt-2">
                  <span className="text-red-500 font-bold">&lt;/h2&gt;</span>
                </div>
              </div>

              {/* Card 3 - AI Prompt Engineer */}
              <div className="p-10 hover:bg-[#2a2a2e] transition-colors">
                <div className="flex items-start mb-4">
                  {/* AI Brain icon */}
                  <div className="text-white mr-4">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Brain shape */}
                      <path d="M24 12 C20 8 12 10 12 16 C12 22 16 24 16 28 C16 32 12 34 12 38 C12 42 18 44 24 44 C30 44 36 42 36 38 C36 34 32 32 32 28 C32 24 36 22 36 16 C36 10 28 8 24 12 Z" stroke="white" strokeWidth="2"/>
                      {/* Neural connections */}
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
                  <h3 className="text-3xl font-bold text-white"># AI Prompt Engineer</h3>
                </div>
               
                <div className="font-mono text-white mb-2">
                  <span className="text-red-500 font-bold">&lt;h2&gt;</span>
                </div>
               
                <div className="border-l-4 border-red-500 pl-4 ml-2">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    <strong>Skilled in crafting effective prompts for AI models and integrating AI capabilities into applications.</strong>
                  </p>
                </div>
               
                <div className="font-mono text-white mt-2">
                  <span className="text-red-500 font-bold">&lt;/h2&gt;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional IDE Code Pattern */}
          <div className="mt-12 mx-4 md:mx-8 lg:mx-16 opacity-40">
            <div className="font-mono text-sm text-gray-400 border-l-4 border-gray-600 pl-4 py-2">
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

      {/* My Work Section - Cleaned and Ready for Content */}
       {/* My Work Section - New Design */}
      <section id="work" className="py-20 bg-[#252529] font-sans relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Big Bold MY WORK Header - Right Aligned */}
          <div className="flex justify-start mb-16">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white opacity-90 leading-none tracking-tight">
              MY<br />WORK
            </h1>
          </div>

          {/* Background Sentence - Multiple Lines */}
          <div className="relative mt-8
          flex justify-end">
            <div className="text-lg md:text-xl font-bold text-white opacity-100 space-y-2 max-w-4xl mr-auto">
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

          

{/* Filter Bar - Exact Spacing Format */}
<div className="mt-32 mb-8">
  <div className="flex items-baseline space-x-2 border-b border-gray-600 pb-4">
    
    {/* Filter By */}
    <span className="text-white text-sm font-bold uppercase tracking-wide opacity-70 hover:opacity-100 hover:text-purple-400 transition-all duration-300">
      Filter By
    </span>
    
    {/* 2 spaces */}
    <span className="w-2"></span>

    {/* All Filter */}
    <div className="relative flex flex-col items-center cursor-pointer group">
      {/* 01 positioned independently */}
      <span className="relative left-5 -top-3 text-white text-xs font-bold leading-none group-hover:text-purple-400 transition-all duration-300 opacity-70 group-hover:opacity-100">
        01
      </span>
      <span className="text-white text-sm font-bold uppercase tracking-wide group-hover:text-purple-400 transition-all duration-300 opacity-70 group-hover:opacity-100 -mt-4">
        All
      </span>
    </div>

    {/* 2 spaces + / + 2 spaces */}
    <span className="w-1"></span>
    <span className="text-white mx-1 opacity-70 hover:opacity-100 hover:text-purple-400 transition-all duration-300">/</span>
    <span className="w-1"></span>

    {/* Trading Strategy Filter */}
    <div className="relative flex flex-col items-center cursor-pointer group">
      {/* 01 positioned independently */}
     <span
  className="relative text-white text-xs font-bold leading-none group-hover:text-purple-400 transition-all duration-300 opacity-70 group-hover:opacity-100"
  style={{ left: "78px", top: "-12px" }}   // manual control here
>
  01
</span>
      <span className="text-white text-sm font-bold uppercase tracking-wide group-hover:text-purple-400 transition-all duration-300 opacity-70 group-hover:opacity-100 -mt-4">
        Trading Strategy
      </span>
    </div>

    {/* Closing / */}
    <span className="w-1"></span>
    <span className="text-white mx-1 opacity-70 hover:opacity-100 hover:text-purple-400 transition-all duration-300">/</span>
  </div>
</div>{/* Project Showcase - Updated with Project Links */}
<div className="mt-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Project 1 - Trend Following Strategy */}
    <div className="group cursor-pointer">
      <Link href="/projects/trend-following-strategy">
        <div className="relative overflow-hidden bg-transparent transition-all duration-500">
          
          {/* Project Image - Rounded top only */}
          <div className="relative h-64 overflow-hidden rounded-t-[5px]">
            <img 
              src="/assets/trading-strategy-1.png" 
              alt="Trend Following Strategy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Placeholder - Rounded bottom only */}
          <div className="bg-[#2a2a2e] p-6 rounded-b-[5px] min-h-[120px] flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Trend Following Strategy
            </h3>
            
            {/* Hover Indicator - Horizontal Line beside text */}
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
    </div>

    {/* Project 2 - Trend Rider */}
    <div className="group cursor-pointer">
      <Link href="/projects/trend-rider">
        <div className="relative overflow-hidden bg-transparent transition-all duration-500">
          
          {/* Project Image - Rounded top only */}
          <div className="relative h-64 overflow-hidden rounded-t-[5px]">
            <img 
              src="/assets/trading-strategy-2.png" 
              alt="Trend Rider"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Placeholder - Rounded bottom only */}
          <div className="bg-[#2a2a2e] p-6 rounded-b-[5px] min-h-[120px] flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Trend Rider
            </h3>
            
            {/* Hover Indicator - Horizontal Line beside text */}
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
    </div>

    {/* Project 3 - v2.2 */}
    <div className="group cursor-pointer">
      <Link href="/projects/trend-rider-v2">
        <div className="relative overflow-hidden bg-transparent transition-all duration-500">
          
          {/* Project Image - Rounded top only */}
          <div className="relative h-64 overflow-hidden rounded-t-[5px]">
            <img 
              src="/assets/trading-strategy-3.png" 
              alt="v2.2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Placeholder - Rounded bottom only */}
          <div className="bg-[#2a2a2e] p-6 rounded-b-[5px] min-h-[120px] flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              v2.2
            </h3>
            
            {/* Hover Indicator - Horizontal Line beside text */}
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
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Experience Section - Placeholder for next section */}
      <section id="experience" className="py-20 bg-[#252529] font-sans relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 uppercase tracking-wide">
            // Experience
          </h2>
          <p className="text-gray-400 text-lg">Experience section coming soon...</p>
        </div>
      </section>

      {/* Contact Section - Placeholder for next section */}
      <section id="contact" className="py-20 bg-[#0a0a0f]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 uppercase">// Contact</h2>
    <p className="text-gray-400 text-center mb-8">Get in touch for opportunities.</p>
    <ContactForm />
  </div>
</section>
    </>
  );
}