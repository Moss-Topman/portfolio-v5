'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProjectNavBar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Detect if dark mode is on
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };
    
    // Check when page loads
    checkDarkMode();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Navigation links
  const navItems = [
    { id: 'home', label: 'home', href: '/' },
    { id: 'expertise', label: 'expertise', href: '/#expertise' },
    { id: 'work', label: 'work', href: '/#work' },
    { id: 'experience', label: 'experience', href: '/#experience' },
    { id: 'contact', label: 'contact', href: '/#contact' }
  ];

  // Text color based on theme
  const textColor = isDarkMode ? 'text-white' : 'text-black';

  return (
    <nav className="w-full p-4 flex justify-center items-center">
      <div className="flex items-center">
        {/* Navigation links: / / home, / / expertise, etc. */}
        <div className="flex space-x-12 text-sm font-bold">
          {navItems.map((item) => (
            <div 
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link 
                href={item.href}
                className={`transition-all duration-300 ${textColor} ${
                  hoveredItem === item.id ? 'opacity-100' : 
                  hoveredItem ? 'opacity-30' : 'opacity-100'
                }`}
              >
                <span>/ /</span> {item.label}
              </Link>
              
              {/* Hover underline */}
              {hoveredItem === item.id && (
                <div className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                  isDarkMode ? 'bg-white' : 'bg-black'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}