import React from 'react';

export default function Slide1_Cover() {
  const platforms = [
    { code: 'UGC ERP', title: 'Central Governance', color: 'border-red-500/50 bg-red-950/30 text-red-400', tag: '11 MODULES' },
    { code: 'UMS-ERP', title: 'University Management', color: 'border-blue-500/50 bg-blue-950/30 text-blue-400', tag: '18 MODULES' },
    { code: 'AMS', title: 'Admission System', color: 'border-emerald-500/50 bg-emerald-950/30 text-[#05A872]', tag: 'ADMISSION' },
    { code: 'NEXUS', title: 'Matchmaking Hub', color: 'border-amber-500/50 bg-amber-950/30 text-[#C5A059]', tag: 'MATCHMAKING' },
    { code: 'GMS', title: 'Grants Management', color: 'border-emerald-500/50 bg-emerald-950/30 text-emerald-400', tag: 'GRANTS' },
  ];

  return (
    <div className="relative w-full h-full bg-[#0B131F] text-slate-100 p-8 md:p-12 lg:p-14 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-[#05A872]/20 rounded-full blur-[130px] pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/15 rounded-full blur-[130px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      {/* Top Content Area */}
      <div className="relative z-10 space-y-6">
        {/* Sub-header Vendor Tag */}
        <div className="flex items-center gap-2.5">
          <div className="w-1 h-5 bg-[#05A872] rounded-full"></div>
          <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#C5A059] uppercase bg-slate-900/90 border border-slate-800 px-3 py-1 rounded-md">
            SYSTECH DIGITAL × PAKIZA SOFTWARE LIMITED · JV VENDOR PROPOSAL
          </span>
        </div>

        {/* Main Title & Scope Grid */}
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left Title Block */}
          <div className="col-span-12 lg:col-span-8 space-y-4">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-[80px] font-black tracking-tight text-[#F3F4F6] leading-[0.98]">
              Higher Education <br />
              <span className="text-[#05A872] font-serif font-black">
                Digital Suite
              </span>
            </h1>

            <div className="space-y-1">
              <p className="font-serif italic text-xl md:text-2xl text-slate-200 font-normal leading-snug">
                Five integrated platforms. One national transformation across all 8 divisions.
              </p>
              <p className="font-serif italic text-base text-slate-400">
                Proposed for National Higher Education Authority by Systech × Pakiza JV.
              </p>
            </div>
          </div>

          {/* Right Scope Card */}
          <div className="col-span-12 lg:col-span-4 space-y-3">
            <div className="bg-[#062322] border border-[#05A872]/40 rounded-2xl p-6 shadow-2xl relative overflow-hidden hover-float">
              <p className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#C5A059] uppercase mb-2">
                NATIONAL PROGRAMME SCOPE
              </p>

              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-serif text-7xl font-black text-[#05A872] leading-none">
                  18
                </span>
                <div>
                  <h3 className="text-base font-bold text-white font-serif leading-tight">
                    University Modules
                  </h3>
                  <p className="text-[10px] text-slate-300 font-mono">FULLY INTEGRATED</p>
                </div>
              </div>
            </div>

            {/* Secondary Metric Grid */}
            <div className="grid grid-cols-2 gap-3 font-sans">
              <div className="bg-[#091526] border border-[#C5A059]/40 rounded-xl p-3.5 shadow-xl hover-float">
                <span className="font-serif text-2xl font-black text-[#C5A059] block leading-none">11</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-300 font-bold mt-1 block">
                  Governance Modules
                </span>
              </div>
              <div className="bg-[#091526] border border-blue-500/40 rounded-xl p-3.5 shadow-xl hover-float">
                <span className="font-serif text-2xl font-black text-blue-400 block leading-none">10+</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-300 font-bold mt-1 block">
                  Anchor Universities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: 5 Platform Preview Cards (Filling the blank space beautifully) */}
        <div className="pt-2">
          <p className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#C5A059] uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#05A872] animate-pulse"></span>
            OUR FIVE FLAGSHIP PLATFORMS
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {platforms.map((p) => (
              <div
                key={p.code}
                className={`border ${p.color} p-4 rounded-xl shadow-lg flex flex-col justify-between h-28 hover-float cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-black text-base text-white">{p.code}</span>
                  <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/40 text-slate-300 uppercase">
                    {p.tag}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 font-sans leading-tight">
                  {p.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 pt-4 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-400 font-mono gap-2">
        <div className="font-bold tracking-wider uppercase text-slate-300">
          PROPOSED BY THE SYSTECH × PAKIZA JV
        </div>
        <div className="font-serif italic text-slate-400">
          For: National Higher Education Authority
        </div>
        <div className="font-bold tracking-widest text-slate-200 uppercase text-[10px]">
          SYSTECH × PAKIZA <span className="text-[#C5A059]">JOINT VENTURE</span>
        </div>
      </div>
    </div>
  );
}
