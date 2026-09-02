import React from 'react';
import { X, Grid, Play } from 'lucide-react';

export default function SlideOverviewModal({
  isOpen,
  slides,
  currentSlideIndex,
  onSelectSlide,
  onClose
}) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex flex-col p-6 md:p-10 animate-fade cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-full flex flex-col justify-between cursor-default"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-950 text-emerald-400 rounded-lg border border-emerald-800">
              <Grid className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Slide Deck Overview
              </h2>
              <p className="text-xs text-slate-400 font-sans">
                Select any slide thumbnail to jump directly to that slide.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid of Slide Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-auto py-8 overflow-y-auto max-h-[80vh]">
          {slides.map((slide, idx) => {
            const SlideComponent = slide.component;
            const isActive = currentSlideIndex === idx;

            return (
              <div
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`group relative rounded-xl border-2 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col bg-slate-900 ${
                  isActive
                    ? 'border-emerald-500 shadow-2xl ring-4 ring-emerald-500/20 scale-[1.02]'
                    : 'border-slate-800 hover:border-amber-500/60 hover:scale-[1.01]'
                }`}
              >
                {/* Slide Number Badge */}
                <div className="absolute top-3 left-3 z-30 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md rounded-md border border-slate-700 text-xs font-mono font-bold text-amber-400">
                  SLIDE {slide.number}
                </div>

                {/* Active Playing Badge */}
                {isActive && (
                  <div className="absolute top-3 right-3 z-30 px-2.5 py-1 bg-emerald-500 text-slate-950 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                    <Play className="w-3 h-3 fill-current" /> ACTIVE
                  </div>
                )}

                {/* Scaled Mini Slide Preview Canvas */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 transform scale-[0.35] origin-top-left w-[285%] h-[285%] pointer-events-none">
                    <SlideComponent />
                  </div>
                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all"></div>
                </div>

                {/* Card Footer Info */}
                <div className="p-4 bg-slate-900 border-t border-slate-800/80 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-1">
                      {slide.category}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-slate-100 group-hover:text-amber-400 transition-colors line-clamp-1">
                      {slide.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-sans line-clamp-1 mt-0.5 font-light">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
