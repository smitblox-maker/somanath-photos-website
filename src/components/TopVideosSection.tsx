import React, { useState } from 'react';
import { Play, Film, Sparkles, Volume2, VolumeX, Maximize2, X, Clock, Video, Eye, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { FEATURED_VIDEOS, VideoTeaserItem, STUDIO_INFO } from '../data/photographyData';
import { SomnathLogo } from './SomnathLogo';

interface TopVideosSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const TopVideosSection: React.FC<TopVideosSectionProps> = ({ onOpenBooking }) => {
  const [activeVideo, setActiveVideo] = useState<VideoTeaserItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(38);

  const handleOpenVideo = (video: VideoTeaserItem) => {
    setActiveVideo(video);
    setIsPlaying(true);
    setProgress(25);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section id="videos" className="relative py-24 sm:py-32 bg-[#050505] text-white overflow-hidden border-t border-white/5">
      {/* Background Cinematic Atmosphere with Client Photo */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="https://i.postimg.cc/2yfw6ThK/SP-(3)-jpg.jpg"
          onError={(e) => {
            if (e.currentTarget.src !== window.location.origin + '/images/client/sp-3.jpg') {
              e.currentTarget.src = '/images/client/sp-3.jpg';
            }
          }}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.09] contrast-[1.2] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#E09F3E 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#E09F3E]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#E09F3E] mb-3 font-semibold">
              <Film className="w-4 h-4 text-[#E09F3E]" />
              <span>Cinematic Portfolio</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Somnath Films</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-cinzel text-white leading-tight">
              Top Wedding Films & <span className="gold-gradient-text">Cinema Teasers</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              Crafted in full 4K S-Log3 cinema color science, featuring slow-motion mandap pheras, emotional vows, and viral Instagram reels.
            </p>
          </div>
        </div>

        {/* Top 2 Highlighted Films Grid: Main Anamorphic Feature + Vertical Story 04 Reel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main Featured Video: Ravi + Bhumika Wedding Film (7 Cols) */}
          <div className="lg:col-span-8 group relative rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-[#E09F3E] transition-all duration-500 shadow-2xl">
            <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden">
              <img
                src={FEATURED_VIDEOS[0].poster}
                onError={(e) => {
                  if (FEATURED_VIDEOS[0].localFallback && e.currentTarget.src !== window.location.origin + FEATURED_VIDEOS[0].localFallback) {
                    e.currentTarget.src = FEATURED_VIDEOS[0].localFallback;
                  }
                }}
                alt={FEATURED_VIDEOS[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />

              {/* Cinematic Vignette & Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent hidden sm:block" />

              {/* 4K Resolution & Category Badges */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#E09F3E] text-black text-[11px] font-bold font-mono tracking-wider uppercase shadow-lg">
                    {FEATURED_VIDEOS[0].resolution}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-300">
                    {FEATURED_VIDEOS[0].category}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs text-zinc-300 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#E09F3E]" />
                  <span>{FEATURED_VIDEOS[0].duration}</span>
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => handleOpenVideo(FEATURED_VIDEOS[0])}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#E09F3E] text-black flex items-center justify-center shadow-[0_0_50px_rgba(224,159,62,0.6)] group-hover:scale-110 transition-transform duration-300 cursor-pointer focus-visible:outline-none"
                  aria-label={`Play ${FEATURED_VIDEOS[0].title}`}
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-black translate-x-0.5" />
                </button>
              </div>

              {/* Bottom Card Meta Details */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="text-xs uppercase tracking-widest text-[#E09F3E] font-semibold mb-1">
                  {FEATURED_VIDEOS[0].subtitle}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white group-hover:text-[#FFF2C6] transition-colors">
                  {FEATURED_VIDEOS[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 line-clamp-2 max-w-2xl">
                  {FEATURED_VIDEOS[0].description}
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-4 text-[11px] font-mono text-zinc-400">
                  <span className="text-[#E09F3E]">● {FEATURED_VIDEOS[0].camera}</span>
                  <span className="text-zinc-600">|</span>
                  <span>{FEATURED_VIDEOS[0].lens}</span>
                  <span className="text-zinc-600">|</span>
                  <span>LUT: {FEATURED_VIDEOS[0].lut}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Reel Feature: Story 04 Pre-Wedding Reel (4 Cols) */}
          <div className="lg:col-span-4 group relative rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-[#E09F3E] transition-all duration-500 shadow-2xl flex flex-col justify-between">
            <div className="relative aspect-[9/14] sm:aspect-[9/12] lg:aspect-auto lg:h-[440px] overflow-hidden">
              <img
                src={FEATURED_VIDEOS[2].poster}
                onError={(e) => {
                  if (FEATURED_VIDEOS[2].localFallback && e.currentTarget.src !== window.location.origin + FEATURED_VIDEOS[2].localFallback) {
                    e.currentTarget.src = FEATURED_VIDEOS[2].localFallback;
                  }
                }}
                alt={FEATURED_VIDEOS[2].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Top Reel Badge */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white text-[11px] font-bold font-mono tracking-wider uppercase shadow-lg">
                  Reel 9:16
                </span>
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {FEATURED_VIDEOS[2].views}
                </span>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => handleOpenVideo(FEATURED_VIDEOS[2])}
                  className="w-16 h-16 rounded-full bg-[#E09F3E] text-black flex items-center justify-center shadow-[0_0_35px_rgba(224,159,62,0.5)] group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                  aria-label={`Play ${FEATURED_VIDEOS[2].title}`}
                >
                  <Play className="w-7 h-7 fill-black translate-x-0.5" />
                </button>
              </div>

              {/* Bottom Reel Info */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="text-xs uppercase tracking-widest text-[#E09F3E] font-semibold mb-1">
                  {FEATURED_VIDEOS[2].subtitle}
                </div>
                <h3 className="text-xl font-bold font-cinzel text-white">
                  {FEATURED_VIDEOS[2].title}
                </h3>
                <p className="text-xs text-zinc-300 font-light mt-1.5 line-clamp-2">
                  {FEATURED_VIDEOS[2].description}
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="text-[#E09F3E]">{FEATURED_VIDEOS[2].duration} Teaser Cut</span>
                  <span>{STUDIO_INFO.instagramStudio}</span>
                </div>
              </div>
            </div>

            {/* Bottom Reel Action Strip */}
            <div className="p-4 bg-zinc-900/90 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-zinc-400">Viral Couple Reel</span>
              <button
                type="button"
                onClick={() => onOpenBooking('Wedding Package 1 (₹1,00,000/-)')}
                className="text-xs text-[#E09F3E] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Book This Style</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Videos Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Film 2: Eternal Vows */}
          <div
            onClick={() => handleOpenVideo(FEATURED_VIDEOS[1])}
            className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-[#E09F3E] p-4 sm:p-5 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row gap-5 shadow-xl"
          >
            <div className="relative w-full sm:w-56 aspect-[16/9] sm:aspect-[4/3] rounded-xl overflow-hidden shrink-0">
              <img
                src={FEATURED_VIDEOS[1].poster}
                onError={(e) => {
                  if (FEATURED_VIDEOS[1].localFallback && e.currentTarget.src !== window.location.origin + FEATURED_VIDEOS[1].localFallback) {
                    e.currentTarget.src = FEATURED_VIDEOS[1].localFallback;
                  }
                }}
                alt={FEATURED_VIDEOS[1].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#E09F3E] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-black translate-x-0.5" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 font-mono text-[10px] text-zinc-300">
                {FEATURED_VIDEOS[1].duration}
              </div>
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase text-[#E09F3E]">
                  <span>{FEATURED_VIDEOS[1].resolution}</span>
                  <span>·</span>
                  <span>{FEATURED_VIDEOS[1].category}</span>
                </div>
                <h4 className="text-lg font-bold font-cinzel text-white group-hover:text-[#FFF2C6] transition-colors mt-1">
                  {FEATURED_VIDEOS[1].title}
                </h4>
                <p className="text-xs text-zinc-400 font-light mt-1.5 line-clamp-2">
                  {FEATURED_VIDEOS[1].description}
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono pt-3 border-t border-white/5 mt-3">
                <span>{FEATURED_VIDEOS[1].camera}</span>
                <span className="text-[#E09F3E] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Watch Cut →
                </span>
              </div>
            </div>
          </div>

          {/* Film 4: Sangeet Euphoria */}
          <div
            onClick={() => handleOpenVideo(FEATURED_VIDEOS[3])}
            className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-[#E09F3E] p-4 sm:p-5 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row gap-5 shadow-xl"
          >
            <div className="relative w-full sm:w-56 aspect-[16/9] sm:aspect-[4/3] rounded-xl overflow-hidden shrink-0">
              <img
                src={FEATURED_VIDEOS[3].poster}
                onError={(e) => {
                  if (FEATURED_VIDEOS[3].localFallback && e.currentTarget.src !== window.location.origin + FEATURED_VIDEOS[3].localFallback) {
                    e.currentTarget.src = FEATURED_VIDEOS[3].localFallback;
                  }
                }}
                alt={FEATURED_VIDEOS[3].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#E09F3E] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-black translate-x-0.5" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 font-mono text-[10px] text-zinc-300">
                {FEATURED_VIDEOS[3].duration}
              </div>
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase text-[#E09F3E]">
                  <span>{FEATURED_VIDEOS[3].resolution}</span>
                  <span>·</span>
                  <span>{FEATURED_VIDEOS[3].category}</span>
                </div>
                <h4 className="text-lg font-bold font-cinzel text-white group-hover:text-[#FFF2C6] transition-colors mt-1">
                  {FEATURED_VIDEOS[3].title}
                </h4>
                <p className="text-xs text-zinc-400 font-light mt-1.5 line-clamp-2">
                  {FEATURED_VIDEOS[3].description}
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono pt-3 border-t border-white/5 mt-3">
                <span>{FEATURED_VIDEOS[3].camera}</span>
                <span className="text-[#E09F3E] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Watch Cut →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Service CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-[#E09F3E]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#E09F3E]/10 border border-[#E09F3E]/40 flex items-center justify-center text-[#E09F3E] shrink-0">
              <Video className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-cinzel text-white">
                Want 4K Cinema Coverage for Your Big Day?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                All wedding packages include traditional videographers, cinematographers, drone shots, and express Instagram reels.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenBooking('Wedding Package 2 (₹2,00,000/-)')}
              className="flex-1 md:flex-none px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(224,159,62,0.4)] transition-all cursor-pointer"
            >
              Book Cinema Package
            </button>
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs tracking-wider uppercase border border-white/10 transition-colors text-center"
            >
              Request Reel Samples
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Video Showcase Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-4xl bg-zinc-950 rounded-2xl border border-[#E09F3E]/40 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-zinc-900/90">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E09F3E] animate-pulse" />
                <div>
                  <h3 className="text-sm font-bold font-cinzel text-white">
                    {activeVideo.title}
                  </h3>
                  <div className="text-[11px] font-mono text-zinc-400">
                    {activeVideo.subtitle} · {activeVideo.resolution}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCloseVideo}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Simulated Player Screen */}
            <div className="relative aspect-[16/9] bg-black overflow-hidden flex items-center justify-center">
              <img
                src={activeVideo.poster}
                onError={(e) => {
                  if (activeVideo.localFallback && e.currentTarget.src !== window.location.origin + activeVideo.localFallback) {
                    e.currentTarget.src = activeVideo.localFallback;
                  }
                }}
                alt={activeVideo.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover filter transition-all duration-700 ${
                  isPlaying ? 'brightness-95 contrast-105 scale-100' : 'brightness-50 scale-105 blur-sm'
                }`}
              />

              {/* Viewfinder Overlay Elements */}
              <div className="absolute top-4 left-4 text-[11px] font-mono text-emerald-400 bg-black/60 px-2.5 py-1 rounded border border-emerald-500/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>4K CINEMA PLAYBACK · 24.00 FPS</span>
              </div>

              <div className="absolute top-4 right-4 text-[11px] font-mono text-amber-400 bg-black/60 px-2.5 py-1 rounded border border-amber-500/30">
                S-LOG3 / SOMNATH AMBER
              </div>

              {/* Sound Wave Animation if playing & unmuted */}
              {isPlaying && !isMuted && (
                <div className="absolute bottom-16 right-6 flex items-end gap-1 h-6 bg-black/50 px-2.5 py-1.5 rounded-md backdrop-blur-md">
                  <span className="w-1 bg-[#E09F3E] h-3 animate-pulse" />
                  <span className="w-1 bg-[#E09F3E] h-5 animate-pulse delay-75" />
                  <span className="w-1 bg-[#E09F3E] h-2 animate-pulse delay-150" />
                  <span className="w-1 bg-[#E09F3E] h-6 animate-pulse delay-100" />
                  <span className="w-1 bg-[#E09F3E] h-4 animate-pulse delay-200" />
                </div>
              )}

              {/* Center Play/Pause button on screen */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center group/btn cursor-pointer bg-black/20 hover:bg-black/10 transition-colors"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {!isPlaying && (
                  <div className="w-20 h-20 rounded-full bg-[#E09F3E] text-black flex items-center justify-center shadow-2xl scale-105 transition-transform">
                    <Play className="w-9 h-9 fill-black translate-x-0.5" />
                  </div>
                )}
              </button>

              {/* Video Bottom Timeline & Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2">
                {/* Progress Bar */}
                <div
                  className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer relative"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    setProgress(Math.round((clickX / rect.width) * 100));
                  }}
                >
                  <div
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] rounded-full transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-300 font-mono pt-1">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-[#E09F3E] transition-colors"
                    >
                      {isPlaying ? 'PAUSE' : 'PLAY'}
                    </button>
                    <span>01:14 / {activeVideo.duration}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1 hover:text-[#E09F3E] transition-colors"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#E09F3E]" />}
                    </button>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-white font-mono">
                      {activeVideo.resolution}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom Details & Direct Booking Action */}
            <div className="p-5 sm:p-6 bg-zinc-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-white/5">
              <div className="max-w-md">
                <div className="text-xs text-[#E09F3E] font-mono uppercase tracking-wider">
                  Featured Shot Details
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                  {activeVideo.description}
                </p>
                <div className="text-[11px] text-zinc-500 font-mono mt-2">
                  Camera: {activeVideo.camera} · Lens: {activeVideo.lens}
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    handleCloseVideo();
                    onOpenBooking('Wedding Package 1 (₹1,00,000/-)');
                  }}
                  className="flex-1 sm:flex-none px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(224,159,62,0.4)] transition-all cursor-pointer text-center"
                >
                  Book This Coverage
                </button>
                <a
                  href={`tel:${STUDIO_INFO.phoneTel}`}
                  className="px-4 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-mono border border-white/10 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E09F3E]" />
                  <span>Call {STUDIO_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
