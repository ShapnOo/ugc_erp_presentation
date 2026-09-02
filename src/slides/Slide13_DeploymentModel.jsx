import React from 'react';

export default function Slide13_DeploymentModel() {
  const universities = Array.from({ length: 10 }, (_, i) => `University ${String(i + 1).padStart(2, '0')}`);

  return (
    <div className="relative w-full h-full bg-[#EEF2F7] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Soft Radial Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-[2px] bg-[#2563EB]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#2563EB] uppercase font-sans">
            OUR UMS-ERP DEPLOYMENT MODEL
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Common Core + <span className="text-[#2563EB] font-serif italic font-black">Institutional</span> Customisation
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          We deliver one centralised, standard ERP core, augmented by institution-specific customisation for the first 10 anchor universities.
        </p>
      </div>

      {/* Main Strategy Cards Section (Balanced Grid filling space cleanly) */}
      <div className="relative z-10 grid grid-cols-12 gap-6 my-auto items-stretch">
        {/* Card 1: Common Core (Royal Blue) */}
        <div className="col-span-12 lg:col-span-6 bg-[#2563EB] text-white p-7 md:p-9 rounded-2xl shadow-xl flex flex-col justify-between hover-float border border-blue-400">
          <div className="flex items-start justify-between">
            <span className="font-serif text-6xl md:text-7xl font-black leading-none text-white/90">
              1
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-blue-100 uppercase bg-blue-700/60 px-3 py-1 rounded-md">
              STANDARD CORE WE BUILD
            </span>
          </div>

          <div className="space-y-3 mt-6">
            <h3 className="font-serif font-black text-2xl md:text-3xl text-white">
              Common UMS-ERP Core
            </h3>
            <p className="text-xs md:text-sm text-blue-100 leading-relaxed font-light">
              A centralized standard solution for the 18-module university lifecycle — deployable, maintainable, and audited across all 8 divisions of Bangladesh.
            </p>
          </div>

          <div className="border-t border-blue-400/60 pt-3 mt-6 flex justify-between font-mono text-[10px] text-blue-200 uppercase font-bold">
            <span>• 18 STANDARD MODULES</span>
            <span>• 100% UNIFIED DATA SCHEMAS</span>
          </div>
        </div>

        {/* Card 2: Institution Specific (Dark Executive Navy with Gold Accent) */}
        <div className="col-span-12 lg:col-span-6 bg-[#0B131F] text-slate-100 p-7 md:p-9 rounded-2xl shadow-xl flex flex-col justify-between hover-float border border-slate-800">
          <div className="flex items-start justify-between">
            <span className="font-serif text-6xl md:text-7xl font-black leading-none text-[#C5A059]">
              10
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#C5A059] uppercase bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
              ANCHOR UNIVERSITIES
            </span>
          </div>

          <div className="space-y-3 mt-6">
            <h3 className="font-serif font-black text-2xl md:text-3xl text-white">
              Institution-Specific Layer
            </h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
              Each anchor university receives required customisation for local workflows and UI branding while keeping the core architecture intact.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-3 mt-6 flex justify-between font-mono text-[10px] text-[#C5A059] uppercase font-bold">
            <span>• LOCAL UI/UX BRANDING</span>
            <span>• ZERO CORE FORK RISK</span>
          </div>
        </div>
      </div>

      {/* Visual Flow Diagram: Core to 10 Universities */}
      <div className="relative z-10 space-y-2 mt-2">
        <div className="flex items-center justify-center gap-2">
          <span className="h-[1px] w-12 bg-[#C5A059]/40"></span>
          <p className="text-[10px] font-mono font-bold text-[#C5A059] uppercase tracking-widest text-center">
            VISUAL — CORE + CUSTOMISATION DEPLOYMENT FLOW
          </p>
          <span className="h-[1px] w-12 bg-[#C5A059]/40"></span>
        </div>

        {/* Core Box + 10 University Cards Row */}
        <div className="relative flex flex-col items-center">
          {/* Core Box */}
          <div className="relative z-10 bg-[#2563EB] text-white px-8 py-2 rounded-xl shadow-lg font-serif font-black text-center text-xs md:text-sm border-2 border-blue-300 hover-float mb-2">
            UMS-ERP CORE
            <span className="block font-mono text-[8px] uppercase tracking-widest text-blue-100 font-bold">STANDARD 18 MODULES</span>
          </div>

          {/* 10 University Boxes */}
          <div className="relative z-10 w-full grid grid-cols-5 md:grid-cols-10 gap-2 text-center text-[10px] font-mono">
            {universities.map((u, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg border transition-all duration-300 hover-float ${
                  idx === 9
                    ? 'bg-[#FFFDF7] border-2 border-[#C5A059] text-amber-900 font-bold shadow-md'
                    : 'bg-white border-slate-300 text-slate-800 shadow-xs'
                }`}
              >
                {u}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-slate-300 pt-3 flex justify-between font-mono text-[11px] text-slate-600">
        <span>10 · UMS-ERP DEPLOYMENT · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#2563EB]">COMMON CORE + CUSTOMISATION</span>
      </div>
    </div>
  );
}
