import React from 'react';

export default function Slide5_Architecture() {
  return (
    <div className="relative w-full h-full bg-[#ECEFF4] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div className="relative z-10 font-sans">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-[3px] bg-[#05A872]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            OUR INTEGRATION ARCHITECTURE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-1">
          How Our Platforms <span className="text-[#C5A059] font-serif italic font-black">Connect Together</span>
        </h1>
        
        <p className="font-serif italic text-slate-800 text-lg md:text-2xl max-w-4xl font-semibold">
          A federated 3-tier digital architecture built on BdREN TIGERfed Single Sign-On, unified API gateway, and centralized audit.
        </p>
      </div>

      {/* Main Architecture Diagram Stage (8 cols) + Right Sidebar (4 cols) */}
      <div className="relative z-10 grid grid-cols-12 gap-8 my-auto items-stretch font-sans">
        {/* Left Architecture Flow Stage (8 cols) */}
        <div className="col-span-12 lg:col-span-8 bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-xl flex flex-col justify-between font-sans">
          
          {/* TIER 1: Governance Tier (Central Authority) */}
          <div className="relative z-10 flex flex-col items-center font-sans">
            <div className="bg-[#C5A059] text-slate-950 px-10 py-3 rounded-xl shadow-lg font-serif font-black text-center text-xl md:text-2xl border-2 border-amber-300 hover-float cursor-pointer w-full max-w-md">
              CENTRAL AUTHORITY (UGC)
              <span className="block font-bold text-xs uppercase tracking-widest text-slate-950 mt-0.5 font-sans">
                MINISTRY & LEADERSHIP GOVERNANCE DASHBOARDS
              </span>
            </div>
          </div>

          {/* CONNECTOR 1: Tier 1 -> Tier 2 */}
          <div className="flex justify-center my-1.5 pointer-events-none">
            <div className="w-0.5 h-6 bg-gradient-to-b from-[#C5A059] to-[#05A872] border-l-2 border-dashed border-[#C5A059] animate-pulse"></div>
          </div>

          {/* TIER 2: Five Flagship Platforms Row */}
          <div className="relative z-10 grid grid-cols-5 gap-2.5 text-center font-serif font-bold text-xs">
            <div className="bg-[#D32F2F] text-white p-3 rounded-xl shadow-md border-2 border-red-400 hover-float cursor-pointer">
              <span className="block font-black text-lg md:text-xl">UGC ERP</span>
              <span className="block font-sans text-xs uppercase tracking-widest opacity-95 font-black mt-0.5">GOVERNANCE</span>
            </div>
            <div className="bg-[#2563EB] text-white p-3 rounded-xl shadow-md border-2 border-blue-400 hover-float cursor-pointer">
              <span className="block font-black text-lg md:text-xl">UMS-ERP</span>
              <span className="block font-sans text-xs uppercase tracking-widest opacity-95 font-black mt-0.5">UNIVERSITY</span>
            </div>
            <div className="bg-white border-2 border-[#05A872] text-[#05A872] p-3 rounded-xl shadow-md hover-float cursor-pointer">
              <span className="block font-black text-lg md:text-xl">AMS</span>
              <span className="block font-sans text-xs uppercase tracking-widest text-slate-950 font-black mt-0.5">ADMISSION</span>
            </div>
            <div className="bg-[#D9A74A] text-slate-950 p-3 rounded-xl shadow-md border-2 border-amber-600 hover-float cursor-pointer">
              <span className="block font-black text-lg md:text-xl">NEXUS</span>
              <span className="block font-sans text-xs uppercase tracking-widest text-slate-950 font-black mt-0.5">MATCHING</span>
            </div>
            <div className="bg-[#05A872] text-white p-3 rounded-xl shadow-md border-2 border-emerald-400 hover-float cursor-pointer">
              <span className="block font-black text-lg md:text-xl">GMS</span>
              <span className="block font-sans text-xs uppercase tracking-widest opacity-95 font-black mt-0.5">GRANTS</span>
            </div>
          </div>

          {/* CONNECTOR 2: Tier 2 -> Tier 3 */}
          <div className="flex justify-center my-1.5 pointer-events-none">
            <div className="w-0.5 h-6 bg-gradient-to-b from-[#05A872] to-[#2563EB] border-l-2 border-dashed border-[#05A872] animate-pulse"></div>
          </div>

          {/* TIER 3: Foundation Layer */}
          <div className="relative z-10 border-2 border-[#05A872] rounded-xl p-3.5 bg-gradient-to-r from-emerald-50 via-amber-50/60 to-emerald-50 shadow-lg transition-all duration-300">
            <div className="text-center mb-2.5">
              <span className="inline-flex items-center gap-2 bg-white border-2 border-[#05A872]/60 px-4 py-1 rounded-full shadow-xs text-xs md:text-sm font-bold text-[#05A872] uppercase tracking-widest font-sans">
                <span className="w-2 h-2 rounded-full bg-[#05A872] animate-pulse"></span>
                OUR COMMON DIGITAL LAYER · SHARED IDENTITY · SHARED SECURITY
              </span>
            </div>
            
            <div className="grid grid-cols-4 gap-2.5 text-center text-xs md:text-sm font-bold font-sans">
              <div className="bg-white border-2 border-slate-300 hover:border-[#C5A059] py-2.5 px-2 rounded-lg text-slate-950 shadow-xs hover-float transition-all duration-300 font-sans">
                BdREN TIGERfed SSO
              </div>
              <div className="bg-white border-2 border-slate-300 hover:border-[#05A872] py-2.5 px-2 rounded-lg text-slate-950 shadow-xs hover-float transition-all duration-300 font-sans">
                API Gateway
              </div>
              <div className="bg-white border-2 border-slate-300 hover:border-[#2563EB] py-2.5 px-2 rounded-lg text-slate-950 shadow-xs hover-float transition-all duration-300 font-sans">
                RBAC & 2FA
              </div>
              <div className="bg-white border-2 border-slate-300 hover:border-[#D32F2F] py-2.5 px-2 rounded-lg text-slate-950 shadow-xs hover-float transition-all duration-300 font-sans">
                Audit Logging
              </div>
            </div>
          </div>

          {/* CONNECTOR 3: Tier 3 -> Tier 4 */}
          <div className="flex justify-center my-1.5 pointer-events-none">
            <div className="w-0.5 h-6 bg-gradient-to-b from-[#2563EB] to-blue-700 border-l-2 border-dashed border-[#2563EB] animate-pulse"></div>
          </div>

          {/* TIER 4: University Tier (Public & Private Universities) */}
          <div className="relative z-10 space-y-2 font-sans">
            <div className="bg-[#1E40AF] text-white py-2 px-4 rounded-xl text-center font-serif font-black text-sm md:text-base uppercase tracking-wider shadow border-2 border-blue-400">
              ALL UNIVERSITIES (PUBLIC & PRIVATE) ACROSS ALL 8 DIVISIONS
            </div>
            <div className="grid grid-cols-2 gap-3 text-center font-sans">
              <div className="bg-[#2563EB] text-white p-3 rounded-xl font-serif font-bold text-sm md:text-base shadow-md border-2 border-blue-400 hover-float cursor-pointer">
                UMS-ERP
                <span className="block font-sans text-xs uppercase tracking-widest opacity-95 font-black mt-0.5">UNIVERSITY OPERATIONS</span>
              </div>
              <div className="bg-white border-2 border-[#05A872] text-[#05A872] p-3 rounded-xl font-serif font-bold text-sm md:text-base shadow-md hover-float cursor-pointer">
                AMS
                <span className="block font-sans text-xs uppercase tracking-widest text-slate-950 font-black mt-0.5">ADMISSION SYSTEM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Sidebar Checklist (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-[#0B131F] text-slate-100 p-6 md:p-8 rounded-2xl shadow-xl flex flex-col justify-between border-2 border-slate-800 font-sans">
          <div className="space-y-4 font-sans">
            <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
              WHAT WE BUILD ONCE, USE EVERYWHERE
            </p>

            <h3 className="font-serif italic text-2xl md:text-3xl font-bold text-white leading-tight">
              BdREN SSO, API Gateway, RBAC & Audit
            </h3>

            <div className="w-full h-[2px] bg-slate-800"></div>

            <div className="space-y-4 text-sm md:text-base text-slate-100 font-sans font-bold">
              <div className="flex items-start gap-3">
                <span className="text-[#05A872] text-xl leading-none font-bold">✓</span>
                <span><strong className="text-white font-bold">BdREN TIGERfed SSO</strong> — students, faculty, and staff sign on once across all 5 platforms.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#05A872] text-xl leading-none font-bold">✓</span>
                <span><strong className="text-white font-bold">Standard Adapters</strong> for payment networks, mobile banking, and identity providers.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#05A872] text-xl leading-none font-bold">✓</span>
                <span><strong className="text-white font-bold">Centralised Audit Trail</strong> — every action recorded at the national level.</span>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-slate-800 pt-4 mt-4 font-sans">
            <p className="text-xs md:text-sm text-[#C5A059] uppercase tracking-widest font-black font-sans">
              SINGLE IDENTITY · SINGLE GATEWAY · ZERO DATA SILOS
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t-2 border-slate-300 pt-3 flex justify-between text-xs md:text-sm font-bold text-slate-800 font-sans">
        <span>05 · OUR ARCHITECTURE · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">FEDERATED SYSTEM ARCHITECTURE</span>
      </div>
    </div>
  );
}
