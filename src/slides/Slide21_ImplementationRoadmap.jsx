import React from 'react';

export default function Slide21_ImplementationRoadmap() {
  const timelines = [
    {
      code: 'UGC ERP',
      title: 'Governance Platform',
      color: 'bg-[#D32F2F]',
      borderColor: 'border-red-500',
      textColor: 'text-red-600',
      phase1: 'Months 1–5: Workshop & Design',
      phase2: 'Months 6–24: Microservices Build & Integration',
      phase3: 'Months 25–37: Pilot & Go-Live',
    },
    {
      code: 'UMS-ERP',
      title: 'University Management System',
      color: 'bg-[#2563EB]',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-600',
      phase1: 'Months 1–8: 8-Division Workshop & Design',
      phase2: 'Months 9–24: Core ERP Build',
      phase3: 'Months 25–55: 10 University Customisation & Pilot',
    },
    {
      code: 'AMS',
      title: 'Admission Management System',
      color: 'bg-[#05A872]',
      borderColor: 'border-emerald-500',
      textColor: 'text-[#05A872]',
      phase1: 'Months 1–3: Workflow Architecture',
      phase2: 'Months 4–8: High-Throughput Engine',
      phase3: 'Months 9–13: Payment & Sync Pilot',
    },
    {
      code: 'Nexus',
      title: 'National Matchmaking Hub',
      color: 'bg-[#C5A059]',
      borderColor: 'border-amber-500',
      textColor: 'text-[#C5A059]',
      phase1: 'Months 1–3: Matching Engine Design',
      phase2: 'Months 4–9: Platform Build & BdREN SSO',
      phase3: 'Months 10–16: 50 University Roadshows',
    },
    {
      code: 'GMS',
      title: 'Grants Management System',
      color: 'bg-[#05A872]',
      borderColor: 'border-emerald-500',
      textColor: 'text-[#05A872]',
      phase1: 'Months 1–6: Requirement & Design',
      phase2: 'Months 7–12: Grants Lifecycle Build',
      phase3: 'Months 13–20: Divisional Workshops & Pilot',
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#EEF3F8] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#05A872]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            PROGRAMME TIMELINE & PHASING
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Indicative Programme <span className="text-[#C5A059] font-serif italic font-black">Delivery Roadmap</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          Phased execution strategy engineered for zero operational downtime — delivering early wins while maintaining enterprise discipline.
        </p>
      </div>

      {/* 5 Timeline Bars */}
      <div className="my-auto space-y-2.5 font-sans">
        <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans mb-1">
          FIVE PLATFORM DELIVERY PHASES
        </p>

        {timelines.map((t) => (
          <div key={t.code} className="bg-white border border-slate-300 p-3 rounded-xl flex items-center justify-between shadow-xs">
            <div className="w-40 flex items-center gap-2.5">
              <span className={`w-2 h-8 rounded-full ${t.color}`}></span>
              <div>
                <span className="font-mono text-xs font-bold text-slate-900 block">{t.code}</span>
                <span className="text-[9px] text-slate-500 block">{t.title}</span>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-3 gap-2 text-[10px] font-mono pl-4">
              <div className="bg-slate-50 border border-slate-200 p-2 rounded text-slate-700">
                <span className="text-[#05A872] font-bold block mb-0.5">PHASE 1</span>
                {t.phase1}
              </div>
              <div className="bg-slate-50 border border-slate-200 p-2 rounded text-slate-700">
                <span className="text-[#C5A059] font-bold block mb-0.5">PHASE 2</span>
                {t.phase2}
              </div>
              <div className="bg-slate-50 border border-slate-200 p-2 rounded text-slate-700">
                <span className={t.textColor + ' font-bold block mb-0.5'}>PHASE 3</span>
                {t.phase3}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="bg-white border border-[#05A872]/40 p-2.5 rounded-lg text-center font-serif text-xs italic text-[#05A872] shadow-xs">
        "Phased delivery designed to deliver early wins without operational disruption across all 8 divisions."
      </div>

      {/* Footer */}
      <div className="border-t border-slate-300 pt-3 flex justify-between font-mono text-[11px] text-slate-600">
        <span>20 · PROGRAMME ROADMAP · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">DELIVERY TIMELINE & PHASING</span>
      </div>
    </div>
  );
}
