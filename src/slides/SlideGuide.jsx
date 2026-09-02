import React from 'react';
import { PlusCircle, FileCode, CheckCircle2, Layers } from 'lucide-react';

export default function SlideGuide() {
  return (
    <div className="relative w-full h-full bg-[#0A111E] text-slate-100 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-amber-500"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-amber-400 uppercase">
            DEVELOPER & PRESENTATION GUIDE
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-2">
          How to Add <span className="text-emerald-400 font-display italic">More Slides</span> One by One.
        </h1>

        <p className="font-serif italic text-slate-300 text-base md:text-lg max-w-3xl">
          Follow this simple 3-step guide whenever you want to add Slide 4, Slide 5, or customized presentation decks.
        </p>
      </div>

      {/* 3 Step Guide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        {/* Step 1 */}
        <div className="bg-[#0F1A2D] border border-emerald-900/60 p-6 rounded-2xl shadow-xl relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-emerald-950 text-emerald-400 rounded-xl border border-emerald-800">
              <FileCode className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest block">
                STEP 01
              </span>
              <h3 className="font-serif text-lg font-bold text-white">Create Component</h3>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
            Duplicate <code className="bg-slate-900 px-1.5 py-0.5 text-emerald-300 rounded font-mono text-[11px]">src/slides/SlideTemplate.jsx</code> into a new file like <code className="bg-slate-900 px-1.5 py-0.5 text-amber-300 rounded font-mono text-[11px]">Slide4_Financials.jsx</code>.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-[#0F1A2D] border border-amber-900/60 p-6 rounded-2xl shadow-xl relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-amber-950 text-amber-400 rounded-xl border border-amber-800">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest block">
                STEP 02
              </span>
              <h3 className="font-serif text-lg font-bold text-white">Register in Config</h3>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
            Open <code className="bg-slate-900 px-1.5 py-0.5 text-amber-300 rounded font-mono text-[11px]">src/config/slidesConfig.js</code> and add your new slide object to the array.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-[#0F1A2D] border border-slate-800 p-6 rounded-2xl shadow-xl relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-slate-900 text-slate-200 rounded-xl border border-slate-700">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
                STEP 03
              </span>
              <h3 className="font-serif text-lg font-bold text-white">Present Instantly</h3>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
            Press <kbd className="px-1.5 py-0.5 bg-slate-800 text-amber-400 rounded font-mono text-[10px]">F</kbd> for Fullscreen PPT Mode or press <kbd className="px-1.5 py-0.5 bg-slate-800 text-emerald-400 rounded font-mono text-[10px]">O</kbd> to see all slides in the overview grid!
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono flex justify-between">
        <span>04 · EXTENSIBILITY GUIDE · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-emerald-400 font-semibold">READY FOR SLIDE 4 & BEYOND</span>
      </div>
    </div>
  );
}
