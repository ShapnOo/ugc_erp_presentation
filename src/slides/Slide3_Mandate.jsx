import React from 'react';

export default function Slide3_Mandate() {
  return (
    <div className="relative w-full h-full bg-[#EFF4F8] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#05A872]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            THE MANDATE WE SERVE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          A Nation Asking to Be <span className="text-[#05A872] font-serif italic font-black">Digitally Connected</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          Connecting UGC governance, public & private universities, students, faculty, researchers, industry, and funding bodies into one unified network.
        </p>
      </div>

      {/* Main Diagram Area: Left Interactive Network Canvas (8 cols) + Right Sidebar (4 cols) */}
      <div className="grid grid-cols-12 gap-6 my-auto items-stretch relative">
        {/* Left Network Canvas (8 cols) */}
        <div className="col-span-12 lg:col-span-8 bg-white border border-slate-300 rounded-2xl p-6 shadow-xl relative flex items-center justify-center min-h-[360px]">
          
          {/* Animated SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <line x1="22%" y1="22%" x2="50%" y2="50%" stroke="#05A872" strokeWidth="2" className="animated-dash-line" opacity="0.6" />
            <line x1="78%" y1="22%" x2="50%" y2="50%" stroke="#05A872" strokeWidth="2" className="animated-dash-line" opacity="0.6" />
            <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="#C5A059" strokeWidth="2" className="animated-dash-line" opacity="0.7" />
            <line x1="80%" y1="50%" x2="50%" y2="50%" stroke="#C5A059" strokeWidth="2" className="animated-dash-line" opacity="0.7" />
            <line x1="22%" y1="78%" x2="50%" y2="50%" stroke="#05A872" strokeWidth="2" className="animated-dash-line" opacity="0.6" />
            <line x1="50%" y1="82%" x2="50%" y2="50%" stroke="#05A872" strokeWidth="2.5" className="animated-dash-line" opacity="0.8" />
            <line x1="78%" y1="78%" x2="50%" y2="50%" stroke="#05A872" strokeWidth="2" className="animated-dash-line" opacity="0.6" />
          </svg>

          {/* Node Grid Layout */}
          <div className="relative z-10 w-full h-full grid grid-cols-3 grid-rows-3 gap-4 items-center justify-items-center">
            
            {/* Top-Left: Public Universities */}
            <div className="bg-[#047857] text-white p-3.5 px-5 rounded-xl shadow-lg border border-emerald-400 text-center w-full max-w-[210px] hover-float">
              <h4 className="font-serif font-black text-sm text-white">Public Universities</h4>
              <p className="text-[9px] font-mono tracking-widest text-emerald-100 uppercase mt-0.5">ALL 4 SECTORS</p>
            </div>

            <div></div>

            {/* Top-Right: Private Universities */}
            <div className="bg-[#047857] text-white p-3.5 px-5 rounded-xl shadow-lg border border-emerald-400 text-center w-full max-w-[210px] hover-float">
              <h4 className="font-serif font-black text-sm text-white">Private Universities</h4>
              <p className="text-[9px] font-mono tracking-widest text-emerald-100 uppercase mt-0.5">NATIONWIDE</p>
            </div>

            {/* Mid-Left: Students */}
            <div className="bg-[#C5A059] text-slate-950 p-3.5 px-5 rounded-xl shadow-lg border border-amber-600 text-center w-full max-w-[210px] hover-float">
              <h4 className="font-serif font-black text-base text-slate-950">Students</h4>
              <p className="text-[9px] font-mono tracking-widest text-slate-900 uppercase font-bold mt-0.5">MILLIONS ANNUALLY</p>
            </div>

            {/* CENTER HUB: UGC Authority */}
            <div className="bg-[#0B131F] text-white p-5 px-7 rounded-2xl shadow-2xl border-2 border-[#C5A059] text-center w-full max-w-[220px] hub-pulse-ring hover-float cursor-pointer">
              <h3 className="font-serif font-black text-2xl text-white tracking-tight leading-none mb-1">
                UGC Authority
              </h3>
              <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#C5A059] uppercase">
                THE CENTRAL HUB
              </p>
            </div>

            {/* Mid-Right: Faculty */}
            <div className="bg-[#C5A059] text-slate-950 p-3.5 px-5 rounded-xl shadow-lg border border-amber-600 text-center w-full max-w-[210px] hover-float">
              <h4 className="font-serif font-black text-base text-slate-950">Faculty</h4>
              <p className="text-[9px] font-mono tracking-widest text-slate-900 uppercase font-bold mt-0.5">NATIONWIDE</p>
            </div>

            {/* Bottom-Left: Researchers */}
            <div className="bg-white border-2 border-[#047857] text-[#047857] p-3.5 px-5 rounded-xl shadow-md text-center w-full max-w-[210px] hover-float">
              <h4 className="font-serif font-black text-sm">Researchers</h4>
            </div>

            {/* Bottom-Center: Industry Partners */}
            <div className="bg-white border-2 border-[#047857] text-[#047857] p-3.5 px-5 rounded-xl shadow-md text-center w-full max-w-[210px] hover-float">
              <h4 className="font-serif font-black text-sm">Industry Partners</h4>
            </div>

            {/* Bottom-Right: Funding Bodies */}
            <div className="bg-white border-2 border-[#047857] text-[#047857] p-3.5 px-5 rounded-xl shadow-md text-center w-full max-w-[210px] hover-float">
              <h4 className="font-serif font-black text-sm">Funding Bodies</h4>
            </div>

          </div>
        </div>

        {/* Right Sidebar (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-[#0B131F] text-slate-100 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans">
              FIVE CONNECTED PILLARS
            </p>

            <h3 className="font-serif font-black text-xl text-white">
              One Unified Network
            </h3>

            <div className="space-y-3 text-xs text-slate-300 font-sans">
              <div className="flex items-start gap-2">
                <span className="text-[#05A872] font-bold">✓</span>
                <span><strong>Governance & Oversight</strong> — Real-time central UGC reporting.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#05A872] font-bold">✓</span>
                <span><strong>Education & Academics</strong> — 18 UMS modules across 8 divisions.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#05A872] font-bold">✓</span>
                <span><strong>Research & Grants</strong> — GMS proposal to audit workflow.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#05A872] font-bold">✓</span>
                <span><strong>Industry Matchmaking</strong> — Nexus job, internship & funding hub.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#05A872] font-bold">✓</span>
                <span><strong>Student Centricity</strong> — High-speed admission automation.</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-3 mt-4 text-[9px] font-mono text-[#C5A059] uppercase tracking-widest">
            DATA CAPTURED ONCE · SHARED SAFELY NATIONWIDE
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-300 pt-3 flex justify-between font-mono text-[11px] text-slate-600">
        <span>03 · NATIONAL MANDATE · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">ECOSYSTEM NETWORK MAP</span>
      </div>
    </div>
  );
}
