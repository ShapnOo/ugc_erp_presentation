import React from 'react';

export default function Slide4_Offerings() {
  const offerings = [
    {
      num: '01',
      code: 'UGC ERP',
      title: 'Central Authority Automation',
      desc: '11 governance modules for UGC internal operations, HR, finance, and oversight.',
      bg: 'bg-[#D32F2F]',
      text: 'text-white',
      accent: 'border-red-400',
    },
    {
      num: '02',
      code: 'UMS-ERP',
      title: 'University Management',
      desc: '18-module university core for student lifecycle, academics, HR, and campus operations.',
      bg: 'bg-[#2563EB]',
      text: 'text-white',
      accent: 'border-blue-400',
    },
    {
      num: '03',
      code: 'AMS',
      title: 'Admission Management',
      desc: 'Standalone admission automation for high-throughput peak seasonal loads.',
      bg: 'bg-[#0B131F] border border-slate-700',
      text: 'text-white',
      accent: 'border-[#05A872]',
    },
    {
      num: '04',
      code: 'NEXUS',
      title: 'National Matchmaking Hub',
      desc: 'Matchmaking engine pairing students, faculty, universities, and industry.',
      bg: 'bg-[#D9A74A]',
      text: 'text-slate-950',
      accent: 'border-amber-600',
    },
    {
      num: '05',
      code: 'GMS',
      title: 'Grants Management System',
      desc: 'Turnkey research grant management from proposal to peer review & audit trail.',
      bg: 'bg-[#05A872]',
      text: 'text-white',
      accent: 'border-emerald-300',
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#0B131F] text-slate-100 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#05A872]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            OUR SOLUTION SUITE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight mb-2">
          Our Five <span className="text-[#C5A059] font-serif italic font-black">Flagship Offerings</span>
        </h1>

        <p className="font-serif italic text-slate-300 text-base md:text-lg max-w-4xl font-normal">
          Digitize the complete lifecycle of higher education administration across Bangladesh.
        </p>
      </div>

      {/* 5 Cards Row (Reordered: UGC ERP, UMS-ERP, AMS, NEXUS, GMS) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-auto items-stretch">
        {offerings.map((item) => (
          <div
            key={item.code}
            className={`${item.bg} ${item.text} p-6 rounded-2xl shadow-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-3xl font-black opacity-90">
                  {item.num}
                </span>
                <span className="font-mono text-[10px] font-bold tracking-widest px-2 py-0.5 rounded bg-black/20 uppercase border border-current/20">
                  {item.code}
                </span>
              </div>

              <h3 className="font-serif font-black text-xl mb-3 leading-tight">
                {item.title}
              </h3>
            </div>

            <p className="text-xs opacity-90 leading-relaxed font-sans font-light pt-2 border-t border-current/20">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex justify-between font-mono text-[11px] text-slate-400">
        <span>04 · OUR SOLUTION SUITE · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">FIVE FLAGSHIP PLATFORMS</span>
      </div>
    </div>
  );
}
