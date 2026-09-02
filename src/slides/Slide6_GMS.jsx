import React from 'react';

export default function Slide6_GMS() {
  const lifecycleSteps = [
    { num: '01', title: 'Online Application', desc: 'Faculty & researcher portal' },
    { num: '02', title: 'Proposal Submission', desc: 'Structured form + document upload' },
    { num: '03', title: 'Peer Review & Evaluation', desc: 'Multi-stage scoring & review' },
    { num: '04', title: 'Scoring & Approval', desc: 'Committee decision workflow' },
    { num: '05', title: 'Fund Disbursement', desc: 'Milestone-based fund release' },
    { num: '06', title: 'Progress Monitoring', desc: 'Periodic financial & technical reports' },
    { num: '07', title: 'Financial Reporting', desc: 'Auditable expenditure tracking' },
    { num: '08', title: 'Output Repository', desc: 'Central research depository' },
    { num: '09', title: 'Audit Trail', desc: 'Immutable compliance logging' },
    { num: '10', title: 'Monitoring Dashboard', desc: 'UGC executive oversight' },
  ];

  return (
    <div className="relative w-full h-full bg-[#0B131F] text-slate-100 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#05A872]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            OUR OFFERING 05 OF 05
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight mb-2">
          Grants Management <span className="text-[#05A872] font-serif italic font-black">System (GMS)</span>
        </h1>

        <p className="font-serif italic text-slate-300 text-base md:text-lg max-w-4xl font-normal">
          A dedicated platform for UGC to administer research and innovation grants awarded to faculty and researchers nationwide.
        </p>
      </div>

      {/* 10-Step Lifecycle Grid */}
      <div className="my-auto">
        <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans mb-3">
          END-TO-END 10-STEP GRANT LIFECYCLE WE BUILD
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {lifecycleSteps.map((s) => (
            <div key={s.num} className="bg-[#091D1A] border border-[#05A872]/40 p-3 rounded-xl shadow-lg flex flex-col justify-between h-24">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#05A872]">{s.num}</span>
                <span className="text-[8px] font-mono text-slate-400 uppercase">GMS WORKFLOW</span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs text-white leading-tight mb-0.5">{s.title}</h4>
                <p className="text-[9px] text-slate-300 font-light">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Emerald Callout */}
      <div className="bg-[#05A872] text-slate-950 p-3 rounded-lg text-center font-serif text-xs italic font-bold">
        "On-demand, transparent, auditable national research grant service."
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex justify-between font-mono text-[11px] text-slate-400">
        <span>14 · GRANTS MANAGEMENT SYSTEM · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">GRANTS MANAGEMENT SYSTEM (GMS)</span>
      </div>
    </div>
  );
}
