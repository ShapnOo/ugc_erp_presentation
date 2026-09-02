import React from 'react';

export default function Slide15_TechStack() {
  const pillars = [
    {
      num: '01',
      title: 'Single Sign-On',
      desc: 'National identity federation — one login, every platform, every role.',
      numColor: 'text-[#05A872]',
      bgClass: 'bg-white border-2 border-[#05A872] shadow-sm'
    },
    {
      num: '02',
      title: 'API Gateway',
      desc: 'Unified API entry point with rate limiting and traffic governance.',
      numColor: 'text-[#C5A059]',
      bgClass: 'bg-white border-2 border-amber-400 shadow-sm'
    },
    {
      num: '03',
      title: 'Role-Based Access',
      desc: 'Fine-grained RBAC — students, faculty, admin, governance, all isolated.',
      numColor: 'text-red-600',
      bgClass: 'bg-white border-2 border-red-400 shadow-sm'
    },
    {
      num: '04',
      title: 'Two-Factor Auth',
      desc: '2FA on every privileged action — SMS, app, hardware token.',
      numColor: 'text-blue-600',
      bgClass: 'bg-white border-2 border-blue-400 shadow-sm'
    },
    {
      num: '05',
      title: 'Centralised Audit',
      desc: 'Every action recorded at the national level — tamper-proof and queryable.',
      numColor: 'text-slate-900',
      bgClass: 'bg-white border-2 border-slate-400 shadow-sm'
    },
    {
      num: '06',
      title: 'Integration Adapters',
      desc: 'Standard connectors for payment networks, banks, identity providers.',
      numColor: 'text-[#05A872]',
      bgClass: 'bg-white border-2 border-emerald-400 shadow-sm'
    }
  ];

  return (
    <div className="relative w-full h-full bg-[#EDF2F7] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-[3px] bg-[#05A872]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            TECHNOLOGY FOUNDATION
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Our Common <span className="text-[#05A872] font-serif italic font-black">Tech Stack</span> Across All Five Platforms
        </h1>

        <p className="font-serif italic text-slate-700 text-lg md:text-2xl max-w-4xl font-medium">
          Build once, use everywhere — a shared identity, security, and integration backbone that every platform inherits.
        </p>
      </div>

      {/* 6 Pillars Grid */}
      <div className="my-auto">
        <p className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans mb-3">
          SIX FOUNDATION PILLARS WE ENGINEER
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p) => (
            <div key={p.num} className={`${p.bgClass} p-5 rounded-2xl shadow-md flex flex-col justify-between h-44 hover-float`}>
              <div>
                <span className={`font-mono text-2xl font-black ${p.numColor} block mb-1`}>
                  {p.num}
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

      {/* Bottom Outcome Bar */}
      <div className="border-2 border-[#C5A059] bg-[#FFFDF9] p-4 rounded-xl text-center shadow-xs">
        <p className="font-serif italic text-base md:text-lg text-slate-950 font-bold">
          Outcome: <strong className="font-black text-[#05A872]">one identity, one audit trail, one gateway</strong> — across every academic interaction nationwide.
        </p>
      </div>

      {/* Footer */}
      <div className="border-t-2 border-slate-300 pt-2 flex justify-between font-mono text-xs md:text-sm font-bold text-slate-800">
        <span>15 · TECHNOLOGY FOUNDATION · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">COMMON TECH STACK</span>
      </div>
    </div>
  );
}
