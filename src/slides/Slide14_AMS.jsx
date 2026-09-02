import React from 'react';

export default function Slide14_AMS() {
  const steps = [
    { num: '01', title: 'Online Application Portal', desc: 'Self-service web & mobile portal', badgeClass: 'bg-[#047857] text-white' },
    { num: '02', title: 'Document Upload & Verification', desc: 'OCR + automated PII validation', badgeClass: 'bg-[#047857] text-white' },
    { num: '03', title: 'Application Fee Payment', desc: 'Mobile banking (bKash/Nagad) + cards', badgeClass: 'bg-[#047857] text-white' },
    { num: '04', title: 'Eligibility Screening', desc: 'Automated rules + manual review', badgeClass: 'bg-[#C5A059] text-slate-950 font-bold' },
    { num: '05', title: 'Admit Card Generation', desc: 'QR + barcode enabled digital passes', badgeClass: 'bg-[#C5A059] text-slate-950 font-bold' },
    { num: '06', title: 'Exam & Merit List Engine', desc: 'Centre allocation & auto merit scoring', badgeClass: 'bg-[#C5A059] text-slate-950 font-bold' },
    { num: '07', title: 'Seat Allocation & Waiting List', desc: 'Multi-cycle automated seat allotment', badgeClass: 'bg-[#D32F2F] text-white' },
  ];

  return (
    <div className="relative w-full h-full grid grid-cols-12 overflow-hidden select-none font-sans bg-[#F4F0E8]">
      {/* LEFT SECTION (65% Warm Executive Cream) */}
      <div className="col-span-12 lg:col-span-8 p-8 md:p-12 flex flex-col justify-between relative z-10">
        {/* Top Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-[2px] bg-[#05A872]"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
              OUR OFFERING 03 OF 05
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight mb-2">
            Admission Management <span className="text-[#05A872] font-serif italic font-black">System</span>
          </h1>

          <p className="font-serif italic text-slate-600 text-base md:text-xl max-w-3xl font-normal">
            End-to-end admission automation we deliver — from online application to seat allocation to automatic handover into UMS-ERP.
          </p>
        </div>

        {/* 8 Applicant Lifecycle Pipeline */}
        <div className="my-auto space-y-2 font-sans">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold tracking-[0.2em] text-[#047857] uppercase font-sans">
              APPLICANT LIFECYCLE WE BUILD — 8 STEPS PIPELINE
            </p>
            <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded border border-emerald-300">
              ● High-Throughput Pipeline
            </span>
          </div>

          {/* Steps 01 to 07 */}
          <div className="space-y-2">
            {steps.map((s) => (
              <div
                key={s.num}
                className="bg-white/90 border border-slate-300/90 rounded-xl p-3 px-4 flex items-center justify-between shadow-xs hover-float transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className={`${s.badgeClass} px-3 py-1 rounded-md font-mono font-bold text-xs md:text-sm shadow-xs`}>
                    {s.num}
                  </span>
                  <span className="font-bold text-slate-900 text-xs md:text-sm">{s.title}</span>
                </div>
                <span className="text-xs font-sans text-slate-600 font-semibold">{s.desc}</span>
              </div>
            ))}

            {/* Step 08 (Gold Highlighted Status Bar) */}
            <div className="bg-[#C5A059] text-slate-950 font-bold rounded-xl p-3 px-4 flex items-center justify-between shadow-md text-xs md:text-sm border-2 border-amber-600 hover-float">
              <div className="flex items-center gap-3">
                <span className="bg-slate-950 text-[#C5A059] px-3 py-1 rounded-md font-mono font-bold text-xs md:text-sm">✓</span>
                <span className="font-sans font-bold text-xs md:text-sm">08 — Admission Confirmed → UMS-ERP Sync → Reporting</span>
              </div>
              <span className="text-xs font-mono text-slate-950 uppercase tracking-widest font-extrabold bg-white/50 px-2.5 py-1 rounded">
                ★ AUTOMATED HANDOVER
              </span>
            </div>
          </div>
        </div>

        {/* Footer Left */}
        <div className="pt-2 text-xs text-slate-700 font-mono font-bold tracking-wider">
          11 · ADMISSION MANAGEMENT · SYSTECH × PAKIZA LIMITED
        </div>
      </div>

      {/* RIGHT SIDEBAR (35% Dark Executive Navy) */}
      <div className="col-span-12 lg:col-span-4 bg-[#0B131F] text-slate-100 p-8 md:p-10 flex flex-col justify-between border-l border-slate-800 relative z-10">
        
        {/* Top Tag & Massive Stat */}
        <div className="space-y-6 my-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#05A872] animate-pulse"></span>
            <p className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans">
              PEAK SEASON CAPACITY
            </p>
          </div>

          <div>
            <span className="font-serif text-6xl lg:text-7xl font-black text-[#05A872] leading-none block">
              1M+
            </span>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-1 font-bold">
              SEASONAL APPLICANTS CAPACITY
            </p>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl font-black text-white leading-[1.08]">
            A million applicants. <br />
            <span className="text-[#C5A059]">Zero friction.</span>
          </h2>

          <p className="font-serif italic text-slate-300 text-sm md:text-base leading-relaxed">
            Designed for peak-busy, seasonal nationwide admission load across Bangladesh.
          </p>

          {/* 3 Performance Metric Cards */}
          <div className="space-y-3 pt-4 border-t border-slate-800 font-sans text-xs md:text-sm">
            <div className="bg-[#121E30] border border-slate-700/80 p-3.5 rounded-xl flex items-center gap-3">
              <span className="text-[#05A872] font-bold text-lg">✓</span>
              <div>
                <strong className="text-white block font-bold text-xs md:text-sm">Mobile Banking & Cards</strong>
                <span className="text-xs text-slate-300 font-normal">Instant bKash, Nagad, and debit/credit card pay</span>
              </div>
            </div>

            <div className="bg-[#121E30] border border-slate-700/80 p-3.5 rounded-xl flex items-center gap-3">
              <span className="text-[#05A872] font-bold text-lg">✓</span>
              <div>
                <strong className="text-white block font-bold text-xs md:text-sm">OCR Auto Verification</strong>
                <span className="text-xs text-slate-300 font-normal">Automated SSC/HSC transcript & PII checks</span>
              </div>
            </div>

            <div className="bg-[#121E30] border border-slate-700/80 p-3.5 rounded-xl flex items-center gap-3">
              <span className="text-[#05A872] font-bold text-lg">✓</span>
              <div>
                <strong className="text-white block font-bold text-xs md:text-sm">Instant UMS-ERP Handover</strong>
                <span className="text-xs text-slate-300 font-normal">Zero manual data re-entry on admission</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-slate-800 pt-4">
          <p className="text-xs font-mono text-[#C5A059] tracking-widest uppercase font-bold text-center">
            HIGH-THROUGHPUT NATIONWIDE ADMISSION BACKBONE
          </p>
        </div>
      </div>
    </div>
  );
}
