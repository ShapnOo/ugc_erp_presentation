import React from 'react';

export default function Slide20_LetsBegin() {
  const pathForwardSteps = [
    {
      num: '01',
      title: 'Discovery & Alignment',
      desc: 'Detailed review of UGC requirements, constraints, and evaluation criteria.',
      badge: 'PHASE 01',
      borderColor: 'border-[#05A872]/80 hover:border-[#05A872]',
      numColor: 'text-[#05A872]'
    },
    {
      num: '02',
      title: 'Technical Demo',
      desc: 'Live walkthrough of our 5 platforms, microservices architecture, and SSO.',
      badge: 'PHASE 02',
      borderColor: 'border-[#C5A059]/80 hover:border-[#C5A059]',
      numColor: 'text-[#C5A059]'
    },
    {
      num: '03',
      title: 'Bid Conference',
      desc: 'Joint review of project governance, 3-year SLA commitment, and phasing.',
      badge: 'PHASE 03',
      borderColor: 'border-red-500/80 hover:border-red-500',
      numColor: 'text-red-500'
    },
    {
      num: '04',
      title: 'Team Mobilisation',
      desc: 'Once awarded — phased Day-1 mobilization of our local discovery & engineering squad.',
      badge: 'PHASE 04',
      borderColor: 'border-blue-500/80 hover:border-blue-400',
      numColor: 'text-blue-400'
    }
  ];

  const valueSummary = [
    { label: '5 FLAGSHIP PLATFORMS', val: 'UGC ERP, UMS-ERP, AMS, Nexus & GMS co-developed into one system.' },
    { label: '100% LOCAL ON-GROUND TEAM', val: 'Dhaka-based engineering team with zero offshore dependency.' },
    { label: '3-YEAR POST-GO-LIVE SLA', val: '99.9% guaranteed uptime SLA & 24-hour query clearance.' },
    { label: 'SINGLE SIGN-ON READY', val: 'BdREN TIGERfed SSO integrated across all 8 divisions.' }
  ];

  return (
    <div className="relative w-full h-full bg-[#0B131F] text-slate-100 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Soft Ambient Radial Glow Effects */}
      <div className="absolute top-0 left-0 w-[650px] h-[650px] bg-[#05A872]/15 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[650px] h-[650px] bg-[#C5A059]/15 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      {/* TOP HEADER */}
      <div className="relative z-10 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[3px] bg-[#C5A059]"></div>
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
              NEXT STEPS · EXECUTIVE SUMMARY & PATH FORWARD
            </span>
          </div>
          <span className="text-xs md:text-sm font-bold text-slate-300 font-sans tracking-wide">
            RECOMMENDED PROGRAMME MOBILISATION
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight mb-1">
          Let's <span className="text-[#C5A059] font-serif italic font-black">Begin.</span>
        </h1>

        <p className="font-serif italic text-slate-200 text-lg md:text-2xl max-w-4xl font-medium">
          A collaborative partnership uniting existing core software assets with custom development and long-term commitment.
        </p>
      </div>

      {/* SECTION 1: 4-STEP WORKFLOW PIPELINE IN 2x2 GRID (LARGE CRISP FONTS) */}
      <div className="relative z-10 my-auto py-1 space-y-2.5">
        <div className="flex items-center justify-between">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            OUR RECOMMENDED PATH FORWARD
          </p>
        </div>

        {/* 2x2 Grid Layout for Maximum Width & Huge Readable Font Sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pathForwardSteps.map((step) => (
            <div
              key={step.num}
              className={`relative z-10 bg-[#0E1726]/95 border-2 ${step.borderColor} p-5 px-6 rounded-2xl shadow-xl flex items-start gap-4 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer backdrop-blur-md`}
            >
              <span className={`font-serif text-4xl md:text-5xl font-black ${step.numColor} leading-none shrink-0`}>
                {step.num}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-serif font-black text-xl md:text-2xl text-white leading-tight">
                    {step.title}
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-200 uppercase shrink-0 font-sans">
                    {step.badge}
                  </span>
                </div>
                <p className="text-sm md:text-base text-slate-100 leading-relaxed font-sans font-bold">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: 4 VALUE SUMMARY CARDS IN 2x2 GRID (HIGH-CONTRAST BOLD FONTS) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3.5 font-sans mt-2 mb-4">
        {valueSummary.map((val, idx) => (
          <div key={idx} className="bg-[#091526] border-2 border-slate-800 p-4 px-5 rounded-xl flex items-center justify-between shadow-lg hover:border-[#05A872] transition-colors">
            <span className="text-xs md:text-sm font-bold text-[#05A872] uppercase tracking-wider shrink-0 w-1/3 font-sans">
              {val.label}
            </span>
            <p className="text-sm md:text-base text-white font-bold leading-snug w-2/3 text-right font-sans">
              {val.val}
            </p>
          </div>
        ))}
      </div>

      {/* SECTION 3: ELEGANT GOLD EXECUTIVE CLOSING BANNER */}
      <div className="relative z-10 bg-[#C5A059] text-slate-950 -mx-8 -mb-8 md:-mx-12 md:-mb-12 p-4 px-8 md:px-12 flex items-center justify-between font-sans shadow-2xl border-t-2 border-amber-300">
        <div>
          <h4 className="font-serif font-black text-lg md:text-xl uppercase tracking-tight text-slate-950 leading-tight">
            SYSTECH DIGITAL × PAKIZA SOFTWARE — JOINT VENTURE
          </h4>
          <p className="text-xs font-bold tracking-widest text-slate-950 uppercase mt-0.5 font-sans">
            VENDOR PROPOSAL · NATIONAL HIGHER EDUCATION DIGITAL SUITE
          </p>
        </div>

        <div className="font-serif italic text-lg md:text-xl font-black text-slate-950 text-center px-4">
          "Thank you · We are ready to transform higher education together."
        </div>

        <div className="text-right flex flex-col items-end shrink-0">
          <span className="font-serif font-black text-base text-slate-950 uppercase tracking-tight">Systech × Pakiza JV</span>
        </div>
      </div>
    </div>
  );
}
