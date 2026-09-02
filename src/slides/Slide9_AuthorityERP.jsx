import React from 'react';

export default function Slide9_AuthorityERP() {
  const modulesCol1 = [
    { code: '01 HRAS', name: 'HR & Administration System', desc: 'Personnel, payroll & org management' },
    { code: '02 FMAS', name: 'Finance & Accounts System', desc: 'General ledger, budgets & financial audits' },
    { code: '03 PPDS', name: 'Project Planning & Dev', desc: 'Development project tracking' },
    { code: '04 UIMS', name: 'University Information', desc: 'Public & private university registry' },
    { code: '05 RIES', name: 'Research & Innovation', desc: 'Grant applications & research outputs' },
    { code: '06 AQAS', name: 'Academic Quality Assurance', desc: 'University quality standards oversight' },
  ];

  const modulesCol2 = [
    { code: '07 SSES', name: 'Student Services & Engagement', desc: 'Student requests & national services' },
    { code: '08 CIAS', name: 'Collaboration & Int\'l Affairs', desc: 'Foreign degrees & partnerships' },
    { code: '09 HEARS', name: 'Analytics & KPI Dashboards', desc: 'Real-time Ministry & UGC reporting' },
    { code: '10 IWMS', name: 'Inventory & Warehouse', desc: 'Asset tracking & warehouse management' },
    { code: '11 SRMS', name: 'Service Requests System', desc: 'Helpdesk & official service tracking' },
  ];

  return (
    <div className="relative w-full h-full bg-[#F8F4F4] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#D32F2F]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#D32F2F] uppercase font-sans">
            OUR OFFERING 01 OF 05
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Central Authority Automation <span className="text-[#D32F2F] font-serif italic font-black">Platform</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          UGC ERP: 11 modular microservices digitizing central authority operations, financial governance, university oversight, and ministry KPI reporting.
        </p>
      </div>

      {/* Grid: 11 Modules Display */}
      <div className="relative z-10 my-auto space-y-2.5">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans">
            11 FUNCTIONAL GOVERNANCE MODULES (INDEPENDENT MICROSERVICES)
          </p>
          <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            ● Microservice Architecture
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Column 1 */}
          <div className="space-y-2.5">
            {modulesCol1.map((m) => (
              <div key={m.code} className="bg-white/90 border border-slate-200/90 p-3 rounded-xl flex items-center justify-between shadow-xs hover-float">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#D32F2F] bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                    {m.code}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-sans">{m.name}</h4>
                    <p className="text-[10px] text-slate-500 font-light">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-2.5">
            {modulesCol2.map((m) => (
              <div key={m.code} className="bg-white/90 border border-slate-200/90 p-3 rounded-xl flex items-center justify-between shadow-xs hover-float">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#D32F2F] bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                    {m.code}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-sans">{m.name}</h4>
                    <p className="text-[10px] text-slate-500 font-light">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Crimson Callout Banner */}
      <div className="relative z-10 bg-white border-l-4 border-[#D32F2F] border-t border-r border-b border-slate-200 p-3.5 rounded-r-xl shadow-xs text-center font-serif text-xs italic text-slate-900 font-bold">
        "The ERP that becomes the government's window onto its entire higher-education sector."
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-slate-300 pt-3 flex justify-between font-mono text-[11px] text-slate-600">
        <span>06 · UGC ERP · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#D32F2F]">CENTRAL GOVERNANCE AUTOMATION</span>
      </div>
    </div>
  );
}
