export default function ExpertiseSection() {
  return (
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

        <div className="elementor-heading-title code-editor-style border-4 border-white bg-[#1A191D] overflow-hidden mx-4 md:mx-8 lg:mx-16">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-white">
            {/* Card 1 */}
            <article className="p-10 hover:bg-[#252529] transition-colors">
              <div className="flex items-start mb-4">
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

            {/* Card 2 */}
            <article className="p-10 hover:bg-[#252529] transition-colors">
              <div className="flex items-start mb-4">
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

            {/* Card 3 */}
            <article className="p-10 hover:bg-[#252529] transition-colors">
              <div className="flex items-start mb-4">
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
  );
}