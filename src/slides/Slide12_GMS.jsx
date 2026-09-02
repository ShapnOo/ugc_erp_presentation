import React from 'react';

export default function Slide12_GMS() {
  const phase1 = [
    { num: '01', title: 'Online Application', desc: 'Faculty & researcher portal' },
    { num: '02', title: 'Proposal Submission', desc: 'Structured form + document upload' },
    { num: '03', title: 'Peer Review', desc: 'Multi-stage scoring & review' },
    { num: '04', title: 'Scoring & Approval', desc: 'Committee decision workflow' },
  ];

  const phase2 = [
    { num: '05', title: 'Fund Disbursement', desc: 'Milestone-based fund release', highlight: true },
    { num: '06', title: 'Progress Monitoring', desc: 'Periodic financial & technical reports' },
    { num: '07', title: 'Financial Reporting', desc: 'Auditable expenditure tracking' },
  ];

  const phase3 = [
    { num: '08', title: 'Output Repository', desc: 'Central research repository' },
    { num: '09', title: 'Audit Trail', desc: 'Immutable compliance logging', highlight: true },
    { num: '10', title: 'Monitoring Dashboard', desc: 'UGC executive oversight' },
  ];

  return (
    <div className="relative w-full h-full bg-[#EFF8F5] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Soft Radial Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-[2px] bg-[#05A872]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            OUR OFFERING 05 OF 05
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Grants Management <span className="text-[#05A872] font-serif italic font-black">System (GMS)</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-lg md:text-2xl max-w-4xl font-normal">
          A dedicated platform for UGC to administer research and innovation grants awarded to faculty and researchers nationwide.
        </p>
      </div>

      {/* 3-PHASE INTUITIVE GRANT PIPELINE (Large Crystal Clear Typography) */}
      <div className="relative z-10 my-auto space-y-4 font-sans">
        
        {/* PHASE 1: Application & Evaluation */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs md:text-sm font-mono font-bold text-[#05A872] bg-emerald-100 px-3 py-1 rounded border border-emerald-300 uppercase tracking-widest">
              PHASE 1: APPLICATION & EVALUATION (STEPS 01–04)
            </span>
            <span className="text-xs md:text-sm font-mono font-bold text-slate-700">FACULTY & PEER REVIEW</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            {phase1.map((s) => (
              <div key={s.num} className="bg-white/95 border border-slate-300 p-4 rounded-2xl shadow-xs hover-float flex flex-col justify-between h-28">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs md:text-sm font-bold text-[#05A872] bg-emerald-100 px-2.5 py-1 rounded border border-emerald-200">
                    {s.num}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">PHASE 1</span>
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-black text-slate-900 leading-tight mb-1">{s.title}</h4>
                  <p className="text-xs md:text-sm text-slate-700 font-semibold leading-tight">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PHASE 2 & 3 SIDE-BY-SIDE */}
        <div className="grid grid-cols-12 gap-4">
          
          {/* PHASE 2: Disbursement & Monitoring (7 cols) */}
          <div className="col-span-12 lg:col-span-7 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs md:text-sm font-mono font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded border border-amber-300 uppercase tracking-widest">
                PHASE 2: DISBURSEMENT & MONITORING (STEPS 05–07)
              </span>
              <span className="text-xs md:text-sm font-mono font-bold text-slate-700">MILESTONE RELEASES</span>
            </div>

            <div className="grid grid-cols-3 gap-3.5">
              {phase2.map((s) => (
                <div key={s.num} className={`p-4 rounded-2xl border flex flex-col justify-between h-28 shadow-xs hover-float ${s.highlight ? 'bg-gradient-to-br from-amber-50 to-emerald-50 border-amber-400 border-2' : 'bg-white/95 border-slate-300'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs md:text-sm font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded border border-amber-300">
                      {s.num}
                    </span>
                    <span className="text-xs font-mono text-amber-900 font-bold">★ MILESTONE</span>
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-black text-slate-900 leading-tight mb-1">{s.title}</h4>
                    <p className="text-xs md:text-sm text-slate-700 font-semibold leading-tight">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PHASE 3: Audit & Repository (5 cols) */}
          <div className="col-span-12 lg:col-span-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs md:text-sm font-mono font-bold text-emerald-900 bg-emerald-200 px-3 py-1 rounded border border-emerald-400 uppercase tracking-widest">
                PHASE 3: AUDIT & REPOSITORY (STEPS 08–10)
              </span>
              <span className="text-xs md:text-sm font-mono font-bold text-slate-700">UGC GOVERNANCE</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {phase3.map((s) => (
                <div key={s.num} className={`p-4 rounded-2xl border flex flex-col justify-between h-28 shadow-xs hover-float ${s.highlight ? 'bg-emerald-50 border-emerald-400 border-2' : 'bg-white/95 border-slate-300'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs md:text-sm font-bold text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded border border-emerald-200">
                      {s.num}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">PHASE 3</span>
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-black text-slate-900 leading-tight mb-1">{s.title}</h4>
                    <p className="text-xs md:text-sm text-slate-700 font-semibold leading-tight">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Emerald Callout Banner */}
      <div className="relative z-10 bg-white border-l-4 border-[#05A872] border-t border-r border-b border-slate-200 p-4 rounded-r-xl shadow-xs text-center font-serif text-sm md:text-base italic text-slate-900 font-black">
        "On-demand, transparent, auditable national research grant service."
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-slate-300 pt-2 flex justify-between font-mono text-xs font-bold text-slate-700">
        <span>14 · GRANTS MANAGEMENT SYSTEM · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">GRANTS MANAGEMENT SYSTEM (GMS)</span>
      </div>
    </div>
  );
}
