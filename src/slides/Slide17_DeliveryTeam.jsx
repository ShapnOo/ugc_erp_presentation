import React from 'react';

export default function Slide17_DeliveryTeam() {
  const rolesCol1 = [
    'Programme Managers',
    'System Architects',
    'Frontend Engineers',
    'Quality Assurance',
  ];

  const rolesCol2 = [
    'Business Analysts',
    'UI / UX Designers',
    'Backend Engineers',
    'DevOps & SRE',
  ];

  return (
    <div className="relative w-full h-full bg-[#F0F4F9] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#05A872]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            OUR DELIVERY TEAM
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-3">
          Multi-Disciplinary <br />
          <span className="text-[#05A872] font-serif italic font-black">Enterprise Delivery</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          Our Systech × Pakiza consortium assembles a dedicated programme organisation with the disciplines and depth an enterprise-scale transformation demands.
        </p>
      </div>

      {/* Grid: Left Stat Box + Right Roles List */}
      <div className="grid grid-cols-12 gap-8 my-auto items-stretch">
        {/* Left Stat Box (5 cols) */}
        <div className="col-span-12 lg:col-span-5 bg-white border border-[#05A872]/40 p-6 md:p-8 rounded-2xl shadow-lg flex flex-col justify-between relative overflow-hidden">
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#05A872] uppercase font-sans">
            SPECIALISED DISCIPLINES
          </p>

          <div>
            <span className="font-serif text-8xl lg:text-9xl font-black text-slate-900 leading-none block">
              8
            </span>
            <h3 className="font-serif font-black text-2xl text-[#05A872] mt-2">
              Core Disciplines
            </h3>
          </div>

          <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xs font-sans">
            <div>
              <span className="font-serif font-black text-xl text-slate-900 block">Enterprise</span>
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">PROGRAMME ORG</span>
            </div>
            <div className="w-[1px] h-8 bg-slate-300"></div>
            <div className="text-right">
              <span className="font-serif font-black text-xl text-slate-900 block">100%</span>
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">JV-DEDICATED</span>
            </div>
          </div>
        </div>

        {/* Right Roles List (7 cols) */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-between">
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans mb-2">
            ROLES WE COMMIT TO THIS PROGRAMME
          </p>

          <div className="grid grid-cols-2 gap-4 font-sans">
            {/* Column 1 */}
            <div className="space-y-3">
              {rolesCol1.map((role, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 shadow-xs">
                  <span className="text-[#05A872]">→</span>
                  <span>{role}</span>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              {rolesCol2.map((role, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 shadow-xs">
                  <span className="text-[#05A872]">→</span>
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Commitment Bar */}
          <div className="bg-white border-l-4 border-[#C5A059] border-t border-r border-b border-slate-200 p-4 rounded-r-xl shadow-xs mt-4">
            <p className="font-serif italic text-slate-800 text-sm md:text-base">
              "Our commitment: <strong className="font-semibold text-[#C5A059]">a fully-staffed team dedicated to your programme</strong> — not a shared bench."
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-300 pt-3 flex justify-between font-mono text-[11px] text-slate-600">
        <span>17 · OUR TEAM · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">MULTI-DISCIPLINARY DELIVERY TEAM</span>
      </div>
    </div>
  );
}
