import React from 'react';

export default function Slide2_Overview() {
  const coveragePillars = [
    { num: '01', title: 'UGC Governance & Operations', desc: '11 central ministry & governance modules' },
    { num: '02', title: 'University Management & Admin', desc: '18 academic & university ERP modules' },
    { num: '03', title: 'Student Admission & Lifecycle', desc: '1M+ applicant high-throughput admission' },
    { num: '04', title: 'Research Grant Management', desc: 'End-to-end research proposal & fund audit' },
    { num: '05', title: 'Industry & Job Matching', desc: 'Student, faculty & industry matchmaking' },
    { num: '06', title: 'Single Sign-On & Security', desc: 'BdREN TIGERfed SSO & central audit log' },
  ];

  const flagshipList = [
    { code: '01 UGC ERP', title: 'Central Governance', tag: '11 Modules', color: 'border-[#D32F2F] text-[#D32F2F]' },
    { code: '02 UMS-ERP', title: 'University Management', tag: '18 Modules', color: 'border-[#2563EB] text-[#2563EB]' },
    { code: '03 AMS', title: 'Admission System', tag: '1M+ Capacity', color: 'border-[#05A872] text-[#05A872]' },
    { code: '04 NEXUS', title: 'Matchmaking Hub', tag: '4-World Engine', color: 'border-[#C5A059] text-[#C5A059]' },
    { code: '05 GMS', title: 'Grants Management', tag: '10-Step Workflow', color: 'border-[#05A872] text-[#05A872]' },
  ];

  return (
    <div className="relative w-full h-full grid grid-cols-12 overflow-hidden select-none font-sans bg-[#0B131F]">
      {/* LEFT SECTION (60% Dark Executive Navy) */}
      <div className="col-span-12 lg:col-span-7 bg-[#0B131F] text-slate-100 p-8 md:p-12 flex flex-col justify-between relative z-10 font-sans border-r border-slate-800">
        
        {/* Top Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-[3px] bg-[#05A872]"></div>
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
              OUR SOLUTION AT A GLANCE
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.02] mb-3">
            We Propose a{' '}
            <span className="text-[#05A872] font-serif italic font-black">
              Fully Integrated
            </span>{' '}
            Higher-Ed Suite.
          </h1>

          <p className="text-slate-100 text-lg md:text-2xl leading-relaxed max-w-3xl font-serif italic font-medium">
            Our consortium proposes a{' '}
            <strong className="text-white font-bold not-italic">
              complete five-platform digital transformation solution
            </strong>{' '}
            for Bangladesh higher education — replacing disconnected software with a{' '}
            <strong className="text-[#C5A059] font-bold not-italic">
              single unified national system
            </strong>.
          </p>
        </div>

        {/* Middle: 6 Coverage Cards (Clean 2-Column Grid) */}
        <div className="my-auto space-y-2.5 font-sans py-2">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            WHAT OUR SOLUTION COVERS
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 font-sans">
            {coveragePillars.map((p) => (
              <div
                key={p.num}
                className="bg-[#0E1A2C] border-2 border-slate-700/80 hover:border-[#05A872] p-4 rounded-xl shadow-md transition-all duration-200 flex items-start gap-3 hover-float cursor-pointer"
              >
                <span className="text-xs md:text-sm font-black text-[#05A872] bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-700 shrink-0 font-sans">
                  {p.num}
                </span>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-white leading-tight font-sans">{p.title}</h4>
                  <p className="text-xs md:text-sm text-slate-300 font-semibold mt-0.5 font-sans">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote Box */}
        <div className="bg-[#061222] border-l-4 border-[#C5A059] border-t border-r border-b border-slate-800 p-4 px-5 rounded-r-xl shadow-lg font-sans">
          <p className="font-serif italic text-white text-base md:text-lg font-bold">
            "We build one connected digital ecosystem — not isolated software tools."
          </p>
          <p className="text-xs font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans mt-1">
            — OUR GUIDING PRINCIPLE
          </p>
        </div>

        {/* Footer Left */}
        <div className="pt-2 text-xs md:text-sm text-slate-300 font-bold tracking-wider font-sans">
          02 · OUR SOLUTION · SYSTECH × PAKIZA LIMITED
        </div>
      </div>

      {/* RIGHT SECTION (40% Warm Executive Cream with Balanced 5-Platform Card Stack) */}
      <div className="col-span-12 lg:col-span-5 bg-[#F4F0E8] text-slate-900 p-8 md:p-10 flex flex-col justify-between relative z-10 font-sans border-l-2 border-slate-300">
        
        {/* Header & Big Stat Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#9A7432] uppercase font-sans">
              OUR OFFERING AT A GLANCE
            </span>
            <span className="text-xs font-bold text-slate-900 bg-amber-200/80 border border-amber-400 px-3 py-1 rounded-md font-sans">
              5 INTEGRATED PLATFORMS
            </span>
          </div>

          <div className="flex items-baseline gap-4">
            <span className="font-serif text-7xl lg:text-8xl font-black text-[#0B172A] leading-none shrink-0">
              5<span className="text-[#05A872] font-serif">.</span>
            </span>
            <div>
              <h2 className="font-serif text-2xl lg:text-3xl font-black text-[#0B172A] leading-tight">
                Flagship Platforms.<br /> Built as one system.
              </h2>
              <p className="font-serif italic text-[#05A872] text-sm md:text-base font-bold mt-0.5">
                Designed, built, and supported by a single dedicated team.
              </p>
            </div>
          </div>
        </div>

        {/* Middle 1: 5 Flagship Platform Summary Cards (Fills the center perfectly!) */}
        <div className="my-auto space-y-2 py-3">
          <p className="text-xs font-bold tracking-[0.2em] text-slate-700 uppercase font-sans">
            THE FIVE FLAGSHIP PLATFORMS
          </p>
          
          <div className="space-y-2 font-sans">
            {flagshipList.map((f) => (
              <div
                key={f.code}
                className="bg-white border-2 border-slate-300 p-3 px-4 rounded-xl flex items-center justify-between shadow-xs hover-float"
              >
                <div className="flex items-center gap-3 font-sans">
                  <span className={`text-xs md:text-sm font-black uppercase font-sans px-2.5 py-0.5 rounded bg-slate-100 border ${f.color}`}>
                    {f.code}
                  </span>
                  <span className="font-serif font-black text-slate-900 text-sm md:text-base">{f.title}</span>
                </div>
                <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-300 font-sans">
                  {f.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle 2: 3 Metric Cards Row */}
        <div className="grid grid-cols-3 gap-2.5 text-center font-sans border-t-2 border-b-2 border-slate-300 py-3">
          <div>
            <span className="font-serif text-3xl md:text-4xl font-black text-[#0B172A] block leading-none">18</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 leading-tight block mt-1 font-sans">
              UNIVERSITY MODULES
            </span>
          </div>
          <div>
            <span className="font-serif text-3xl md:text-4xl font-black text-[#0B172A] block leading-none">11</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 leading-tight block mt-1 font-sans">
              GOVERNANCE MODULES
            </span>
          </div>
          <div>
            <span className="font-serif text-3xl md:text-4xl font-black text-[#0B172A] block leading-none">10+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 leading-tight block mt-1 font-sans">
              ANCHOR UNIVERSITIES
            </span>
          </div>
        </div>

        {/* Bottom Dark Quote Card */}
        <div className="bg-[#0B131F] text-slate-100 p-4 rounded-xl shadow-xl border-2 border-slate-800 mt-3 font-sans">
          <p className="font-serif italic text-sm md:text-base text-slate-100 leading-relaxed font-bold">
            "One national digital platform for higher education — simple, connected, and secure."
          </p>
        </div>
      </div>
    </div>
  );
}
