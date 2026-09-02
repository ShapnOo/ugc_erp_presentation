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
          <div className="w-5 h-[2px] bg-[#05A872]"></div>
          <span className="text-xs font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            OUR OFFERING 05 OF 05
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Grants Management <span className="text-[#05A872] font-serif italic font-black">System (GMS)</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-xl max-w-4xl font-normal">
          A dedicated national platform for UGC to administer research and innovation grants awarded to faculty and researchers nationwide.
        </p>
      </div>

      {/* 3-Phase Connected Grant Pipeline */}
      <div className="relative z-10 grid grid-cols-12 gap-5 my-auto items-stretch">
        
        {/* PHASE 1: Proposal & Evaluation (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white border-2 border-emerald-400 p-5 rounded-2xl shadow-xl flex flex-col justify-between hover-float">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-100">
              <span className="text-xs font-mono font-bold text-[#05A872] uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                PHASE 01 · PROPOSAL & REVIEW
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">4 STEPS</span>
            </div>

            <div className="space-y-3">
              {phase1.map((s) => (
                <div key={s.num} className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-start gap-3 hover:border-emerald-400 transition-colors">
                  <span className="font-mono text-base font-black text-[#05A872] bg-white px-2 py-0.5 rounded border border-emerald-300">
                    {s.num}
                  </span>
                  <div>
                    <h4 className="font-serif font-black text-sm text-slate-900 leading-tight">{s.title}</h4>
                    <p className="text-xs font-semibold text-slate-600 mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PHASE 2: Disbursement & Monitoring (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white border-2 border-emerald-500 p-5 rounded-2xl shadow-xl flex flex-col justify-between hover-float">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-100">
              <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-2.5 py-1 rounded border border-emerald-300">
                PHASE 02 · DISBURSEMENT & TRACKING
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">3 STEPS</span>
            </div>

            <div className="space-y-3">
              {phase2.map((s) => (
                <div key={s.num} className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-start gap-3 hover:border-emerald-500 transition-colors">
                  <span className="font-mono text-base font-black text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-300">
                    {s.num}
                  </span>
                  <div>
                    <h4 className="font-serif font-black text-sm text-slate-900 leading-tight">{s.title}</h4>
                    <p className="text-xs font-semibold text-slate-600 mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PHASE 3: Repository & Governance (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-[#0B131F] text-slate-100 p-5 rounded-2xl shadow-2xl flex flex-col justify-between border-2 border-[#C5A059]/40 hover-float">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-wider bg-[#C5A059]/10 px-2.5 py-1 rounded border border-[#C5A059]/30">
                PHASE 03 · REPOSITORY & OVERSIGHT
              </span>
              <span className="text-xs font-mono font-bold text-slate-400">3 STEPS</span>
            </div>

            <div className="space-y-3">
              {phase3.map((s) => (
                <div key={s.num} className="bg-[#121E30] border border-slate-700/80 p-3 rounded-xl flex items-start gap-3 hover:border-[#C5A059] transition-colors">
                  <span className="font-mono text-base font-black text-[#C5A059] bg-slate-950 px-2 py-0.5 rounded border border-[#C5A059]/40">
                    {s.num}
                  </span>
                  <div>
                    <h4 className="font-serif font-black text-sm text-white leading-tight">{s.title}</h4>
                    <p className="text-xs font-light text-slate-300 mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Executive Commitment Banner */}
      <div className="relative z-10 bg-white border-l-4 border-[#05A872] border-t border-r border-b border-slate-300 p-3.5 rounded-r-xl shadow-xs text-center font-serif text-xs md:text-sm italic text-slate-900 font-black">
        "Transparent, auditable, and milestone-based national research grant administration."
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-slate-300 pt-2 flex justify-between font-mono text-xs font-bold text-slate-700">
        <span>14 · GRANTS MANAGEMENT SYSTEM · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">GRANTS MANAGEMENT SYSTEM (GMS)</span>
      </div>
    </div>
  );
}
