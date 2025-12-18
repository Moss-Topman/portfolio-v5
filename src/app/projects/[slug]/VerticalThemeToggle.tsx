"use client";

import React, { useState, useEffect } from "react";

const VerticalThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set to true for dark mode default

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme) {
      const isDark = savedTheme === "dark";
      setIsDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default to dark mode if no saved theme
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    
    if (newIsDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="relative">
        {/* Toggle Switch - Purple border */}
        <button
          onClick={toggleTheme}
          className="relative flex flex-col items-center justify-center w-6 h-32 bg-white border border-purple-400 dark:border-purple-400 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
          aria-label="Toggle dark mode"
        >
          {/* Enhanced Contrast Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full overflow-hidden">
            
            {/* Background Overlay for Better Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80"></div>
            
            {/* Vertical Text Container */}
            <div className="relative flex flex-col items-center justify-between h-full py-6">
              
              {/* Light Mode Text - Top */}
              <div className="flex items-center justify-center h-1/2 w-full">
                <div className="relative">
                  <span 
                    className={`text-[8px] font-extrabold tracking-[0.15em] uppercase transition-all duration-300 ${
                      isDarkMode 
                        ? "text-gray-800 opacity-25 dark:text-gray-400" 
                        : "text-gray-600 opacity-30 drop-shadow-md"
                    }`}
                    style={{ 
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      transform: 'rotate(180deg)',
                      lineHeight: '2.1',
                      letterSpacing: '0.3em'
                    }}
                  >
                    Light
                  </span>
                </div>
              </div>
              
              {/* Center Divider - Changed to purple */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-1 bg-purple-300 dark:bg-purple-300"></div>
              
              {/* Dark Mode Text - Bottom */}
              <div className="flex items-center justify-center h-1/2 w-full">
                <div className="relative">
                  <span 
                    className={`text-[8px] font-extrabold tracking-[0.15em] uppercase transition-all duration-300 ${
                      isDarkMode 
                        ? "text-white opacity-100 drop-shadow-sm" 
                        : "text-gray-600 opacity-30"
                    }`}
                    style={{ 
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      transform: 'rotate(180deg)',
                      lineHeight: '2.1',
                      letterSpacing: '0.3em'
                    }}
                  >
                    Dark
                  </span>
                </div>
              </div>

              {/* Active Mode Indicator - Purple dot */}
              <div 
                className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                  isDarkMode 
                    ? "bottom-5 w-1.5 h-1.5 bg-purple-300 rounded-full shadow-md" 
                    : "top-6 w-2 h-2 bg-purple-500 rounded-full shadow-inner"
                }`}
              ></div>
            </div>
          </div>
        </button>

        {/* Connection Line - Purple gradient */}
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent opacity-50"></div>
      </div>
    </div>
    
  );
};

export default VerticalThemeToggle;