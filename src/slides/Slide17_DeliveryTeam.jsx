import React from 'react';

export default function Slide17_DeliveryTeam() {
  const pillars = [
    {
      code: 'PILLAR 01',
      title: 'Programme Leadership',
      lead: 'Project Director & PMO',
      badge: 'bg-[#C5A059] text-slate-950 font-bold',
      color: 'border-[#C5A059] bg-white',
      textColor: 'text-[#C5A059]',
      subRoles: [
        { name: 'Programme Managers', count: '100% Dedicated' },
        { name: 'Client Liaison & Governance', count: 'UGC Liaison' }
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
        { name: 'BdREN SSO Architects', count: 'Identity Lead' },
        { name: 'Security & Audit Officers', count: 'Compliance' }
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
        { name: 'Frontend React Engineers', count: 'Web UI Team' },
        { name: 'Backend Microservices Team', count: 'API Team' }
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
        { name: 'SQA Automation Squad', count: 'Test Squad' },
        { name: 'DevOps & SRE Engineers', count: 'Infra SRE' }
      ]
    }
  ];

  return (
    <div className="relative w-full h-full bg-[#F5F0E6] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-[2px] bg-[#05A872]"></div>
          <span className="text-xs font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            OUR DELIVERY TEAM
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Multi-Disciplinary <span className="text-[#05A872] font-serif italic font-black">Enterprise Delivery</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-xl max-w-4xl font-normal">
          Our Systech × Pakiza consortium assembles a dedicated programme organisation with the disciplines and depth an enterprise-scale transformation demands.
        </p>
      </div>

      {/* Interactive Animated Hierarchy Flow Stage */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-between min-h-[380px] w-full">
        
        {/* Animated SVG Rays connecting Top Steering Node down to 4 Pillar Hubs */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <line x1="50%" y1="15%" x2="12.5%" y2="40%" stroke="#C5A059" strokeWidth="2.5" className="animated-dash-line" opacity="0.8" />
          <line x1="50%" y1="15%" x2="37.5%" y2="40%" stroke="#05A872" strokeWidth="2.5" className="animated-dash-line" opacity="0.8" />
          <line x1="50%" y1="15%" x2="62.5%" y2="40%" stroke="#2563EB" strokeWidth="2.5" className="animated-dash-line" opacity="0.8" />
          <line x1="50%" y1="15%" x2="87.5%" y2="40%" stroke="#D32F2F" strokeWidth="2.5" className="animated-dash-line" opacity="0.8" />
        </svg>

        {/* TOP LEVEL NODE: Consortium Steering Committee */}
        <div className="relative z-10 bg-[#0B131F] text-white px-10 py-3.5 rounded-2xl shadow-2xl border-2 border-[#C5A059] text-center hub-pulse-ring hover-float cursor-pointer w-full max-w-xl">
          <div className="flex items-center justify-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
            <h3 className="font-serif font-black text-xl text-white">SYSTECH × PAKIZA PROGRAMME STEERING COMMITTEE</h3>
          </div>
          <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#C5A059] uppercase">
            EXECUTIVE OVERSIGHT & JOINT VENTURE GOVERNANCE
          </p>
        </div>

        {/* 4 PILLAR HUBS ROW */}
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {pillars.map((p, idx) => (
            <div key={idx} className={`border-2 ${p.color} p-4 rounded-2xl shadow-lg flex flex-col justify-between hover-float`}>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${p.badge} uppercase tracking-wider`}>
                    {p.code}
                  </span>
                  <span className="text-[9px] font-mono font-bold text-slate-400">DEDICATED</span>
                </div>
                <h4 className="font-serif font-black text-base text-slate-900 leading-tight mb-1">{p.title}</h4>
                <p className="text-xs text-slate-500 font-mono font-bold mb-3">{p.lead}</p>
              </div>

              {/* Sub-roles Cards */}
              <div className="space-y-2 pt-2 border-t border-slate-200 font-sans">
                {p.subRoles.map((sr, srIdx) => (
                  <div key={srIdx} className="bg-slate-50 border border-slate-200 p-2 rounded-lg flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">{sr.name}</span>
                    <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-white border ${p.textColor}`}>
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
      <div className="relative z-10 bg-white border-l-4 border-[#05A872] border-t border-r border-b border-slate-300 p-3.5 rounded-r-xl shadow-xs text-center font-serif text-xs md:text-sm italic text-slate-900 font-black">
        "Our commitment: a fully-staffed team dedicated to your programme — not a shared bench."
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-slate-300 pt-2 flex justify-between font-mono text-xs font-bold text-slate-700">
        <span>18 · OUR TEAM · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">MULTI-DISCIPLINARY DELIVERY TEAM</span>
      </div>
    </div>
  );
}
