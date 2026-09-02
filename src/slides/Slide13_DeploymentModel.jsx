import React from 'react';

export default function Slide13_DeploymentModel() {
  const universities = [
    { name: 'University 01', division: 'DHAKA', tag: 'ANCHOR 01' },
    { name: 'University 02', division: 'CHITTAGONG', tag: 'ANCHOR 02' },
    { name: 'University 03', division: 'RAJSHAHI', tag: 'ANCHOR 03' },
    { name: 'University 04', division: 'KHULNA', tag: 'ANCHOR 04' },
    { name: 'University 05', division: 'SYLHET', tag: 'ANCHOR 05' },
    { name: 'University 06', division: 'BARISAL', tag: 'ANCHOR 06' },
    { name: 'University 07', division: 'RANGPUR', tag: 'ANCHOR 07' },
    { name: 'University 08', division: 'MYMENSINGH', tag: 'ANCHOR 08' },
    { name: 'University 09', division: 'DHAKA SOUTH', tag: 'ANCHOR 09' },
    { name: 'University 10', division: 'CUSTOM ANCHOR', tag: 'ANCHOR 10', highlighted: true },
  ];

  const coreFeatures = [
    'Standard 18-Module University Core',
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
      {/* Background Soft Ambient Glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-[2px] bg-[#2563EB]"></div>
          <span className="text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase font-sans">
            OUR UMS-ERP DEPLOYMENT MODEL
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Common Core + <span className="text-[#2563EB] font-serif italic font-black">Institutional</span> Customisation
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-xl max-w-4xl font-normal">
          We deliver one centralised, standard ERP core, augmented by institution-specific customisation for the first 10 anchor universities.
        </p>
      </div>

      {/* Top Strategy Cards Section (Balanced 2-Tier Grid) */}
      <div className="relative z-10 grid grid-cols-12 gap-5 my-auto items-stretch">
        {/* Card 1: Common Core (Royal Blue) */}
        <div className="col-span-12 lg:col-span-6 bg-[#2563EB] text-white p-6 rounded-2xl shadow-xl flex flex-col justify-between hover-float border border-blue-400">
          <div>
            <div className="flex items-start justify-between mb-3">
              <span className="font-serif text-5xl font-black leading-none text-white">
                1
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-blue-100 uppercase bg-blue-700/60 px-3 py-1 rounded-md">
                STANDARD CORE WE BUILD
              </span>
            </div>

            <h3 className="font-serif font-black text-2xl text-white mb-2 leading-tight">
              Common UMS-ERP Core
            </h3>
            <p className="text-xs text-blue-100 leading-relaxed font-light mb-3">
              A centralised standard solution for the 18-module university lifecycle — deployable, maintainable, and audited across all 8 divisions of Bangladesh.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-1.5 pt-3 border-t border-blue-400/60 font-sans text-xs">
              {coreFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-blue-200 font-bold">✓</span>
                  <span className="text-blue-50 font-semibold">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-blue-400/60 pt-2.5 mt-3 flex justify-between font-mono text-[10px] text-blue-200 uppercase font-bold">
            <span>• 18 STANDARD MODULES</span>
            <span>• 100% UNIFIED DATA SCHEMAS</span>
          </div>
        </div>

        {/* Card 2: Institution Specific (Dark Executive Navy) */}
        <div className="col-span-12 lg:col-span-6 bg-[#0B131F] text-slate-100 p-6 rounded-2xl shadow-xl flex flex-col justify-between hover-float border border-slate-800">
          <div>
            <div className="flex items-start justify-between mb-3">
              <span className="font-serif text-5xl font-black leading-none text-[#C5A059]">
                10
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#C5A059] uppercase bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                ANCHOR UNIVERSITIES
              </span>
            </div>

            <h3 className="font-serif font-black text-2xl text-white mb-2 leading-tight">
              Institution-Specific Layer
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
              Each anchor university receives required customisation for local academic workflows and UI branding while keeping the core architecture intact.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-1.5 pt-3 border-t border-slate-800 font-sans text-xs">
              {customFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-[#C5A059] font-bold">✓</span>
                  <span className="text-slate-200 font-semibold">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-2.5 mt-3 flex justify-between font-mono text-[10px] text-[#C5A059] uppercase font-bold">
            <span>• LOCAL UI/UX BRANDING</span>
            <span>• ZERO CORE FORK RISK</span>
          </div>
        </div>
      </div>

      {/* Spacious Lower Stage: Core Hub -> 10 Anchor Universities Flow Stage */}
      <div className="relative z-10 space-y-3 bg-white/80 border border-slate-300 p-5 rounded-2xl shadow-lg backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-widest">
            VISUAL DEPLOYMENT FLOW — 18-MODULE COMMON CORE TO 10 ANCHOR UNIVERSITIES
          </span>
          <span className="text-xs font-mono font-bold text-slate-500">NATIONWIDE ROLLOUT</span>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Animated SVG Rays connecting Core Hub down to 10 University Cards */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 min-h-[60px]">
            {universities.map((_, idx) => (
              <line
                key={idx}
                x1="50%"
                y1="15%"
                x2={`${(idx + 0.5) * 10}%`}
                y2="75%"
                stroke={idx === 9 ? '#C5A059' : '#2563EB'}
                strokeWidth={idx === 9 ? '2' : '1.5'}
                className="animated-dash-line"
                opacity="0.6"
              />
            ))}
          </svg>

          {/* Central UMS-ERP Core Hub Box */}
          <div className="relative z-10 bg-[#2563EB] text-white px-10 py-2.5 rounded-xl shadow-lg font-serif font-black text-center text-sm border-2 border-blue-300 hover-float mb-4 cursor-pointer">
            UMS-ERP CORE HUB
            <span className="block font-mono text-[9px] uppercase tracking-widest text-blue-100 font-bold">
              STANDARD 18-MODULE CORE
            </span>
          </div>

          {/* 10 Anchor University Cards (Spacious Layout) */}
          <div className="relative z-10 w-full grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2.5">
            {universities.map((u, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border flex flex-col justify-between transition-all duration-300 hover-float h-20 text-center ${
                  u.highlighted
                    ? 'bg-[#FFFDF7] border-2 border-[#C5A059] text-amber-900 shadow-md ring-2 ring-amber-400/20'
                    : 'bg-slate-50 border-slate-300 text-slate-900 shadow-xs hover:border-[#2563EB]'
                }`}
              >
                <span className="text-[9px] font-mono font-bold text-[#2563EB] uppercase block">
                  {u.tag}
                </span>
                <h5 className="font-serif font-bold text-xs leading-tight text-slate-900">{u.name}</h5>
                <span className="text-[8px] font-mono text-slate-500 uppercase font-bold block">
                  {u.division}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-slate-300 pt-2 flex justify-between font-mono text-xs font-bold text-slate-700">
        <span>10 · UMS-ERP DEPLOYMENT · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#2563EB]">COMMON CORE + CUSTOMISATION</span>
      </div>
    </div>
  );
}
