import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center p-4 text-white">
      {/* Top-left Moss Victor_ with lemon green and Christmas font */}
      <div className="text-xl md:text-2xl font-bold mb-4 md:mb-0 md:absolute md:left-8 font-serif text-[#d4ed31]">
        Moss Victor._
      </div>
      
      {/* Centered numbered sections - moved 150px right */}
      <div className="flex flex-col items-center translate-x-[450px]">
        {/* Numbers row with individual positioning - moved upward */}
        <div className="flex mb-1 relative w-full -translate-y-1">
          <span className="text-xs absolute left-[50px]">𝟘1</span>
          <span className="text-xs absolute left-[190px]">𝟘2</span>
          <span className="text-xs absolute left-[297px]">𝟘3</span>
          <span className="text-xs absolute left-[455px]">𝟘4</span>
          <span className="text-xs absolute left-[580px]">𝟘5</span>
        </div>
        
        {/* Navigation links row - updated slash format with spaces */}
        <div className="flex space-x-12 text-base font-bold">
          <Link href="#home" className="hover:text-gray-300 transition-colors">
            <span className="text-purple-400">/ /</span> home
          </Link>
          <Link href="#expertise" className="hover:text-gray-300 transition-colors">
            <span className="text-purple-400">/ /</span> expertise
          </Link>
          <Link href="#work" className="hover:text-gray-300 transition-colors">
            <span className="text-purple-400">/ /</span> work
          </Link>
          <Link href="#experience" className="hover:text-gray-300 transition-colors">
            <span className="text-purple-400">/ /</span> experience
          </Link>
          <Link href="#contact" className="hover:text-gray-300 transition-colors">
            <span className="text-purple-400">/ /</span> contact
          </Link>
        </div>
      </div>
    </div>
  );
}