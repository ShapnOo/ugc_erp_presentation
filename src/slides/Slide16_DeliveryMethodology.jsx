import React from 'react';

export default function Slide16_DeliveryMethodology() {
  const phases = [
    {
      num: 'Phase 01',
      title: 'Discovery',
      desc: 'Stakeholder interviews, workflow analysis, requirements engineering. We map your world before one line of code.',
      timeline: '↑ WEEKS 1–8',
      bgClass: 'bg-[#0B131F] text-white'
    },
    {
      num: 'Phase 02',
      title: 'Design',
      desc: 'Architecture, service blueprint, UI/UX mockups, sign-off at every gate. We build the right thing.',
      timeline: '↑ MONTHS 2–4',
      bgClass: 'bg-[#047857] text-white'
    },
    {
      num: 'Phase 03',
      title: 'Build & Iterate',
      desc: 'Two-week sprint cadence with continuous delivery, automated testing, and stakeholder-visible demos.',
      timeline: '↑ CORE PHASE — LARGEST INVESTMENT',
      bgClass: 'bg-[#2563EB] text-white transform -translate-y-3 shadow-2xl ring-2 ring-blue-400'
    },
    {
      num: 'Phase 04',
      title: 'Deploy & Pilot',
      desc: 'Phased go-live across anchor universities, training, on-ground user enablement, and live support.',
      timeline: '↑ ROLL-OUT',
      bgClass: 'bg-[#C5A059] text-slate-950 font-semibold'
    },
    {
      num: 'Phase 05',
      title: 'Operate & Evolve',
      desc: 'Multi-year support, performance monitoring, feature evolution, and change adoption.',
      timeline: '↑ LONG-TERM COMMITMENT',
      bgClass: 'bg-[#D32F2F] text-white'
    }
  ];

  return (
    <div className="relative w-full h-full bg-[#F4F0E8] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#05A872]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            OUR DELIVERY METHODOLOGY
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          How We <span className="text-[#05A872] font-serif italic font-black">Deliver.</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          A proven phased methodology engineered for enterprise-scale national programmes — disciplined, transparent, outcome-led.
        </p>
      </div>

      {/* 5 Phase Cards Grid */}
      <div className="my-auto">
        <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans mb-3">
          FIVE PHASES OF OUR DELIVERY
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 items-stretch">
          {phases.map((p) => (
            <div
              key={p.num}
              className={`${p.bgClass} p-5 rounded-xl shadow-xl flex flex-col justify-between min-h-[300px] transition-all duration-300`}
            >
              <div>
                <span className="font-serif text-lg font-bold block mb-1 opacity-90">
                  {p.num}
                </span>
                <h3 className="font-serif font-black text-2xl mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-xs opacity-90 leading-relaxed font-sans font-light">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-current/20 font-mono text-[9px] font-bold tracking-widest uppercase opacity-80">
                {p.timeline}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Stance */}
      <div className="pt-3 border-t border-slate-300 flex justify-between font-mono text-[11px] text-slate-600">
        <span className="font-serif italic text-slate-900">
          Our stance: <strong className="font-semibold text-[#05A872]">enterprise programmes reward discipline</strong> — we build that in from day one.
        </span>
        <span>16 · OUR METHODOLOGY · SYSTECH × PAKIZA LIMITED</span>
      </div>
    </div>
  );
}
