import React from 'react';

export default function Slide19_Approach() {
  const pillars = [
    {
      letter: 'A',
      title: 'Joint Governance',
      desc: 'Shared steering committee, joint risk register, transparent escalation.',
      color: 'text-[#05A872]',
      bgClass: 'bg-white border-2 border-[#05A872] shadow-md'
    },
    {
      letter: 'B',
      title: 'Outcome-Driven',
      desc: 'SLAs tied to adoption + satisfaction + uptime — not just delivery dates.',
      color: 'text-[#C5A059]',
      bgClass: 'bg-white border-2 border-amber-400 shadow-md'
    },
    {
      letter: 'C',
      title: 'Knowledge Transfer',
      desc: 'Your team operates the system. We hand over, not lock you in.',
      color: 'text-red-600',
      bgClass: 'bg-white border-2 border-red-400 shadow-md'
    },
    {
      letter: 'D',
      title: 'Long Partnership',
      desc: 'Multi-year support built in. We grow with your ecosystem.',
      color: 'text-blue-600',
      bgClass: 'bg-white border-2 border-blue-400 shadow-md'
    }
  ];

  return (
    <div className="relative w-full h-full bg-[#F9F5EC] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-[3px] bg-[#05A872]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            OUR APPROACH
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-3">
          A Programme We <span className="text-[#05A872] font-serif italic font-black">Co-Own</span> With You.
        </h1>

        <p className="font-serif italic text-slate-700 text-lg md:text-2xl max-w-4xl font-medium">
          Not a vendor-and-client transaction — a joint programme organisation with shared accountability for outcomes.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="my-auto">
        <p className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans mb-3">
          FOUR PILLARS OF OUR WORKING APPROACH
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {pillars.map((p) => (
            <div key={p.letter} className={`${p.bgClass} p-6 rounded-2xl shadow-md flex flex-col justify-between h-48 hover-float`}>
              <div>
                <span className={`font-serif text-4xl font-black ${p.color} block mb-1`}>
                  {p.letter}
                </span>
                <h3 className="font-serif font-black text-2xl text-slate-900">
                  {p.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-slate-800 leading-relaxed font-sans font-bold">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Quote Box */}
      <div className="bg-white border-l-4 border-[#05A872] border-t-2 border-r-2 border-b-2 border-slate-300 p-4 rounded-r-xl shadow-xs">
        <p className="font-serif italic text-slate-950 text-lg md:text-xl font-bold">
          "We don't want to be remembered as the company that built it — but the partner who stayed until it worked."
        </p>
        <p className="text-xs font-mono font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans mt-1">
          — OUR PARTNERSHIP PROMISE
        </p>
      </div>

      {/* Footer */}
      <div className="border-t-2 border-slate-300 pt-2 flex justify-between font-mono text-xs md:text-sm font-bold text-slate-800">
        <span>20 · OUR APPROACH · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">CO-OWNERSHIP MODEL</span>
      </div>
    </div>
  );
}
