export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 bg-[#252529] relative overflow-hidden"
      aria-labelledby="experience-heading"
      role="region"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="experience-heading" className="font-poppins text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">
            EXPERIENCE
          </h2>
          <p className="font-roboto-mono text-gray-400 text-lg max-w-2xl mx-auto">
            A journey of continuous learning and hands-on project development
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 via-pink-600 to-transparent"></div>

          <div className="space-y-12 md:space-y-24">
            {/* Card 1 */}
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

            {/* Card 2 */}
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

            {/* Card 3 */}
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
            <div className="text-3xl md:text-4xl font-poppins font-bold text-white mb-2 animate-pulse">∞</div>
            <div className="font-roboto-mono text-gray-400 text-sm">Learning Mindset</div>
          </div>
        </div>

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
  );
}