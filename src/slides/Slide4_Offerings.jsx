import React from 'react';

export default function Slide4_Offerings() {
  const offerings = [
    {
      num: '01',
      code: 'UGC ERP',
      title: 'Central Governance',
      scope: '11 Governance Modules',
      features: [
        'HR & Admin, Finance & Accounts',
        'University Info & Quality QA',
        'Ministry & Leadership Dashboards'
      ],
      target: 'UGC & Ministry Leadership',
      bg: 'bg-[#D32F2F] text-white border-red-400',
      tagBg: 'bg-[#991B1B] text-white',
    },
    {
      num: '02',
      code: 'UMS-ERP',
      title: 'University Management',
      scope: '18 Integrated Modules',
      features: [
        'Student SIS, Registration, Fees',
        'HR, Finance, Library, Hostel',
        'GPS Fleet & IoT Smart Access'
      ],
      target: 'Public & Private Universities',
      bg: 'bg-[#2563EB] text-white border-blue-400',
      tagBg: 'bg-[#1E40AF] text-white',
    },
    {
      num: '03',
      code: 'AMS',
      title: 'Admission System',
      scope: '8-Step Applicant Lifecycle',
      features: [
        'OCR Doc Upload & Mobile Pay',
        'Automated Merit List & Seats',
        'Handover to UMS-ERP Sync'
      ],
      target: '1M+ Seasonal Applicants',
      bg: 'bg-[#0B131F] text-white border-slate-800',
      tagBg: 'bg-[#05A872] text-slate-950 font-bold',
    },
    {
      num: '04',
      code: 'NEXUS',
      title: 'Matchmaking Hub',
      scope: '4-World Matching Engine',
      features: [
        'Internship & Faculty Exchange',
        'Technology Transfer & R&D',
        '24-Hour Query Resolution SLA'
      ],
      target: 'Students, Faculty & Industry',
      bg: 'bg-[#D9A74A] text-slate-950 border-amber-600',
      tagBg: 'bg-slate-950 text-[#D9A74A]',
    },
    {
      num: '05',
      code: 'GMS',
      title: 'Grants Management',
      scope: '10-Step Grant Lifecycle',
      features: [
        'Online Proposal & Peer Review',
        'Milestone Fund Disbursement',
        'Output Repository & Audit'
      ],
      target: 'Faculty & Research Scholars',
      bg: 'bg-[#05A872] text-white border-emerald-400',
      tagBg: 'bg-[#065F46] text-white',
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#FAF7F2] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-[2px] bg-[#05A872]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            OUR SOLUTION SUITE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Our Five <span className="text-[#C5A059] font-serif italic font-black">Flagship Offerings</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          Digitize the complete lifecycle of higher education administration across all 8 divisions of Bangladesh.
        </p>
      </div>

      {/* 5 Content-Rich Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-auto items-stretch">
        {offerings.map((item) => (
          <div
            key={item.code}
            className={`${item.bg} p-5 rounded-2xl shadow-xl flex flex-col justify-between border hover-float transition-all duration-300 min-h-[360px]`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-3xl font-black opacity-90">
                  {item.num}
                </span>
                <span className={`font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 rounded uppercase ${item.tagBg}`}>
                  {item.code}
                </span>
              </div>

              <h3 className="font-serif font-black text-xl mb-1 leading-tight">
                {item.title}
              </h3>
              <p className="text-[10px] font-mono font-bold tracking-wider opacity-80 uppercase mb-4">
                {item.scope}
              </p>

              {/* Bullet Features */}
              <div className="space-y-2 pt-2 border-t border-current/20 font-sans text-xs">
                {item.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="font-bold">✓</span>
                    <span className="opacity-90 leading-tight font-light">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience Footer Pill */}
            <div className="pt-3 border-t border-current/20 font-mono text-[9px] uppercase tracking-wider opacity-80">
              TARGET: <strong className="font-bold">{item.target}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-300 pt-3 flex justify-between font-mono text-[11px] text-slate-600">
        <span>04 · OUR SOLUTION SUITE · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">FIVE FLAGSHIP PLATFORMS</span>
      </div>
    </div>
  );
}
