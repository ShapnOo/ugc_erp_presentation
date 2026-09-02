import React from 'react';

export default function Slide20_LetsBegin() {
  const nextSteps = [
    {
      num: '01',
      title: 'Discovery Call',
      desc: 'Walk through requirements, constraints, and your evaluation criteria.',
      numColor: 'text-[#05A872]',
      bgClass: 'bg-[#072C2B] border border-[#05A872]/40'
    },
    {
      num: '02',
      title: 'Technical Demo',
      desc: 'Live walkthrough of our approach — architecture, prototype, integrations.',
      numColor: 'text-[#C5A059]',
      bgClass: 'bg-[#1C2430] border border-slate-700'
    },
    {
      num: '03',
      title: 'Bid Conference',
      desc: 'Joint review of the bid structure, timeline, and partnership model.',
      numColor: 'text-red-500',
      bgClass: 'bg-[#2B0E14] border border-red-900/60'
    },
    {
      num: '04',
      title: 'Mobilise',
      desc: 'Once awarded — we hit the ground running. Day-one delivery velocity.',
      numColor: 'text-blue-400',
      bgClass: 'bg-[#0E1E38] border border-blue-900/60'
    }
  ];

  return (
    <div className="relative w-full h-full bg-[#0B131F] text-slate-100 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#C5A059]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            NEXT STEPS
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight mb-3">
          Let's <span className="text-[#C5A059] font-serif italic font-black">Begin.</span>
        </h1>

        <p className="font-serif italic text-slate-300 text-base md:text-lg max-w-4xl font-normal">
          A partnership built around five platforms and shared national ambition.
        </p>
      </div>

      {/* 4 Next Steps Grid */}
      <div className="my-auto">
        <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans mb-3">
          OUR RECOMMENDED PATH FORWARD
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {nextSteps.map((step) => (
            <div key={step.num} className={`${step.bgClass} p-6 rounded-xl shadow-xl flex flex-col justify-between h-40`}>
              <div>
                <span className={`font-serif text-3xl font-black ${step.numColor} block mb-1`}>
                  {step.num}
                </span>
                <h3 className="font-serif font-black text-xl text-white">
                  {step.title}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Quote */}
      <div className="text-center py-2">
        <div className="w-48 h-[1px] bg-[#C5A059]/40 mx-auto mb-2"></div>
        <p className="font-serif italic text-[#C5A059] text-base md:text-lg font-bold">
          "Systech × Pakiza — let's transform higher education together."
        </p>
        <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">
          — OUR CLOSING COMMITMENT
        </p>
      </div>

      {/* Bottom Gold Banner */}
      <div className="bg-[#C5A059] text-slate-950 -mx-8 -mb-8 md:-mx-12 md:-mb-12 p-4 px-8 md:px-12 flex justify-between items-center font-sans">
        <div>
          <h4 className="font-serif font-black text-base uppercase tracking-tight text-slate-950">
            SYSTECH × PAKIZA — JOINT VENTURE
          </h4>
          <p className="text-[9px] font-mono font-bold tracking-widest text-slate-900 uppercase">
            VENDOR PROPOSAL · NATIONAL HIGHER EDUCATION SUITE
          </p>
        </div>

        <div className="font-serif italic text-sm md:text-base font-bold text-slate-950">
          Thank you · Looking forward to working together
        </div>

        <div className="text-right">
          <span className="font-serif font-black text-sm block">Let's Build</span>
          <span className="text-[9px] font-mono font-bold tracking-widest text-slate-900 uppercase">YOUR VISION</span>
        </div>
      </div>
    </div>
  );
}
