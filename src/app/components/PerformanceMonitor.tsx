"use client";
import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Log performance metrics
      const logPerformance = () => {
        if (window.performance) {
          const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const paintTiming = performance.getEntriesByType('paint');
          
          if (navTiming) {
            console.log('🚀 Performance Metrics:');
            console.log(`- TTFB: ${navTiming.responseStart - navTiming.requestStart}ms`);
            console.log(`- DOM Load: ${navTiming.domContentLoadedEventEnd - navTiming.domContentLoadedEventStart}ms`);
            console.log(`- Full Load: ${navTiming.loadEventEnd - navTiming.loadEventStart}ms`);
          }
          
          if (paintTiming) {
            paintTiming.forEach((paint) => {
              console.log(`- ${paint.name}: ${Math.round(paint.startTime)}ms`);
            });
          }
        }
      };
      
      // Monitor LCP
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry;
          console.log('🎯 LCP:', Math.round(lastEntry.startTime), 'ms', lastEntry);
        });
        
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        
        // Monitor CLS
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            console.log('📐 CLS:', entry);
          }
        });
        
        clsObserver.observe({ type: 'layout-shift', buffered: true });
        
        // Log when page is fully loaded
        window.addEventListener('load', () => {
          setTimeout(logPerformance, 1000);
        });
        
        return () => {
          lcpObserver.disconnect();
          clsObserver.disconnect();
        };
      }
    }
  }, []);
  
  return null;
}