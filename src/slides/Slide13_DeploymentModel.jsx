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
      <div className="relative z-10 font-sans">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-[3px] bg-[#2563EB]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#2563EB] uppercase font-sans">
            OUR UMS-ERP DEPLOYMENT MODEL
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Common Core + <span className="text-[#2563EB] font-serif italic font-black">Institutional</span> Customisation
        </h1>

        <p className="font-serif italic text-slate-700 text-lg md:text-2xl max-w-4xl font-medium">
          We deliver one centralised, standard ERP core, augmented by institution-specific customisation for the first 10 anchor universities.
        </p>
      </div>

      {/* Top Strategy Cards Section (Balanced 2-Tier Grid) */}
      <div className="relative z-10 grid grid-cols-12 gap-5 my-auto items-stretch font-sans">
        {/* Card 1: Common Core (Royal Blue) */}
        <div className="col-span-12 lg:col-span-6 bg-[#2563EB] text-white p-6 rounded-2xl shadow-xl flex flex-col justify-between hover-float border-2 border-blue-400 font-sans">
          <div>
            <div className="flex items-start justify-between mb-3">
              <span className="font-serif text-6xl font-black leading-none text-white">
                1
              </span>
              <span className="text-xs font-bold tracking-widest text-blue-100 uppercase bg-blue-700/80 px-3 py-1 rounded-md font-sans">
                STANDARD CORE WE BUILD
              </span>
            </div>

            <h3 className="font-serif font-black text-2xl md:text-3xl text-white mb-2 leading-tight">
              Common UMS-ERP Core
            </h3>
            <p className="text-sm md:text-base text-blue-100 leading-relaxed font-semibold mb-3 font-sans">
              A centralised standard solution for the 18-module university lifecycle — deployable, maintainable, and audited across all 8 divisions of Bangladesh.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-2 pt-3 border-t border-blue-400/60 font-sans text-xs md:text-sm font-bold">
              {coreFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-blue-200 font-bold">✓</span>
                  <span className="text-white font-bold">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-blue-400/60 pt-2.5 mt-3 flex justify-between text-xs text-blue-100 uppercase font-bold font-sans">
            <span>18 STANDARD MODULES</span>
            <span>100% UNIFIED DATA SCHEMAS</span>
          </div>
        </div>

        {/* Card 2: Institution Specific (Dark Executive Navy) */}
        <div className="col-span-12 lg:col-span-6 bg-[#0B131F] text-slate-100 p-6 rounded-2xl shadow-xl flex flex-col justify-between hover-float border-2 border-slate-800 font-sans">
          <div>
            <div className="flex items-start justify-between mb-3">
              <span className="font-serif text-6xl font-black leading-none text-[#C5A059]">
                10
              </span>
              <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase bg-slate-900 px-3 py-1 rounded-md border border-slate-800 font-sans">
                ANCHOR UNIVERSITIES
              </span>
            </div>

            <h3 className="font-serif font-black text-2xl md:text-3xl text-white mb-2 leading-tight">
              Institution-Specific Layer
            </h3>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed font-semibold mb-3 font-sans">
              Each anchor university receives required customisation for local academic workflows and UI branding while keeping the core architecture intact.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-2 pt-3 border-t border-slate-800 font-sans text-xs md:text-sm font-bold">
              {customFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-[#C5A059] font-bold">✓</span>
                  <span className="text-slate-100 font-bold">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-2.5 mt-3 flex justify-between text-xs text-[#C5A059] uppercase font-bold font-sans">
            <span>LOCAL UI/UX BRANDING</span>
            <span>ZERO CORE FORK RISK</span>
          </div>
        </div>
      </div>

      {/* Spacious Lower Stage: Core Hub -> 10 Anchor Universities Flow Stage */}
      <div className="relative z-10 space-y-3 bg-white/90 border-2 border-slate-300 p-5 rounded-2xl shadow-lg backdrop-blur-sm font-sans">
        <div className="flex items-center justify-between border-b-2 border-slate-200 pb-2 font-sans">
          <span className="text-xs md:text-sm font-bold text-[#2563EB] uppercase tracking-widest font-sans">
            VISUAL DEPLOYMENT FLOW — 18-MODULE COMMON CORE TO 10 ANCHOR UNIVERSITIES
          </span>
          <span className="text-xs font-bold text-slate-800 font-sans">NATIONWIDE ROLLOUT</span>
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
                strokeWidth={idx === 9 ? '2.5' : '2'}
                className="animated-dash-line"
                opacity="0.7"
              />
            ))}
          </svg>

          {/* Central UMS-ERP Core Hub Box */}
          <div className="relative z-10 bg-[#2563EB] text-white px-12 py-3 rounded-xl shadow-lg font-serif font-black text-center text-base md:text-lg border-2 border-blue-300 hover-float mb-4 cursor-pointer">
            UMS-ERP CORE HUB
            <span className="block font-bold text-xs uppercase tracking-widest text-blue-100 mt-0.5 font-sans">
              STANDARD 18-MODULE CORE
            </span>
          </div>

          {/* 10 Anchor University Cards (Spacious Layout) */}
          <div className="relative z-10 w-full grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2.5 font-sans">
            {universities.map((u, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border-2 flex flex-col justify-between transition-all duration-300 hover-float h-24 text-center ${
                  u.highlighted
                    ? 'bg-[#FFFDF7] border-[#C5A059] text-amber-950 font-black shadow-md ring-2 ring-amber-400/30'
                    : 'bg-white border-slate-300 text-slate-950 shadow-xs hover:border-[#2563EB]'
                }`}
              >
                <span className="text-xs font-bold text-[#2563EB] uppercase block font-sans">
                  {u.tag}
                </span>
                <h5 className="font-serif font-bold text-xs md:text-sm leading-tight text-slate-900">{u.name}</h5>
                <span className="text-xs font-bold text-slate-800 uppercase block font-sans">
                  {u.division}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t-2 border-slate-300 pt-2 flex justify-between text-xs md:text-sm font-bold text-slate-800 font-sans">
        <span>10 · UMS-ERP DEPLOYMENT · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#2563EB]">COMMON CORE + CUSTOMISATION</span>
      </div>
    </div>
  );
}
