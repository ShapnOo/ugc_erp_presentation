import React from 'react';

export default function Slide10_EnterpriseArch() {
  const microservices = [
    { name: 'HR & Admin Microservice', tag: 'HRAS', desc: 'Personnel, payroll & org management' },
    { name: 'Finance & Accounts Microservice', tag: 'FMAS', desc: 'General ledger, budgets, audits' },
    { name: 'University Info Microservice', tag: 'UIMS', desc: 'Public & private university registry' },
    { name: 'Research & Innovation Microservice', tag: 'RIES', desc: 'Grant applications & outputs' },
    { name: 'Inventory & Warehouse Microservice', tag: 'IWMS', desc: 'Assets & procurement' },
    { name: 'Analytics & Reporting Microservice', tag: 'HEARS', desc: 'Real-time KPI dashboards' },
  ];

  return (
    <div className="relative w-full h-full bg-[#F4F0E8] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#05A872]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            OUR TECHNICAL ARCHITECTURE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Modular & Scalable <span className="text-[#05A872] font-serif italic font-black">Enterprise Architecture</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          UGC ERP is built as an array of independent microservices — each with its own database and API, interconnected through an API Gateway.
        </p>
      </div>

      {/* Main Architecture Content */}
      <div className="grid grid-cols-12 gap-6 my-auto items-stretch">
        {/* Left Microservices Diagram (8 cols) */}
        <div className="col-span-12 lg:col-span-8 space-y-3">
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#047857] uppercase font-sans">
            INDEPENDENT MICROSERVICE MODULES
          </p>

          <div className="grid grid-cols-2 gap-3">
            {microservices.map((m) => (
              <div key={m.tag} className="bg-white border border-slate-300 p-4 rounded-xl shadow-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold bg-slate-900 text-[#05A872] px-2 py-0.5 rounded">
                    {m.tag}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 uppercase">INDEPENDENT DB & API</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-slate-900">{m.name}</h4>
                <p className="text-[11px] text-slate-500 font-light">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Benefits Box (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-[#0B131F] text-slate-100 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans">
              WHY MICROSERVICES
            </p>

            <h3 className="font-serif font-black text-xl text-white">
              Zero Monolithic Risk
            </h3>

            <div className="space-y-3 text-xs text-slate-300 font-sans">
              <div className="flex items-start gap-2">
                <span className="text-[#05A872] font-bold">✓</span>
                <span><strong>Independent Scaling</strong> — peak load on one service does not affect others.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#05A872] font-bold">✓</span>
                <span><strong>Fault Isolation</strong> — failure in one module keeps the rest operational.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#05A872] font-bold">✓</span>
                <span><strong>Independent Deployment</strong> — upgrade HR without taking down Finance.</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-3 mt-4">
            <p className="text-[9px] font-mono text-[#C5A059] uppercase tracking-widest">
              API GATEWAY + ISSF SECURITY BACKBONE
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-slate-300 text-[11px] text-slate-600 font-mono flex justify-between">
        <span>07 · TECHNICAL ARCHITECTURE · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">MICROSERVICES ARCHITECTURE</span>
      </div>
    </div>
  );
}
