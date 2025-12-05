"use client";

import React, { useState, useEffect } from "react";

const VerticalThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
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
        {/* Toggle Switch - Enhanced Visibility */}
        <button
          onClick={toggleTheme}
          className="relative flex flex-col items-center justify-center w-6 h-32 bg-white border border-gray-300 dark:border-gray-600 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
          aria-label="Toggle dark mode"
        >
          {/* Enhanced Contrast Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full overflow-hidden">
            
            {/* Background Overlay for Better Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80"></div>
            
            {/* Vertical Text Container */}
            <div className="relative flex flex-col items-center justify-between h-full py-6">
              
              {/* Light Mode Text - Top (Enhanced Visibility) */}
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
              
              {/* Center Divider */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-1 bg-gray-300 dark:bg-gray-500"></div>
              
              {/* Dark Mode Text - Bottom (Enhanced Visibility) */}
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

              {/* Active Mode Indicator */}
              <div 
                className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                  isDarkMode 
                    ? "bottom-5 w-1.5 h-1.5 bg-white rounded-full shadow-md" 
                    : "top-6 w-2 h-2 bg-gray-900 rounded-full shadow-inner "
                }`}
              ></div>
            </div>
          </div>
        </button>

        {/* Connection Line - Optional */}
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600 dark:to-transparent opacity-50"></div>
      </div>
    </div>
    
  );
};

export default VerticalThemeToggle;