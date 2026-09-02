import React from 'react';

export default function Slide11_UMSERP() {
  const modules = [
    { num: '01', title: 'Student Info (SIS)', cat: 'Student' },
    { num: '02', title: 'Registration & Results', cat: 'Student' },
    { num: '03', title: 'Fee Payment', cat: 'Student' },
    { num: '04', title: 'Thesis & Research', cat: 'Student' },
    { num: '05', title: 'Certification', cat: 'Student' },
    { num: '06', title: 'Alumni Network', cat: 'Student' },
    { num: '07', title: 'User Management', cat: 'Admin' },
    { num: '08', title: 'HR & Payroll', cat: 'Admin' },
    { num: '09', title: 'Finance & Accounts', cat: 'Admin' },
    { num: '10', title: 'Inventory & Store', cat: 'Admin' },
    { num: '11', title: 'Recruitment', cat: 'Admin' },
    { num: '12', title: 'Library Management', cat: 'Campus' },
    { num: '13', title: 'Accommodation', cat: 'Campus' },
    { num: '14', title: 'Transport (IoT/GPS)', cat: 'Campus' },
    { num: '15', title: 'Complaints System', cat: 'Campus' },
    { num: '16', title: 'Meetings & Events', cat: 'Campus' },
    { num: '17', title: 'Service Requests', cat: 'Campus' },
    { num: '18', title: 'IoT Smart Access', cat: 'Campus' },
  ];

  return (
    <div className="relative w-full h-full bg-[#0B131F] text-slate-100 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#2563EB]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#2563EB] uppercase font-sans">
            OUR OFFERING 02 OF 05 · FLAGSHIP
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-2">
          UMS-ERP <span className="text-[#2563EB] font-serif italic font-black">University Management</span>
        </h1>

        <p className="font-serif italic text-slate-300 text-base md:text-lg max-w-4xl font-normal">
          Unified University Management System: 18 integrated modules automating the complete academic lifecycle and institutional operations nationwide.
        </p>
      </div>

      {/* 18 Modules Grid */}
      <div className="my-auto">
        <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans mb-3">
          18 INTEGRATED MODULES (STUDENT, ADMIN & CAMPUS)
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-2.5">
          {modules.map((m) => (
            <div key={m.num} className="bg-[#121E33] border border-blue-900/50 p-2.5 rounded-lg flex flex-col justify-between h-20 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-blue-400">{m.num}</span>
                <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">{m.cat}</span>
              </div>
              <p className="text-xs font-semibold text-slate-200 leading-tight">{m.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Royal Blue Promise Box */}
      <div className="bg-[#2563EB] text-white p-3 rounded-lg text-center font-serif text-xs italic font-bold">
        "Operate confidently. Customise boldly. Integrate seamlessly."
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex justify-between font-mono text-[11px] text-slate-400">
        <span>08 · UMS-ERP · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#2563EB]">UNIVERSITY MANAGEMENT SYSTEM</span>
      </div>
    </div>
  );
}
