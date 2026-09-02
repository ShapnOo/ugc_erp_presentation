import React from 'react';

export default function Slide7_Nexus() {
  const nexusCards = [
    {
      actor: 'STUDENTS',
      color: 'border-[#05A872] bg-[#07241E]',
      badge: 'bg-[#05A872] text-slate-950',
      desc: 'Access internships, industry projects, and research grants.'
    },
    {
      actor: 'FACULTY',
      color: 'border-[#C5A059] bg-[#221D11]',
      badge: 'bg-[#C5A059] text-slate-950',
      desc: 'Collaborate with industry, commercialise research, find exchange.'
    },
    {
      actor: 'UNIVERSITIES',
      color: 'border-blue-500 bg-[#0A1A30]',
      badge: 'bg-blue-500 text-white',
      desc: 'Track placement metrics, manage industry partnerships.'
    },
    {
      actor: 'INDUSTRY',
      color: 'border-red-500 bg-[#250D15]',
      badge: 'bg-red-500 text-white',
      desc: 'Post opportunities, discover vetted talent, sponsor R&D.'
    }
  ];

  return (
    <div className="relative w-full h-full bg-[#0B131F] text-slate-100 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#D9A74A]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#D9A74A] uppercase font-sans">
            OUR OFFERING 04 OF 05
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight mb-2">
          Nexus — <span className="text-[#D9A74A] font-serif italic font-black">National Matchmaking Hub</span>
        </h1>

        <p className="font-serif italic text-slate-300 text-base md:text-lg max-w-4xl font-normal">
          An algorithmic matchmaking engine pairing students, faculty, universities, and industry partners for internships, exchange, and project funding.
        </p>
      </div>

      {/* 4 Actor Cards */}
      <div className="my-auto">
        <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans mb-3">
          CONNECTING FOUR ECOSYSTEM WORLDS
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {nexusCards.map((c) => (
            <div key={c.actor} className={`border ${c.color} p-6 rounded-2xl shadow-xl flex flex-col justify-between h-44`}>
              <div>
                <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${c.badge} uppercase tracking-wider block w-fit mb-3`}>
                  {c.actor}
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-sans font-medium">
                  {c.desc}
                </p>
              </div>

              <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest pt-2 border-t border-slate-700/50">
                VERIFIED PROFILE SYNC
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Callout */}
      <div className="border border-[#D9A74A]/40 bg-[#161B14] p-3 rounded-lg text-center">
        <p className="font-serif italic text-xs text-[#D9A74A]">
          "Supported by a 24-hour helpdesk targeted at resolving 95% of queries within 24 hours."
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex justify-between font-mono text-[11px] text-slate-400">
        <span>12 · NEXUS MATCHMAKING HUB · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#D9A74A]">NATIONAL MATCHMAKING HUB</span>
      </div>
    </div>
  );
}
