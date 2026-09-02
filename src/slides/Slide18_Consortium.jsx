import React from 'react';

export default function Slide18_Consortium() {
  return (
    <div className="relative w-full h-full bg-[#F4F0E8] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#C5A059]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            WHY OUR CONSORTIUM
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Why <span className="text-[#C5A059] font-serif italic font-black">Our Consortium.</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          Five reasons the Systech × Pakiza consortium is the right partner for this programme.
        </p>
      </div>

      {/* 5 Value Cards Layout */}
      <div className="grid grid-cols-12 gap-5 my-auto items-stretch">
        {/* Card 01: Featured Dark Navy Box (5 cols) */}
        <div className="col-span-12 lg:col-span-6 bg-[#0B131F] text-slate-100 p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-serif text-4xl font-black text-[#C5A059]">01</span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#C5A059] uppercase">
                DOMAIN DEPTH
              </span>
            </div>
            <h3 className="font-serif font-black text-2xl text-white mb-3 leading-tight">
              We Build Enterprise ERPs
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
              The Systech × Pakiza consortium has shipped enterprise-grade ERP systems. Together we know the failure modes, the integration traps, and what holds up at national scale.
            </p>
          </div>
        </div>

        {/* Card 02: Higher-Ed Specialism (6 cols) */}
        <div className="col-span-12 lg:col-span-6 bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-serif text-4xl font-black text-[#047857]">02</span>
              <h3 className="font-serif font-black text-2xl text-slate-900 leading-tight">
                Higher-Ed Specialism
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-sans font-light pt-1">
              UMS · AMS · Research grant systems — our craft, not a side offering.
            </p>
          </div>
        </div>

        {/* Card 03: Local Presence (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-2">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-3xl font-black text-red-600">03</span>
            <h4 className="font-serif font-bold text-lg text-slate-900">Local Presence</h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-sans font-light">
            Bangladesh-based delivery — we know your institutions, your language, your stakeholders.
          </p>
        </div>

        {/* Card 04: Long-Term Support (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-2">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-3xl font-black text-blue-600">04</span>
            <h4 className="font-serif font-bold text-lg text-slate-900">Long-Term Support</h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-sans font-light">
            We don't disappear after go-live. Multi-year support is in our DNA, not a contract clause.
          </p>
        </div>

        {/* Card 05: Outcome Commitment (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-2">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-3xl font-black text-[#C5A059]">05</span>
            <h4 className="font-serif font-bold text-lg text-slate-900">Outcome Commitment</h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-sans font-light">
            We measure ourselves on adoption, satisfaction, uptime — not lines of code delivered.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-slate-300 text-[11px] text-slate-600 font-mono flex justify-between">
        <span>18 · WHY OUR CONSORTIUM · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#C5A059]">CONSORTIUM ADVANTAGE</span>
      </div>
    </div>
  );
}
