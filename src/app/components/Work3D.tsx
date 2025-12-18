'use client';

import React from 'react';

export default function MyWork() {
  return (
   <section id="work" className="py-20 px-4 min-h-[150vh] bg-[#252529]">
      {/* Big Bold MY WORK Header */}
      <div className="flex justify-start">
        <h2 className="elementor-heading-title fancy-heading font-poppins text-[120px] font-black opacity-90 leading-none tracking-tight transform translate-x-[180px]">
          MY<br />WORK
        </h2>
      </div>

      {/* 
        =============================================
        BACKGROUND SENTENCE - MULTIPLE LINES
        =============================================
        
        TO MOVE LEFT/RIGHT: Change the number in translate-x-[200px]
        
        Examples:
        - translate-x-[-100px] = far left
        - translate-x-[0px] = center  
        - translate-x-[200px] = right (current)
        - translate-x-[400px] = far right
      */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 translate-y-[-20px] translate-x-[200px] pointer-events-none">
        <div className="text-lg  font-bold text-white opacity-100 space-y-2 max-w-2xl min-h-[200vh]">
          <div>Developed a trend-following trading strategy</div>
          <div>that generates Buy and Sell signals</div>
          <div>using EMA crossovers and RSI.</div>
          <div>This portfolio was inspired by Tamal Sen's work</div>
          <div>and was carefully built through</div>
          <div>advanced use of AI tools</div>
          <div>such as ChatGPT and DeepSeek</div>
          <div>to research, customize, and refine the system.</div>
          <div>It reflects my growing skills</div>
          <div>in AI prompting and software engineering,</div>
          <div>showcasing my ability to turn ideas</div>
          <div>into functional technical projects.</div>
        </div>
      </div>
    </section>
  );
}