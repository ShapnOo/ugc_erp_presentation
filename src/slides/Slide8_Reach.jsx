import React from 'react';

export default function Slide8_Reach() {
  const activities = [
    { num: '01', name: 'University Roadshows', desc: '50 roadshows (200 participants each) conducted across universities nationwide.', metric: '50 Roadshows' },
    { num: '02', name: 'Student Ambassadors', desc: 'Peer-to-peer promotion via appointed ambassadors (100 for 3 months each).', metric: '100 Ambassadors' },
    { num: '03', name: 'Industry Workshops', desc: '5 workshops at 5-star hotels with industry partners (100 representatives each).', metric: '5 Hotel Workshops' },
    { num: '04', name: 'Idea & Job Fairs', desc: '50 project demonstration fairs for industrial funding and career counseling.', metric: '50 Idea & Job Fairs' },
    { num: '05', name: 'Awareness Workshops', desc: '20 digital campaigns, TTO training webinars, and partner workshops.', metric: '20 Digital Campaigns' },
    { num: '06', name: 'Divisional Workshops', desc: '3 workshops at each of 8 divisions (100 participants per workshop).', metric: '24 Divisional Workshops' },
    { num: '07', name: 'System Admin Training', desc: 'On-the-job training and deployment for administrators at 8 division sites.', metric: '8 Divisional Sites' },
    { num: '08', name: 'National Launch', desc: 'High-visibility nationwide launch event across all 8 divisions of Bangladesh.', metric: 'National Launch' }
  ];

  return (
    <div className="relative w-full h-full bg-[#F0F7F4] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-[2px] bg-[#C5A059]"></div>
          <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            OUR OFFERING 04 · DEEP DIVE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Nation-wide Reach & <span className="text-[#C5A059] font-serif italic font-black">Ecosystem Initiative</span>
        </h1>

        <p className="font-serif italic text-slate-600 text-base md:text-xl max-w-4xl font-normal">
          An Ecosystem Initiative, Not Application Code — operating 8 engagement activities to drive early adoption across students, faculty, and industry.
        </p>
      </div>

      {/* 8 Activities Grid */}
      <div className="relative z-10 my-auto space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans">
            EIGHT NATIONWIDE OUTREACH & ENGAGEMENT ACTIVITIES
          </p>
          <span className="text-xs font-mono text-emerald-900 font-bold bg-emerald-100 px-2.5 py-1 rounded border border-emerald-300">
            ● Nationwide Outreach Campaign
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {activities.map((act) => (
            <div key={act.num} className="bg-white/95 border border-slate-300 p-4 rounded-2xl shadow-sm flex flex-col justify-between h-40 hover-float transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs md:text-sm font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded border border-amber-300">
                  {act.num}
                </span>
                <span className="text-xs font-mono font-bold text-[#05A872] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {act.metric}
                </span>
              </div>
              <div>
                <h4 className="font-serif font-black text-base text-slate-900 leading-tight mb-1.5">{act.name}</h4>
                <p className="text-xs md:text-sm text-slate-700 leading-snug font-sans font-medium">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Pillars Bottom Metric Bar */}
      <div className="relative z-10 grid grid-cols-3 gap-4 text-center font-sans">
        <div className="bg-[#05A872] text-white p-3.5 rounded-xl shadow-md border border-emerald-400 hover-float">
          <span className="text-sm font-black block font-mono">SOFTWARE BUILT</span>
          <span className="text-xs md:text-sm font-semibold block mt-0.5 text-emerald-50">Turnkey 5 platform digital higher-ed suite</span>
        </div>
        <div className="bg-[#C5A059] text-slate-950 p-3.5 rounded-xl shadow-md border border-amber-500 hover-float font-bold">
          <span className="text-sm font-black block font-mono text-slate-950">HARDWARE PROVISIONED</span>
          <span className="text-xs md:text-sm font-bold block mt-0.5 text-slate-900">Data center & regional server deployment</span>
        </div>
        <div className="bg-[#D32F2F] text-white p-3.5 rounded-xl shadow-md border border-red-400 hover-float">
          <span className="text-sm font-black block font-mono">OUTREACH RUN</span>
          <span className="text-xs md:text-sm font-semibold block mt-0.5 text-red-50">8-division roadshows, workshops & fairs</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-slate-300 pt-2 flex justify-between font-mono text-xs font-bold text-slate-700">
        <span>13 · NATIONWIDE REACH · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#C5A059]">ECOSYSTEM ADOPTION</span>
      </div>
    </div>
  );
}
