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
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-[3px] bg-[#D32F2F]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#D32F2F] uppercase font-sans">
            OUR OFFERING 01 OF 05
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Central Authority Automation <span className="text-[#D32F2F] font-serif italic font-black">Platform</span>
        </h1>

        <p className="font-serif italic text-slate-700 text-lg md:text-2xl max-w-4xl font-medium">
          UGC ERP: 11 modular microservices digitizing central authority operations, financial governance, university oversight, and ministry KPI reporting.
        </p>
      </div>

      {/* Grid: 11 Modules Display */}
      <div className="relative z-10 my-auto space-y-3 font-sans">
        <div className="flex items-center justify-between">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            11 FUNCTIONAL GOVERNANCE MODULES (INDEPENDENT MICROSERVICES)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 font-sans">
          {/* Column 1 */}
          <div className="space-y-3">
            {modulesCol1.map((m) => (
              <div key={m.code} className="bg-white border-2 border-slate-300 p-3.5 rounded-xl flex items-center justify-between shadow-xs hover-float font-sans">
                <div className="flex items-center gap-3 font-sans">
                  <span className="text-xs md:text-sm font-bold text-[#D32F2F] bg-red-100 px-3 py-1 rounded-md border border-red-300 shrink-0 font-sans">
                    {m.code}
                  </span>
                  <div className="font-sans">
                    <h4 className="text-base md:text-lg font-bold text-slate-900 font-sans">{m.name}</h4>
                    <p className="text-xs md:text-sm text-slate-700 font-semibold font-sans">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            {modulesCol2.map((m) => (
              <div key={m.code} className="bg-white border-2 border-slate-300 p-3.5 rounded-xl flex items-center justify-between shadow-xs hover-float font-sans">
                <div className="flex items-center gap-3 font-sans">
                  <span className="text-xs md:text-sm font-bold text-[#D32F2F] bg-red-100 px-3 py-1 rounded-md border border-red-300 shrink-0 font-sans">
                    {m.code}
                  </span>
                  <div className="font-sans">
                    <h4 className="text-base md:text-lg font-bold text-slate-900 font-sans">{m.name}</h4>
                    <p className="text-xs md:text-sm text-slate-700 font-semibold font-sans">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Callout */}
      <div className="relative z-10 bg-white border-l-4 border-[#D32F2F] border-t-2 border-r-2 border-b-2 border-slate-300 p-4 rounded-r-xl shadow-xs text-center font-serif text-base md:text-lg italic text-slate-950 font-bold">
        "The ERP that becomes the government's window onto its entire higher-education sector."
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t-2 border-slate-300 pt-2 flex justify-between text-xs md:text-sm font-bold text-slate-800 font-sans">
        <span>06 · UGC ERP · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#D32F2F]">CENTRAL GOVERNANCE AUTOMATION</span>
      </div>
    </div>
  );
}
