import React from 'react';
import { X, Keyboard } from 'lucide-react';

export default function KeyboardShortcutsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '→ / Space / PageDown', desc: 'Next slide' },
    { key: '← / PageUp', desc: 'Previous slide' },
    { key: 'F / F11', desc: 'Toggle Full Screen Presentation mode' },
    { key: 'O', desc: 'Toggle Slide Overview Grid' },
    { key: 'N', desc: 'Toggle Presenter Speaker Notes' },
    { key: 'Home / End', desc: 'Jump to First / Last slide' },
    { key: '?', desc: 'Toggle Shortcuts Help Modal' },
  ];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0D1829] border border-slate-700/80 rounded-2xl max-w-md w-full p-6 shadow-2xl text-slate-100 relative cursor-default"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Keyboard className="w-5 h-5 text-emerald-400" />
            <h3 className="font-serif font-bold text-lg text-white">
              Keyboard Navigation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shortcuts List */}
        <div className="space-y-3 my-4">
          {shortcuts.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2.5 bg-slate-900/80 border border-slate-800/80 rounded-xl"
            >
              <span className="text-xs text-slate-300 font-sans">{item.desc}</span>
              <kbd className="px-2 py-1 bg-slate-950 text-emerald-400 border border-emerald-900/60 rounded font-mono text-[11px] font-bold shadow-inner">
                {item.key}
              </kbd>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 text-center">
          <p className="text-[11px] text-slate-400 font-mono">
            Press <kbd className="text-amber-400 font-bold">Esc</kbd> or click anywhere outside to close
          </p>
        </div>
      </div>
    </div>
  );
}
