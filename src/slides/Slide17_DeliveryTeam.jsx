import React from 'react';

export default function Slide17_DeliveryTeam() {
  const teamPillars = [
    {
      code: 'PILLAR 01',
      title: 'Programme Leadership',
      lead: 'Project Director & PMO',
      badge: 'bg-[#C5A059] text-slate-950 font-bold',
      color: 'border-[#C5A059] bg-white',
      textColor: 'text-[#C5A059]',
      subRoles: [
        { name: 'Programme Managers', count: '48 MM (3 PMs)' },
        { name: 'Business Analysts', count: '12 MM (3 BAs)' }
      ]
    },
    {
      code: 'PILLAR 02',
      title: 'Enterprise Architecture',
      lead: 'Chief System Architect',
      badge: 'bg-[#05A872] text-white font-bold',
      color: 'border-[#05A872] bg-white',
      textColor: 'text-[#05A872]',
      subRoles: [
        { name: 'System Architects / Leads', count: '89 MM (7 Leads)' },
        { name: 'UI/UX Designers', count: '136 MM (7 Designers)' }
      ]
    },
    {
      code: 'PILLAR 03',
      title: 'Full-Stack Engineering',
      lead: 'Lead Solution Engineers',
      badge: 'bg-[#2563EB] text-white font-bold',
      color: 'border-blue-500 bg-white',
      textColor: 'text-[#2563EB]',
      subRoles: [
        { name: 'Frontend React Engineers', count: '828 MM (41 Devs)' },
        { name: 'Backend Microservices Team', count: '603 MM (54 Devs)' }
      ]
    },
    {
      code: 'PILLAR 04',
      title: 'Quality & SRE DevOps',
      lead: 'SQA & Infrastructure Lead',
      badge: 'bg-[#D32F2F] text-white font-bold',
      color: 'border-red-500 bg-white',
      textColor: 'text-[#D32F2F]',
      subRoles: [
        { name: 'SQA Testing Squad', count: '158 MM (10 SQA)' },
        { name: 'DevOps & SRE Engineers', count: '34 MM (4 SRE)' }
      ]
    }
  ];

  return (
    <div className="relative w-full h-full bg-[#F5F0E6] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[3px] bg-[#05A872]"></div>
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
              OUR DELIVERY TEAM
            </span>
          </div>

          <div className="flex items-center gap-2 font-sans font-bold">
            <span className="text-xs md:text-sm text-slate-950 bg-[#C5A059]/30 border border-[#C5A059] px-3.5 py-1 rounded-md shadow-sm">
              1,908 MAN-MONTHS EFFORT
            </span>
            <span className="text-xs md:text-sm text-white bg-[#0B131F] border border-slate-800 px-3.5 py-1 rounded-md shadow-sm">
              92 DEDICATED FTEs (133 PEAK HEADCOUNT)
            </span>
          </div>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2 mt-1">
          Multi-Disciplinary <span className="text-[#05A872] font-serif italic font-black">Enterprise Delivery</span>
        </h1>

        <p className="font-serif italic text-slate-700 text-lg md:text-2xl max-w-4xl font-medium">
          Our Systech × Pakiza consortium commits 92 dedicated full-time equivalent resources across 1,908 man-months of software engineering effort.
        </p>
      </div>

      {/* Interactive Hierarchy Flow Stage */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-between min-h-[380px] w-full">
        
        {/* Animated SVG Rays connecting Top Steering Node down to 4 Pillar Hubs */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <line x1="50%" y1="15%" x2="12.5%" y2="40%" stroke="#C5A059" strokeWidth="2.5" className="animated-dash-line" opacity="0.8" />
          <line x1="50%" y1="15%" x2="37.5%" y2="40%" stroke="#05A872" strokeWidth="2.5" className="animated-dash-line" opacity="0.8" />
          <line x1="50%" y1="15%" x2="62.5%" y2="40%" stroke="#2563EB" strokeWidth="2.5" className="animated-dash-line" opacity="0.8" />
          <line x1="50%" y1="15%" x2="87.5%" y2="40%" stroke="#D32F2F" strokeWidth="2.5" className="animated-dash-line" opacity="0.8" />
        </svg>

        {/* TOP LEVEL NODE: Consortium Steering Committee */}
        <div className="relative z-10 bg-[#0B131F] text-white px-10 py-3.5 rounded-2xl shadow-2xl border-2 border-[#C5A059] text-center hub-pulse-ring hover-float cursor-pointer w-full max-w-2xl">
          <h3 className="font-serif font-black text-xl md:text-2xl text-white">SYSTECH × PAKIZA PROGRAMME STEERING COMMITTEE</h3>
          <p className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans mt-0.5">
            EXECUTIVE OVERSIGHT · 1,908 MAN-MONTHS SOFTWARE EFFORT
          </p>
        </div>

        {/* 4 PILLAR HUBS ROW */}
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 font-sans">
          {teamPillars.map((p, idx) => (
            <div key={idx} className={`border-2 ${p.color} p-4 rounded-2xl shadow-lg flex flex-col justify-between hover-float`}>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded ${p.badge} uppercase tracking-wider`}>
                    {p.code}
                  </span>
                  <span className="text-xs font-bold text-slate-700">100% DEDICATED</span>
                </div>
                <h4 className="font-serif font-black text-lg md:text-xl text-slate-900 leading-tight mb-1">{p.title}</h4>
                <p className="text-xs md:text-sm text-slate-700 font-bold mb-3">{p.lead}</p>
              </div>

              {/* Sub-roles Cards */}
              <div className="space-y-2 pt-2 border-t-2 border-slate-200 font-sans">
                {p.subRoles.map((sr, srIdx) => (
                  <div key={srIdx} className="bg-slate-50 border border-slate-300 p-2.5 rounded-lg flex items-center justify-between">
                    <span className="text-xs md:text-sm font-bold text-slate-900">{sr.name}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded bg-white border ${p.textColor}`}>
                      {sr.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Executive Commitment Bar */}
      <div className="relative z-10 bg-white border-l-4 border-[#05A872] border-t-2 border-r-2 border-b-2 border-slate-300 p-4 rounded-r-xl shadow-xs text-center font-serif text-base md:text-lg italic text-slate-950 font-black">
        "Our commitment: 92 dedicated full-time equivalent resources across 1,908 man-months — not a shared bench."
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t-2 border-slate-300 pt-2 flex justify-between font-sans text-xs md:text-sm font-bold text-slate-800">
        <span>18 · OUR TEAM · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">MULTI-DISCIPLINARY DELIVERY TEAM (1,908 MAN-MONTHS)</span>
      </div>
    </div>
  );
}
