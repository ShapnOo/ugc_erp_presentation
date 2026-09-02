import React, { useState, useEffect } from 'react';
import { SLIDES_CONFIG } from '../config/slidesConfig';
import { presentationChannel, syncState, getStoredState } from '../utils/presentationSync';
import PresenterViewConsole from './PresenterViewConsole';
import AmbientBackground from './AmbientBackground';
import {
  Play,
  Grid,
  FileText,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Tv,
  Printer,
  Search,
  Filter
} from 'lucide-react';

import SlideOverviewModal from './SlideOverviewModal';
import SpeakerNotesDrawer from './SpeakerNotesDrawer';
import KeyboardShortcutsModal from './KeyboardShortcutsModal';

export default function PresentationLayout() {
  // Check URL query parameters for presenter mode window
  const urlParams = new URLSearchParams(window.location.search);
  const isPresenterWindow = urlParams.get('mode') === 'presenter';

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [direction, setDirection] = useState('right');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

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
    
    // Check initial stored state
    const stored = getStoredState();
    if (stored && typeof stored.currentSlideIndex === 'number') {
      setCurrentSlideIndex(stored.currentSlideIndex);
    }

    return () => presentationChannel.removeEventListener('message', handleSync);
  }, []);

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
    setIsPresentationMode(false);
    if (document.fullscreenElement && document.exitFullscreen) {
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

  // Print / PDF Export Handler
  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isPresentationMode) {
        setIsPresentationMode(false);
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [isPresentationMode]);

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
          e.preventDefault();
          if (isPresentationMode) {
            exitPresentation();
          } else {
            startPresentation();
          }
          break;
        case 'o':
        case 'O':
          e.preventDefault();
          setShowOverview((prev) => !prev);
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setShowNotes((prev) => !prev);
          break;
        case '?':
          e.preventDefault();
          setShowHelp((prev) => !prev);
          break;
        case 'Escape':
          if (showOverview || showHelp || showNotes) {
            setShowOverview(false);
            setShowHelp(false);
            setShowNotes(false);
          } else if (isPresentationMode) {
            exitPresentation();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, isPresentationMode, showOverview, showHelp, showNotes]);

  // Render Presenter View window if query param ?mode=presenter
  if (isPresenterWindow) {
    return <PresenterViewConsole initialSlideIndex={currentSlideIndex} />;
  }

  return (
    <div className="w-screen h-screen bg-[#070C16] text-slate-100 flex flex-col overflow-hidden select-none font-sans">
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
                <h1 className="font-serif font-bold text-sm text-slate-100 flex items-center gap-2">
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
                onClick={() => setShowNotes((prev) => !prev)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  showNotes
                    ? 'bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40'
                    : 'text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Notes</span>
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
                <span className="hidden md:inline">Presenter View (Dual Screen)</span>
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
                  <Filter className="w-3 h-3 text-[#C5A059] shrink-0 mr-1" />
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold whitespace-nowrap transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-[#05A872] text-slate-950'
                          : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between px-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    SLIDES ({filteredSlides.length})
                  </span>
                  <span className="text-[10px] font-mono text-[#05A872]">16:9 Widescreen</span>
                </div>

                {/* Vertical Thumbnail List */}
                <div className="space-y-2.5">
                  {filteredSlides.map((slide) => {
                    const SlideComp = slide.component;
                    const realIndex = SLIDES_CONFIG.findIndex((s) => s.id === slide.id);
                    const isActive = currentSlideIndex === realIndex;

                    return (
                      <div
                        key={slide.id}
                        onClick={() => goToSlide(realIndex)}
                        className={`group relative rounded-xl border-2 transition-all cursor-pointer overflow-hidden p-2 flex items-center gap-3 bg-slate-900 ${
                          isActive
                            ? 'border-[#05A872] ring-2 ring-[#05A872]/20 shadow-lg'
                            : 'border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <span className={`font-mono text-xs font-bold w-5 text-center ${
                          isActive ? 'text-[#05A872]' : 'text-slate-500'
                        }`}>
                          {slide.number}
                        </span>

                        <div className="relative aspect-video w-24 overflow-hidden rounded-md bg-slate-950 border border-slate-800">
                          <div className="absolute inset-0 transform scale-[0.22] origin-top-left w-[450%] h-[450%] pointer-events-none">
                            <AmbientBackground>
                              <SlideComp />
                            </AmbientBackground>
                          </div>
                        </div>

                        <div className="flex-1 overflow-hidden">
                          <p className="text-xs font-serif font-bold text-slate-200 truncate group-hover:text-[#05A872]">
                            {slide.title}
                          </p>
                          <p className="text-[10px] text-slate-400 font-sans truncate">
                            {slide.category}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* CENTER CANVAS STAGE */}
            <main className="flex-1 bg-[#0D1424] p-4 md:p-8 flex flex-col justify-between items-center overflow-auto relative">
              <div className="w-full flex-1 flex items-center justify-center">
                <div className="w-full max-w-[1280px] slide-canvas rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-950 relative">
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

              <footer className="w-full max-w-[1280px] mt-4 flex items-center justify-between text-xs text-slate-400 font-mono bg-[#080E1B] border border-slate-800 rounded-xl px-5 py-2.5">
                <div className="flex items-center gap-4">
                  <button
                    onClick={goToPrevSlide}
                    disabled={currentSlideIndex === 0}
                    className="p-1 text-slate-300 hover:text-white disabled:opacity-30 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <span>
                    SLIDE {currentSlideIndex + 1} OF {totalSlides}
                  </span>

                  <button
                    onClick={goToNextSlide}
                    disabled={currentSlideIndex === totalSlides - 1}
                    className="p-1 text-slate-[#300] hover:text-white disabled:opacity-30 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-slate-400 text-[11px]">
                  <Monitor className="w-4 h-4 text-emerald-400" />
                  <span>Press <kbd className="px-1.5 py-0.5 bg-slate-900 border border-slate-700 text-amber-400 rounded">ESC</kbd> anytime to exit full screen presentation mode</span>
                </div>

                <button
                  onClick={() => setShowHelp(true)}
                  className="hover:text-white cursor-pointer"
                >
                  Shortcuts (?)
                </button>
              </footer>
            </main>
          </div>
        </div>
      )}

      {/* Overlays and Modals */}
      {showOverview && (
        <SlideOverviewModal
          slides={SLIDES_CONFIG}
          currentSlide={currentSlideIndex}
          onSelectSlide={goToSlide}
          onClose={() => setShowOverview(false)}
        />
      )}

      {showNotes && (
        <SpeakerNotesDrawer
          slide={currentSlide}
          onClose={() => setShowNotes(false)}
        />
      )}

      {showHelp && (
        <KeyboardShortcutsModal onClose={() => setShowHelp(false)} />
      )}
    </div>
  );
}
