import Image from "next/image";

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

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      { /* Multiple gradient layers for precise control */ }
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            /* Dark overlay for entire image */
            linear-gradient(rgba(26, 25, 29, 0.3), rgba(26, 25, 29, 0.3)),
            /* Bottom fade */
            linear-gradient(to bottom, transparent 60%, #1A191D 100%),
            /* Hero image */
            url('/assets/hero-poster.jpg')
          `,
          backgroundSize: 'cover, cover, cover',
          backgroundPosition: 'center, center, center',
          backgroundBlendMode: 'normal, normal, normal'
        }}
      >
        <Image
          src="/assets/hero-poster.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#252529] to-transparent" /> { /* Bottom gradient blend to #252529 */ }

      

      { /* Your content */ }
      <div className="relative z-10 text-center px-4">
        {/* Your text content */}
      </div>
    

      {/* Hero content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-wider text-white">
          Moss Victor
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mt-4 font-semibold">
          Software Engineer · AI Prompt Engineer · Frontend Developer
        </p>

        {/* Floating mouse scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
          <div className="w-[30px] h-[50px] border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
          <span className="text-gray-400 text-sm tracking-widest">Scroll</span>
        </div>
      </div>

      {/* Manual blend edge — no color transitions */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-30"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(37, 38, 41, 0) 0%,
              var(--hero-cut-color, #252629) 100%
            )
          `,
        }}
      />
    </section>
  );
}
