import React from 'react';

export default function Slide13_DeploymentModel() {
  const universities = Array.from({ length: 10 }, (_, i) => `University ${String(i + 1).padStart(2, '0')}`);

  return (
    <div className="relative w-full h-full bg-[#EEF2F7] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#2563EB]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#2563EB] uppercase font-sans">
            OUR UMS-ERP DEPLOYMENT MODEL
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-3">
          Common Core + <span className="text-[#2563EB] font-serif italic font-black">Institutional</span> Customisation
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          We deliver one centralised, standard ERP core, augmented by institution-specific customisation for the first 10 anchor universities.
        </p>
      </div>

      {/* Strategy Cards */}
      <div className="grid grid-cols-12 gap-6 my-auto items-stretch">
        {/* Card 1: Common Core (Blue) */}
        <div className="col-span-12 lg:col-span-6 bg-[#2563EB] text-white p-6 md:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="font-serif text-6xl md:text-7xl font-black leading-none text-white/90">
              1
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-blue-100 uppercase">
              STANDARD CORE WE BUILD
            </span>
          </div>

          <div className="space-y-2 mt-4">
            <h3 className="font-serif font-black text-2xl text-white">
              Common UMS-ERP Core
            </h3>
            <p className="text-xs text-blue-100 leading-relaxed font-light">
              A centralized standard solution for the 18-module university lifecycle — deployable, maintainable, audited.
            </p>
          </div>
        </div>

        {/* Card 2: Institution Specific (White Box with Gold Accent) */}
        <div className="col-span-12 lg:col-span-6 bg-white border border-slate-300 p-6 md:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="font-serif text-6xl md:text-7xl font-black leading-none text-[#C5A059]">
              10
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#C5A059] uppercase">
              ANCHOR UNIVERSITIES
            </span>
          </div>

          <div className="space-y-2 mt-4">
            <h3 className="font-serif font-black text-2xl text-slate-900">
              Institution-Specific Layer
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Each anchor university receives required customisation while keeping the core architecture intact.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Flow Diagram: Core to 10 Universities */}
      <div className="space-y-2 my-2">
        <p className="text-[10px] font-mono font-bold text-[#C5A059] uppercase tracking-widest text-center">
          VISUAL — CORE + CUSTOMISATION FLOW
        </p>

        {/* Core Box */}
        <div className="flex justify-center">
          <div className="bg-[#2563EB] text-white px-8 py-2.5 rounded-lg shadow-md font-serif font-black text-center text-sm border border-blue-400">
            UMS-ERP CORE
            <span className="block font-mono text-[8px] uppercase tracking-widest text-blue-200 font-bold">STANDARD 18 MODULES</span>
          </div>
        </div>

        {/* 10 University Boxes */}
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2 text-center text-[10px] font-mono">
          {universities.map((u, idx) => (
            <div
              key={idx}
              className={`p-2 rounded border ${
                idx === 9
                  ? 'bg-[#FEF8EC] border-[#C5A059] text-amber-800 font-bold shadow-md'
                  : 'bg-white border-slate-300 text-slate-700'
              }`}
            >
              {u}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-300 pt-3 flex justify-between font-mono text-[11px] text-slate-600">
        <span>10 · UMS-ERP DEPLOYMENT · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#2563EB]">COMMON CORE + CUSTOMISATION</span>
      </div>
    </div>
  );
}
