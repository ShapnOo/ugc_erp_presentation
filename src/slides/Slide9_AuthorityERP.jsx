import React from 'react';

export default function Slide9_AuthorityERP() {
  const modulesCol1 = [
    { code: '01 HRAS', name: 'HR & Administration' },
    { code: '02 FMAS', name: 'Finance & Accounts' },
    { code: '03 PPDS', name: 'Project Planning & Dev' },
    { code: '04 UIMS', name: 'University Information' },
    { code: '05 RIES', name: 'Research & Innovation' },
    { code: '06 AQAS', name: 'Academic Quality Assurance' },
  ];

  const modulesCol2 = [
    { code: '07 SSES', name: 'Student Services & Engagement' },
    { code: '08 CIAS', name: 'Collaboration & Int\'l Affairs' },
    { code: '09 HEARS', name: 'Analytics & KPI Dashboards' },
    { code: '10 IWMS', name: 'Inventory & Warehouse' },
    { code: '11 SRMS', name: 'Service Requests' },
  ];

  return (
    <div className="relative w-full h-full bg-[#0B131F] text-slate-100 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#D32F2F]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#D32F2F] uppercase font-sans">
            OUR OFFERING 01 OF 05
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-2">
          Central Authority Automation <span className="text-[#D32F2F] font-serif italic font-black">Platform</span>
        </h1>

        <p className="font-serif italic text-slate-300 text-base md:text-lg max-w-4xl font-normal">
          UGC ERP: 11 modular microservices digitizing central authority operations, financial governance, university oversight, and ministry KPI reporting.
        </p>
      </div>

      {/* Grid: 11 Modules Display */}
      <div className="my-auto">
        <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans mb-3">
          11 FUNCTIONAL GOVERNANCE MODULES
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Column 1 */}
          <div className="space-y-2">
            {modulesCol1.map((m) => (
              <div key={m.code} className="bg-[#121B2B] border border-slate-800 p-3 rounded-lg flex items-center justify-between shadow-sm">
                <span className="font-mono text-xs font-bold text-[#D32F2F]">{m.code}</span>
                <span className="text-xs font-semibold text-slate-200">{m.name}</span>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            {modulesCol2.map((m) => (
              <div key={m.code} className="bg-[#121B2B] border border-slate-800 p-3 rounded-lg flex items-center justify-between shadow-sm">
                <span className="font-mono text-xs font-bold text-[#D32F2F]">{m.code}</span>
                <span className="text-xs font-semibold text-slate-200">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Red Banner */}
      <div className="bg-[#D32F2F] text-white p-3 rounded-lg text-center font-serif text-xs italic font-bold">
        "The ERP that becomes the government's window onto its entire higher-education sector."
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex justify-between font-mono text-[11px] text-slate-400">
        <span>06 · UGC ERP · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#D32F2F]">CENTRAL GOVERNANCE AUTOMATION</span>
      </div>
    </div>
  );
}
