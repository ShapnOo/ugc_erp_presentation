import React from 'react';

export default function Slide7_Nexus() {
  const nexusCards = [
    {
      actor: 'STUDENTS',
      title: 'Talent & Internships',
      color: 'border-[#05A872] bg-white',
      badge: 'bg-[#05A872] text-white',
      desc: 'Access verified internships, student project funding, and industry career fairs.',
      bullets: ['• Verified Student Profile', '• Algorithmic Internship Match', '• Career & Job Fair Sync']
    },
    {
      actor: 'FACULTY',
      title: 'R&D & Exchange',
      color: 'border-[#C5A059] bg-white',
      badge: 'bg-[#C5A059] text-slate-950 font-bold',
      desc: 'Collaborate with industry partners, commercialise research, and find faculty exchange.',
      bullets: ['• Industry R&D Collaboration', '• Faculty Exchange Program', '• Research Commercialisation']
    },
    {
      actor: 'UNIVERSITIES',
      title: 'TTO & Placement',
      color: 'border-blue-500 bg-white',
      badge: 'bg-blue-600 text-white',
      desc: 'Track placement metrics, manage TTOs, and oversee industry partnership agreements.',
      bullets: ['• University TTO Dashboard', '• Placement Analytics', '• Admin Review & Approval']
    },
    {
      actor: 'INDUSTRY',
      title: 'Talent & R&D Funding',
      color: 'border-red-500 bg-white',
      badge: 'bg-red-600 text-white',
      desc: 'Post opportunities, discover vetted university talent, and sponsor industrial R&D projects.',
      bullets: ['• Vetted Talent Discovery', '• Sponsored Project Funding', '• Industry Challenges']
    }
  ];

  const engineSteps = [
    { step: '01', title: 'Verified Profile Sync', desc: 'BdREN TIGERfed SSO profile & skill scoring' },
    { step: '02', title: 'Algorithmic Matching Engine', desc: 'Scores skills, preferences & track record' },
    { step: '03', title: 'University Admin Review', desc: 'Review & confirmation before final match' },
  ];

  return (
    <div className="relative w-full h-full bg-[#FAF6EE] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-[2px] bg-[#C5A059]"></div>
          <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            OUR OFFERING 04 OF 05
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Nexus — <span className="text-[#C5A059] font-serif italic font-black">National Matchmaking Hub</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-xl max-w-4xl font-normal">
          An algorithmic matchmaking engine pairing students, faculty, universities, and industry partners for internships, exchange, and project funding.
        </p>
      </div>

      {/* 4 Actor Cards Grid */}
      <div className="relative z-10 my-auto space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans">
            CONNECTING FOUR ECOSYSTEM WORLDS
          </p>
          <span className="text-xs font-mono text-amber-900 font-bold bg-amber-100 px-2.5 py-1 rounded border border-amber-300">
            ● 12 Integrated Modules
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {nexusCards.map((c) => (
            <div key={c.actor} className={`border-2 ${c.color} p-5 rounded-2xl shadow-md flex flex-col justify-between h-52 hover-float`}>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded ${c.badge} uppercase tracking-wider`}>
                    {c.actor}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-semibold">NEXUS HUB</span>
                </div>
                <h3 className="font-serif font-black text-xl text-slate-900 mb-1">{c.title}</h3>
                <p className="text-xs text-slate-600 leading-snug font-sans font-medium mb-2">
                  {c.desc}
                </p>
              </div>

              <div className="space-y-1 pt-2.5 border-t border-slate-200 font-sans text-xs text-slate-800 font-semibold">
                {c.bullets.map((b, idx) => (
                  <div key={idx}>{b}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle: How the Matchmaking Engine Works (Large Crystal Clear Typography) */}
      <div className="relative z-10 bg-white border border-amber-200/90 p-3.5 rounded-xl shadow-xs space-y-1.5">
        <p className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest text-center">
          HOW THE MATCHMAKING ENGINE WORKS
        </p>
        <div className="grid grid-cols-3 gap-4 text-center font-sans">
          {engineSteps.map((s) => (
            <div key={s.step} className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-[#C5A059] bg-amber-100 px-2.5 py-1 rounded">{s.step}</span>
              <div className="text-left">
                <strong className="text-slate-900 block text-xs md:text-sm font-bold">{s.title}</strong>
                <span className="text-xs text-slate-600 font-medium block">{s.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Callout */}
      <div className="relative z-10 bg-[#0B131F] text-slate-100 p-3.5 rounded-xl font-sans text-xs md:text-sm flex justify-between items-center">
        <span className="text-[#C5A059] font-bold text-xs font-mono">24-HOUR HELPDESK SLA:</span>
        <span className="font-serif italic text-slate-100 text-xs md:text-sm font-medium">"Supported by a 24-hour helpdesk targeted at resolving 95%+ of queries within 24 hours."</span>
        <span className="text-[#05A872] font-bold text-xs font-mono">95% CLEARANCE</span>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-slate-300 pt-2 flex justify-between font-mono text-xs text-slate-700 font-bold">
        <span>12 · NEXUS MATCHMAKING HUB · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#C5A059]">NATIONAL MATCHMAKING HUB</span>
      </div>
    </div>
  );
}
