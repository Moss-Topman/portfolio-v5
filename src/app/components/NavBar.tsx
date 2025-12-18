'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const heroHeightRef = useRef(0);

  useEffect(() => {
    const calculateHeroHeight = () => {
      const heroSection = document.querySelector('section:first-of-type') || 
                         document.getElementById('hero');
      if (heroSection) {
        heroHeightRef.current = heroSection.clientHeight;
      } else {
        heroHeightRef.current = window.innerHeight;
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        setScrollingUp(true);
      } else if (currentScrollY > lastScrollY) {
        setScrollingUp(false);
      }
      
      const expertiseSection = document.getElementById('expertise');
      const expertiseOffset = expertiseSection?.offsetTop || heroHeightRef.current;
      
      const inHeroSection = currentScrollY < heroHeightRef.current;
      
      if (inHeroSection) {
        setIsPastHero(false);
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else if (scrollingUp || currentScrollY < 50) {
          setIsVisible(true);
        }
      } else {
        setIsPastHero(true);
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    calculateHeroHeight();
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateHeroHeight);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateHeroHeight);
    };
  }, [lastScrollY, scrollingUp]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'home', sectionId: 'hero-section' },
    { id: 'expertise', label: 'expertise', sectionId: 'expertise' },
    { id: 'work', label: 'work', sectionId: 'work' },
    { id: 'experience', label: 'experience', sectionId: 'experience' },
    { id: 'contact', label: 'contact', sectionId: 'contact' }
  ];

  // Get opacity class based on hover state ONLY (not based on section)
  const getOpacityClass = (itemId: string) => {
    if (hoveredItem === itemId) {
      return 'opacity-100';
    } else if (hoveredItem) {
      return 'opacity-30';
    }
    return 'opacity-100';
  };

  // Get color class based on section ONLY
  const getColorClass = (itemId: string, isNumber: boolean = false, isSlash: boolean = false) => {
    if (!isPastHero) {
      // Hero section - white colors
      return 'text-white';
    } else {
      // Past hero section - purple colors with variations
      if (isSlash) {
        return hoveredItem === itemId ? 'text-purple-300' : 'text-purple-400';
      }
      return 'text-purple-400';
    }
  };

  // Get scale class for numbers
  const getScaleClass = (itemId: string) => {
    return hoveredItem === itemId ? 'scale-110' : 'scale-100';
  };

  // Moss Victor opacity
  const getMossVictorOpacity = () => {
    if (hoveredItem === 'moss-victor') return 'opacity-100';
    if (hoveredItem) return 'opacity-30';
    return 'opacity-100';
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center p-4 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        isPastHero 
          ? 'bg-[#252529]/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: isPastHero ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: isPastHero ? 'blur(8px)' : 'none',
        backgroundColor: isPastHero ? '#252529' : 'transparent'
      }}
    >
      {/* Top-left Moss Victor._ */}
      {!isPastHero && (
        <div 
          className={`text-xl md:text-2xl font-bold mb-4 md:mb-0 md:absolute md:left-8 font-serif transition-all duration-300 text-[#d4ed31] ${getMossVictorOpacity()}`}
          onMouseEnter={() => setHoveredItem('moss-victor')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          Moss Victor._
        </div>
      )}
      
      {/* Centered numbered sections */}
      <div className="flex flex-col items-center translate-x-[150px] md:translate-x-[450px]">
        {/* Numbers row */}
        <div className="flex mb-1 relative w-full -translate-y-1">
          {navItems.map((item, index) => (
            <span 
              key={item.id}
              className={`text-xs absolute transition-all duration-300 ${getColorClass(item.id, true)} ${getOpacityClass(item.id)} ${getScaleClass(item.id)}`}
              style={{ 
                left: index === 0 ? '50px' : 
                       index === 1 ? '190px' : 
                       index === 2 ? '297px' : 
                       index === 3 ? '455px' : '580px'
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {`0${index + 1}`}
            </span>
          ))}
        </div>
        
        {/* Navigation links row */}
        <div className="flex space-x-8 md:space-x-12 text-sm md:text-base font-bold">
          {navItems.map((item) => (
            <div 
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link 
                href={`#${item.id}`}
                className={`transition-all duration-300 ${getColorClass(item.id)} ${getOpacityClass(item.id)}`}
                onClick={(e) => handleNavClick(e, item.sectionId)}
              >
                <span className={`${getColorClass(item.id, false, true)} ${getOpacityClass(item.id)}`}>
                  / /
                </span>{' '}
                {item.label}
              </Link>
              
              {/* Hover indicator line - only shows on hovered item */}
              {hoveredItem === item.id && (
                <div className={`absolute -bottom-1 left-0 right-0 h-0.5 opacity-80 rounded-full ${
                  !isPastHero 
                    ? 'bg-gradient-to-r from-white to-white' 
                    : 'bg-gradient-to-r from-purple-500 to-purple-300'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}