import React from 'react';

export default function Slide15_TechStack() {
  const pillars = [
    {
      num: '01',
      title: 'Single Sign-On',
      desc: 'National identity federation — one login, every platform, every role.',
      numColor: 'text-[#05A872]',
      bgClass: 'bg-white border border-[#05A872]/40 shadow-sm'
    },
    {
      num: '02',
      title: 'API Gateway',
      desc: 'Unified API entry point with rate limiting and traffic governance.',
      numColor: 'text-[#C5A059]',
      bgClass: 'bg-white border border-slate-300 shadow-sm'
    },
    {
      num: '03',
      title: 'Role-Based Access',
      desc: 'Fine-grained RBAC — students, faculty, admin, governance, all isolated.',
      numColor: 'text-red-600',
      bgClass: 'bg-white border border-red-200 shadow-sm'
    },
    {
      num: '04',
      title: 'Two-Factor Auth',
      desc: '2FA on every privileged action — SMS, app, hardware token.',
      numColor: 'text-blue-600',
      bgClass: 'bg-white border border-blue-200 shadow-sm'
    },
    {
      num: '05',
      title: 'Centralised Audit',
      desc: 'Every action recorded at the national level — tamper-proof and queryable.',
      numColor: 'text-slate-700',
      bgClass: 'bg-white border border-slate-300 shadow-sm'
    },
    {
      num: '06',
      title: 'Integration Adapters',
      desc: 'Standard connectors for payment networks, banks, identity providers.',
      numColor: 'text-[#05A872]',
      bgClass: 'bg-white border border-[#05A872]/40 shadow-sm'
    }
  ];

  return (
    <div className="relative w-full h-full bg-[#EDF2F7] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#05A872]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            TECHNOLOGY FOUNDATION
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Our Common <span className="text-[#05A872] font-serif italic font-black">Tech Stack</span> Across All Five Platforms
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          Build once, use everywhere — a shared identity, security, and integration backbone that every platform inherits.
        </p>
      </div>

      {/* 6 Pillars Grid */}
      <div className="my-auto">
        <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans mb-3">
          SIX FOUNDATION PILLARS WE ENGINEER
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p) => (
            <div key={p.num} className={`${p.bgClass} p-6 rounded-xl shadow-md flex flex-col justify-between h-40`}>
              <div>
                <span className={`font-mono text-xl font-black ${p.numColor} block mb-1`}>
                  {p.num}
                </span>
                <h3 className="font-serif font-black text-xl text-slate-900">
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

      {/* Bottom Outcome Bar */}
      <div className="border border-[#C5A059]/40 bg-[#FFFDF9] p-3 rounded-lg text-center shadow-xs">
        <p className="font-serif italic text-xs text-slate-800">
          Outcome: <strong className="font-semibold text-[#05A872]">one identity, one audit trail, one gateway</strong> — across every academic interaction nationwide.
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-300 pt-3 flex justify-between font-mono text-[11px] text-slate-600">
        <span>15 · TECHNOLOGY FOUNDATION · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">COMMON TECH STACK</span>
      </div>
    </div>
  );
}
