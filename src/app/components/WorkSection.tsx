import Image from "next/image";
import Link from "next/link";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="py-20 bg-[#252529] font-sans relative overflow-hidden"
      aria-labelledby="work-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-start mb-16">
          <h2 id="work-heading" className="font-poppins text-7xl md:text-8xl lg:text-9xl font-black text-white opacity-90 leading-none tracking-tight">
            MY<br />WORK
          </h2>
        </div>

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

        <div className="mt-32 mb-8">
          <nav aria-label="Project filter">
            <div className="flex items-baseline space-x-2 border-b border-gray-600 pb-4">
              <span className="text-white text-sm font-bold uppercase tracking-wide opacity-70 hover:opacity-100 hover:text-purple-400 transition-all duration-300">
                Filter By
              </span>
              <span className="w-2"></span>
              <div className="relative flex flex-col items-center cursor-pointer group">
                <span className="relative left-5 -top-3 text-white text-xs font-bold leading-none group-hover:text-purple-400 transition-all duration-300 opacity-70 group-hover:opacity-100">
                  01
                </span>
                <button className="text-white text-sm font-bold uppercase tracking-wide group-hover:text-purple-400 transition-all duration-300 opacity-70 group-hover:opacity-100 -mt-4">
                  All
                </button>
              </div>
              <span className="w-1"></span>
              <span className="text-white mx-1 opacity-70 hover:opacity-100 hover:text-purple-400 transition-all duration-300">/</span>
              <span className="w-1"></span>
              <div className="relative flex flex-col items-center cursor-pointer group">
                <span
                  className="relative text-white text-xs font-bold leading-none group-hover:text-purple-400 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  style={{ left: "78px", top: "-12px" }}
                >
                  01
                </span>
                <button className="text-white text-sm font-bold uppercase tracking-wide group-hover:text-purple-400 transition-all duration-300 opacity-70 group-hover:opacity-100 -mt-4">
                  Trading Strategy
                </button>
              </div>
              <span className="w-1"></span>
              <span className="text-white mx-1 opacity-70 hover:opacity-100 hover:text-purple-400 transition-all duration-300">/</span>
            </div>
          </nav>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <article className="group cursor-pointer">
              <Link href="/projects/trend-following-strategy" aria-label="View Trend Following Strategy project">
                <div className="relative overflow-hidden bg-transparent transition-all duration-500">
                  <div className="relative h-64 overflow-hidden rounded-t-[5px]">
                    <div className="relative h-64 w-full">
                      <Image
                        src="/assets/trading-strategy-1.png"
                        alt="Trend Following Strategy"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
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

            {/* Project 2 */}
            <article className="group cursor-pointer">
              <Link href="/projects/trend-rider" aria-label="View Trend Rider project">
                <div className="relative overflow-hidden bg-transparent transition-all duration-500">
                  <div className="relative h-64 overflow-hidden rounded-t-[5px]">
                    <div className="relative h-64 w-full">
                      <Image
                        src="/assets/trading-strategy-2.png"
                        alt="Trend Rider"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
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

            {/* Project 3 */}
            <article className="group cursor-pointer">
              <Link href="/projects/trend-rider-v2" aria-label="View v2.2 project">
                <div className="relative overflow-hidden bg-transparent transition-all duration-500">
                  <div className="relative h-64 overflow-hidden rounded-t-[5px]">
                    <div className="relative h-64 w-full">
                      <Image
                        src="/assets/trading-strategy-3.png"
                        alt="v2.2"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
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
  );
}