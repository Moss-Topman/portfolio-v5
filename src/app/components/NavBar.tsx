import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center p-4 text-white">
      {/* Top-left Moss Victor_ */}
      <div className="text-xl md:text-2xl font-bold mb-4 md:mb-0 md:absolute md:left-8">
        Moss Victor_
      </div>
      
      {/* Centered numbered sections - moved 150px right */}
      <div className="flex flex-col items-center translate-x-[500px]">
        {/* Numbers row with individual positioning - moved upward */}
        <div className="flex mb-1 relative w-full -translate-y-1">
          <span className="text-xs absolute left-[50px]">𝟘1</span>
          <span className="text-xs absolute left-[170px]">𝟘2</span>
          <span className="text-xs absolute left-[258px]">𝟘3</span>
          <span className="text-xs absolute left-[390px]">𝟘4</span>
          <span className="text-xs absolute left-[495px]">𝟘5</span>
        </div>
        
        {/* Navigation links row - bigger text */}
        <div className="flex space-x-8 text-base font-bold">
          <Link href="#home" className="hover:text-gray-300 transition-colors">// home</Link>
          <Link href="#expertise" className="hover:text-gray-300 transition-colors">// expertise</Link>
          <Link href="#work" className="hover:text-gray-300 transition-colors">// work</Link>
          <Link href="#experience" className="hover:text-gray-300 transition-colors">// experience</Link>
          <Link href="#contact" className="hover:text-gray-300 transition-colors">// contact</Link>
        </div>
      </div>
    </div>
  );
}