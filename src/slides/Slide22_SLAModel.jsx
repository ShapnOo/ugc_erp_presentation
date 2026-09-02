import React from 'react';

export default function Slide22_SLAModel() {
  const supportPillars = [
    {
      num: '01',
      title: 'Dedicated Support Organisation',
      desc: 'System Architects, DBAs, Developers, DevOps/SRE, and On-Ground Trainers committed post-launch.',
      color: 'text-[#05A872]',
      bgClass: 'bg-white border border-[#05A872]/40 shadow-xs',
    },
    {
      num: '02',
      title: '99.9% Uptime SLA Guarantee',
      desc: 'High-availability server infrastructure supporting peak admission loads and daily UGC operations.',
      color: 'text-[#C5A059]',
      bgClass: 'bg-white border border-slate-300 shadow-xs',
    },
    {
      num: '03',
      title: '24-Hour Query Resolution',
      desc: 'Dedicated helpdesk targeted at resolving 95%+ of queries within 24 hours for all 8 divisions.',
      color: 'text-blue-600',
      bgClass: 'bg-white border border-blue-200 shadow-xs',
    },
    {
      num: '04',
      title: 'Central Backup & Evolution',
      desc: 'Offsite encrypted backup system with continuous security patching and feature evolution.',
      color: 'text-red-600',
      bgClass: 'bg-white border border-red-200 shadow-xs',
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#F4F0E8] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#C5A059]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            LONG-TERM SUSTAINABILITY
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Post-Go-Live Support & <span className="text-[#C5A059] font-serif italic font-black">SLA Commitment</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          Three years of comprehensive post-implementation support, maintenance, capacity building, and continuous system evolution.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="my-auto">
        <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans mb-3">
          FOUR PILLARS OF OUR SUSTAINABILITY COMMITMENT
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {supportPillars.map((p) => (
            <div key={p.num} className={`${p.bgClass} p-6 rounded-xl shadow-md flex flex-col justify-between h-44`}>
              <div>
                <span className={`font-mono text-2xl font-black ${p.color} block mb-1`}>
                  {p.num}
                </span>
                <h3 className="font-serif font-black text-lg text-slate-900 leading-snug">
                  {p.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans font-light">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Banner */}
      <div className="bg-white border-l-4 border-[#C5A059] border-t border-r border-b border-slate-200 p-4 rounded-r-xl shadow-xs">
        <p className="font-serif italic text-slate-800 text-base md:text-lg">
          "We don't just deliver code — we ensure multi-year operational excellence across Bangladesh higher education."
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-300 pt-3 flex justify-between font-mono text-[11px] text-slate-600">
        <span>21 · SLA & SUPPORT COMMITMENT · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#C5A059]">POST-GO-LIVE SUSTAINABILITY</span>
      </div>
    </div>
  );
}
