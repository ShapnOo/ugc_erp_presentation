import React from 'react';

export default function Slide7_Nexus() {
  const nexusCards = [
    {
      actor: 'STUDENTS',
      title: 'Talent & Internships',
      color: 'border-[#05A872] bg-white',
      badge: 'bg-[#05A872] text-white font-bold',
      desc: 'Access verified internships, student project funding, and industry career fairs.',
      bullets: ['• Verified Student Profile', '• Algorithmic Internship Match', '• Career & Job Fair Sync']
    },
    {
      actor: 'FACULTY',
      title: 'R&D & Exchange',
      color: 'border-[#C5A059] bg-white',
      badge: 'bg-[#C5A059] text-slate-950 font-black',
      desc: 'Collaborate with industry partners, commercialise research, and find faculty exchange.',
      bullets: ['• Industry R&D Collaboration', '• Faculty Exchange Program', '• Research Commercialisation']
    },
    {
      actor: 'UNIVERSITIES',
      title: 'TTO & Placement',
      color: 'border-blue-500 bg-white',
      badge: 'bg-blue-600 text-white font-bold',
      desc: 'Track placement metrics, manage TTOs, and oversee industry partnership agreements.',
      bullets: ['• University TTO Dashboard', '• Placement Analytics', '• Admin Review & Approval']
    },
    {
      actor: 'INDUSTRY',
      title: 'Talent & R&D Funding',
      color: 'border-red-500 bg-white',
      badge: 'bg-red-600 text-white font-bold',
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
      <div className="relative z-10 font-sans">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-[3px] bg-[#C5A059]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            OUR OFFERING 04 OF 05
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Nexus — <span className="text-[#C5A059] font-serif italic font-black">National Matchmaking Hub</span>
        </h1>

        <p className="font-serif italic text-slate-700 text-lg md:text-2xl max-w-4xl font-medium">
          An algorithmic matchmaking engine pairing students, faculty, universities, and industry partners for internships, exchange, and project funding.
        </p>
      </div>

      {/* 4 Actor Cards Grid */}
      <div className="relative z-10 my-auto space-y-2.5 font-sans">
        <div className="flex items-center justify-between font-sans">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            CONNECTING FOUR ECOSYSTEM WORLDS
          </p>
          <span className="text-xs font-bold text-amber-950 bg-amber-100 px-3 py-1 rounded-md border border-amber-300 font-sans">
            12 INTEGRATED MODULES
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-sans">
          {nexusCards.map((c) => (
            <div key={c.actor} className={`border-2 ${c.color} p-4 rounded-2xl shadow-md flex flex-col justify-between hover-float min-h-[220px] font-sans`}>
              <div className="font-sans">
                <div className="flex items-center justify-between mb-1.5 font-sans">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${c.badge} uppercase tracking-wider font-sans`}>
                    {c.actor}
                  </span>
                  <span className="text-xs font-bold text-slate-700 font-sans">NEXUS HUB</span>
                </div>
                <h3 className="font-serif font-black text-xl md:text-2xl text-slate-900 mb-1 leading-tight">{c.title}</h3>
                <p className="text-xs md:text-sm text-slate-700 leading-snug font-sans font-semibold mb-2">
                  {c.desc}
                </p>
              </div>

              <div className="space-y-0.5 pt-2 border-t border-slate-200 font-sans text-xs md:text-sm text-slate-900 font-bold">
                {c.bullets.map((b, idx) => (
                  <div key={idx} className="leading-snug">{b}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle: How the Matchmaking Engine Works */}
      <div className="relative z-10 bg-white border-2 border-amber-300 p-3.5 rounded-xl shadow-xs space-y-1.5 font-sans">
        <p className="text-xs font-bold text-[#C5A059] uppercase tracking-widest text-center font-sans">
          HOW THE MATCHMAKING ENGINE WORKS
        </p>
        <div className="grid grid-cols-3 gap-4 text-center font-sans">
          {engineSteps.map((s) => (
            <div key={s.step} className="bg-slate-50 border border-slate-300 p-2.5 rounded-lg flex items-center gap-3 font-sans">
              <span className="text-sm md:text-base font-black text-slate-950 bg-amber-200 px-2.5 py-0.5 rounded-md border border-amber-400 font-sans">{s.step}</span>
              <div className="text-left font-sans">
                <strong className="text-slate-950 block text-xs md:text-sm font-black font-sans">{s.title}</strong>
                <span className="text-xs text-slate-800 font-semibold block leading-tight font-sans">{s.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Callout */}
      <div className="relative z-10 bg-[#0B131F] text-slate-100 p-3.5 rounded-xl font-sans text-xs md:text-sm flex justify-between items-center border-2 border-slate-800 shadow-md">
        <span className="text-[#C5A059] font-bold text-xs md:text-sm font-sans">24-HOUR HELPDESK SLA:</span>
        <span className="font-serif italic text-white text-xs md:text-sm font-bold">"Supported by a 24-hour helpdesk targeted at resolving 95%+ of queries within 24 hours."</span>
        <span className="text-[#05A872] font-bold text-xs md:text-sm font-sans">95% CLEARANCE</span>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t-2 border-slate-300 pt-2 flex justify-between text-xs md:text-sm text-slate-800 font-bold font-sans">
        <span>12 · NEXUS MATCHMAKING HUB · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#C5A059]">NATIONAL MATCHMAKING HUB</span>
      </div>
    </div>
  );
}
