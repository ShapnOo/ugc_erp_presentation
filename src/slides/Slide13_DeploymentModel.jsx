import React from 'react';

export default function Slide13_DeploymentModel() {
  const universities = [
    { name: 'University 01', division: 'Dhaka' },
    { name: 'University 02', division: 'Chittagong' },
    { name: 'University 03', division: 'Rajshahi' },
    { name: 'University 04', division: 'Khulna' },
    { name: 'University 05', division: 'Sylhet' },
    { name: 'University 06', division: 'Barisal' },
    { name: 'University 07', division: 'Rangpur' },
    { name: 'University 08', division: 'Mymensingh' },
    { name: 'University 09', division: 'Dhaka South' },
    { name: 'University 10', division: 'Custom Anchor', highlighted: true },
  ];

  const coreFeatures = [
    'Standard 18-Module University Lifecycle',
    'Centralised DB Schema & API Contracts',
    'BdREN TIGERfed Single Sign-On Ready',
    'Nationwide Audit & Compliance Logging',
  ];

  const customFeatures = [
    'Tailored UI/UX & University Branding',
    'Local Academic Workflow Adaptations',
    'Custom Departmental Integration Plugins',
    'Zero Core Forking — Seamless Upgrades',
  ];

  return (
    <div className="relative w-full h-full bg-[#EEF2F7] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Soft Radial Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-[2px] bg-[#2563EB]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#2563EB] uppercase font-sans">
            OUR UMS-ERP DEPLOYMENT MODEL
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Common Core + <span className="text-[#2563EB] font-serif italic font-black">Institutional</span> Customisation
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-lg max-w-4xl font-normal">
          We deliver one centralised, standard ERP core, augmented by institution-specific customisation for the first 10 anchor universities.
        </p>
      </div>

      {/* Strategy Cards Section (Content-Rich Grid) */}
      <div className="relative z-10 grid grid-cols-12 gap-6 my-auto items-stretch">
        {/* Card 1: Common Core (Royal Blue) */}
        <div className="col-span-12 lg:col-span-6 bg-[#2563EB] text-white p-7 md:p-8 rounded-2xl shadow-xl flex flex-col justify-between hover-float border border-blue-400">
          <div>
            <div className="flex items-start justify-between mb-4">
              <span className="font-serif text-6xl md:text-7xl font-black leading-none text-white/90">
                1
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-blue-100 uppercase bg-blue-700/60 px-3 py-1 rounded-md">
                STANDARD CORE WE BUILD
              </span>
            </div>

            <h3 className="font-serif font-black text-2xl text-white mb-2">
              Common UMS-ERP Core
            </h3>
            <p className="text-xs text-blue-100 leading-relaxed font-light mb-4">
              A centralized standard solution for the 18-module university lifecycle — deployable, maintainable, and audited across all 8 divisions of Bangladesh.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-2 pt-3 border-t border-blue-400/60 font-sans text-xs">
              {coreFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-blue-200 font-bold">✓</span>
                  <span className="text-blue-50 font-medium leading-tight">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-blue-400/60 pt-3 mt-4 flex justify-between font-mono text-[10px] text-blue-200 uppercase font-bold">
            <span>• 18 STANDARD MODULES</span>
            <span>• 100% UNIFIED DATA SCHEMAS</span>
          </div>
        </div>

        {/* Card 2: Institution Specific (Dark Executive Navy with Gold Accent) */}
        <div className="col-span-12 lg:col-span-6 bg-[#0B131F] text-slate-100 p-7 md:p-8 rounded-2xl shadow-xl flex flex-col justify-between hover-float border border-slate-800">
          <div>
            <div className="flex items-start justify-between mb-4">
              <span className="font-serif text-6xl md:text-7xl font-black leading-none text-[#C5A059]">
                10
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#C5A059] uppercase bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                ANCHOR UNIVERSITIES
              </span>
            </div>

            <h3 className="font-serif font-black text-2xl text-white mb-2">
              Institution-Specific Layer
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
              Each anchor university receives required customisation for local academic workflows and UI branding while keeping the core architecture intact.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-2 pt-3 border-t border-slate-800 font-sans text-xs">
              {customFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-[#C5A059] font-bold">✓</span>
                  <span className="text-slate-200 font-medium leading-tight">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-3 mt-4 flex justify-between font-mono text-[10px] text-[#C5A059] uppercase font-bold">
            <span>• LOCAL UI/UX BRANDING</span>
            <span>• ZERO CORE FORK RISK</span>
          </div>
        </div>
      </div>

      {/* Visual Flow Diagram: Core to 10 Universities */}
      <div className="relative z-10 space-y-2 mt-2">
        <div className="flex items-center justify-center gap-2">
          <span className="h-[1px] w-12 bg-[#C5A059]/40"></span>
          <p className="text-[10px] font-mono font-bold text-[#C5A059] uppercase tracking-widest text-center">
            VISUAL — CORE + CUSTOMISATION DEPLOYMENT FLOW ACROSS 8 DIVISIONS
          </p>
          <span className="h-[1px] w-12 bg-[#C5A059]/40"></span>
        </div>

        {/* Core Box + 10 University Cards Row */}
        <div className="relative flex flex-col items-center">
          
          {/* Animated SVG Rays connecting Core to 10 University Cards */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 min-h-[50px]">
            <line x1="50%" y1="15%" x2="5%" y2="85%" stroke="#2563EB" strokeWidth="1.5" className="animated-dash-line" opacity="0.6" />
            <line x1="50%" y1="15%" x2="15%" y2="85%" stroke="#2563EB" strokeWidth="1.5" className="animated-dash-line" opacity="0.6" />
            <line x1="50%" y1="15%" x2="25%" y2="85%" stroke="#2563EB" strokeWidth="1.5" className="animated-dash-line" opacity="0.6" />
            <line x1="50%" y1="15%" x2="35%" y2="85%" stroke="#2563EB" strokeWidth="1.5" className="animated-dash-line" opacity="0.6" />
            <line x1="50%" y1="15%" x2="45%" y2="85%" stroke="#2563EB" strokeWidth="1.5" className="animated-dash-line" opacity="0.6" />
            <line x1="50%" y1="15%" x2="55%" y2="85%" stroke="#2563EB" strokeWidth="1.5" className="animated-dash-line" opacity="0.6" />
            <line x1="50%" y1="15%" x2="65%" y2="85%" stroke="#2563EB" strokeWidth="1.5" className="animated-dash-line" opacity="0.6" />
            <line x1="50%" y1="15%" x2="75%" y2="85%" stroke="#2563EB" strokeWidth="1.5" className="animated-dash-line" opacity="0.6" />
            <line x1="50%" y1="15%" x2="85%" y2="85%" stroke="#2563EB" strokeWidth="1.5" className="animated-dash-line" opacity="0.6" />
            <line x1="50%" y1="15%" x2="95%" y2="85%" stroke="#C5A059" strokeWidth="2" className="animated-dash-line" opacity="0.8" />
          </svg>

          {/* Core Box */}
          <div className="relative z-10 bg-[#2563EB] text-white px-8 py-2 rounded-xl shadow-lg font-serif font-black text-center text-xs md:text-sm border-2 border-blue-300 hover-float mb-2">
            UMS-ERP CORE
            <span className="block font-mono text-[8px] uppercase tracking-widest text-blue-100 font-bold">STANDARD 18 MODULES</span>
          </div>

          {/* 10 University Boxes with Division Badges */}
          <div className="relative z-10 w-full grid grid-cols-5 md:grid-cols-10 gap-2 text-center text-[10px] font-mono">
            {universities.map((u, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg border transition-all duration-300 hover-float flex flex-col justify-between ${
                  u.highlighted
                    ? 'bg-[#FFFDF7] border-2 border-[#C5A059] text-amber-900 font-bold shadow-md'
                    : 'bg-white border-slate-300 text-slate-800 shadow-xs'
                }`}
              >
                <span className="font-bold block">{u.name}</span>
                <span className="text-[8px] opacity-70 block uppercase font-sans mt-0.5">{u.division}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-slate-300 pt-3 flex justify-between font-mono text-[11px] text-slate-600">
        <span>10 · UMS-ERP DEPLOYMENT · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#2563EB]">COMMON CORE + CUSTOMISATION</span>
      </div>
    </div>
  );
}
