import React from 'react';
import { X, FileText, MessageSquareQuote } from 'lucide-react';

export default function SpeakerNotesDrawer({ slide, onClose }) {
  if (!slide) return null;

  return (
    <div className="fixed bottom-16 right-6 w-96 max-w-[calc(100vw-3rem)] z-40 bg-[#0C1526]/95 border border-slate-700/80 rounded-2xl shadow-2xl backdrop-blur-xl p-5 text-slate-100 animate-slide-up">
      {/* Drawer Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-amber-400" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
            PRESENTER NOTES — SLIDE {slide.number}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 text-slate-400 hover:text-white rounded-md transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Slide Title */}
      <div className="mt-3 mb-2">
        <h4 className="font-serif font-bold text-base text-white">
          {slide.title}
        </h4>
        <p className="text-xs text-emerald-400 font-sans">{slide.category}</p>
      </div>

      {/* Notes Text */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 mt-3 max-h-48 overflow-y-auto">
        <div className="flex items-start gap-2 text-slate-300 text-xs leading-relaxed whitespace-pre-line font-sans font-light">
          <MessageSquareQuote className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <span>{slide.notes || 'No presenter notes provided for this slide.'}</span>
        </div>
      </div>
    </div>
  );
}
