import React from 'react';

export default function Slide24_PartnerProfiles() {
  return (
    <div className="relative w-full h-full bg-[#F4F0E8] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Soft Glow Effects */}
      <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      {/* TOP HEADER */}
      <div className="relative z-10 font-sans">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[3px] bg-[#05A872]"></div>
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#05A872] uppercase font-sans">
              THE CONSORTIUM PARTNERS
            </span>
          </div>
          <span className="text-xs md:text-sm font-bold text-slate-950 bg-[#C5A059]/30 border border-[#C5A059] px-4 py-1.5 rounded-md shadow-sm font-sans">
            SYSTECH DIGITAL × PAKIZA SOFTWARE JOINT VENTURE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Two Enterprise Powerhouses. <span className="text-[#05A872] font-serif italic font-black">One Shared Vision.</span>
        </h1>

        <p className="font-serif italic text-slate-700 text-lg md:text-2xl max-w-5xl font-semibold">
          Combining over two decades of software innovation, national-scale public sector deployments, and industrial-grade software engineering.
        </p>
      </div>

      {/* MAIN 2-COLUMN PARTNER PROFILES (Systech Left, Pakiza Right) */}
      <div className="relative z-10 grid grid-cols-12 gap-6 my-auto items-stretch font-sans">
        
        {/* LEFT COLUMN: Systech Digital Limited */}
        <div className="col-span-12 lg:col-span-6 bg-white border-l-4 border-[#05A872] border-t-2 border-r-2 border-b-2 border-slate-300 p-6 md:p-8 rounded-r-2xl shadow-xl flex flex-col justify-between hover-float transition-all duration-300">
          <div className="space-y-3.5">
            {/* Header Badge & Company Title */}
            <div className="flex items-center justify-between">
              <span className="text-xs md:text-sm font-bold text-[#05A872] bg-emerald-100 px-3 py-1 rounded-md border border-emerald-300 uppercase tracking-wider font-sans">
                LEAD CONSORTIUM PARTNER
              </span>
              <span className="text-xs font-bold text-slate-700 font-sans">ESTD: JAN 2001 · DUNS: 559659004 · VRN: 93596</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Systech Digital Limited
            </h2>

            <p className="text-slate-800 text-base md:text-lg leading-relaxed font-bold font-sans">
              Headquartered in Bangladesh with offices in UK, Japan, Canada & EU, Systech Digital Limited is a CMMI-SVC Level 3 pioneer ICT provider serving 3,000+ clients across 13 countries over 25 glorious years.
            </p>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2.5 border-t-2 border-slate-200 text-center font-sans">
              <div className="bg-slate-50 border border-slate-300 p-2.5 rounded-xl">
                <span className="font-serif text-3xl md:text-4xl font-black text-[#05A872] block leading-none">25</span>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mt-1 font-sans">Glorious Years</span>
              </div>
              <div className="bg-slate-50 border border-slate-300 p-2.5 rounded-xl">
                <span className="font-serif text-3xl md:text-4xl font-black text-slate-900 block leading-none">3,000+</span>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mt-1 font-sans">Clients (13 Countries)</span>
              </div>
              <div className="bg-slate-50 border border-slate-300 p-2.5 rounded-xl">
                <span className="font-serif text-3xl md:text-4xl font-black text-[#C5A059] block leading-none">CMMI 3</span>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mt-1 font-sans">CMMI-SVC Level 3</span>
              </div>
            </div>

            {/* Official Certification & Affiliation Badges Row */}
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-bold font-sans pt-1">
              <div className="bg-emerald-50 border border-emerald-300 text-[#05A872] p-1.5 rounded-lg">
                CMMISVC/3
              </div>
              <div className="bg-blue-50 border border-blue-300 text-blue-900 p-1.5 rounded-lg">
                ISO 27001:2013
              </div>
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-1.5 rounded-lg">
                ISO 9001:2015
              </div>
              <div className="bg-amber-50 border border-amber-300 text-amber-950 p-1.5 rounded-lg">
                BASIS & BCS
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="space-y-1.5 text-xs md:text-sm font-bold text-slate-900 font-sans">
              <div className="flex items-center gap-2">
                <span className="text-[#05A872] font-black">✓</span>
                <span>CMMI-SVC Level 3 & ISO 27001:2013 / 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#05A872] font-black">✓</span>
                <span>Served 3,000+ Clients in UK, Japan, USA, Netherlands, Canada</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#05A872] font-black">✓</span>
                <span>Member of BASIS & Bangladesh Computer Samity (BCS)</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Pakiza Software Limited */}
        <div className="col-span-12 lg:col-span-6 bg-white border-l-4 border-[#2563EB] border-t-2 border-r-2 border-b-2 border-slate-300 p-6 md:p-8 rounded-r-2xl shadow-xl flex flex-col justify-between hover-float transition-all duration-300">
          <div className="space-y-3.5">
            {/* Header Badge & Company Title */}
            <div className="flex items-center justify-between">
              <span className="text-xs md:text-sm font-bold text-[#2563EB] bg-blue-100 px-3 py-1 rounded-md border border-blue-300 uppercase tracking-wider font-sans">
                JOINT VENTURE PARTNER
              </span>
              <span className="text-xs md:text-sm font-bold text-slate-700 font-sans">PAKIZA GROUP (ESTD. 1982)</span>
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                Pakiza Software Limited
              </h2>
              <span className="text-xs md:text-sm font-bold text-[#2563EB] block font-sans mt-0.5">
                Creators of the Cripton Pro ERP Suite
              </span>
            </div>

            <p className="text-slate-800 text-base md:text-lg leading-relaxed font-bold font-sans">
              Pakiza Software Ltd. is an enterprise software provider in Bangladesh under Pakiza Group (40+ years industrial legacy). Specializing in industrial automation, ERPs, and HRIS, it develops the flagship Cripton Pro ERP software suite.
            </p>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2.5 border-t-2 border-slate-200 text-center font-sans">
              <div className="bg-slate-50 border border-slate-300 p-2.5 rounded-xl">
                <span className="font-serif text-3xl md:text-4xl font-black text-[#2563EB] block leading-none">1982</span>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mt-1 font-sans">Pakiza Group Origin</span>
              </div>
              <div className="bg-slate-50 border border-slate-300 p-2.5 rounded-xl">
                <span className="font-serif text-3xl md:text-4xl font-black text-slate-900 block leading-none">Cripton</span>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mt-1 font-sans">Flagship ERP Suite</span>
              </div>
              <div className="bg-slate-50 border border-slate-300 p-2.5 rounded-xl">
                <span className="font-serif text-3xl md:text-4xl font-black text-[#05A872] block leading-none">43+</span>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mt-1 font-sans">Enterprise Clients</span>
              </div>
            </div>

            {/* Official Certification & Affiliation Badges Row */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold font-sans pt-1">
              <div className="bg-blue-50 border border-blue-300 text-[#2563EB] p-1.5 rounded-lg">
                Cripton Pro ERP
              </div>
              <div className="bg-emerald-50 border border-emerald-300 text-[#05A872] p-1.5 rounded-lg">
                Cripton HRIS
              </div>
              <div className="bg-blue-50 border border-blue-300 text-blue-900 p-1.5 rounded-lg">
                Pakiza Group Arm
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="space-y-1.5 text-xs md:text-sm font-bold text-slate-900 font-sans">
              <div className="flex items-center gap-2">
                <span className="text-[#2563EB] font-black">✓</span>
                <span>Developers of Cripton Pro ERP, Cripton HRIS & Cripton Planners</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2563EB] font-black">✓</span>
                <span>Enterprise Resource Planning, Supply Chain & Financial Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2563EB] font-black">✓</span>
                <span>Dedicated R&D & Implementation Force in Dhanmondi, Dhaka</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM EXECUTIVE COMMITMENT BANNER */}
      <div className="relative z-10 bg-[#0B131F] text-slate-100 p-4 px-6 rounded-xl font-sans text-sm md:text-base flex justify-between items-center border-2 border-slate-800 shadow-md">
        <span className="text-[#C5A059] font-bold text-xs md:text-sm font-sans uppercase tracking-wider">JV STRENGTH:</span>
        <span className="font-serif italic text-white text-base md:text-lg font-bold">
          "Uniting Systech's 25 years of global ICT leadership with Pakiza Group's 42+ years of enterprise strength."
        </span>
        <span className="text-[#05A872] font-bold text-xs md:text-sm font-sans uppercase tracking-wider">ONE CONSORTIUM TEAM</span>
      </div>

      {/* FOOTER */}
      <div className="relative z-10 border-t-2 border-slate-300 pt-2 flex justify-between text-xs md:text-sm font-bold text-slate-800 font-sans">
        <span>23 · CONSORTIUM PARTNERS · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#05A872]">CONSORTIUM PROFILES</span>
      </div>
    </div>
  );
}
