import React from 'react';

export default function Slide1_Cover() {
  return (
    <div className="relative w-full h-full bg-[#0B131F] text-slate-100 p-8 md:p-12 lg:p-14 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-[#05A872]/15 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      {/* Top Content Area */}
      <div className="relative z-10">
        {/* Sub-header Vendor Tag */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-[3px] h-5 bg-[#05A872]"></div>
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans">
            SYSTECH DIGITAL × PAKIZA SOFTWARE LIMITED · JV VENDOR PROPOSAL
          </span>
        </div>

        {/* Main Title & Scope Grid */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Title Block */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-[84px] font-black tracking-tight text-[#F3F4F6] leading-[0.98]">
              Higher Education <br />
              <span className="text-[#05A872] font-serif font-black">
                Digital Suite
              </span>
            </h1>

            <div className="space-y-1 pt-1">
              <p className="font-serif italic text-2xl md:text-3xl text-slate-200 font-normal leading-snug">
                Five integrated platforms. One national transformation.
              </p>
              <p className="font-serif italic text-lg text-slate-400">
                Proposed by Systech × Pakiza Limited.
              </p>
            </div>

            {/* Gold Divider Line */}
            <div className="w-56 h-[1.5px] bg-[#C5A059] my-6"></div>

            {/* Offerings List (Reordered: UGC ERP, UMS-ERP, AMS, Nexus, GMS) */}
            <div className="pt-1">
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#C5A059] uppercase font-sans mb-3">
                OUR FIVE FLAGSHIP OFFERINGS
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xl font-serif font-bold">
                <span className="text-[#05A872] font-black border-b-2 border-[#05A872] pb-0.5">
                  UGC ERP
                </span>
                <span className="text-slate-600 font-sans">•</span>
                <span className="text-slate-200">UMS-ERP</span>
                <span className="text-slate-600 font-sans">•</span>
                <span className="text-slate-200">AMS</span>
                <span className="text-slate-600 font-sans">•</span>
                <span className="text-slate-200">Nexus</span>
                <span className="text-slate-600 font-sans">•</span>
                <span className="text-slate-200">GMS</span>
              </div>
            </div>
          </div>

          {/* Right Scope Card */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            {/* Programme Scope Card */}
            <div className="bg-[#062322] border border-[#05A872]/40 rounded-xl p-6 shadow-2xl relative overflow-hidden">
              <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans mb-2">
                PROGRAMME SCOPE
              </p>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-8xl lg:text-9xl font-black text-[#05A872] leading-none">
                  18
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 font-sans">
                University Modules
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
                Across 5 flagship platforms — enterprise-grade, fully integrated.
              </p>
            </div>

            {/* Secondary Metric Box */}
            <div className="bg-[#0B1728] border border-[#C5A059]/40 rounded-xl p-5 shadow-xl flex items-center justify-between font-sans">
              <div>
                <span className="font-serif text-3xl font-black text-[#C5A059] block leading-none">10+</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-300 font-bold mt-1.5 block">
                  Anchor Universities
                </span>
              </div>
              <div className="w-[1px] h-8 bg-slate-700"></div>
              <div className="text-right">
                <span className="font-serif text-3xl font-black text-[#C5A059] block leading-none">5</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-300 font-bold mt-1.5 block">
                  Flagship Platforms
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-400 font-sans gap-2">
        <div className="font-bold tracking-wider uppercase text-slate-300">
          PROPOSED BY THE SYSTECH × PAKIZA JV
        </div>
        <div className="font-serif italic text-slate-400">
          For: National Higher Education Authority
        </div>
        <div className="font-bold tracking-widest text-slate-200 uppercase text-[10px]">
          SYSTECH × PAKIZA <span className="text-[#C5A059] font-normal">JOINT VENTURE</span>
        </div>
      </div>
    </div>
  );
}
