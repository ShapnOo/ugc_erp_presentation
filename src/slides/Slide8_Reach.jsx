import React from 'react';

export default function Slide8_Reach() {
  const activities = [
    { num: '01', name: 'University Roadshows', desc: '50 campus roadshows (200 participants each) conducted across universities nationwide.', metric: '50 Roadshows' },
    { num: '02', name: 'Student Ambassadors', desc: 'Peer-to-peer promotion via 100 appointed student ambassadors (over 3 months each).', metric: '100 Ambassadors' },
    { num: '03', name: '5-Star Hotel Workshops', desc: '5 high-level workshops at 5-star hotels engaging 100 industry leaders per workshop.', metric: '5 Hotel Workshops' },
    { num: '04', name: 'Idea & Job Fairs', desc: '50 project demonstration fairs for industrial funding and student career counseling.', metric: '50 Idea & Job Fairs' },
    { num: '05', name: 'TTO Awareness Campaigns', desc: '20 digital webinars, TTO training sessions, and industry partner webinars.', metric: '20 Digital Campaigns' },
    { num: '06', name: 'Divisional Workshops', desc: '24 workshops across 8 divisions (3 per division, 100 participants + 5 resource persons).', metric: '24 Divisional Workshops' },
    { num: '07', name: 'UMS & UGC Workshops', desc: '8-division requirement workshops engaging 800 total faculty members and administrators.', metric: '800 Faculty Trained' },
    { num: '08', name: 'Helpdesk SLA & Launch', desc: 'Dedicated support desk resolving 95% of queries within 24 hours & national launch.', metric: '95% 24h Query SLA' }
  ];

  return (
    <div className="relative w-full h-full bg-[#F0F7F4] text-slate-900 p-8 md:p-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="relative z-10 font-sans">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-[3px] bg-[#C5A059]"></div>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            OUR OFFERING 04 · DEEP DIVE
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight mb-2">
          Nation-wide Reach & <span className="text-[#C5A059] font-serif italic font-black">Ecosystem Initiative</span>
        </h1>

        <p className="font-serif italic text-slate-700 text-lg md:text-2xl max-w-4xl font-medium">
          An Ecosystem Initiative, Not Application Code — operating 8 engagement activities to drive early adoption across students, faculty, and industry.
        </p>
      </div>

      {/* 8 Activities Grid */}
      <div className="relative z-10 my-auto space-y-3 font-sans">
        <div className="flex items-center justify-between font-sans">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase font-sans">
            EIGHT NATIONWIDE OUTREACH & ENGAGEMENT ACTIVITIES
          </p>
          <span className="text-xs font-bold text-emerald-950 bg-emerald-100 px-3 py-1 rounded-md border border-emerald-300 font-sans">
            BDT 14.74 CR OUTREACH CAMPAIGN
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-sans">
          {activities.map((act) => (
            <div key={act.num} className="bg-white border-2 border-slate-300 p-4.5 rounded-2xl shadow-sm flex flex-col justify-between h-44 hover-float transition-all duration-300 font-sans">
              <div className="flex items-center justify-between mb-2 font-sans">
                <span className="text-xs md:text-sm font-black text-amber-950 bg-amber-200 px-2.5 py-1 rounded-md border border-amber-400 font-sans">
                  {act.num}
                </span>
                <span className="text-xs font-bold text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300 font-sans">
                  {act.metric}
                </span>
              </div>
              <div className="font-sans">
                <h4 className="font-serif font-black text-base md:text-lg text-slate-900 leading-tight mb-1.5">{act.name}</h4>
                <p className="text-xs md:text-sm text-slate-800 leading-snug font-sans font-bold">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Pillars Bottom Metric Bar */}
      <div className="relative z-10 grid grid-cols-3 gap-4 text-center font-sans">
        <div className="bg-[#05A872] text-white p-4 rounded-xl shadow-md border-2 border-emerald-400 hover-float font-sans">
          <span className="text-base md:text-lg font-black block font-sans">SOFTWARE BUILT</span>
          <span className="text-xs md:text-sm font-bold block mt-0.5 text-emerald-50 font-sans">Turnkey 5 platform digital higher-ed suite</span>
        </div>
        <div className="bg-[#C5A059] text-slate-950 p-4 rounded-xl shadow-md border-2 border-amber-500 hover-float font-bold font-sans">
          <span className="text-base md:text-lg font-black block text-slate-950 font-sans">HARDWARE PROVISIONED</span>
          <span className="text-xs md:text-sm font-black block mt-0.5 text-slate-950 font-sans">Data center & regional server deployment</span>
        </div>
        <div className="bg-[#D32F2F] text-white p-4 rounded-xl shadow-md border-2 border-red-400 hover-float font-sans">
          <span className="text-base md:text-lg font-black block font-sans">OUTREACH RUN</span>
          <span className="text-xs md:text-sm font-bold block mt-0.5 text-red-50 font-sans">8-division roadshows, workshops & fairs</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t-2 border-slate-300 pt-2 flex justify-between text-xs md:text-sm font-bold text-slate-800 font-sans">
        <span>13 · NATIONWIDE REACH · SYSTECH × PAKIZA LIMITED</span>
        <span className="text-[#C5A059]">ECOSYSTEM ADOPTION</span>
      </div>
    </div>
  );
}
