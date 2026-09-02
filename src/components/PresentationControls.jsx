import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Grid,
  FileText,
  Play,
  Pause,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export default function PresentationControls({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onSelectSlide,
  isFullscreen,
  onToggleFullscreen,
  onToggleOverview,
  onToggleNotes,
  showNotes,
  isPlaying,
  onToggleAutoplay,
  onToggleHelp
}) {
  return (
    <div className="bg-[#080D1A]/95 border-t border-slate-800/80 backdrop-blur-md px-6 py-3 flex items-center justify-between z-40 select-none shadow-2xl">
      {/* Left: Branding & Status */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="font-serif text-sm font-bold text-slate-100 tracking-wide">
            Higher Education <span className="text-emerald-400 font-display italic">Digital Suite</span>
          </span>
        </div>
        <div className="hidden sm:block text-slate-600">|</div>
        <span className="hidden sm:inline text-xs text-amber-400 font-mono tracking-wider font-semibold">
          SYSTECH × PAKIZA JV
        </span>
      </div>

      {/* Center: Slide Navigation Controls */}
      <div className="flex items-center gap-2 md:gap-3 bg-slate-900/90 border border-slate-700/60 rounded-full px-4 py-1.5 shadow-inner">
        {/* Previous Slide Button */}
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="p-1.5 text-slate-300 hover:text-white disabled:opacity-30 hover:bg-slate-800 rounded-full transition-all cursor-pointer"
          title="Previous Slide (Left Arrow)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Counter / Direct Selection */}
        <div className="flex items-center gap-1 font-mono text-xs text-slate-200 font-bold px-2">
          <span className="text-emerald-400 text-sm">
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <span className="text-slate-500">/</span>
          <span className="text-slate-400">
            {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        {/* Next Slide Button */}
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="p-1.5 text-slate-300 hover:text-white disabled:opacity-30 hover:bg-slate-800 rounded-full transition-all cursor-pointer"
          title="Next Slide (Right Arrow / Space)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="w-[1px] h-4 bg-slate-700 mx-1"></div>

        {/* Auto Play Toggle */}
        <button
          onClick={onToggleAutoplay}
          className={`p-1.5 rounded-full transition-all cursor-pointer ${
            isPlaying
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
          title={isPlaying ? 'Pause Autoplay' : 'Start Autoplay Slideshow'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      {/* Right: Action Buttons (Overview, Notes, Fullscreen, Help) */}
      <div className="flex items-center gap-2">
        {/* Overview Grid Button */}
        <button
          onClick={onToggleOverview}
          className="p-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/80 rounded-lg transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
          title="Slide Overview Grid (O)"
        >
          <Grid className="w-4 h-4" />
          <span className="hidden md:inline">Overview</span>
        </button>

        {/* Presenter Notes Toggle */}
        <button
          onClick={onToggleNotes}
          className={`p-2 rounded-lg transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer ${
            showNotes
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
              : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800/80'
          }`}
          title="Presenter Speaker Notes (N)"
        >
          <FileText className="w-4 h-4" />
          <span className="hidden md:inline">Notes</span>
        </button>

        {/* Fullscreen Trigger */}
        <button
          onClick={onToggleFullscreen}
          className="p-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/80 rounded-lg transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer bg-slate-900 border border-slate-700/60"
          title="Toggle Full Screen Presentation (F)"
        >
          {isFullscreen ? (
            <>
              <Minimize2 className="w-4 h-4 text-emerald-400" />
              <span className="hidden md:inline text-emerald-400 font-bold">Exit Fullscreen</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-4 h-4 text-slate-200" />
              <span className="hidden md:inline">Full Screen</span>
            </>
          )}
        </button>

        {/* Shortcuts Help Modal */}
        <button
          onClick={onToggleHelp}
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all cursor-pointer"
          title="Keyboard Shortcuts (?)"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
