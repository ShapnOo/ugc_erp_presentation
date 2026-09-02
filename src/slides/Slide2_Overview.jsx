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
            <div className="w-6 h-[3px] bg-[#05A872]"></div>
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
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

          <p className="text-slate-200 text-base md:text-xl leading-relaxed max-w-3xl font-medium">
            Our consortium proposes a{' '}
            <strong className="text-white font-bold">
              complete five-platform digital transformation solution
            </strong>{' '}
            for Bangladesh higher education — replacing disconnected software with a{' '}
            <strong className="text-[#C5A059] font-bold">
              single unified national system
            </strong>{' '}
            connecting UGC, universities, students, research, and industry.
          </p>
        </div>

        {/* Middle: 6 Coverage Cards */}
        <div className="my-4">
          <p className="text-xs font-mono font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans mb-3">
            WHAT OUR SOLUTION COVERS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {coveragePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#08202A] border-2 border-[#05A872]/40 hover:border-[#05A872] rounded-lg p-3.5 transition-all duration-200 shadow-md group cursor-pointer"
              >
                <p className="text-sm md:text-base font-bold text-slate-100 group-hover:text-[#05A872] transition-colors leading-snug font-sans">
                  {pillar.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote Box */}
        <div className="bg-[#061222] border-l-4 border-[#C5A059] p-4 rounded-r-lg shadow-inner">
          <p className="font-serif italic text-slate-100 text-lg md:text-xl font-bold">
            "We build one connected digital ecosystem — not isolated software tools."
          </p>
          <p className="text-xs font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans mt-1">
            — OUR GUIDING PRINCIPLE
          </p>
        </div>

        {/* Footer */}
        <div className="pt-3 text-xs text-slate-300 font-mono font-bold tracking-wider">
          02 · OUR SOLUTION · SYSTECH × PAKIZA LIMITED
        </div>
      </div>

      {/* RIGHT SECTION (40% Warm Executive Cream) */}
      <div className="col-span-12 lg:col-span-5 xl:col-span-5 bg-[#F4F0E8] text-slate-900 p-8 md:p-10 flex flex-col justify-between border-l-2 border-slate-300 relative">
        {/* Scope Header & Big Stat */}
        <div className="space-y-6">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#9A7432] uppercase font-sans">
            OUR OFFERING AT A GLANCE
          </p>

          <div>
            <span className="font-serif text-8xl lg:text-9xl font-black text-[#0B172A] leading-none">
              5<span className="text-[#05A872] font-serif">.</span>
            </span>
            <h2 className="font-serif text-2xl lg:text-3xl font-black text-[#0B172A] leading-tight mt-2">
              Flagship Platforms.<br /> Built as one system.
            </h2>
            <p className="font-serif italic text-[#05A872] text-base md:text-lg mt-2 font-bold">
              Designed, built, and supported by a single dedicated team.
            </p>
          </div>

          <div className="w-full h-[2px] bg-slate-300"></div>

          {/* 3 Metric Breakdown */}
          <div className="grid grid-cols-3 gap-2 text-center pt-2 font-sans">
            <div>
              <span className="font-serif text-4xl lg:text-5xl font-black text-[#0B172A] block leading-none">18</span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 leading-tight block mt-1.5">
                UNIVERSITY MODULES
              </span>
            </div>
            <div>
              <span className="font-serif text-4xl lg:text-5xl font-black text-[#0B172A] block leading-none">11</span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 leading-tight block mt-1.5">
                GOVERNANCE MODULES
              </span>
            </div>
            <div>
              <span className="font-serif text-4xl lg:text-5xl font-black text-[#0B172A] block leading-none">10+</span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 leading-tight block mt-1.5">
                UNIVERSITIES CUSTOMISED
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Dark Quote Card */}
        <div className="bg-[#0B131F] text-slate-100 p-5 rounded-xl shadow-xl border-2 border-slate-800 mt-6">
          <p className="font-serif italic text-base md:text-lg text-slate-100 leading-relaxed font-bold">
            "One national digital platform for higher education — simple, connected, and secure."
          </p>
        </div>
      </div>
    </div>
  );
}
