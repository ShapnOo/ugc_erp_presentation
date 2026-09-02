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
          <div className="w-5 h-[2px] bg-[#2563EB]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#2563EB] uppercase font-sans">
            OUR UMS-ERP FUNCTIONAL COVERAGE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Complete University <span className="text-[#2563EB] font-serif italic font-black">Digital Ecosystem</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          From student admission to alumni relations, paired with complete institutional, academic, and campus administration.
        </p>
      </div>

      {/* Content Columns */}
      <div className="grid grid-cols-12 gap-6 my-auto items-stretch">
        {/* Left: Academic Lifecycle (6 cols) */}
        <div className="col-span-12 lg:col-span-6 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h3 className="font-serif font-black text-xl text-[#2563EB]">
              Academic Lifecycle (8 Stages)
            </h3>
            <span className="text-[10px] font-mono text-slate-400 uppercase">STUDENT JOURNEY</span>
          </div>

          <div className="grid grid-cols-2 gap-2 font-sans">
            {lifecycleStages.map((s, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg text-xs font-semibold text-slate-800 flex items-center gap-2">
                <span className="font-mono text-[10px] text-blue-600 font-bold">0{idx + 1}</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Institutional Modules (6 cols) */}
        <div className="col-span-12 lg:col-span-6 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h3 className="font-serif font-black text-xl text-slate-900">
              Institutional Operations (10 Modules)
            </h3>
            <span className="text-[10px] font-mono text-slate-400 uppercase">ADMIN & RESOURCES</span>
          </div>

          <div className="grid grid-cols-2 gap-2 font-sans">
            {institutionalModules.map((m, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg text-xs font-semibold text-slate-800 flex items-center gap-2">
                <span className="font-mono text-[10px] text-slate-500 font-bold">{idx + 9}</span>
                <span>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Tech Banner */}
      <div className="bg-[#0B131F] text-white p-3 rounded-lg flex items-center justify-between font-mono text-xs">
        <span className="text-[#C5A059] font-bold">EMBEDDED SMART TECH:</span>
        <span className="text-slate-300">GPS Fleet Tracking • IoT Smart Campus Access • Native Mobile Apps</span>
        <span className="text-[#05A872] font-bold">100% MOBILE FIRST</span>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-slate-300 text-[11px] text-slate-600 font-mono flex justify-between">
        <span>09 · UMS-ERP COVERAGE · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#2563EB]">DIGITAL ECOSYSTEM COVERAGE</span>
      </div>
    </div>
  );
}
