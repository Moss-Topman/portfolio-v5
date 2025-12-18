"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [cursorOuterX, setCursorOuterX] = useState(0);
  const [cursorOuterY, setCursorOuterY] = useState(0);
  const [innerX, setInnerX] = useState(0);
  const [innerY, setInnerY] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const speed = 0.12; // Easing speed for outer circle lag
  const maxOffset = 24; // Max distance inner dot can move from center (px)
  const snapSpeed = 0.15; // Speed for snapping back to center

  // Initialize client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Track mouse position
  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isClient]);

  // Animation loop for outer circle easing
  useEffect(() => {
    if (!isClient) return;

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
      // Calculate distance from outer circle center to mouse
      setInnerX((prev) => {
        const dx = mouseX - cursorOuterX;
        // Limit distance to maxOffset (analog stick constraint)
        const limitedDx = Math.max(-maxOffset, Math.min(maxOffset, dx));
        // Snap back towards center when not moving fast
        return prev + (limitedDx - prev) * snapSpeed;
      });

      setInnerY((prev) => {
        const dy = mouseY - cursorOuterY;
        // Limit distance to maxOffset
        const limitedDy = Math.max(-maxOffset, Math.min(maxOffset, dy));
        // Snap back towards center
        return prev + (limitedDy - prev) * snapSpeed;
      });

      animationFrameId = requestAnimationFrame(animateCursor);
    };

    animationFrameId = requestAnimationFrame(animateCursor);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isClient, mouseX, mouseY, cursorOuterX, cursorOuterY, speed, snapSpeed, maxOffset]);

  // Handle link/button hover
  useEffect(() => {
    if (!isClient) return;

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
  }, [isClient]);

  if (!isClient) return null;

  return (
    <>
      {/* Outer circle - lagging with easing */}
      <div
        className="circle-cursor circle-cursor--outer fixed pointer-events-none z-50 rounded-full border-2 bg-transparent"
        style={{
          left: `${cursorOuterX}px`,
          top: `${cursorOuterY}px`,
          transform: "translate(-50%, -50%)",
          transition: isHover ? "border-color 0.2s ease, width 0.2s ease, height 0.2s ease" : "none",
          borderColor: isHover ? "#a855f7" : "#a855f7",
          width: isHover ? "48px" : "32px",
          height: isHover ? "48px" : "32px",
        }}
      />

      {/* Inner circle - tracking mouse with snap-back (analog stick effect) */}
      <div
        className="circle-cursor circle-cursor--inner fixed pointer-events-none z-50 rounded-full"
        style={{
          left: `${cursorOuterX + innerX}px`,
          top: `${cursorOuterY + innerY}px`,
          transform: "translate(-50%, -50%)",
          backgroundColor: "#a855f7",
          transition: isHover ? "background-color 0.2s ease, width 0.2s ease, height 0.2s ease" : "none",
          width: isHover ? "12px" : "8px",
          height: isHover ? "12px" : "8px",
        }}
      />
    </>
  );
}