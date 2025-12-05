"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 30 }); // Lag for smooth move
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const [isHover, setIsHover] = useState(false);
  const scale = useTransform(() => isHover ? 3 : 1); // Grow to 30px on hover

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - 5); // Center dot
      y.set(e.clientY - 5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]); // Added x/y to dependencies

  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("mouseenter", () => setIsHover(true));
      link.addEventListener("mouseleave", () => setIsHover(false));
    });
    return () => {
      links.forEach(link => {
        link.removeEventListener("mouseenter", () => setIsHover(true));
        link.removeEventListener("mouseleave", () => setIsHover(false));
      });
    };
  }, []);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null; // Disable if reduced motion

  return (
    <motion.div
      className="fixed pointer-events-none z-50 w-4 h-4 rounded-full bg-blue-500 opacity-50"
      style={{ x: springX, y: springY, scale }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }} // Initial bounce
      transition={{ type: "spring", stiffness: 300, damping: 10 }} // Bounce on load
      whileHover={{ scale: 1.2 }} // Micro-interaction on hover
    />
  );
}