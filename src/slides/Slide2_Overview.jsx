import React from 'react';

export default function Slide2_Overview() {
  const coveragePillars = [
    { title: 'UGC Governance & Operations' },
    { title: 'University Management & Admin' },
    { title: 'Student Admission & Lifecycle' },
    { title: 'Research Grant Management' },
    { title: 'Industry & Job Matching' },
    { title: 'Internship & Research Hub' },
  ];

  return (
    <div className="relative w-full h-full grid grid-cols-12 overflow-hidden select-none font-sans">
      {/* LEFT SECTION (60% Dark Navy) */}
      <div className="col-span-12 lg:col-span-7 xl:col-span-7 bg-[#0B131F] text-slate-100 p-8 md:p-12 flex flex-col justify-between relative">
        {/* Top Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-[2px] bg-[#05A872]"></div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
              OUR SOLUTION AT A GLANCE
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] mb-4">
            We Propose a{' '}
            <span className="text-[#05A872] font-serif italic font-black">
              Fully Integrated
            </span>{' '}
            Higher-Ed Digital Suite.
          </h1>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl font-light">
            Our consortium proposes a{' '}
            <strong className="text-white font-semibold">
              complete five-platform digital transformation solution
            </strong>{' '}
            for Bangladesh higher education — replacing disconnected software with a{' '}
            <strong className="text-[#C5A059] font-semibold">
              single unified national system
            </strong>{' '}
            connecting UGC, universities, students, research, and industry.
          </p>
        </div>

        {/* Middle: 6 Coverage Cards */}
        <div className="my-4">
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans mb-3">
            WHAT OUR SOLUTION COVERS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {coveragePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#08202A] border border-[#05A872]/30 hover:border-[#05A872] rounded-lg p-3.5 transition-all duration-200 shadow-md group cursor-pointer"
              >
                <p className="text-xs font-semibold text-slate-200 group-hover:text-[#05A872] transition-colors leading-snug font-sans">
                  {pillar.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote Box */}
        <div className="bg-[#061222] border-l-4 border-[#C5A059] p-4 rounded-r-lg shadow-inner">
          <p className="font-serif italic text-slate-200 text-base md:text-lg font-normal">
            "We build one connected digital ecosystem — not isolated software tools."
          </p>
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans mt-1">
            — OUR GUIDING PRINCIPLE
          </p>
        </div>

        {/* Footer */}
        <div className="pt-3 text-[11px] text-slate-400 font-mono tracking-wider">
          02 · OUR SOLUTION · SYSTECH × PAKIZA LIMITED
        </div>
      </div>

      {/* RIGHT SECTION (40% Warm Executive Cream) */}
      <div className="col-span-12 lg:col-span-5 xl:col-span-5 bg-[#F4F0E8] text-slate-900 p-8 md:p-10 flex flex-col justify-between border-l border-slate-300 relative">
        {/* Scope Header & Big Stat */}
        <div className="space-y-6">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#9A7432] uppercase font-sans">
            OUR OFFERING AT A GLANCE
          </p>

          <div>
            <span className="font-serif text-8xl lg:text-9xl font-black text-[#0B172A] leading-none">
              5<span className="text-[#05A872] font-serif">.</span>
            </span>
            <h2 className="font-serif text-2xl lg:text-3xl font-black text-[#0B172A] leading-tight mt-2">
              Flagship Platforms.<br /> Built as one system.
            </h2>
            <p className="font-serif italic text-[#05A872] text-sm md:text-base mt-2">
              Designed, built, and supported by a single dedicated team.
            </p>
          </div>

          <div className="w-full h-[1px] bg-slate-300"></div>

          {/* 3 Metric Breakdown */}
          <div className="grid grid-cols-3 gap-2 text-center pt-2 font-sans">
            <div>
              <span className="font-serif text-4xl font-black text-[#0B172A] block leading-none">18</span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-600 leading-tight block mt-1.5">
                UNIVERSITY MODULES
              </span>
            </div>
            <div>
              <span className="font-serif text-4xl font-black text-[#0B172A] block leading-none">11</span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-600 leading-tight block mt-1.5">
                GOVERNANCE MODULES
              </span>
            </div>
            <div>
              <span className="font-serif text-4xl font-black text-[#0B172A] block leading-none">10+</span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-600 leading-tight block mt-1.5">
                UNIVERSITIES CUSTOMISED
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Dark Quote Card */}
        <div className="bg-[#0B131F] text-slate-100 p-5 rounded-xl shadow-xl border border-slate-800 mt-6">
          <p className="font-serif italic text-sm text-slate-200 leading-relaxed font-normal">
            "One national digital platform for higher education — simple, connected, and secure."
          </p>
        </div>
      </div>
    </div>
  );
}
