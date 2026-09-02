import React from 'react';

export default function Slide6_GMS() {
  const phase1 = [
    { num: '01', title: 'Online Application', desc: 'Faculty & researcher digital portal' },
    { num: '02', title: 'Proposal Submission', desc: 'Structured proposal & document upload' },
    { num: '03', title: 'Peer Review & Evaluation', desc: 'Multi-stage expert scoring & review' },
    { num: '04', title: 'Committee Approval', desc: 'Committee scoring & decision workflow' },
  ];

  const phase2 = [
    { num: '05', title: 'Milestone Disbursement', desc: 'Tranche fund release upon milestone' },
    { num: '06', title: 'Progress Monitoring', desc: 'Periodic technical & financial reports' },
    { num: '07', title: 'Financial Audit & Reporting', desc: 'Auditable expenditure tracking' },
  ];

  const phase3 = [
    { num: '08', title: 'Research Repository', desc: 'Central publication & IP repository' },
    { num: '09', title: 'Immutable Audit Trail', desc: 'Full compliance & financial logging' },
    { num: '10', title: 'Executive Dashboard', desc: 'UGC leadership & Ministry oversight' },
  ];

  return (
    <div className="relative w-full h-full bg-[#F0F7F4] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Soft Ambient Glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-[3px] bg-[#05A872]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            OUR OFFERING 05 OF 05
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Grants Management <span className="text-[#05A872] font-serif italic font-black">System (GMS)</span>
        </h1>

        <p className="font-serif italic text-slate-700 text-lg md:text-2xl max-w-4xl font-medium">
          A dedicated national platform for UGC to administer research and innovation grants awarded to faculty and researchers nationwide.
        </p>
      </div>

      {/* 3-Phase Connected Grant Pipeline */}
      <div className="relative z-10 grid grid-cols-12 gap-5 my-auto items-stretch font-sans">
        
        {/* PHASE 1: Proposal & Evaluation (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white border-2 border-emerald-400 p-5 rounded-2xl shadow-xl flex flex-col justify-between hover-float">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-emerald-100">
              <span className="text-xs md:text-sm font-bold text-[#05A872] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-md border border-emerald-300 font-sans">
                PHASE 01 · PROPOSAL & REVIEW
              </span>
              <span className="text-xs font-bold text-slate-800 font-sans">4 STEPS</span>
            </div>

            <div className="space-y-3">
              {phase1.map((s) => (
                <div key={s.num} className="bg-slate-50 border border-slate-300 p-3 rounded-xl flex items-start gap-3">
                  <span className="text-xs font-bold text-[#05A872] bg-emerald-100 px-2.5 py-1 rounded-md shrink-0 font-sans">
                    {s.num}
                  </span>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 leading-tight font-sans">{s.title}</h4>
                    <p className="text-xs md:text-sm text-slate-700 font-semibold mt-0.5 font-sans">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t-2 border-emerald-100 text-xs text-[#05A872] uppercase font-bold tracking-wider font-sans">
            ONLINE APPLICATION & REVIEW
          </div>
        </div>

        {/* PHASE 2: Disbursement & Tracking (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white border-2 border-amber-400 p-5 rounded-2xl shadow-xl flex flex-col justify-between hover-float">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-amber-100">
              <span className="text-xs md:text-sm font-bold text-amber-950 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-md border border-amber-300 font-sans">
                PHASE 02 · DISBURSEMENT & TRACKING
              </span>
              <span className="text-xs font-bold text-slate-800 font-sans">3 STEPS</span>
            </div>

            <div className="space-y-3">
              {phase2.map((s) => (
                <div key={s.num} className="bg-slate-50 border border-slate-300 p-3 rounded-xl flex items-start gap-3">
                  <span className="text-xs font-bold text-amber-900 bg-amber-200 px-2.5 py-1 rounded-md shrink-0 font-sans">
                    {s.num}
                  </span>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 leading-tight font-sans">{s.title}</h4>
                    <p className="text-xs md:text-sm text-slate-700 font-semibold mt-0.5 font-sans">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t-2 border-amber-100 text-xs text-amber-950 uppercase font-bold tracking-wider font-sans">
            MILESTONE FUND RELEASE
          </div>
        </div>

        {/* PHASE 3: Output & Audit (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white border-2 border-blue-400 p-5 rounded-2xl shadow-xl flex flex-col justify-between hover-float">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-blue-100">
              <span className="text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md border border-blue-300 font-sans">
                PHASE 03 · REPOSITORY & OVERSIGHT
              </span>
              <span className="text-xs font-bold text-slate-800 font-sans">3 STEPS</span>
            </div>

            <div className="space-y-3">
              {phase3.map((s) => (
                <div key={s.num} className="bg-slate-50 border border-slate-300 p-3 rounded-xl flex items-start gap-3">
                  <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2.5 py-1 rounded-md shrink-0 font-sans">
                    {s.num}
                  </span>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 leading-tight font-sans">{s.title}</h4>
                    <p className="text-xs md:text-sm text-slate-700 font-semibold mt-0.5 font-sans">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t-2 border-blue-100 text-xs text-blue-900 uppercase font-bold tracking-wider font-sans">
            AUDIT TRAIL & REPOSITORY
          </div>
        </div>

      </div>

      {/* Bottom Callout */}
      <div className="relative z-10 bg-white border-l-4 border-[#05A872] border-t-2 border-r-2 border-b-2 border-slate-300 p-4 rounded-r-xl shadow-xs text-center font-serif text-base md:text-lg italic text-slate-950 font-bold">
        "Transforming paper grant applications into a transparent, auditable digital research engine."
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t-2 border-slate-300 pt-2 flex justify-between text-xs md:text-sm font-bold text-slate-800 font-sans">
        <span>14 · GMS · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">GRANTS MANAGEMENT SYSTEM</span>
      </div>
    </div>
  );
}
