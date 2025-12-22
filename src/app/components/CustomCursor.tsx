"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [cursorOuterX, setCursorOuterX] = useState(0);
  const [cursorOuterY, setCursorOuterY] = useState(0);
  const [innerX, setInnerX] = useState(0);
  const [innerY, setInnerY] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isOnMainPage, setIsOnMainPage] = useState(true);
  
  const pathname = usePathname();

  const speed = 0.12;
  const maxOffset = 24;
  const snapSpeed = 0.15;

  // Initialize client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check if we're on the main page
  useEffect(() => {
    if (!isClient) return;
    // Only show cursor on main page (home)
    setIsOnMainPage(pathname === "/");
  }, [isClient, pathname]);

  // Track mouse position
  useEffect(() => {
    if (!isClient || !isOnMainPage) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isClient, isOnMainPage]);

  // Animation loop for outer circle easing
  useEffect(() => {
    if (!isClient || !isOnMainPage) return;

    let animationFrameId: number;

    const animateCursor = () => {
      setCursorOuterX((prev) => {
        const dx = mouseX - prev;
        return prev + dx * speed;
      });

      setCursorOuterY((prev) => {
        const dy = mouseY - prev;
        return prev + dy * speed;
      });

      // Update inner dot position with analog stick effect
      setInnerX((prev) => {
        const dx = mouseX - cursorOuterX;
        const limitedDx = Math.max(-maxOffset, Math.min(maxOffset, dx));
        return prev + (limitedDx - prev) * snapSpeed;
      });

      setInnerY((prev) => {
        const dy = mouseY - cursorOuterY;
        const limitedDy = Math.max(-maxOffset, Math.min(maxOffset, dy));
        return prev + (limitedDy - prev) * snapSpeed;
      });

      animationFrameId = requestAnimationFrame(animateCursor);
    };

    animationFrameId = requestAnimationFrame(animateCursor);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isClient, isOnMainPage, mouseX, mouseY, cursorOuterX, cursorOuterY, speed, snapSpeed, maxOffset]);

  // Handle link/button hover
  useEffect(() => {
    if (!isClient || !isOnMainPage) return;

    const interactiveElements = document.querySelectorAll("a, button, [role='button']");

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isClient, isOnMainPage]);

  if (!isClient || !isOnMainPage) return null;

  return (
    <>
      {/* Outer circle - with more linear border */}
      <div
        className="circle-cursor circle-cursor--outer fixed pointer-events-none z-50 rounded-full bg-transparent"
        style={{
          left: `${cursorOuterX}px`,
          top: `${cursorOuterY}px`,
          transform: "translate(-50%, -50%)",
          transition: "border 0.2s ease, width 0.2s ease, height 0.2s ease",
          // More linear border: simple 2px solid border without complex styling
          border: isHover ? "1px solid #ffffff" : "1px solid #ffffff",
          // Border color using mix-blend-difference for better visibility
          width: isHover ? "40px" : "24px",
          height: isHover ? "40px" : "24px",
          // Use mix-blend-difference for consistent visibility on all backgrounds
          mixBlendMode: "difference",
        }}
      />

      {/* Inner circle - purple dot */}
      <div
        className="circle-cursor circle-cursor--inner fixed pointer-events-none z-50 rounded-full"
        style={{
          left: `${cursorOuterX + innerX}px`,
          top: `${cursorOuterY + innerY}px`,
          transform: "translate(-50%, -50%)",
          backgroundColor: "#a855f7",
          transition: "background-color 0.2s ease, width 0.2s ease, height 0.2s ease",
          width: isHover ? "8px" : "6px",
          height: isHover ? "8px" : "6px",
        }}
      />
    </>
  );
}