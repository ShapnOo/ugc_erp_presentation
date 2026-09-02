import React from 'react';

export default function Slide3_Mandate() {
  return (
    <div className="relative w-full h-full bg-[#EFF4F8] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-[3px] bg-[#05A872]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            THE MANDATE WE SERVE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          A Nation Asking to Be <span className="text-[#05A872] font-serif italic font-black">Digitally Connected</span>
        </h1>

        <p className="font-serif italic text-slate-800 text-lg md:text-2xl max-w-4xl font-semibold">
          Connecting UGC governance, public & private universities, students, faculty, researchers, industry, and funding bodies into one unified network.
        </p>
      </div>

      {/* Main Diagram Area: Left Interactive Network Canvas (8 cols) + Right Sidebar (4 cols) */}
      <div className="grid grid-cols-12 gap-6 my-auto items-stretch relative">
        {/* Left Network Canvas (8 cols) */}
        <div className="col-span-12 lg:col-span-8 bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-xl relative flex items-center justify-center min-h-[380px]">
          
          {/* Animated SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <line x1="22%" y1="22%" x2="50%" y2="50%" stroke="#05A872" strokeWidth="3" className="animated-dash-line" opacity="0.8" />
            <line x1="78%" y1="22%" x2="50%" y2="50%" stroke="#05A872" strokeWidth="3" className="animated-dash-line" opacity="0.8" />
            <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="#C5A059" strokeWidth="3" className="animated-dash-line" opacity="0.9" />
            <line x1="80%" y1="50%" x2="50%" y2="50%" stroke="#C5A059" strokeWidth="3" className="animated-dash-line" opacity="0.9" />
            <line x1="22%" y1="78%" x2="50%" y2="50%" stroke="#05A872" strokeWidth="3" className="animated-dash-line" opacity="0.8" />
            <line x1="50%" y1="82%" x2="50%" y2="50%" stroke="#05A872" strokeWidth="3.5" className="animated-dash-line" opacity="1" />
            <line x1="78%" y1="78%" x2="50%" y2="50%" stroke="#05A872" strokeWidth="3" className="animated-dash-line" opacity="0.8" />
          </svg>

          {/* Node Grid Layout */}
          <div className="relative z-10 w-full h-full grid grid-cols-3 grid-rows-3 gap-4 items-center justify-items-center">
            
            {/* Top-Left: Public Universities */}
            <div className="bg-[#047857] text-white p-4 px-5 rounded-xl shadow-lg border-2 border-emerald-400 text-center w-full max-w-[220px] hover-float">
              <h4 className="font-serif font-black text-lg text-white">Public Universities</h4>
              <p className="text-xs font-mono tracking-widest text-emerald-100 uppercase font-black mt-0.5">ALL SECTORS</p>
            </div>

            <div></div>

            {/* Top-Right: Private Universities */}
            <div className="bg-[#047857] text-white p-4 px-5 rounded-xl shadow-lg border-2 border-emerald-400 text-center w-full max-w-[220px] hover-float">
              <h4 className="font-serif font-black text-lg text-white">Private Universities</h4>
              <p className="text-xs font-mono tracking-widest text-emerald-100 uppercase font-black mt-0.5">NATIONWIDE</p>
            </div>

            {/* Mid-Left: Students */}
            <div className="bg-[#C5A059] text-slate-950 p-4 px-5 rounded-xl shadow-lg border-2 border-amber-600 text-center w-full max-w-[220px] hover-float">
              <h4 className="font-serif font-black text-xl text-slate-950">Students</h4>
              <p className="text-xs font-mono tracking-widest text-slate-950 uppercase font-black mt-0.5">MILLIONS ANNUALLY</p>
            </div>

            {/* CENTER HUB NODE: UGC Central Hub */}
            <div className="bg-[#0B131F] text-white p-5 px-6 rounded-2xl shadow-2xl border-2 border-[#C5A059] text-center w-full max-w-[240px] hub-pulse-ring hover-float">
              <span className="w-3 h-3 rounded-full bg-[#C5A059] animate-pulse inline-block mb-1"></span>
              <h3 className="font-serif font-black text-xl text-white">UGC CENTRAL HUB</h3>
              <p className="text-xs font-mono tracking-widest text-[#C5A059] uppercase font-black mt-1">SINGLE SIGN-ON READY</p>
            </div>

            {/* Mid-Right: Faculty & Researchers */}
            <div className="bg-[#C5A059] text-slate-950 p-4 px-5 rounded-xl shadow-lg border-2 border-amber-600 text-center w-full max-w-[220px] hover-float">
              <h4 className="font-serif font-black text-lg text-slate-950">Faculty & Researchers</h4>
              <p className="text-xs font-mono tracking-widest text-slate-950 uppercase font-black mt-0.5">ACADEMIC COMMUNITY</p>
            </div>

            {/* Bottom-Left: Ministry & Regulators */}
            <div className="bg-[#047857] text-white p-4 px-5 rounded-xl shadow-lg border-2 border-emerald-400 text-center w-full max-w-[220px] hover-float">
              <h4 className="font-serif font-black text-lg text-white">Ministry of Education</h4>
              <p className="text-xs font-mono tracking-widest text-emerald-100 uppercase font-black mt-0.5">POLICY & GOVERNANCE</p>
            </div>

            {/* Bottom-Center: BdREN Infrastructure */}
            <div className="bg-[#2563EB] text-white p-4 px-5 rounded-xl shadow-lg border-2 border-blue-400 text-center w-full max-w-[220px] hover-float">
              <h4 className="font-serif font-black text-lg text-white">BdREN Backbone</h4>
              <p className="text-xs font-mono tracking-widest text-blue-100 uppercase font-black mt-0.5">TIGERfed SSO BACKBONE</p>
            </div>

            {/* Bottom-Right: Industry & Employers */}
            <div className="bg-[#047857] text-white p-4 px-5 rounded-xl shadow-lg border-2 border-emerald-400 text-center w-full max-w-[220px] hover-float">
              <h4 className="font-serif font-black text-lg text-white">Industry & Employers</h4>
              <p className="text-xs font-mono tracking-widest text-emerald-100 uppercase font-black mt-0.5">JOBS & INTERNSHIPS</p>
            </div>

          </div>
        </div>

        {/* Right Sidebar Info Card (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-[#0B131F] text-slate-100 p-6 rounded-2xl shadow-xl flex flex-col justify-between border-2 border-slate-800">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-wider block mb-2">
              WHY THIS MANDATE MATTERS
            </span>
            <h3 className="font-serif font-black text-2xl text-white mb-3 leading-tight">
              One Unified Ecosystem for Bangladesh
            </h3>
            <p className="text-sm md:text-base text-slate-100 leading-relaxed font-sans font-bold mb-4">
              Instead of isolated university websites, we link every institution, student record, grant proposal, and job opportunity under UGC's central governance umbrella.
            </p>
          </div>

          <div className="space-y-2 pt-3 border-t border-slate-800 text-xs md:text-sm font-bold text-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-[#05A872] font-bold text-base">✓</span>
              <span>BdREN TIGERfed Single Sign-On Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#05A872] font-bold text-base">✓</span>
              <span>Unified Data Schema across all 8 Divisions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#05A872] font-bold text-base">✓</span>
              <span>Tamper-proof audit logging for compliance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t-2 border-slate-300 pt-2 flex justify-between font-mono text-xs md:text-sm font-bold text-slate-800">
        <span>03 · MANDATE · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">NATIONAL ECOSYSTEM MANDATE</span>
      </div>
    </div>
  );
}
