import React from 'react';

export default function Slide21_ImplementationRoadmap() {
  const timelines = [
    {
      code: 'AMS',
      title: 'Admission Management System',
      color: 'bg-[#05A872]',
      badge: 'border-emerald-400 bg-emerald-50 text-emerald-800 font-bold',
      targetGoLive: 'GO-LIVE: MONTH 10',
      phase1: 'Months 1–3: High-Speed Engine Architecture',
      phase2: 'Months 4–8: Payment Gateway & Portal Build',
      phase3: 'Months 9–10: Peak Testing & Go-Live (M10)',
    },
    {
      code: 'GMS',
      title: 'Grants Management System',
      color: 'bg-[#05A872]',
      badge: 'border-emerald-400 bg-emerald-50 text-emerald-800 font-bold',
      targetGoLive: 'GO-LIVE: MONTH 14',
      phase1: 'Months 1–3: Requirement & Workflow Design',
      phase2: 'Months 4–12: Grants Build & Peer Review',
      phase3: 'Months 13–14: Pilot & Go-Live (M14)',
    },
    {
      code: 'Nexus',
      title: 'National Matchmaking Hub',
      color: 'bg-[#C5A059]',
      badge: 'border-amber-400 bg-amber-50 text-amber-900 font-bold',
      targetGoLive: 'GO-LIVE: MONTH 14',
      phase1: 'Months 1–3: Matching Engine Architecture',
      phase2: 'Months 4–11: Platform Build & BdREN SSO',
      phase3: 'Months 12–14: 50 Roadshows & Go-Live (M14)',
    },
    {
      code: 'UGC ERP',
      title: 'Central Governance ERP',
      color: 'bg-[#D32F2F]',
      badge: 'border-red-400 bg-red-50 text-red-800 font-bold',
      targetGoLive: 'GO-LIVE: MONTH 17',
      phase1: 'Months 1–4: Requirements & 12 Microservices Design',
      phase2: 'Months 5–14: Microservices Build & API Gateway',
      phase3: 'Months 15–17: Pilot & Go-Live (M17)',
    },
    {
      code: 'UMS-ERP',
      title: 'Unified University ERP',
      color: 'bg-[#2563EB]',
      badge: 'border-blue-400 bg-blue-50 text-blue-800 font-bold',
      targetGoLive: 'GO-LIVE: MONTH 17',
      phase1: 'Months 1–4: 8-Division Workshop & Core Design',
      phase2: 'Months 5–13: 18 Core Modules Build',
      phase3: 'Months 14–17: 10 University Customisation & Go-Live (M17)',
    },
  ];

  const milestones = [
    { month: 'MONTH 10', title: 'AMS Admission Go-Live', color: 'border-emerald-600 text-emerald-900 font-bold' },
    { month: 'MONTH 14', title: 'GMS & Nexus Go-Live', color: 'border-amber-600 text-amber-950 font-bold' },
    { month: 'MONTH 17', title: 'UGC ERP & UMS-ERP Go-Live', color: 'border-blue-600 text-blue-900 font-bold' },
    { month: 'MONTH 18–19', title: 'Final Handover & Support', color: 'border-red-600 text-red-900 font-bold' },
  ];

  return (
    <div className="relative w-full h-full bg-[#F5F0E6] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[3px] bg-[#05A872]"></div>
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
              PROGRAMME TIMELINE & PHASING
            </span>
          </div>

          <span className="text-xs md:text-sm font-mono font-bold text-slate-950 bg-[#C5A059]/25 border border-[#C5A059] px-4 py-1.5 rounded-full shadow-sm">
            ★ MAX 18–19 MONTH TOTAL DELIVERY TIMELINE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2 mt-1">
          Indicative Programme <span className="text-[#C5A059] font-serif italic font-black">Delivery Roadmap</span>
        </h1>

        <p className="font-serif italic text-slate-700 text-lg md:text-2xl max-w-4xl font-medium">
          Phased execution strategy engineered for zero operational downtime — reaching target Go-Lives from Month 10 through Month 17.
        </p>
      </div>

      {/* 5 Timeline Bars with Animated SVG Dashflow Lines */}
      <div className="relative z-10 my-auto space-y-3 font-sans">
        <div className="flex items-center justify-between">
          <p className="text-xs font-mono font-bold tracking-[0.2em] text-[#C5A059] uppercase flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#05A872]"></span>
            FIVE PLATFORM GO-LIVE TARGETS (OFFICIAL PROJECT PLAN)
          </p>
          <span className="text-xs font-mono text-slate-800 font-bold">PARALLEL TRACK EXECUTION</span>
        </div>

        {/* 5 Rows Stage */}
        <div className="relative space-y-3">
          {/* Animated SVG Rays in Background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <line x1="20%" y1="10%" x2="95%" y2="10%" stroke="#05A872" strokeWidth="2" className="animated-dash-line" opacity="0.5" />
            <line x1="20%" y1="30%" x2="95%" y2="30%" stroke="#05A872" strokeWidth="2" className="animated-dash-line" opacity="0.5" />
            <line x1="20%" y1="50%" x2="95%" y2="50%" stroke="#C5A059" strokeWidth="2" className="animated-dash-line" opacity="0.5" />
            <line x1="20%" y1="70%" x2="95%" y2="70%" stroke="#D32F2F" strokeWidth="2" className="animated-dash-line" opacity="0.5" />
            <line x1="20%" y1="90%" x2="95%" y2="90%" stroke="#2563EB" strokeWidth="2" className="animated-dash-line" opacity="0.5" />
          </svg>

          {timelines.map((t) => (
            <div
              key={t.code}
              className="relative z-10 bg-white border-2 border-slate-300 p-3.5 rounded-xl flex items-center justify-between shadow-sm hover-float transition-all hover:border-[#C5A059]"
            >
              <div className="w-56 flex items-center gap-3 shrink-0 border-r-2 border-slate-200 pr-3">
                <span className={`w-3 h-10 rounded-full ${t.color}`}></span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-base font-black text-slate-900 leading-tight">{t.code}</span>
                    <span className={`text-[10px] md:text-xs font-mono font-bold px-2 py-0.5 rounded border ${t.badge}`}>
                      {t.targetGoLive}
                    </span>
                  </div>
                  <span className="text-xs text-slate-700 font-bold block">{t.title}</span>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-3 gap-3 font-sans pl-4">
                <div className="bg-slate-50 border border-slate-300 p-2.5 rounded-lg text-slate-900">
                  <span className="text-[#05A872] font-mono font-bold text-xs block mb-0.5">PHASE 1</span>
                  <span className="font-bold text-xs md:text-sm text-slate-900">{t.phase1}</span>
                </div>
                <div className="bg-slate-50 border border-slate-300 p-2.5 rounded-lg text-slate-900">
                  <span className="text-[#C5A059] font-mono font-bold text-xs block mb-0.5">PHASE 2</span>
                  <span className="font-bold text-xs md:text-sm text-slate-900">{t.phase2}</span>
                </div>
                <div className="bg-slate-50 border border-slate-300 p-2.5 rounded-lg text-slate-900">
                  <span className="text-blue-700 font-mono font-bold text-xs block mb-0.5">PHASE 3</span>
                  <span className="font-bold text-xs md:text-sm text-slate-900">{t.phase3}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 National Key Milestones Bar */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 font-sans">
        {milestones.map((m, idx) => (
          <div key={idx} className={`bg-white border-2 ${m.color} p-3 px-4 rounded-xl flex items-center justify-between shadow-sm hover-float`}>
            <span className="font-mono text-xs md:text-sm font-black">{m.month}:</span>
            <span className="text-xs md:text-sm font-bold text-slate-900">{m.title}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t-2 border-slate-300 pt-2 flex justify-between font-mono text-xs md:text-sm font-bold text-slate-800">
        <span>17 · PROGRAMME ROADMAP · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">DELIVERY TIMELINE & PHASING</span>
      </div>
    </div>
  );
}
