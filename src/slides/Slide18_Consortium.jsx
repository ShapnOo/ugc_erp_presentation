import React from 'react';

export default function Slide18_Consortium() {
  return (
    <div className="relative w-full h-full bg-[#F6F2EA] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Animated SVG Connecting Rays background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <line x1="20%" y1="35%" x2="80%" y2="35%" stroke="#C5A059" strokeWidth="2" className="animated-dash-line" opacity="0.4" />
        <line x1="20%" y1="70%" x2="50%" y2="70%" stroke="#05A872" strokeWidth="2" className="animated-dash-line" opacity="0.4" />
        <line x1="50%" y1="70%" x2="80%" y2="70%" stroke="#2563EB" strokeWidth="2" className="animated-dash-line" opacity="0.4" />
      </svg>

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-[3px] bg-[#C5A059]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            WHY OUR CONSORTIUM
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Why <span className="text-[#C5A059] font-serif italic font-black">Our Consortium.</span>
        </h1>

        <p className="font-serif italic text-slate-700 text-lg md:text-2xl max-w-4xl font-medium">
          Five strategic pillars uniting Systech's software execution with Pakiza's enterprise scale and deep national commitment.
        </p>
      </div>

      {/* 5 Value Cards Layout */}
      <div className="relative z-10 grid grid-cols-12 gap-5 my-auto items-stretch">
        
        {/* Card 01: Featured Dark Hero Box (6 cols) */}
        <div className="col-span-12 lg:col-span-6 bg-[#0B131F] text-slate-100 p-6 md:p-7 rounded-2xl shadow-2xl flex flex-col justify-between border-2 border-[#C5A059] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="font-serif text-4xl font-black text-[#C5A059]">01</span>
                <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase bg-[#C5A059]/20 px-2.5 py-1 rounded border border-[#C5A059]/40">
                  DOMAIN DEPTH
                </span>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#C5A059] text-slate-950 uppercase tracking-wider">
                20+ YRS TRACK RECORD
              </span>
            </div>

            <h3 className="font-serif font-black text-2xl md:text-3xl text-white mb-2 leading-tight">
              We Build Enterprise ERP Systems
            </h3>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed font-sans font-medium mb-4">
              The Systech × Pakiza consortium has shipped high-concurrency enterprise systems. We understand integration traps, security protocols, and what holds up at national scale.
            </p>

            <div className="space-y-2 pt-3 border-t border-slate-800 text-xs md:text-sm font-bold text-slate-100 font-sans">
              <div className="flex items-center gap-2">
                <span className="text-[#C5A059] font-bold text-base">✓</span>
                <span>Zero single point of failure microservice architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C5A059] font-bold text-base">✓</span>
                <span>High-throughput payment & database optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C5A059] font-bold text-base">✓</span>
                <span>Proven capacity executing complex multi-agency projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 02: Higher-Ed Specialism (6 cols) */}
        <div className="col-span-12 lg:col-span-6 bg-white border-2 border-emerald-400 p-6 md:p-7 rounded-2xl shadow-lg flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="font-serif text-4xl font-black text-[#05A872]">02</span>
                <span className="text-xs font-mono font-bold tracking-widest text-[#05A872] uppercase bg-emerald-50 px-2.5 py-1 rounded border border-emerald-300">
                  HIGHER-ED SPECIALISM
                </span>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#05A872] text-white uppercase tracking-wider">
                5 FLAGSHIP PLATFORMS
              </span>
            </div>

            <h3 className="font-serif font-black text-2xl md:text-3xl text-slate-900 mb-2 leading-tight">
              Tailored Exclusively for Higher Education
            </h3>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed font-sans font-medium mb-4">
              UMS, AMS, Nexus & GMS are our core domain craft — not generic off-the-shelf modules or side offerings.
            </p>

            <div className="space-y-2 pt-3 border-t border-slate-200 text-xs md:text-sm font-bold text-slate-900 font-sans">
              <div className="flex items-center gap-2">
                <span className="text-[#05A872] font-bold text-base">✓</span>
                <span>Deep understanding of UGC governance & academic grading</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#05A872] font-bold text-base">✓</span>
                <span>End-to-end research grant & admission lifecycle automation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#05A872] font-bold text-base">✓</span>
                <span>Native integration with BdREN TIGERfed SSO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 03: Local Presence (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white border-2 border-slate-300 p-5 rounded-2xl shadow-sm flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif text-3xl font-black text-red-600">03</span>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-red-100 text-red-800 border border-red-300 uppercase">
                100% ON-GROUND
              </span>
            </div>
            <h4 className="font-serif font-black text-xl text-slate-900 mb-1">Local Presence & Agility</h4>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans font-semibold mb-3">
              Dhaka-based delivery engineering — we know your institutions, your language, and your stakeholders.
            </p>
          </div>
          <div className="pt-2 border-t border-slate-200 text-xs md:text-sm font-bold text-slate-900 space-y-1">
            <p className="flex items-center gap-1.5"><span className="text-red-600 font-bold">✓</span> On-site support across 8 divisions</p>
            <p className="flex items-center gap-1.5"><span className="text-red-600 font-bold">✓</span> Direct alignment with Ministry & UGC</p>
          </div>
        </div>

        {/* Card 04: Long-Term Support (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white border-2 border-slate-300 p-5 rounded-2xl shadow-sm flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif text-3xl font-black text-blue-600">04</span>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-100 text-blue-800 border border-blue-300 uppercase">
                3-YEAR SLA
              </span>
            </div>
            <h4 className="font-serif font-black text-xl text-slate-900 mb-1">Long-Term Support & DNA</h4>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans font-semibold mb-3">
              We don't disappear after go-live. Multi-year support is in our DNA, not a hidden contract clause.
            </p>
          </div>
          <div className="pt-2 border-t border-slate-200 text-xs md:text-sm font-bold text-slate-900 space-y-1">
            <p className="flex items-center gap-1.5"><span className="text-blue-600 font-bold">✓</span> 3-Year comprehensive maintenance SLA</p>
            <p className="flex items-center gap-1.5"><span className="text-blue-600 font-bold">✓</span> Continuous security & feature upgrades</p>
          </div>
        </div>

        {/* Card 05: Outcome Commitment (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white border-2 border-slate-300 p-5 rounded-2xl shadow-sm flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif text-3xl font-black text-[#C5A059]">05</span>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-amber-100 text-amber-900 border border-amber-300 uppercase">
                99.9% UPTIME SLA
              </span>
            </div>
            <h4 className="font-serif font-black text-xl text-slate-900 mb-1">Outcome-Driven Commitment</h4>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans font-semibold mb-3">
              We measure ourselves strictly on active user adoption, satisfaction, and system availability.
            </p>
          </div>
          <div className="pt-2 border-t border-slate-200 text-xs md:text-sm font-bold text-slate-900 space-y-1">
            <p className="flex items-center gap-1.5"><span className="text-[#C5A059] font-bold">✓</span> 99.9% System Uptime SLA guarantee</p>
            <p className="flex items-center gap-1.5"><span className="text-[#C5A059] font-bold">✓</span> 24-Hour technical query resolution window</p>
          </div>
        </div>

      </div>

      {/* Bottom Executive Trust Banner */}
      <div className="relative z-10 bg-white border-l-4 border-[#C5A059] border-t-2 border-r-2 border-b-2 border-slate-300 p-4 rounded-r-xl shadow-xs text-center font-serif text-base md:text-lg italic text-slate-950 font-bold">
        "Systech × Pakiza JV — Uniting enterprise software execution with deep national higher-education domain expertise."
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t-2 border-slate-300 pt-2 flex justify-between font-mono text-xs md:text-sm font-bold text-slate-800">
        <span>19 · WHY OUR CONSORTIUM · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#C5A059]">CONSORTIUM ADVANTAGE</span>
      </div>
    </div>
  );
}
