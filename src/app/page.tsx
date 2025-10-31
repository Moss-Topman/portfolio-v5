import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Expertise: Now using solid color that matches hero gradient */}
      <section id="expertise" className="py-20 bg-[#252529] code-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 uppercase">
            // Expertise
          </h2>
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            My technical expertise includes cross-platform proficiency and advanced skills in modern frameworks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 bg-[#242428] rounded-lg shadow-lg hover:scale-105 transition-transform border border-gray-700">
              <div className="text-purple-500 text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-white mb-2">Software Development</h3>
              <p className="text-gray-300">
                Experienced in functional and OOP: Python, JavaScript, TypeScript.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-[#242428] rounded-lg shadow-lg hover:scale-105 transition-transform border border-gray-700">
              <div className="text-purple-500 text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-2">Frontend Dev</h3>
              <p className="text-gray-300">
                Passionate about UI/UX. Experience in HTML, CSS, JS, React, Next.js.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-[#242428] rounded-lg shadow-lg hover:scale-105 transition-transform border border-gray-700">
              <div className="text-purple-500 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">AI Prompt Engineering</h3>
              <p className="text-gray-300">
                Skilled in crafting prompts for AI models and integrating with apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections remain the same with #1A191D background */}
      {/* ... */}
    </>
  );
}