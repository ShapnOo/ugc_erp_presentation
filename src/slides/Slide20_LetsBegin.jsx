import React from 'react';

export default function Slide20_LetsBegin() {
  const pathForwardSteps = [
    {
      num: '01',
      title: 'Discovery & Alignment',
      desc: 'Detailed review of UGC requirements, constraints, and evaluation criteria.',
      badge: 'PHASE 01',
      borderColor: 'hover:border-[#05A872]',
      numColor: 'text-[#05A872]'
    },
    {
      num: '02',
      title: 'Technical Demo',
      desc: 'Live walkthrough of our 5 platforms, microservices architecture, and SSO.',
      badge: 'PHASE 02',
      borderColor: 'hover:border-[#C5A059]',
      numColor: 'text-[#C5A059]'
    },
    {
      num: '03',
      title: 'Bid Conference',
      desc: 'Joint review of project governance, 3-year SLA commitment, and phasing.',
      badge: 'PHASE 03',
      borderColor: 'hover:border-red-500',
      numColor: 'text-red-500'
    },
    {
      num: '04',
      title: 'Team Mobilisation',
      desc: 'Once awarded — immediate Day-1 deployment of our local engineering team.',
      badge: 'PHASE 04',
      borderColor: 'hover:border-blue-400',
      numColor: 'text-blue-400'
    }
  ];

  const valueSummary = [
    { label: '5 FLAGSHIP PLATFORMS', val: 'UGC ERP, UMS-ERP, AMS, Nexus & GMS built as one system.' },
    { label: '100% LOCAL ON-GROUND TEAM', val: 'Dhaka-based engineering team with zero offshore dependency.' },
    { label: '3-YEAR POST-GO-LIVE SLA', val: '99.9% guaranteed uptime SLA & 24-hour query clearance.' },
    { label: 'SINGLE SIGN-ON READY', val: 'BdREN TIGERfed SSO integrated across all 8 divisions.' }
  ];

  return (
    <div className="relative w-full h-full bg-[#0B131F] text-slate-100 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Soft Ambient Radial Glow Effects (Subtle & Elegant) */}
      <div className="absolute top-0 left-0 w-[650px] h-[650px] bg-[#05A872]/15 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[650px] h-[650px] bg-[#C5A059]/15 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      {/* TOP HEADER */}
      <div className="relative z-10 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-[2px] bg-[#C5A059]"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
              NEXT STEPS · EXECUTIVE SUMMARY & PATH FORWARD
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold text-[#05A872] bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-md shadow-sm">
            ● READY FOR IMMEDIATE MOBILISATION
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight mb-1">
          Let's <span className="text-[#C5A059] font-serif italic font-black">Begin.</span>
        </h1>

        <p className="font-serif italic text-slate-200 text-base md:text-xl max-w-4xl font-normal">
          A turnkey partnership built around five integrated platforms, shared national ambition, and long-term commitment.
        </p>
      </div>

      {/* SECTION 1: 4-STEP WORKFLOW PIPELINE WITH CLEAN SUBTLE SVG DATA RAYS */}
      <div className="relative z-10 my-auto py-2 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#C5A059] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#05A872]"></span>
            OUR RECOMMENDED PATH FORWARD
          </p>
          <span className="text-[10px] font-mono text-slate-400">4-STAGE MOBILISATION ROADMAP</span>
        </div>

        {/* 4 Pipeline Cards Stage */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Subtle Dashflow Ray Lines connecting steps */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
            <line x1="23%" y1="50%" x2="27%" y2="50%" stroke="#05A872" strokeWidth="2" className="animated-dash-line" opacity="0.6" />
            <line x1="48%" y1="50%" x2="52%" y2="50%" stroke="#C5A059" strokeWidth="2" className="animated-dash-line" opacity="0.6" />
            <line x1="73%" y1="50%" x2="77%" y2="50%" stroke="#D32F2F" strokeWidth="2" className="animated-dash-line" opacity="0.6" />
          </svg>

          {pathForwardSteps.map((step) => (
            <div
              key={step.num}
              className={`relative z-10 bg-[#0E1726]/90 border border-slate-800/90 ${step.borderColor} p-5 rounded-2xl shadow-xl flex flex-col justify-between h-44 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer backdrop-blur-md`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-serif text-3xl font-black ${step.numColor}`}>
                    {step.num}
                  </span>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 uppercase">
                    {step.badge}
                  </span>
                </div>
                <h3 className="font-serif font-black text-lg text-white leading-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: 4 VALUE SUMMARY CARDS (CLEAN & ELEGANT) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-3 font-sans my-1">
        {valueSummary.map((val, idx) => (
          <div key={idx} className="bg-[#091526] border border-slate-800 p-3.5 rounded-xl flex flex-col justify-between shadow-lg hover:border-[#05A872]/60 transition-colors">
            <span className="text-[9px] font-mono font-bold text-[#05A872] uppercase tracking-wider block mb-1">
              {val.label}
            </span>
            <p className="text-xs text-slate-200 font-normal leading-snug">
              {val.val}
            </p>
          </div>
        ))}
      </div>

      {/* SECTION 3: ELEGANT GOLD EXECUTIVE CLOSING BANNER */}
      <div className="relative z-10 bg-[#C5A059] text-slate-950 -mx-8 -mb-8 md:-mx-12 md:-mb-12 p-4 px-8 md:px-12 flex justify-between items-center font-sans shadow-2xl border-t border-amber-300">
        <div>
          <h4 className="font-serif font-black text-base md:text-lg uppercase tracking-tight text-slate-950">
            SYSTECH DIGITAL × PAKIZA SOFTWARE — JOINT VENTURE
          </h4>
          <p className="text-[10px] font-mono font-bold tracking-widest text-slate-900 uppercase">
            VENDOR PROPOSAL · NATIONAL HIGHER EDUCATION DIGITAL SUITE
          </p>
        </div>

        <div className="font-serif italic text-base md:text-lg font-black text-slate-950 text-center">
          "Thank you · We are ready to transform higher education together."
        </div>

        <div className="text-right">
          <span className="font-serif font-black text-sm block">Let's Build</span>
          <span className="text-[9px] font-mono font-bold tracking-widest text-slate-900 uppercase bg-slate-950 text-[#C5A059] px-2 py-0.5 rounded shadow-sm">
            IMMEDIATE MOBILISATION READY
          </span>
        </div>
      </div>
    </div>
  );
}
