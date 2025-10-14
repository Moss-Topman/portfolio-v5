import Hero from "./components/Hero";
import projects from "./lib/projects.json";
import ProjectCard from "./components/ProjectCard";
export default function Home() {
  return (
    <>
      <Hero />
      <section id="expertise" className="py-20 bg-gradient-to-b from-[#001022] to-[#0a0a0f] code-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 uppercase">// Expertise</h2>
          <p className="text-gray-400 text-center mb-8 max-w-3xl mx-auto">My technical expertise includes cross-platform proficiency and advanced skills in modern frameworks.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            { /* Card 1 */ }
            <div className="p-6 bg-[#0a0a0f] rounded-lg shadow-lg hover:scale-105 transition-transform">
              <div className="text-purple-500 text-4xl mb-4">🛠️</div> { /* Icon placeholder */ }
              <h3 className="text-xl font-bold text-white mb-2">Software Development</h3>
              <p className="text-gray-400">Experienced in functional and OOP: Python, JavaScript, TypeScript.</p>
            </div>
            { /* Card 2 */ }
            <div className="p-6 bg-[#0a0a0f] rounded-lg shadow-lg hover:scale-105 transition-transform">
              <div className="text-purple-500 text-4xl mb-4">⚛️</div> { /* Icon placeholder */ }
              <h3 className="text-xl font-bold text-white mb-2">Frontend Dev</h3>
              <p className="text-gray-400">Passionate about UI/UX. Experience in HTML, CSS, JS, React, Next.js.</p>
            </div>
            { /* Card 3 */ }
            <div className="p-6 bg-[#0a0a0f] rounded-lg shadow-lg hover:scale-105 transition-transform">
              <div className="text-purple-500 text-4xl mb-4">🤖</div> { /* Icon placeholder */ }
              <h3 className="text-xl font-bold text-white mb-2">AI Prompt Engineering</h3>
              <p className="text-gray-400">Skilled in crafting prompts for AI models and integrating with apps.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="py-20 bg-[#0a0a0f] code-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 uppercase">// Work</h2>
          <p className="text-gray-400 text-center mb-8 max-w-3xl mx-auto">Deployed scalable web and mobile apps. Collaborated on multiple projects worldwide.</p>
          { /* Filters - client component later */ }
          <div className="flex justify-center space-x-4 mb-12">
            <button className="px-4 py-2 bg-purple-500 text-white rounded-full">All</button>
            <button className="px-4 py-2 bg-gray-800 text-gray-400 rounded-full hover:text-white">Web</button>
            <button className="px-4 py-2 bg-gray-800 text-gray-400 rounded-full hover:text-white">App</button>
          </div>
          { /* Project grid placeholder - add ProjectCard in Step 4 */ }
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0f] rounded-lg shadow-lg transform rotate-3"> { /* Tilt example */ }
              <div className="h-48 bg-gray-700"></div> { /* Mockup placeholder */ }
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">Project 1</h3>
                <p className="text-gray-400">Description here.</p>
              </div>
            </div>
            { /* Add more */ }
          </div>
        </div>
      </section>
      <section id="experience" className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#001022] code-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 uppercase">// Experience</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div> { /* Timeline line */ }
            { /* Entry 1 */ }
            <div className="mb-8 flex justify-between items-center">
              <div className="w-5/12"></div>
              <div className="w-2/12 text-center z-10">
                <div className="bg-purple-500 rounded-full h-4 w-4 mx-auto"></div> { /* Dot */ }
              </div>
              <div className="w-5/12 bg-[#0a0a0f] p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-white">Role 1 @ Company (Year - Present)</h3>
                <p className="text-gray-400">Description.</p>
              </div>
            </div>
            { /* Add alternating entries */ }
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-[#001022] code-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 uppercase">// Contact</h2>
          <p className="text-gray-400 text-center mb-8">Get in touch for opportunities.</p>
          { /* Form placeholder - full in Step 5 */ }
          <form className="max-w-md mx-auto">
            <input type="text" placeholder="Name" className="w-full p-2 mb-4 bg-gray-800 text-white rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 mb-4 bg-gray-800 text-white rounded" />
            <textarea placeholder="Message" className="w-full p-2 mb-4 bg-gray-800 text-white rounded"></textarea>
            <button className="w-full p-2 bg-purple-500 text-white rounded">Send</button>
          </form>
          { /* Socials/testimonials placeholder */ }
        </div>
      </section>
    </>
  );
}