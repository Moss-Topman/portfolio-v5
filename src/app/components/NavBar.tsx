'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

export default function NavBar() {
  // These three drive visual updates, so they stay as useState.
  // When these change, React re-renders the nav and the user sees the result.
  const [isVisible, setIsVisible] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // These are bookkeeping values — we read them inside handleScroll
  // but they never need to cause a re-render on their own.
  // useRef means they update silently, and critically, they do NOT
  // invalidate the useEffect dependency array, so the scroll listener
  // is created once and stays attached for the lifetime of the component.
  const heroHeightRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const scrollingUpRef = useRef(false);

  const calculateHeroHeight = useCallback(() => {
    // We look for the first section element which is the Hero section.
    // Falling back to window.innerHeight is safe since the hero is always full-screen.
    const heroSection = document.querySelector('section:first-of-type') ||
                        document.getElementById('hero');
    heroHeightRef.current = heroSection
      ? heroSection.clientHeight
      : window.innerHeight;
  }, []); // No dependencies — this function never needs to be recreated

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update the ref directly — no setState, no re-render, no effect invalidation.
      // The next time handleScroll fires, it will read the updated ref value correctly.
      scrollingUpRef.current = currentScrollY < lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      const inHeroSection = currentScrollY < heroHeightRef.current;

      if (inHeroSection) {
        // Only call setState when the value actually needs to change.
        // This avoids scheduling re-renders on every single scroll event.
        setIsPastHero(prev => prev ? false : prev);

        if (currentScrollY > lastScrollYRef.current && currentScrollY > 50) {
          setIsVisible(false);
        } else if (scrollingUpRef.current || currentScrollY < 50) {
          setIsVisible(true);
        }
      } else {
        setIsPastHero(prev => !prev ? true : prev);
        setIsVisible(true);
      }
    };

    // Calculate hero height once on mount and whenever window resizes.
    calculateHeroHeight();

    // Run once immediately so the nav state is correct before any scrolling.
    // We do this by reading window.scrollY directly rather than calling handleScroll,
    // which avoids any edge case with lastScrollYRef not being initialized yet.
    const initialScrollY = window.scrollY;
    if (initialScrollY > heroHeightRef.current) {
      setIsPastHero(true);
    }

    // passive: true tells the browser this listener will never call preventDefault(),
    // which allows the browser to begin scrolling immediately without waiting
    // to check if we're going to block it. This is a free performance win.
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateHeroHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateHeroHeight);
    };
    // Empty dependency array — this effect runs once on mount and cleans up on unmount.
    // The scroll handler reads from refs, so it always has fresh values
    // without needing to be recreated.
  }, [calculateHeroHeight]);

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
    { id: 'home', label: 'home', sectionId: 'home' },
    { id: 'expertise', label: 'expertise', sectionId: 'expertise' },
    { id: 'work', label: 'work', sectionId: 'work' },
    { id: 'experience', label: 'experience', sectionId: 'experience' },
    { id: 'contact', label: 'contact', sectionId: 'contact' }
  ];

  const getOpacityClass = (itemId: string) => {
    if (hoveredItem === itemId) return 'opacity-100';
    if (hoveredItem) return 'opacity-30';
    return 'opacity-100';
  };

  const getColorClass = (itemId: string, isSlash: boolean = false) => {
    if (!isPastHero) return 'text-white';
    if (isSlash) return hoveredItem === itemId ? 'text-purple-300' : 'text-purple-400';
    return 'text-purple-400';
  };

  const getScaleClass = (itemId: string) => {
    return hoveredItem === itemId ? 'scale-110' : 'scale-100';
  };

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
      {!isPastHero && (
        <div
          className={`text-xl md:text-2xl font-bold mb-4 md:mb-0 md:absolute md:left-8 font-serif transition-all duration-300 text-[#d4ed31] ${getMossVictorOpacity()}`}
          onMouseEnter={() => setHoveredItem('moss-victor')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          Moss Victor._
        </div>
      )}

      <div className="flex flex-col items-center translate-x-[150px] md:translate-x-[450px]">
        <div className="flex mb-1 relative w-full -translate-y-1">
          {navItems.map((item, index) => (
            <span
              key={item.id}
              className={`text-xs absolute transition-all duration-300 ${getColorClass(item.id)} ${getOpacityClass(item.id)} ${getScaleClass(item.id)}`}
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
                <span className={`${getColorClass(item.id, true)} ${getOpacityClass(item.id)}`}>
                  / /
                </span>{' '}
                {item.label}
              </Link>

              {hoveredItem === item.id && (
                <div className={`absolute -bottom-1 left-0 right-0 h-0.5 opacity-80 rounded-full ${
                  !isPastHero
                    ? 'bg-gradient-to-r from-white to-white'
                    : 'bg-gradient-to-r from-purple-500 to-purple-300'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}