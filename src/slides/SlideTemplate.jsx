import React from 'react';

/**
 * SLIDE TEMPLATE
 * Duplicate this file to create Slide4.jsx, Slide5.jsx, etc.
 * Then register it in src/config/slidesConfig.js!
 */
export default function SlideTemplate() {
  return (
    <div className="relative w-full h-full bg-[#0A111E] text-slate-100 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-emerald-500"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-emerald-400 uppercase">
            CATEGORY / SECTION NAME
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-3">
          Your Slide Header <span className="text-emerald-400 font-display italic">Highlight Text</span>
        </h1>

        <p className="font-serif italic text-slate-300 text-base md:text-lg max-w-3xl">
          Enter a subtitle or key takeaway message for your new slide here.
        </p>
      </div>

      {/* Main Slide Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        {/* Card 1 */}
        <div className="bg-[#0F1A2D] border border-slate-800 p-6 rounded-xl shadow-lg hover:border-emerald-500/50 transition-all">
          <h3 className="font-serif text-xl font-bold text-emerald-400 mb-2">01. Key Feature</h3>
          <p className="text-xs text-slate-300 leading-relaxed font-light">
            Add bullet points or description content for your slide topic.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0F1A2D] border border-slate-800 p-6 rounded-xl shadow-lg hover:border-emerald-500/50 transition-all">
          <h3 className="font-serif text-xl font-bold text-amber-400 mb-2">02. Strategic Value</h3>
          <p className="text-xs text-slate-300 leading-relaxed font-light">
            Add statistics, diagrams, or comparison tables inside this block.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0F1A2D] border border-slate-800 p-6 rounded-xl shadow-lg hover:border-emerald-500/50 transition-all">
          <h3 className="font-serif text-xl font-bold text-white mb-2">03. Implementation</h3>
          <p className="text-xs text-slate-300 leading-relaxed font-light">
            Deliver actionable insights tailored for the executive committee.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono flex justify-between">
        <span>04 · SECTION TITLE · SYSTECH × PAKIZA LIMITED</span>
        <span>CONFIDENTIAL EXECUTIVE PROPOSAL</span>
      </div>
    </div>
  );
}
