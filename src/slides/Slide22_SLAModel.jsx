import React from 'react';

export default function Slide22_SLAModel() {
  const supportPillars = [
    {
      num: '01',
      title: 'Dedicated Support Squad',
      desc: 'System Architects, DBAs, Developers, DevOps/SRE, and On-Ground Trainers committed post-launch.',
      color: 'text-[#05A872]',
      bgClass: 'bg-white border-2 border-[#05A872] shadow-md',
    },
    {
      num: '02',
      title: '99.9% Uptime SLA Guarantee',
      desc: 'High-availability server infrastructure supporting peak admission loads and daily UGC operations.',
      color: 'text-[#C5A059]',
      bgClass: 'bg-white border-2 border-amber-400 shadow-md',
    },
    {
      num: '03',
      title: '24-Hour Query Resolution',
      desc: 'Dedicated helpdesk targeted at resolving 95%+ of queries within 24 hours for all 8 divisions.',
      color: 'text-blue-600',
      bgClass: 'bg-white border-2 border-blue-400 shadow-md',
    },
    {
      num: '04',
      title: 'Central Backup & Evolution',
      desc: 'Offsite encrypted backup system with continuous security patching and feature evolution.',
      color: 'text-red-600',
      bgClass: 'bg-white border-2 border-red-400 shadow-md',
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#F4F0E8] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-[3px] bg-[#C5A059]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            LONG-TERM SUSTAINABILITY
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Post-Go-Live Support & <span className="text-[#C5A059] font-serif italic font-black">SLA Commitment</span>
        </h1>

        <p className="font-serif italic text-slate-700 text-lg md:text-2xl max-w-4xl font-medium">
          Three years of comprehensive post-implementation support, maintenance, capacity building, and continuous system evolution.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="my-auto">
        <p className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans mb-3">
          FOUR PILLARS OF OUR SUSTAINABILITY COMMITMENT
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {supportPillars.map((p) => (
            <div key={p.num} className={`${p.bgClass} p-6 rounded-2xl shadow-md flex flex-col justify-between h-48 hover-float`}>
              <div>
                <span className={`font-mono text-3xl font-black ${p.color} block mb-1`}>
                  {p.num}
                </span>
                <h3 className="font-serif font-black text-xl md:text-2xl text-slate-900 leading-snug">
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

      {/* Quote Banner */}
      <div className="bg-white border-l-4 border-[#C5A059] border-t-2 border-r-2 border-b-2 border-slate-300 p-4 rounded-r-xl shadow-xs">
        <p className="font-serif italic text-slate-950 text-base md:text-lg font-bold">
          "We don't just deliver code — we ensure multi-year operational excellence across Bangladesh higher education."
        </p>
      </div>

      {/* Footer */}
      <div className="border-t-2 border-slate-300 pt-2 flex justify-between font-mono text-xs md:text-sm font-bold text-slate-800">
        <span>21 · SLA & SUPPORT COMMITMENT · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#C5A059]">POST-GO-LIVE SUSTAINABILITY</span>
      </div>
    </div>
  );
}
