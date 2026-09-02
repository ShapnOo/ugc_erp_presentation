import React from 'react';

export default function Slide21_ImplementationRoadmap() {
  const timelines = [
    {
      code: 'UGC ERP',
      title: 'Central Governance',
      color: 'bg-[#D32F2F]',
      badge: 'border-red-400 bg-red-50 text-red-700',
      phase1: 'Months 1–3: Requirements & Architecture',
      phase2: 'Months 4–11: Microservices Build & Integration',
      phase3: 'Months 12–18: Pilot & National Go-Live',
    },
    {
      code: 'UMS-ERP',
      title: 'University Management',
      color: 'bg-[#2563EB]',
      badge: 'border-blue-400 bg-blue-50 text-blue-700',
      phase1: 'Months 1–4: 8-Division Workshop & Design',
      phase2: 'Months 5–13: Core ERP Build & Modules',
      phase3: 'Months 14–19: 10 Anchor Universities Customisation & Launch',
    },
    {
      code: 'AMS',
      title: 'Admission System',
      color: 'bg-[#05A872]',
      badge: 'border-emerald-400 bg-emerald-50 text-emerald-700',
      phase1: 'Months 1–3: High-Speed Engine Architecture',
      phase2: 'Months 4–8: Payment & Portal Build',
      phase3: 'Months 9–14: Peak Load Testing & Admission Launch',
    },
    {
      code: 'Nexus',
      title: 'Matchmaking Hub',
      color: 'bg-[#C5A059]',
      badge: 'border-amber-400 bg-amber-50 text-amber-800',
      phase1: 'Months 1–3: Matching Engine Design',
      phase2: 'Months 4–9: Platform Build & BdREN SSO',
      phase3: 'Months 10–16: 50 University Roadshows & Launch',
    },
    {
      code: 'GMS',
      title: 'Grants Management',
      color: 'bg-[#05A872]',
      badge: 'border-emerald-400 bg-emerald-50 text-emerald-700',
      phase1: 'Months 1–3: Requirement & Grant Workflow Design',
      phase2: 'Months 4–10: Grant Scoring & Audit Build',
      phase3: 'Months 11–17: Divisional Workshops & Pilot Grants Launch',
    },
  ];

  const milestones = [
    { month: 'MONTH 03', title: 'Architecture & SSO Ready', color: 'border-blue-500 text-blue-700' },
    { month: 'MONTH 09', title: 'Platform Cores Built', color: 'border-emerald-500 text-emerald-700' },
    { month: 'MONTH 14', title: 'Anchor Pilots Live', color: 'border-amber-500 text-amber-800' },
    { month: 'MONTH 19', title: '100% Nationwide Rollout', color: 'border-red-500 text-red-700 font-bold' },
  ];

  return (
    <div className="relative w-full h-full bg-[#F5F0E6] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-[2px] bg-[#05A872]"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
              PROGRAMME TIMELINE & PHASING
            </span>
          </div>

          <span className="text-xs font-mono font-bold text-slate-900 bg-[#C5A059]/20 border border-[#C5A059] px-3.5 py-1 rounded-full shadow-sm">
            ★ MAX 19-MONTH TOTAL DELIVERY TIMELINE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Indicative Programme <span className="text-[#C5A059] font-serif italic font-black">Delivery Roadmap</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-xl max-w-4xl font-normal">
          Phased execution strategy engineered for zero operational downtime — completing all five platforms within a strict 19-month timeline.
        </p>
      </div>

      {/* 5 Timeline Bars with Animated SVG Dashflow Lines */}
      <div className="relative z-10 my-auto space-y-3 font-sans">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#C5A059] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#05A872]"></span>
            FIVE PLATFORM DELIVERY VECTORS (MONTHS 01 TO 19)
          </p>
          <span className="text-[10px] font-mono text-slate-500 font-bold">PARALLEL TRACK EXECUTION</span>
        </div>

        {/* 5 Rows Stage */}
        <div className="relative space-y-2.5">
          {/* Animated SVG Rays in Background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <line x1="20%" y1="10%" x2="95%" y2="10%" stroke="#05A872" strokeWidth="1.5" className="animated-dash-line" opacity="0.4" />
            <line x1="20%" y1="30%" x2="95%" y2="30%" stroke="#2563EB" strokeWidth="1.5" className="animated-dash-line" opacity="0.4" />
            <line x1="20%" y1="50%" x2="95%" y2="50%" stroke="#05A872" strokeWidth="1.5" className="animated-dash-line" opacity="0.4" />
            <line x1="20%" y1="70%" x2="95%" y2="70%" stroke="#C5A059" strokeWidth="1.5" className="animated-dash-line" opacity="0.4" />
            <line x1="20%" y1="90%" x2="95%" y2="90%" stroke="#05A872" strokeWidth="1.5" className="animated-dash-line" opacity="0.4" />
          </svg>

          {timelines.map((t) => (
            <div
              key={t.code}
              className="relative z-10 bg-white border border-slate-300 p-3 rounded-xl flex items-center justify-between shadow-sm hover-float transition-all hover:border-[#C5A059]"
            >
              <div className="w-48 flex items-center gap-3 shrink-0 border-r border-slate-200 pr-3">
                <span className={`w-2.5 h-9 rounded-full ${t.color}`}></span>
                <div>
                  <span className="font-mono text-sm font-black text-slate-900 block leading-tight">{t.code}</span>
                  <span className="text-[10px] text-slate-500 font-semibold block">{t.title}</span>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-3 gap-3 text-xs font-sans pl-4">
                <div className="bg-slate-50 border border-slate-200 p-2 rounded-lg text-slate-800">
                  <span className="text-[#05A872] font-mono font-bold text-[10px] block mb-0.5">PHASE 1</span>
                  <span className="font-semibold text-slate-900">{t.phase1}</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2 rounded-lg text-slate-800">
                  <span className="text-[#C5A059] font-mono font-bold text-[10px] block mb-0.5">PHASE 2</span>
                  <span className="font-semibold text-slate-900">{t.phase2}</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2 rounded-lg text-slate-800">
                  <span className="text-blue-600 font-mono font-bold text-[10px] block mb-0.5">PHASE 3</span>
                  <span className="font-semibold text-slate-900">{t.phase3}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 National Key Milestones Bar */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 font-sans">
        {milestones.map((m, idx) => (
          <div key={idx} className={`bg-white border ${m.color} p-2.5 px-4 rounded-xl flex items-center justify-between shadow-xs hover-float`}>
            <span className="font-mono text-xs font-black">{m.month}:</span>
            <span className="text-xs font-bold text-slate-800">{m.title}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-slate-300 pt-2 flex justify-between font-mono text-xs font-bold text-slate-700">
        <span>17 · PROGRAMME ROADMAP · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">DELIVERY TIMELINE & PHASING</span>
      </div>
    </div>
  );
}
