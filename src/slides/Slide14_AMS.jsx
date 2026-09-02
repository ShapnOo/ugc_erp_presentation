import React from 'react';

export default function Slide14_AMS() {
  const steps = [
    { num: '01', title: 'Online Application', desc: 'Self-service web portal', badgeClass: 'bg-[#047857] text-white', rowClass: 'bg-[#E3EBE4]' },
    { num: '02', title: 'Document Upload', desc: 'OCR + auto validation', badgeClass: 'bg-[#047857] text-white', rowClass: 'bg-[#E3EBE4]' },
    { num: '03', title: 'Fee Payment', desc: 'Mobile banking + cards', badgeClass: 'bg-[#047857] text-white', rowClass: 'bg-[#E3EBE4]' },
    { num: '04', title: 'Eligibility Screening', desc: 'Auto + manual review', badgeClass: 'bg-[#C5A059] text-white', rowClass: 'bg-[#EFEADB]' },
    { num: '05', title: 'Admit Card Generation', desc: 'QR + barcode enabled', badgeClass: 'bg-[#C5A059] text-white', rowClass: 'bg-[#EFEADB]' },
    { num: '06', title: 'Exam Management & Merit List', desc: 'Centre allocation', badgeClass: 'bg-[#C5A059] text-white', rowClass: 'bg-[#EFEADB]' },
    { num: '07', title: 'Seat Allocation & Waiting List', desc: 'Multi-cycle allotment', badgeClass: 'bg-[#D32F2F] text-white', rowClass: 'bg-[#F5E2E2]' },
  ];

  return (
    <div className="relative w-full h-full grid grid-cols-12 overflow-hidden select-none font-sans">
      {/* LEFT SECTION (70% Warm Executive Cream) */}
      <div className="col-span-12 lg:col-span-8 bg-[#F4F0E8] text-slate-900 p-8 md:p-12 flex flex-col justify-between relative">
        {/* Top Header */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-[2px] bg-[#05A872]"></div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
              OUR OFFERING 03 OF 05
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight mb-2">
            Admission Management <span className="text-[#05A872] font-serif italic font-black">System</span>
          </h1>

          <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-3xl font-normal">
            End-to-end admission automation we deliver — from online application to seat allocation to automatic handover into UMS-ERP.
          </p>
        </div>

        {/* 8 Applicant Lifecycle Rows */}
        <div className="my-3 space-y-1.5 font-sans">
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#047857] uppercase font-sans mb-2">
            APPLICANT LIFECYCLE WE BUILD — 8 STEPS
          </p>

          {steps.map((s) => (
            <div key={s.num} className={`${s.rowClass} rounded-md p-2 flex items-center justify-between shadow-xs border border-slate-300/40 text-xs`}>
              <div className="flex items-center gap-3">
                <span className={`${s.badgeClass} px-2 py-0.5 rounded font-mono font-bold text-[11px]`}>
                  {s.num}
                </span>
                <span className="font-bold text-slate-900">{s.title}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-600">{s.desc}</span>
            </div>
          ))}

          {/* Step 8 (Gold Highlighted Bar) */}
          <div className="bg-[#C5A059] text-slate-950 font-bold rounded-md p-2 flex items-center justify-between shadow-md text-xs border border-amber-600">
            <div className="flex items-center gap-3">
              <span className="bg-slate-950 text-[#C5A059] px-2 py-0.5 rounded font-mono font-bold text-[11px]">✓</span>
              <span className="font-mono">08 — Admission Confirmed → UMS-ERP Sync → Reporting</span>
            </div>
            <span className="text-[10px] font-mono text-slate-900 uppercase">★ Continuous</span>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 text-[11px] text-slate-500 font-mono tracking-wider">
          11 · ADMISSION MANAGEMENT · SYSTECH × PAKIZA LIMITED
        </div>
      </div>

      {/* RIGHT SIDEBAR (30% Dark Navy) */}
      <div className="col-span-12 lg:col-span-4 bg-[#0B131F] text-slate-100 p-8 md:p-10 flex flex-col justify-between border-l border-slate-800 relative">
        <div className="space-y-6 my-auto">
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans">
            OUR PROMISE
          </p>

          <h2 className="font-serif text-5xl lg:text-6xl font-black text-white leading-[1.05]">
            A million applicants. <br />
            <span className="text-white">Zero friction.</span>
          </h2>

          <p className="font-serif italic text-slate-300 text-sm md:text-base leading-relaxed">
            Designed for peak-busy, seasonal nationwide load.
          </p>
        </div>

        <div className="border-t border-slate-800 pt-4">
          <p className="text-[9px] font-mono text-[#C5A059] tracking-widest uppercase font-bold">
            HIGH-THROUGHPUT NATIONWIDE ADMISSION BACKBONE
          </p>
        </div>
      </div>
    </div>
  );
}
