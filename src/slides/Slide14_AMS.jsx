import React from 'react';

export default function Slide14_AMS() {
  const steps = [
    { num: '01', title: 'Online Application Portal', desc: 'Self-service web & mobile portal', badgeClass: 'bg-[#047857] text-white font-bold' },
    { num: '02', title: 'Document Upload & Verification', desc: 'OCR + automated PII validation', badgeClass: 'bg-[#047857] text-white font-bold' },
    { num: '03', title: 'Application Fee Payment', desc: 'Mobile banking (bKash/Nagad) + cards', badgeClass: 'bg-[#047857] text-white font-bold' },
    { num: '04', title: 'Eligibility Screening', desc: 'Automated rules + manual review', badgeClass: 'bg-[#C5A059] text-slate-950 font-black' },
    { num: '05', title: 'Admit Card Generation', desc: 'QR + barcode enabled digital passes', badgeClass: 'bg-[#C5A059] text-slate-950 font-black' },
    { num: '06', title: 'Exam & Merit List Engine', desc: 'Centre allocation & auto merit scoring', badgeClass: 'bg-[#C5A059] text-slate-950 font-black' },
    { num: '07', title: 'Seat Allocation & Waiting List', desc: 'Multi-cycle automated seat allotment', badgeClass: 'bg-[#D32F2F] text-white font-bold' },
  ];

  return (
    <div className="relative w-full h-full grid grid-cols-12 overflow-hidden select-none font-sans bg-[#F4F0E8]">
      {/* LEFT SECTION (65% Warm Executive Cream) */}
      <div className="col-span-12 lg:col-span-8 p-8 md:p-12 flex flex-col justify-between relative z-10">
        {/* Top Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-[3px] bg-[#05A872]"></div>
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
              OUR OFFERING 03 OF 05
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
            Admission Management <span className="text-[#05A872] font-serif italic font-black">System</span>
          </h1>

          <p className="font-serif italic text-slate-700 text-lg md:text-2xl max-w-3xl font-medium">
            End-to-end admission automation we deliver — from online application to seat allocation to automatic handover into UMS-ERP.
          </p>
        </div>

        {/* 8 Applicant Lifecycle Pipeline */}
        <div className="my-auto space-y-2.5 font-sans">
          <div className="flex items-center justify-between">
            <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#047857] uppercase font-sans">
              APPLICANT LIFECYCLE WE BUILD — 8 STEPS PIPELINE
            </p>
            <span className="text-xs font-bold text-emerald-900 bg-emerald-100 px-3 py-1 rounded-md border border-emerald-300 font-sans">
              High-Throughput Pipeline
            </span>
          </div>

          {/* Steps 01 to 07 */}
          <div className="space-y-2">
            {steps.map((s) => (
              <div
                key={s.num}
                className="bg-white border-2 border-slate-300 rounded-xl p-3 px-4 flex items-center justify-between shadow-xs hover-float transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className={`${s.badgeClass} px-3 py-1 rounded-md text-xs md:text-sm shadow-xs shrink-0 font-sans`}>
                    {s.num}
                  </span>
                  <span className="font-bold text-slate-900 text-sm md:text-base font-sans">{s.title}</span>
                </div>
                <span className="text-xs md:text-sm text-slate-700 font-bold font-sans">{s.desc}</span>
              </div>
            ))}

            {/* Step 08 (Gold Highlighted Status Bar) */}
            <div className="bg-[#C5A059] text-slate-950 font-black rounded-xl p-3 px-4 flex items-center justify-between shadow-md text-sm md:text-base border-2 border-amber-600 hover-float font-sans">
              <div className="flex items-center gap-3">
                <span className="bg-slate-950 text-[#C5A059] px-3 py-1 rounded-md font-bold text-xs md:text-sm">✓</span>
                <span className="font-sans font-black text-sm md:text-base text-slate-950">08 — Admission Confirmed → UMS-ERP Sync → Reporting</span>
              </div>
              <span className="text-xs text-slate-950 uppercase tracking-widest font-black bg-white/70 px-3 py-1 rounded font-sans">
                AUTOMATED HANDOVER
              </span>
            </div>
          </div>
        </div>

        {/* Footer Left */}
        <div className="pt-2 text-xs md:text-sm text-slate-800 font-bold tracking-wider font-sans">
          11 · ADMISSION MANAGEMENT · SYSTECH × PAKIZA LIMITED
        </div>
      </div>

      {/* RIGHT SIDEBAR (35% Dark Executive Navy) */}
      <div className="col-span-12 lg:col-span-4 bg-[#0B131F] text-slate-100 p-8 md:p-10 flex flex-col justify-between border-l-2 border-slate-800 relative z-10 font-sans">
        
        {/* Top Tag & Massive Stat */}
        <div className="space-y-6 my-auto">
          <div className="flex items-center gap-2">
            <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
              PEAK SEASON CAPACITY
            </p>
          </div>

          <div>
            <span className="font-serif text-7xl lg:text-8xl font-black text-[#05A872] leading-none block">
              1M+
            </span>
            <p className="text-xs text-slate-300 uppercase tracking-widest mt-1 font-bold font-sans">
              SEASONAL APPLICANTS CAPACITY
            </p>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl font-black text-white leading-[1.08]">
            A million applicants. <br />
            <span className="text-[#C5A059]">Zero friction.</span>
          </h2>

          <p className="font-serif italic text-slate-200 text-base md:text-lg leading-relaxed font-medium">
            Designed for peak-busy, seasonal nationwide admission load across Bangladesh.
          </p>

          {/* 3 Performance Metric Cards */}
          <div className="space-y-3 pt-4 border-t-2 border-slate-800 font-sans">
            <div className="bg-[#121E30] border-2 border-slate-700/80 p-3.5 rounded-xl flex items-center gap-3">
              <span className="text-[#05A872] font-bold text-xl">✓</span>
              <div>
                <strong className="text-white block font-bold text-sm md:text-base font-sans">Mobile Banking & Cards</strong>
                <span className="text-xs md:text-sm text-slate-200 font-semibold font-sans">Instant bKash, Nagad, and debit/credit card pay</span>
              </div>
            </div>

            <div className="bg-[#121E30] border-2 border-slate-700/80 p-3.5 rounded-xl flex items-center gap-3">
              <span className="text-[#05A872] font-bold text-xl">✓</span>
              <div>
                <strong className="text-white block font-bold text-sm md:text-base font-sans">OCR Auto Verification</strong>
                <span className="text-xs md:text-sm text-slate-200 font-semibold font-sans">Automated SSC/HSC transcript & PII checks</span>
              </div>
            </div>

            <div className="bg-[#121E30] border-2 border-slate-700/80 p-3.5 rounded-xl flex items-center gap-3">
              <span className="text-[#05A872] font-bold text-xl">✓</span>
              <div>
                <strong className="text-white block font-bold text-sm md:text-base font-sans">Instant UMS-ERP Handover</strong>
                <span className="text-xs md:text-sm text-slate-200 font-semibold font-sans">Zero manual data re-entry on admission</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t-2 border-slate-800 pt-4 font-sans">
          <p className="text-xs text-[#C5A059] tracking-widest uppercase font-bold text-center font-sans">
            HIGH-THROUGHPUT NATIONWIDE ADMISSION BACKBONE
          </p>
        </div>
      </div>
    </div>
  );
}
