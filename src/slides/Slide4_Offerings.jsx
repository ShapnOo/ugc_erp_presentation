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
      bg: 'bg-[#D32F2F] text-white border-2 border-red-400',
      tagBg: 'bg-[#991B1B] text-white font-black',
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
      bg: 'bg-[#2563EB] text-white border-2 border-blue-400',
      tagBg: 'bg-[#1E40AF] text-white font-black',
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
      bg: 'bg-[#0B131F] text-white border-2 border-slate-700',
      tagBg: 'bg-[#05A872] text-slate-950 font-black',
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
      bg: 'bg-[#D9A74A] text-slate-950 border-2 border-amber-600',
      tagBg: 'bg-slate-950 text-[#D9A74A] font-black',
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
      bg: 'bg-[#05A872] text-white border-2 border-emerald-400',
      tagBg: 'bg-[#065F46] text-white font-black',
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#FAF7F2] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-[3px] bg-[#05A872]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            OUR SOLUTION SUITE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Our Five <span className="text-[#C5A059] font-serif italic font-black">Flagship Offerings</span>
        </h1>

        <p className="font-serif italic text-slate-800 text-lg md:text-2xl max-w-4xl font-semibold">
          Digitize the complete lifecycle of higher education administration across all 8 divisions of Bangladesh.
        </p>
      </div>

      {/* 5 Content-Rich Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-auto items-stretch">
        {offerings.map((item) => (
          <div
            key={item.code}
            className={`${item.bg} p-5 rounded-2xl shadow-xl flex flex-col justify-between hover-float transition-all duration-300 min-h-[380px]`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-4xl font-black opacity-95">
                  {item.num}
                </span>
                <span className={`font-mono text-xs md:text-sm font-black tracking-widest px-2.5 py-1 rounded uppercase ${item.tagBg}`}>
                  {item.code}
                </span>
              </div>

              <h3 className="font-serif font-black text-2xl md:text-3xl mb-1 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm font-mono font-black tracking-wider opacity-90 uppercase mb-4">
                {item.scope}
              </p>

              {/* Bullet Features */}
              <div className="space-y-2 pt-3 border-t border-current/40 font-sans text-sm md:text-base font-bold">
                {item.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-lg leading-none">✓</span>
                    <span className="opacity-95 leading-tight">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience Footer Pill */}
            <div className="pt-3 border-t border-current/40 font-mono text-xs md:text-sm uppercase tracking-wider opacity-95 font-black">
              TARGET: <strong className="font-black">{item.target}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t-2 border-slate-300 pt-3 flex justify-between font-mono text-xs md:text-sm font-bold text-slate-800">
        <span>04 · OUR SOLUTION SUITE · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">FIVE FLAGSHIP PLATFORMS</span>
      </div>
    </div>
  );
}
