import React from 'react';

export default function Slide11_UMSERP() {
  const modules = [
    { num: '01', title: 'Student Info (SIS)', cat: 'STUDENT', badgeColor: 'bg-blue-50 text-[#2563EB] border-blue-100' },
    { num: '02', title: 'Registration & Results', cat: 'STUDENT', badgeColor: 'bg-blue-50 text-[#2563EB] border-blue-100' },
    { num: '03', title: 'Fee Payment System', cat: 'STUDENT', badgeColor: 'bg-blue-50 text-[#2563EB] border-blue-100' },
    { num: '04', title: 'Thesis & Research', cat: 'STUDENT', badgeColor: 'bg-blue-50 text-[#2563EB] border-blue-100' },
    { num: '05', title: 'Certification', cat: 'STUDENT', badgeColor: 'bg-blue-50 text-[#2563EB] border-blue-100' },
    { num: '06', title: 'Alumni Network', cat: 'STUDENT', badgeColor: 'bg-blue-50 text-[#2563EB] border-blue-100' },
    
    { num: '07', title: 'User Management & RBAC', cat: 'ADMIN', badgeColor: 'bg-amber-50 text-[#C5A059] border-amber-100' },
    { num: '08', title: 'HR & Payroll System', cat: 'ADMIN', badgeColor: 'bg-amber-50 text-[#C5A059] border-amber-100' },
    { num: '09', title: 'Finance & Accounts', cat: 'ADMIN', badgeColor: 'bg-amber-50 text-[#C5A059] border-amber-100' },
    { num: '10', title: 'Inventory & Store', cat: 'ADMIN', badgeColor: 'bg-amber-50 text-[#C5A059] border-amber-100' },
    { num: '11', title: 'Recruitment System', cat: 'ADMIN', badgeColor: 'bg-amber-50 text-[#C5A059] border-amber-100' },
    { num: '12', title: 'Library Management', cat: 'CAMPUS', badgeColor: 'bg-emerald-50 text-[#05A872] border-emerald-100' },
    
    { num: '13', title: 'Accommodation & Hostel', cat: 'CAMPUS', badgeColor: 'bg-emerald-50 text-[#05A872] border-emerald-100' },
    { num: '14', title: 'Transport (IoT/GPS)', cat: 'CAMPUS', badgeColor: 'bg-emerald-50 text-[#05A872] border-emerald-100' },
    { num: '15', title: 'Complaints System', cat: 'CAMPUS', badgeColor: 'bg-emerald-50 text-[#05A872] border-emerald-100' },
    { num: '16', title: 'Meetings & Events', cat: 'CAMPUS', badgeColor: 'bg-emerald-50 text-[#05A872] border-emerald-100' },
    { num: '17', title: 'Service Requests', cat: 'CAMPUS', badgeColor: 'bg-emerald-50 text-[#05A872] border-emerald-100' },
    { num: '18', title: 'IoT Smart Access', cat: 'CAMPUS', badgeColor: 'bg-emerald-50 text-[#05A872] border-emerald-100' },
  ];

  return (
    <div className="relative w-full h-full bg-[#EFF4FC] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Soft Radial Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#2563EB]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#2563EB] uppercase font-sans">
            OUR OFFERING 02 OF 05 · FLAGSHIP
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          UMS-ERP <span className="text-[#2563EB] font-serif italic font-black">University Management</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          Unified University Management System: 18 integrated modules automating the complete academic lifecycle and institutional operations nationwide.
        </p>
      </div>

      {/* 18 Modules Grid */}
      <div className="relative z-10 my-auto space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans">
            18 INTEGRATED MODULES (STUDENT, ADMIN & CAMPUS OPERATIONS)
          </p>
          <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
            ● Full Lifecycle Coverage
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-2.5">
          {modules.map((m) => (
            <div key={m.num} className="bg-white/90 border border-slate-200/90 p-2.5 rounded-xl flex flex-col justify-between h-20 shadow-xs hover-float">
              <div className="flex items-center justify-between">
                <span className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border ${m.badgeColor}`}>
                  {m.num}
                </span>
                <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">{m.cat}</span>
              </div>
              <p className="text-xs font-bold text-slate-800 leading-tight font-sans mt-1">{m.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Royal Blue Callout Banner */}
      <div className="relative z-10 bg-white border-l-4 border-[#2563EB] border-t border-r border-b border-slate-200 p-3.5 rounded-r-xl shadow-xs text-center font-serif text-xs italic text-slate-900 font-bold">
        "Operate confidently. Customise boldly. Integrate seamlessly."
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-slate-300 pt-3 flex justify-between font-mono text-[11px] text-slate-600">
        <span>08 · UMS-ERP · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#2563EB]">UNIVERSITY MANAGEMENT SYSTEM</span>
      </div>
    </div>
  );
}
