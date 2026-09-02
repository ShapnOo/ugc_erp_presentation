import React from 'react';

export default function Slide8_Reach() {
  const activities = [
    { name: 'University Roadshows', desc: '50 roadshows conducted across universities nationwide.' },
    { name: 'Student Ambassador Program', desc: 'Peer-to-peer promotion via appointed ambassadors.' },
    { name: 'Industry Workshops', desc: 'Workshops with key industrial partners.' },
    { name: 'Idea & Job Fairs', desc: 'Project demonstration & career fairs.' },
    { name: 'Awareness Workshops', desc: 'TTO webinars & digital campaign.' },
    { name: 'Divisional Workshops', desc: 'Workshops across all 8 divisions.' },
    { name: 'System Admin Training', desc: 'On-the-job training for administrators.' },
    { name: 'National Launch', desc: 'High-visibility launch event.' }
  ];

  return (
    <div className="relative w-full h-full bg-[#0B131F] text-slate-100 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#C5A059]"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            OUR OFFERING 04 · DEEP DIVE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight mb-2">
          Nation-wide Reach & <span className="text-[#C5A059] font-serif italic font-black">Ecosystem Initiative</span>
        </h1>

        <p className="font-serif italic text-slate-300 text-base md:text-lg max-w-4xl font-normal">
          An Ecosystem Initiative, Not Application Code — operating 8 engagement activities to drive early adoption across students, faculty, and industry.
        </p>
      </div>

      {/* 8 Activities Grid */}
      <div className="my-auto">
        <p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans mb-3">
          EIGHT NATIONWIDE OUTREACH & ENGAGEMENT ACTIVITIES
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {activities.map((act, idx) => (
            <div key={idx} className="bg-[#121B29] border border-slate-800 p-4 rounded-xl shadow-lg flex flex-col justify-between h-28">
              <span className="font-mono text-xs font-bold text-[#C5A059]">
                0{idx + 1}
              </span>
              <div>
                <h4 className="font-serif font-bold text-sm text-white leading-tight mb-1">{act.name}</h4>
                <p className="text-[10px] text-slate-400 font-light">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Pillars Bottom Bar */}
      <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono">
        <div className="bg-[#071924] border border-[#05A872] p-2.5 rounded-lg text-[#05A872]">
          SOFTWARE BUILT
        </div>
        <div className="bg-[#1C160B] border border-[#C5A059] p-2.5 rounded-lg text-[#C5A059]">
          HARDWARE PROVISIONED
        </div>
        <div className="bg-[#1F0D14] border border-red-500 p-2.5 rounded-lg text-red-400">
          OUTREACH RUN
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex justify-between font-mono text-[11px] text-slate-400">
        <span>13 · NATIONWIDE REACH · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#C5A059]">ECOSYSTEM ADOPTION</span>
      </div>
    </div>
  );
}
