import React, { useState, useEffect } from 'react';
import { SLIDES_CONFIG } from '../config/slidesConfig';
import { presentationChannel, syncState, getStoredState } from '../utils/presentationSync';
import PresenterViewConsole from './PresenterViewConsole';
import AmbientBackground from './AmbientBackground';
import {
  Play,
  Grid,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Tv,
  Printer,
  Search,
  Share2,
  Check,
  Lock,
  Maximize,
  Minimize
} from 'lucide-react';

import SlideOverviewModal from './SlideOverviewModal';
import KeyboardShortcutsModal from './KeyboardShortcutsModal';

export default function PresentationLayout() {
  // Check URL query parameters for presenter mode window or view-only mode
  const urlParams = new URLSearchParams(window.location.search);
  const isPresenterWindow = urlParams.get('mode') === 'presenter';
  const isViewOnlyWindow = urlParams.get('mode') === 'view' || urlParams.get('mode') === 'present';

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPresentationMode, setIsPresentationMode] = useState(isViewOnlyWindow);
  const [showOverview, setShowOverview] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [direction, setDirection] = useState('right');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [isFullscreenActive, setIsFullscreenActive] = useState(!!document.fullscreenElement);

  const totalSlides = SLIDES_CONFIG.length;
  const currentSlide = SLIDES_CONFIG[currentSlideIndex];
  const CurrentSlideComponent = currentSlide.component;

  // Categories list for filtering
  const categories = ['ALL', 'GMS', 'NEXUS', 'UGC ERP', 'UMS-ERP', 'AMS', 'ARCHITECTURE', 'DELIVERY'];

  // Filtered slides logic
  const filteredSlides = SLIDES_CONFIG.filter((s) => {
    const matchesCategory =
      selectedCategory === 'ALL' ||
      s.category.toUpperCase().includes(selectedCategory) ||
      s.title.toUpperCase().includes(selectedCategory);
    const matchesSearch =
      searchQuery === '' ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Listen to BroadcastChannel for multi-window dual monitor synchronization
  useEffect(() => {
    const handleSync = (event) => {
      if (event.data && typeof event.data.currentSlideIndex === 'number') {
        setCurrentSlideIndex(event.data.currentSlideIndex);
      }
    };

    presentationChannel.addEventListener('message', handleSync);
    
    // Check initial stored state (Audience View mode ALWAYS starts at Slide 01)
    if (!isViewOnlyWindow) {
      const stored = getStoredState();
      if (stored && typeof stored.currentSlideIndex === 'number') {
        setCurrentSlideIndex(stored.currentSlideIndex);
      }
    } else {
      setCurrentSlideIndex(0);
    }

    return () => presentationChannel.removeEventListener('message', handleSync);
  }, [isViewOnlyWindow]);

  // Slide navigation handlers
  const goToNextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      const nextIdx = currentSlideIndex + 1;
      setDirection('right');
      setCurrentSlideIndex(nextIdx);
      syncState({ currentSlideIndex: nextIdx, timestamp: Date.now() });
    }
  };

  const goToPrevSlide = () => {
    if (currentSlideIndex > 0) {
      const prevIdx = currentSlideIndex - 1;
      setDirection('left');
      setCurrentSlideIndex(prevIdx);
      syncState({ currentSlideIndex: prevIdx, timestamp: Date.now() });
    }
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < totalSlides) {
      setDirection(index > currentSlideIndex ? 'right' : 'left');
      setCurrentSlideIndex(index);
      syncState({ currentSlideIndex: index, timestamp: Date.now() });
    }
  };

  // Toggle full screen presentation mode
  const startPresentation = () => {
    setIsPresentationMode(true);
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  };

  const exitPresentation = () => {
    if (isViewOnlyWindow) return; // Cannot exit studio if in view-only share link mode
    setIsPresentationMode(false);
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Toggle fullscreen for Audience View
  const toggleAudienceFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Dual Monitor Presenter View Trigger
  const openPresenterView = () => {
    const presenterWin = window.open(
      `${window.location.origin}${window.location.pathname}?mode=presenter`,
      'PowerPoint_Presenter_Console',
      'width=1280,height=800,menubar=no,toolbar=no,location=no'
    );

    startPresentation();

    if (presenterWin) {
      presenterWin.focus();
    }
  };

  // Share Audience View Link Generator
  const copyViewLink = () => {
    const viewUrl = `${window.location.origin}${window.location.pathname}?mode=view`;
    navigator.clipboard.writeText(viewUrl).then(() => {
      setShowCopyToast(true);
      setTimeout(() => setShowCopyToast(false), 4000);
    }).catch(() => {
      // Fallback if clipboard API restricted
      alert(`Shareable Audience View Link:\n${viewUrl}`);
    });
  };

  // Print / PDF Export Handler
  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const active = !!document.fullscreenElement;
      setIsFullscreenActive(active);
      if (!active && isPresentationMode && !isViewOnlyWindow) {
        setIsPresentationMode(false);
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [isPresentationMode, isViewOnlyWindow]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'Space':
        case 'PageDown':
          e.preventDefault();
          goToNextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          goToPrevSlide();
          break;
        case 'f':
        case 'F':
        case 'F5':
          if (isViewOnlyWindow) {
            e.preventDefault();
            toggleAudienceFullscreen();
          } else {
            e.preventDefault();
            if (isPresentationMode) {
              exitPresentation();
            } else {
              startPresentation();
            }
          }
          break;
        case 'o':
        case 'O':
          if (!isViewOnlyWindow) {
            e.preventDefault();
            setShowOverview((prev) => !prev);
          }
          break;
        case '?':
          if (!isViewOnlyWindow) {
            e.preventDefault();
            setShowHelp((prev) => !prev);
          }
          break;
        case 'Escape':
          if (showOverview || showHelp) {
            setShowOverview(false);
            setShowHelp(false);
          } else if (isPresentationMode && !isViewOnlyWindow) {
            exitPresentation();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, isPresentationMode, showOverview, showHelp, isViewOnlyWindow]);

  // Render Presenter View window if query param ?mode=presenter
  if (isPresenterWindow) {
    return <PresenterViewConsole initialSlideIndex={currentSlideIndex} />;
  }

  // =========================================================================
  // VIEW-ONLY AUDIENCE SHARE LINK MODE (?mode=view)
  // Strictly presentation mode only — no studio header, no editor tools, no sidebar!
  // =========================================================================
  if (isViewOnlyWindow) {
    return (
      <div className="relative w-screen h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden select-none cursor-default font-sans">
        {/* Top Progress Bar (Hides in Fullscreen) */}
        <div className={`w-full bg-slate-900/40 h-1 z-50 transition-opacity duration-300 ${isFullscreenActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div
            className="bg-gradient-to-r from-[#05A872] via-[#C5A059] to-[#2563EB] h-full transition-all duration-300"
            style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
          ></div>
        </div>

        {/* View-Only Protected Badge Header (Hides in Fullscreen) */}
        <div className={`absolute top-3 right-5 z-50 flex items-center gap-2 bg-slate-900/90 border border-slate-800/90 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg text-xs font-mono transition-opacity duration-300 ${isFullscreenActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="text-slate-300 font-medium">AUDIENCE VIEW</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#05A872] animate-pulse"></span>
        </div>

        {/* Slide Canvas Stage */}
        <div className="flex-1 w-full h-full flex items-center justify-center p-0 relative">
          <div className="w-full h-full max-w-[1920px] max-h-[1080px] slide-canvas rounded-none overflow-hidden bg-slate-950">
            <div
              key={currentSlide.id}
              className={`w-full h-full ${
                direction === 'right' ? 'slide-enter-right' : 'slide-enter-left'
              }`}
            >
              <AmbientBackground>
                <CurrentSlideComponent />
              </AmbientBackground>
            </div>
          </div>
        </div>

        {/* Bottom Hover Trigger Container — Bar is 100% INVISIBLE in Fullscreen until mouse hovers bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 z-50 flex items-center justify-center group/controls pointer-events-auto">
          <div
            className={`bg-slate-900/95 border border-slate-800 rounded-full px-4 py-2 flex items-center gap-4 shadow-2xl backdrop-blur-md transition-all duration-300 ${
              isFullscreenActive
                ? 'opacity-0 group-hover/controls:opacity-100 pointer-events-none group-hover/controls:pointer-events-auto translate-y-3 group-hover/controls:translate-y-0'
                : 'opacity-100 translate-y-0'
            }`}
          >
            <button
              onClick={goToPrevSlide}
              disabled={currentSlideIndex === 0}
              className="p-1.5 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-slate-200 transition-all cursor-pointer"
              title="Previous Slide (Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="font-mono text-xs text-slate-300">
              <strong className="text-[#05A872]">{currentSlideIndex + 1}</strong> / {totalSlides}
            </span>

            <button
              onClick={goToNextSlide}
              disabled={currentSlideIndex === totalSlides - 1}
              className="p-1.5 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-slate-200 transition-all cursor-pointer"
              title="Next Slide (Right Arrow)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="w-[1px] h-4 bg-slate-800"></div>

            {/* Audience Full Screen Toggle Button */}
            <button
              onClick={toggleAudienceFullscreen}
              className="p-1.5 rounded-full hover:bg-slate-800 text-emerald-400 border border-emerald-800/80 transition-all cursor-pointer flex items-center gap-1.5 px-3 text-xs font-mono font-bold"
              title="Toggle Full Screen Presentation Mode (F / F11)"
            >
              {isFullscreenActive ? (
                <>
                  <Minimize className="w-4 h-4" />
                  <span className="hidden sm:inline">Exit Fullscreen</span>
                </>
              ) : (
                <>
                  <Maximize className="w-4 h-4" />
                  <span className="hidden sm:inline">Full Screen</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-[#070C16] text-slate-100 flex flex-col overflow-hidden select-none font-sans relative">
      {/* Toast Notification when Share View Link is copied */}
      {showCopyToast && (
        <div className="fixed top-16 right-6 z-50 bg-[#05A872] text-slate-950 font-bold px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in border border-emerald-300">
          <Check className="w-5 h-5 stroke-[3]" />
          <div className="text-xs">
            <p className="font-extrabold text-sm leading-tight">Audience View Link Copied!</p>
            <p className="font-mono text-[10px] opacity-90">Anyone with this link sees full-screen present mode only.</p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. FULL PRESENTATION MODE VIEWPORT (Zero Overlay - Pure Audience View) */}
      {/* ========================================================================= */}
      {isPresentationMode ? (
        <div className="relative w-full h-full bg-slate-950 flex flex-col justify-between overflow-hidden cursor-default">
          {/* Top Subtle Progress Indicator */}
          <div className="w-full bg-slate-900/40 h-0.5 z-50">
            <div
              className="bg-gradient-to-r from-[#05A872] to-[#C5A059] h-full transition-all duration-300"
              style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
            ></div>
          </div>

          {/* Center Edge-to-Edge Slide Viewport */}
          <div className="flex-1 w-full h-full flex items-center justify-center p-0 relative">
            <div className="w-full h-full max-w-[1920px] max-h-[1080px] slide-canvas rounded-none overflow-hidden bg-slate-950">
              <div
                key={currentSlide.id}
                className={`w-full h-full ${
                  direction === 'right' ? 'slide-enter-right' : 'slide-enter-left'
                }`}
              >
                <AmbientBackground>
                  <CurrentSlideComponent />
                </AmbientBackground>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* 2. POWERPOINT / GOOGLE SLIDES STUDIO WORKSPACE */
        /* ========================================================================= */
        <div className="w-full h-full flex flex-col">
          {/* Top Application Header Bar */}
          <header className="bg-[#09111F] border-b border-slate-800 px-5 py-2.5 flex items-center justify-between z-30 shadow-md">
            {/* Left: Presentation Document Title */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-950 border border-emerald-800 text-[#05A872] rounded-lg">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-serif font-bold text-sm text-[#F3F4F6] flex items-center gap-2">
                  Higher Education Digital Suite — Proposal.pptx
                  <span className="text-[10px] font-sans font-normal px-2 py-0.5 bg-slate-800 text-[#05A872] rounded-full border border-slate-700">
                    Saved
                  </span>
                </h1>
                <p className="text-[11px] text-[#C5A059] font-mono tracking-wider">
                  SYSTECH × PAKIZA JV · EXECUTIVE PRESENTATION
                </p>
              </div>
            </div>

            {/* Center: Slide Counter */}
            <div className="hidden md:flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1 font-mono text-xs text-slate-300">
              <span>SLIDE</span>
              <span className="text-[#05A872] font-bold">
                {currentSlideIndex + 1}
              </span>
              <span>OF {totalSlides}</span>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Share View-Only Link Button */}
              <button
                onClick={copyViewLink}
                className="bg-blue-600/10 border border-blue-500/40 text-blue-400 hover:bg-blue-600/20 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                title="Copy shareable link that opens strictly in full screen Audience Present Mode"
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden lg:inline">Share View Link</span>
              </button>

              {/* PDF Print Export Button */}
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 text-slate-300 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                title="Export PDF / Print Slide Deck (Ctrl+P)"
              >
                <Printer className="w-4 h-4 text-emerald-400" />
                <span className="hidden xl:inline">Export PDF</span>
              </button>

              <button
                onClick={() => setShowOverview(true)}
                className="px-3 py-1.5 text-slate-300 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Grid className="w-4 h-4" />
                <span className="hidden sm:inline">Grid</span>
              </button>

              {/* Dual Monitor Presenter View Button */}
              <button
                onClick={openPresenterView}
                className="bg-amber-500/10 border border-amber-500/40 text-amber-400 hover:bg-amber-500/20 font-bold px-3.5 py-2 rounded-lg flex items-center gap-2 text-xs transition-all cursor-pointer"
                title="Open Presenter Console in Dual Monitor mode (shows next slide & notes on monitor 1)"
              >
                <Tv className="w-4 h-4" />
                <span className="hidden md:inline">Presenter View</span>
              </button>

              {/* Standard Present Button */}
              <button
                onClick={startPresentation}
                className="bg-[#05A872] hover:bg-[#049363] text-slate-950 font-bold px-5 py-2 rounded-lg flex items-center gap-2 shadow-lg shadow-[#05A872]/20 transition-all transform hover:scale-105 cursor-pointer"
                title="Start Full Screen Presentation (F / F5)"
              >
                <Play className="w-4 h-4 fill-current" />
                <span className="text-sm font-bold tracking-wide">Present</span>
              </button>
            </div>
          </header>

          {/* Main Studio Body */}
          <div className="flex-1 flex overflow-hidden">
            {/* LEFT THUMBNAIL SORTER & CATEGORY FILTER */}
            <aside className="w-64 md:w-72 bg-[#080E1B] border-r border-slate-800/90 p-4 flex flex-col justify-between overflow-y-auto shrink-0 space-y-4">
              <div className="space-y-3">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search slides..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-[#05A872] font-sans"
                  />
                </div>

                {/* Category Filter Pills */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 border-b border-slate-800">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full transition-all shrink-0 cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-[#05A872] text-slate-950'
                          : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="text-[10px] font-mono text-[#C5A059] font-bold uppercase tracking-wider">
                  SLIDES DECK ({filteredSlides.length})
                </div>

                {/* Slide Thumbnail List */}
                <div className="space-y-2">
                  {filteredSlides.map((slide) => {
                    const originalIdx = SLIDES_CONFIG.findIndex((s) => s.id === slide.id);
                    const isActive = originalIdx === currentSlideIndex;
                    return (
                      <button
                        key={slide.id}
                        onClick={() => goToSlide(originalIdx)}
                        className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 group ${
                          isActive
                            ? 'bg-[#05A872]/15 border-[#05A872] shadow-md shadow-[#05A872]/10'
                            : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <span
                          className={`font-mono text-xs font-bold px-2 py-1 rounded ${
                            isActive
                              ? 'bg-[#05A872] text-slate-950'
                              : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                          }`}
                        >
                          {slide.number}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-xs font-semibold truncate ${
                              isActive ? 'text-white' : 'text-slate-300'
                            }`}
                          >
                            {slide.title}
                          </p>
                          <p className="text-[10px] font-mono text-slate-500 truncate">
                            {slide.category}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* CENTER SLIDE STAGE CANVAS */}
            <main className="flex-1 bg-[#050A14] p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="w-full h-full max-w-[1440px] aspect-video slide-canvas rounded-2xl shadow-2xl border border-slate-800 overflow-hidden bg-slate-950">
                <div
                  key={currentSlide.id}
                  className={`w-full h-full ${
                    direction === 'right' ? 'slide-enter-right' : 'slide-enter-left'
                  }`}
                >
                  <AmbientBackground>
                    <CurrentSlideComponent />
                  </AmbientBackground>
                </div>
              </div>
            </main>
          </div>

          {/* Bottom Controls Footer Bar */}
          <footer className="bg-[#09111F] border-t border-slate-800 px-6 py-2.5 flex items-center justify-between z-30">
            <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span>USE ARROW KEYS OR SPACEBAR TO NAVIGATE</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={goToPrevSlide}
                disabled={currentSlideIndex === 0}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-slate-200 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="font-mono text-xs text-[#05A872] font-bold">
                {currentSlideIndex + 1} / {totalSlides}
              </span>

              <button
                onClick={goToNextSlide}
                disabled={currentSlideIndex === totalSlides - 1}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-slate-200 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </footer>
        </div>
      )}

      {/* Modals & Drawers */}
      <SlideOverviewModal
        isOpen={showOverview}
        onClose={() => setShowOverview(false)}
        slides={SLIDES_CONFIG}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={goToSlide}
      />

      <KeyboardShortcutsModal
        isOpen={showHelp}
        onClose={() => setShowHelp(false)}
      />
    </div>
  );
}
