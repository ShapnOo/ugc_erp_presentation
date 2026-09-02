import React from 'react';

export default function Slide1_Cover() {
  const platforms = [
    { code: '01 UGC ERP', title: 'Central Governance', desc: '11 microservices for UGC internal operations & Ministry KPI reporting.', color: 'border-red-500/60 bg-red-950/40 text-red-400', tag: 'GOVERNANCE' },
    { code: '02 UMS-ERP', title: 'University Management', desc: '18 modules covering complete student lifecycle & institutional ops.', color: 'border-blue-500/60 bg-blue-950/40 text-blue-400', tag: 'UNIVERSITY' },
    { code: '03 AMS', title: 'Admission System', desc: 'High-throughput admission engine for 1M+ seasonal applicants.', color: 'border-emerald-500/60 bg-emerald-950/40 text-[#05A872]', tag: 'ADMISSION' },
    { code: '04 NEXUS', title: 'Matchmaking Hub', desc: 'Algorithmic matching for students, faculty, universities & industry.', color: 'border-amber-500/60 bg-amber-950/40 text-[#C5A059]', tag: 'MATCHMAKING' },
    { code: '05 GMS', title: 'Grants Management', desc: 'End-to-end research grant workflow from application to audit.', color: 'border-emerald-500/60 bg-emerald-950/40 text-emerald-400', tag: 'GRANTS' },
  ];

  const highlights = [
    { label: 'SINGLE SIGN-ON', val: 'BdREN TIGERfed SSO' },
    { label: 'NATIONWIDE ROLLOUT', val: 'All 8 Divisions' },
    { label: 'SECURITY & AUDIT', val: 'Central Tamper-Proof Log' },
    { label: 'TECHNICAL ARCHITECTURE', val: 'Microservices & API Gateway' },
  ];

  return (
    <div className="relative w-full h-full bg-[#0B131F] text-slate-100 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#05A872]/20 rounded-full blur-[140px] pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#C5A059]/15 rounded-full blur-[140px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      {/* TOP HEADER & HERO SECTION */}
      <div className="relative z-10 space-y-4">
        {/* Sub-header Vendor Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-6 bg-[#05A872] rounded-full"></div>
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#C5A059] uppercase bg-slate-900/90 border border-slate-800 px-3.5 py-1 rounded-md shadow-sm">
              SYSTECH DIGITAL × PAKIZA SOFTWARE LIMITED · JV VENDOR PROPOSAL
            </span>
          </div>

          <span className="text-[10px] font-mono font-bold text-[#05A872] bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-md">
            ● NATIONAL DIGITAL SUITE PROPOSAL
          </span>
        </div>

        {/* Hero Title & Main Scope Card Grid */}
        <div className="grid grid-cols-12 gap-8 items-center pt-1">
          {/* Left Title Block */}
          <div className="col-span-12 lg:col-span-8 space-y-3">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-[84px] font-black tracking-tight text-white leading-[0.96]">
              Higher Education <br />
              <span className="text-[#05A872] font-serif font-black">
                Digital Suite
              </span>
            </h1>

            <p className="font-serif italic text-xl md:text-2xl text-slate-200 font-normal leading-snug">
              Five integrated platforms. One national transformation across Bangladesh.
            </p>
          </div>

          {/* Right Scope Metric Cards */}
          <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-3 font-sans">
            <div className="col-span-2 bg-[#062322] border border-[#05A872]/40 rounded-2xl p-5 shadow-2xl relative overflow-hidden hover-float">
              <p className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#C5A059] uppercase mb-1">
                NATIONAL PROGRAMME SCOPE
              </p>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-7xl font-black text-[#05A872] leading-none">18</span>
                <div>
                  <h3 className="text-base font-bold text-white font-serif leading-tight">University Modules</h3>
                  <p className="text-[10px] text-slate-300 font-mono">FULLY INTEGRATED</p>
                </div>
              </div>
            </div>

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

      {/* MIDDLE SECTION — 5 FLAGSHIP PLATFORM CARDS */}
      <div className="relative z-10 my-auto pt-2 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#C5A059] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#05A872] animate-pulse"></span>
            OUR FIVE FLAGSHIP PLATFORMS
          </p>
          <span className="text-[10px] font-mono text-slate-400">TURNKEY ENTERPRISE SOLUTION</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
          {platforms.map((p) => (
            <div
              key={p.code}
              className={`border ${p.color} p-4 rounded-xl shadow-lg flex flex-col justify-between h-36 hover-float cursor-pointer`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif font-black text-base text-white">{p.code}</span>
                  <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/40 text-slate-300 uppercase">
                    {p.tag}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white mb-1.5 font-sans">{p.title}</h4>
                <p className="text-[10px] text-slate-300 font-sans leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KEY HIGHLIGHTS BAR (FILLING BOTTOM SPACING BEAUTIFULLY) */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-[10px]">
        {highlights.map((h, idx) => (
          <div key={idx} className="bg-[#071322] border border-slate-800 p-2.5 px-4 rounded-xl flex items-center justify-between shadow-sm">
            <span className="text-slate-400 uppercase font-bold">{h.label}:</span>
            <span className="text-[#05A872] font-bold">{h.val}</span>
          </div>
        ))}
      </div>

      {/* BOTTOM FOOTER */}
      <div className="relative z-10 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
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
