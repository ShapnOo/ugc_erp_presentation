import React, { useState, useEffect } from 'react';
import { SLIDES_CONFIG } from '../config/slidesConfig';
import { presentationChannel, syncState } from '../utils/presentationSync';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Monitor,
  FileText,
  Clock,
  Layers
} from 'lucide-react';

export default function PresenterViewConsole({ initialSlideIndex = 0 }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(initialSlideIndex);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const totalSlides = SLIDES_CONFIG.length;
  const currentSlide = SLIDES_CONFIG[currentSlideIndex];
  const nextSlide = SLIDES_CONFIG[currentSlideIndex + 1];
  const CurrentSlideComponent = currentSlide.component;
  const NextSlideComponent = nextSlide ? nextSlide.component : null;

  // Sync state changes to audience window
  const changeSlide = (index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
      syncState({ currentSlideIndex: index, timestamp: Date.now() });
    }
  };

  // Listen to external broadcast messages
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && typeof event.data.currentSlideIndex === 'number') {
        setCurrentSlideIndex(event.data.currentSlideIndex);
      }
    };
    presentationChannel.addEventListener('message', handleMessage);
    return () => presentationChannel.removeEventListener('message', handleMessage);
  }, []);

  // Timer counter effect
  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => setTimerSeconds((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTimer = (totalSec) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs > 0 ? String(hrs).padStart(2, '0') + ':' : ''}${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Keyboard navigation inside presenter view
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        changeSlide(currentSlideIndex + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        changeSlide(currentSlideIndex - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  return (
    <div className="w-screen h-screen bg-[#070D18] text-slate-100 flex flex-col justify-between overflow-hidden select-none font-sans p-4 md:p-6">
      {/* Top Header Bar */}
      <header className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-lg">
            <Monitor className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-serif font-bold text-lg text-white">
              PowerPoint Presenter View — Dual Display Console
            </h1>
            <p className="text-xs text-slate-400">
              Audience window is live on second monitor / fullscreen window.
            </p>
          </div>
        </div>

        {/* Live Presentation Timer */}
        <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
          <Clock className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-xl font-bold text-white">
            {formatTimer(timerSeconds)}
          </span>
          <div className="flex items-center gap-1 border-l border-slate-700 pl-3">
            <button
              onClick={() => setIsTimerRunning((prev) => !prev)}
              className="p-1 text-slate-300 hover:text-white rounded cursor-pointer"
              title={isTimerRunning ? 'Pause Timer' : 'Resume Timer'}
            >
              {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setTimerSeconds(0)}
              className="p-1 text-slate-400 hover:text-white rounded cursor-pointer"
              title="Reset Timer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Grid (Current Slide + Next Slide & Speaker Notes) */}
      <div className="flex-1 grid grid-cols-12 gap-6 my-4 overflow-hidden">
        {/* Left Column: Active Slide Preview (60%) */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              CURRENT SLIDE ({currentSlideIndex + 1} / {totalSlides})
            </span>
            <span className="text-xs font-serif font-bold text-slate-300">
              {currentSlide.title}
            </span>
          </div>

          <div className="flex-1 slide-canvas rounded-xl overflow-hidden shadow-2xl border-2 border-emerald-500/50 bg-slate-950">
            <CurrentSlideComponent />
          </div>
        </div>

        {/* Right Column: Next Slide Preview & Presenter Notes (40%) */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-4">
          {/* Next Slide Preview */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" /> UP NEXT
              </span>
              <span className="text-xs text-slate-400 truncate max-w-[200px]">
                {nextSlide ? nextSlide.title : 'End of Presentation'}
              </span>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-slate-800 bg-slate-950 relative">
              {NextSlideComponent ? (
                <div className="absolute inset-0 transform scale-[0.5] origin-top-left w-[200%] h-[200%] pointer-events-none opacity-80">
                  <NextSlideComponent />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500 font-serif italic text-sm">
                  End of slide deck
                </div>
              )}
            </div>
          </div>

          {/* Speaker Notes Box */}
          <div className="h-44 bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <FileText className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                PRESENTER NOTES
              </span>
            </div>
            <div className="flex-1 overflow-y-auto mt-2 text-xs text-slate-300 leading-relaxed font-sans font-light whitespace-pre-line">
              {currentSlide.notes || 'No notes for this slide.'}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Slide Sorter Bar */}
      <footer className="pt-3 border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => changeSlide(currentSlideIndex - 1)}
            disabled={currentSlideIndex === 0}
            className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 hover:text-white disabled:opacity-30 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-mono text-sm font-bold text-emerald-400">
            Slide {currentSlideIndex + 1} of {totalSlides}
          </span>
          <button
            onClick={() => changeSlide(currentSlideIndex + 1)}
            disabled={currentSlideIndex === totalSlides - 1}
            className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 hover:text-white disabled:opacity-30 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto">
          {SLIDES_CONFIG.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => changeSlide(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                currentSlideIndex === idx
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {slide.number}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
