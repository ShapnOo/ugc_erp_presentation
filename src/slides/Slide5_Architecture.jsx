import React from 'react';

export default function Slide5_Architecture() {
  return (
    <div className="relative w-full h-full bg-[#ECEFF4] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-[3px] bg-[#05A872]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
            OUR INTEGRATION ARCHITECTURE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          How Our Platforms <span className="text-[#C5A059] font-serif italic font-black">Connect Together</span>
        </h1>
        
        <p className="font-serif italic text-slate-800 text-lg md:text-2xl max-w-4xl font-semibold">
          A federated 3-tier digital architecture built on BdREN TIGERfed Single Sign-On, unified API gateway, and centralized audit.
        </p>
      </div>

      {/* Main Architecture Diagram Stage (8 cols) + Right Sidebar (4 cols) */}
      <div className="relative z-10 grid grid-cols-12 gap-8 my-auto items-center">
        {/* Left Architecture Flow Stage (8 cols) */}
        <div className="col-span-12 lg:col-span-8 bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[440px]">
          
          {/* Animated SVG Connection Lines with Continuous Traveling Data Pulses */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Top Central Authority Down to 5 Platforms */}
            <line x1="50%" y1="18%" x2="50%" y2="28%" stroke="#C5A059" strokeWidth="3.5" className="animated-dash-line" opacity="0.9" />
            
            {/* Platform Row Down to Foundation Layer */}
            <line x1="50%" y1="46%" x2="50%" y2="54%" stroke="#05A872" strokeWidth="3.5" className="animated-dash-line" opacity="0.9" />
            
            {/* Foundation Layer Down to All Universities */}
            <line x1="50%" y1="73%" x2="50%" y2="82%" stroke="#2563EB" strokeWidth="3.5" className="animated-dash-line" opacity="0.9" />
          </svg>

          {/* TIER 1: Governance Tier (Central Authority) */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-[#C5A059] text-slate-950 px-10 py-3.5 rounded-xl shadow-lg font-serif font-black text-center text-xl md:text-2xl border-2 border-amber-300 hover-float cursor-pointer w-full max-w-md">
              CENTRAL AUTHORITY (UGC)
              <span className="block font-mono text-xs uppercase tracking-widest text-slate-950 font-black mt-1">
                MINISTRY & LEADERSHIP GOVERNANCE DASHBOARDS
              </span>
            </div>
          </div>

          {/* TIER 2: Five Flagship Platforms Row (Reordered: UGC ERP, UMS-ERP, AMS, NEXUS, GMS) */}
          <div className="relative z-10 grid grid-cols-5 gap-2.5 text-center font-serif font-bold text-xs py-2">
            <div className="bg-[#D32F2F] text-white p-3.5 rounded-xl shadow-md border-2 border-red-400 hover-float cursor-pointer">
              <span className="block font-black text-lg md:text-xl">UGC ERP</span>
              <span className="block font-sans text-xs uppercase tracking-widest opacity-95 font-black mt-1">GOVERNANCE</span>
            </div>
            <div className="bg-[#2563EB] text-white p-3.5 rounded-xl shadow-md border-2 border-blue-400 hover-float cursor-pointer">
              <span className="block font-black text-lg md:text-xl">UMS-ERP</span>
              <span className="block font-sans text-xs uppercase tracking-widest opacity-95 font-black mt-1">UNIVERSITY</span>
            </div>
            <div className="bg-white border-2 border-[#05A872] text-[#05A872] p-3.5 rounded-xl shadow-md hover-float cursor-pointer">
              <span className="block font-black text-lg md:text-xl">AMS</span>
              <span className="block font-sans text-xs uppercase tracking-widest text-slate-950 font-black mt-1">ADMISSION</span>
            </div>
            <div className="bg-[#D9A74A] text-slate-950 p-3.5 rounded-xl shadow-md border-2 border-amber-600 hover-float cursor-pointer">
              <span className="block font-black text-lg md:text-xl">NEXUS</span>
              <span className="block font-sans text-xs uppercase tracking-widest text-slate-950 font-black mt-1">MATCHING</span>
            </div>
            <div className="bg-[#05A872] text-white p-3.5 rounded-xl shadow-md border-2 border-emerald-400 hover-float cursor-pointer">
              <span className="block font-black text-lg md:text-xl">GMS</span>
              <span className="block font-sans text-xs uppercase tracking-widest opacity-95 font-black mt-1">GRANTS</span>
            </div>
          </div>

          {/* TIER 3: Foundation Layer (Glowing Border Wave) */}
          <div className="relative z-10 border-2 border-[#05A872] rounded-xl p-3.5 bg-gradient-to-r from-emerald-50/80 via-white to-emerald-50/80 shadow-xl glowing-border-wave">
            <div className="text-xs md:text-sm font-mono font-black text-[#05A872] text-center uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#05A872] animate-pulse"></span>
              OUR COMMON DIGITAL LAYER · SHARED IDENTITY · SHARED SECURITY
            </div>
            <div className="grid grid-cols-4 gap-2.5 text-center text-xs md:text-sm font-mono font-black">
              <div className="bg-white border-2 border-slate-300 py-2.5 px-2 rounded-lg text-slate-950 shadow-xs hover-float">
                BdREN TIGERfed SSO
              </div>
              <div className="bg-white border-2 border-slate-300 py-2.5 px-2 rounded-lg text-slate-950 shadow-xs hover-float">
                API Gateway
              </div>
              <div className="bg-white border-2 border-slate-300 py-2.5 px-2 rounded-lg text-slate-950 shadow-xs hover-float">
                RBAC & 2FA
              </div>
              <div className="bg-white border-2 border-slate-300 py-2.5 px-2 rounded-lg text-slate-950 shadow-xs hover-float">
                Audit Logging
              </div>
            </div>
          </div>

          {/* TIER 4: University Tier (Public & Private Universities) */}
          <div className="relative z-10 space-y-2">
            <div className="bg-[#1E40AF] text-white py-2.5 px-4 rounded-xl text-center font-serif font-black text-sm md:text-base uppercase tracking-wider shadow border-2 border-blue-400">
              ALL UNIVERSITIES (PUBLIC & PRIVATE) ACROSS ALL 8 DIVISIONS
            </div>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-[#2563EB] text-white p-3.5 rounded-xl font-serif font-bold text-sm md:text-base shadow-md border-2 border-blue-400 hover-float cursor-pointer">
                UMS-ERP
                <span className="block font-sans text-xs uppercase tracking-widest opacity-95 font-black mt-0.5">UNIVERSITY OPERATIONS</span>
              </div>
              <div className="bg-white border-2 border-[#05A872] text-[#05A872] p-3.5 rounded-xl font-serif font-bold text-sm md:text-base shadow-md hover-float cursor-pointer">
                AMS
                <span className="block font-sans text-xs uppercase tracking-widest text-slate-950 font-black mt-0.5">ADMISSION SYSTEM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Sidebar Checklist (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-[#0B131F] text-slate-100 p-6 md:p-8 rounded-2xl shadow-xl flex flex-col justify-between border-2 border-slate-800">
          <div className="space-y-4">
            <p className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] text-[#C5A059] uppercase">
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

          <div className="border-t-2 border-slate-800 pt-4 mt-4">
            <p className="text-xs md:text-sm font-mono text-[#C5A059] uppercase tracking-widest font-black">
              SINGLE IDENTITY · SINGLE GATEWAY · ZERO DATA SILOS
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t-2 border-slate-300 pt-3 flex justify-between font-mono text-xs md:text-sm font-bold text-slate-800">
        <span>05 · OUR ARCHITECTURE · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">FEDERATED SYSTEM ARCHITECTURE</span>
      </div>
    </div>
  );
}
