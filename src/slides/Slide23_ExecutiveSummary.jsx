import React from 'react';

export default function Slide23_ExecutiveSummary() {
  const summaryCards = [
    {
      num: '01',
      title: 'Five Platforms, One Ecosystem',
      desc: 'BdREN TIGERfed SSO, shared API Gateway, national audit logging, and unified identity across all higher ed.',
      color: 'text-[#05A872]',
      border: 'border-[#05A872]',
    },
    {
      num: '02',
      title: 'Zero Monolithic Risk',
      desc: 'Independent microservice architecture — scale, upgrade, and maintain each module without touching the rest.',
      color: 'text-[#D32F2F]',
      border: 'border-[#D32F2F]',
    },
    {
      num: '03',
      title: 'Tailored Anchor University Rollout',
      desc: 'Standard common core + institution-specific customisation layer for 10 anchor universities across 8 divisions.',
      color: 'text-[#2563EB]',
      border: 'border-[#2563EB]',
    },
    {
      num: '04',
      title: '100% Dedicated Local Team',
      desc: 'Bangladesh-based enterprise ERP specialists committed to co-ownership, knowledge transfer, and 3-year SLA support.',
      color: 'text-[#C5A059]',
      border: 'border-[#C5A059]',
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#F4F0E8] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#C5A059]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            EXECUTIVE SUMMARY & VALUE PROPOSITION
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Why Award to <span className="text-[#C5A059] font-serif italic font-black">Systech × Pakiza</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          The right partner to transform Bangladesh higher education governance — experienced, local, disciplined, and outcome-led.
        </p>
      </div>

      {/* 4 Summary Cards Grid */}
      <div className="my-auto">
        <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans mb-3">
          FOUR REASONS OUR CONSORTIUM IS TURNKEY READY
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {summaryCards.map((c) => (
            <div key={c.num} className={`bg-white border-l-4 ${c.border} border-t border-r border-b border-slate-200 p-6 rounded-r-xl shadow-md space-y-2`}>
              <div className="flex items-baseline gap-3">
                <span className={`font-serif text-3xl font-black ${c.color}`}>{c.num}</span>
                <h3 className="font-serif font-black text-xl text-slate-900 leading-tight">
                  {c.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans font-light">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Closing Stance */}
      <div className="bg-[#0B131F] text-white p-3 rounded-lg text-center font-serif text-xs italic font-bold">
        "Systech × Pakiza — the partner who stays until your national transformation is fully achieved."
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-slate-300 text-[11px] text-slate-600 font-mono flex justify-between">
        <span>22 · EXECUTIVE SUMMARY · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#C5A059]">VALUE PROPOSITION</span>
      </div>
    </div>
  );
}
