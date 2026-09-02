import React from 'react';

export default function Slide12_EcosystemCoverage() {
  const lifecycleStages = [
    'Admission Sync', 'Registration', 'Academics', 'Exam & Marks',
    'Results & GPA', 'Research & Thesis', 'Certification', 'Alumni Network'
  ];

  const institutionalModules = [
    'User Management & RBAC', 'HR & Payroll System', 'Finance & Accounts',
    'Inventory & Store', 'Recruitment System', 'Library Management',
    'Accommodation & Hostel', 'Transport (IoT/GPS)', 'Complaints System', 'IoT Smart Access'
  ];

  return (
    <div className="relative w-full h-full bg-[#F4F0E8] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-[3px] bg-[#2563EB]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#2563EB] uppercase font-sans">
            OUR UMS-ERP FUNCTIONAL COVERAGE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Complete University <span className="text-[#2563EB] font-serif italic font-black">Digital Ecosystem</span>
        </h1>

        <p className="font-serif italic text-slate-700 text-lg md:text-2xl max-w-4xl font-medium">
          From student admission to alumni relations, paired with complete institutional, academic, and campus administration.
        </p>
      </div>

      {/* Content Columns */}
      <div className="grid grid-cols-12 gap-6 my-auto items-stretch">
        {/* Left: Academic Lifecycle (6 cols) */}
        <div className="col-span-12 lg:col-span-6 bg-white border-2 border-slate-300 p-6 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b-2 border-slate-200 pb-2">
            <h3 className="font-serif font-black text-2xl text-[#2563EB]">
              Academic Lifecycle (8 Stages)
            </h3>
            <span className="text-xs font-mono font-bold text-slate-800 uppercase">STUDENT JOURNEY</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 font-sans">
            {lifecycleStages.map((s, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-300 p-3 rounded-lg text-sm md:text-base font-bold text-slate-900 flex items-center gap-2.5">
                <span className="font-mono text-xs text-blue-700 font-black">0{idx + 1}</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Institutional Modules (6 cols) */}
        <div className="col-span-12 lg:col-span-6 bg-white border-2 border-slate-300 p-6 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b-2 border-slate-200 pb-2">
            <h3 className="font-serif font-black text-2xl text-slate-950">
              Institutional Operations (10 Modules)
            </h3>
            <span className="text-xs font-mono font-bold text-slate-800 uppercase">ADMIN & RESOURCES</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 font-sans">
            {institutionalModules.map((m, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-300 p-3 rounded-lg text-sm md:text-base font-bold text-slate-900 flex items-center gap-2.5">
                <span className="font-mono text-xs text-slate-800 font-black">{idx + 9}</span>
                <span>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Tech Banner */}
      <div className="bg-[#0B131F] text-white p-4 rounded-xl flex items-center justify-between font-mono text-xs md:text-sm font-bold border-2 border-slate-800 shadow-md">
        <span className="text-[#C5A059]">EMBEDDED SMART TECH:</span>
        <span className="text-slate-100 font-semibold">GPS Fleet Tracking • IoT Smart Campus Access • Native Mobile Apps</span>
        <span className="text-[#05A872]">100% MOBILE FIRST</span>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t-2 border-slate-300 text-xs md:text-sm text-slate-800 font-mono font-bold flex justify-between">
        <span>09 · UMS-ERP COVERAGE · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#2563EB]">DIGITAL ECOSYSTEM COVERAGE</span>
      </div>
    </div>
  );
}
