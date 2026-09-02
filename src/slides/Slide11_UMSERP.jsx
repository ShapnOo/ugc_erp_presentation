import React from 'react';

export default function Slide11_UMSERP() {
  const modules = [
    { num: '01', title: 'Student Info (SIS)', cat: 'STUDENT', badgeColor: 'bg-blue-100 text-[#2563EB] border-blue-400 font-black' },
    { num: '02', title: 'Registration & Results', cat: 'STUDENT', badgeColor: 'bg-blue-100 text-[#2563EB] border-blue-400 font-black' },
    { num: '03', title: 'Fee Payment System', cat: 'STUDENT', badgeColor: 'bg-blue-100 text-[#2563EB] border-blue-400 font-black' },
    { num: '04', title: 'Thesis & Research', cat: 'STUDENT', badgeColor: 'bg-blue-100 text-[#2563EB] border-blue-400 font-black' },
    { num: '05', title: 'Certification', cat: 'STUDENT', badgeColor: 'bg-blue-100 text-[#2563EB] border-blue-400 font-black' },
    { num: '06', title: 'Alumni Network', cat: 'STUDENT', badgeColor: 'bg-blue-100 text-[#2563EB] border-blue-400 font-black' },
    
    { num: '07', title: 'User Management & RBAC', cat: 'ADMIN', badgeColor: 'bg-amber-200 text-amber-950 border-amber-400 font-black' },
    { num: '08', title: 'HR & Payroll System', cat: 'ADMIN', badgeColor: 'bg-amber-200 text-amber-950 border-amber-400 font-black' },
    { num: '09', title: 'Finance & Accounts', cat: 'ADMIN', badgeColor: 'bg-amber-200 text-amber-950 border-amber-400 font-black' },
    { num: '10', title: 'Inventory & Store', cat: 'ADMIN', badgeColor: 'bg-amber-200 text-amber-400 font-black' },
    { num: '11', title: 'Recruitment System', cat: 'ADMIN', badgeColor: 'bg-amber-200 text-amber-950 border-amber-400 font-black' },
    { num: '12', title: 'Library Management', cat: 'CAMPUS', badgeColor: 'bg-emerald-200 text-emerald-950 border-emerald-400 font-black' },
    
    { num: '13', title: 'Accommodation & Hostel', cat: 'CAMPUS', badgeColor: 'bg-emerald-200 text-emerald-950 border-emerald-400 font-black' },
    { num: '14', title: 'Transport (IoT/GPS)', cat: 'CAMPUS', badgeColor: 'bg-emerald-200 text-emerald-950 border-emerald-400 font-black' },
    { num: '15', title: 'Complaints System', cat: 'CAMPUS', badgeColor: 'bg-emerald-200 text-emerald-950 border-emerald-400 font-black' },
    { num: '16', title: 'Meetings & Events', cat: 'CAMPUS', badgeColor: 'bg-emerald-200 text-emerald-950 border-emerald-400 font-black' },
    { num: '17', title: 'Service Requests', cat: 'CAMPUS', badgeColor: 'bg-emerald-200 text-emerald-950 border-emerald-400 font-black' },
    { num: '18', title: 'IoT Smart Access', cat: 'CAMPUS', badgeColor: 'bg-emerald-200 text-emerald-950 border-emerald-400 font-black' },
  ];

  return (
    <div className="relative w-full h-full bg-[#EFF4FC] text-slate-950 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Soft Radial Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10 font-sans">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-[3px] bg-[#2563EB]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#2563EB] uppercase font-sans">
            OUR OFFERING 02 OF 05 · FLAGSHIP
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-tight mb-2">
          UMS-ERP <span className="text-[#2563EB] font-serif italic font-black">University Management</span>
        </h1>

        <p className="font-serif italic text-slate-800 text-lg md:text-2xl max-w-4xl font-semibold">
          Unified University Management System: 18 integrated modules automating the complete academic lifecycle and institutional operations nationwide.
        </p>
      </div>

      {/* 18 Modules Grid */}
      <div className="relative z-10 my-auto space-y-3 font-sans">
        <div className="flex items-center justify-between font-sans">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            18 INTEGRATED MODULES (STUDENT, ADMIN & CAMPUS OPERATIONS)
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 font-sans">
          {modules.map((m) => (
            <div key={m.num} className="bg-white border-2 border-slate-300 p-3.5 rounded-2xl flex flex-col justify-between min-h-[108px] shadow-sm hover-float font-sans">
              <div className="flex items-center justify-between font-sans">
                <span className={`text-xs font-black px-2 py-0.5 rounded border font-sans ${m.badgeColor}`}>
                  {m.num}
                </span>
                <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider font-sans">{m.cat}</span>
              </div>
              <p className="text-sm md:text-base font-black text-slate-950 leading-tight font-sans mt-1">{m.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Royal Blue Callout Banner */}
      <div className="relative z-10 bg-white border-l-4 border-[#2563EB] border-t-2 border-r-2 border-b-2 border-slate-300 p-4 rounded-r-xl shadow-xs text-center font-serif text-lg md:text-xl italic text-slate-950 font-black">
        "Operate confidently. Customise boldly. Integrate seamlessly."
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t-2 border-slate-300 pt-2 flex justify-between text-xs md:text-sm font-bold text-slate-800 font-sans">
        <span>08 · UMS-ERP · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#2563EB]">UNIVERSITY MANAGEMENT SYSTEM</span>
      </div>
    </div>
  );
}
