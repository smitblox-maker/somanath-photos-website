import React from 'react';
import { ArrowRight, Camera, Phone, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { SomnathLogo } from './SomnathLogo';
import { STUDIO_INFO } from '../data/photographyData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#050505] pt-28 pb-20">
      {/* Cinematic Photography Background with Dark Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://i.postimg.cc/8cBbrWb8/SP-(3)-(1)-jpg.jpg"
          onError={(e) => {
            if (e.currentTarget.src !== window.location.origin + '/images/client/sp-3-1.jpg') {
              e.currentTarget.src = '/images/client/sp-3-1.jpg';
            }
          }}
          alt="Somnath Photos Royal Wedding Cinematography"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-[1.12] scale-105"
        />
        {/* Layered Gradient Fog */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/60 to-[#050505]" />

        {/* Viewfinder Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#E09F3E 1px, transparent 1px), linear-gradient(90deg, #E09F3E 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Ambient Gold Radial Gradients */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#E09F3E]/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-[#D4AF37]/8 rounded-full blur-[120px]" />

        {/* Viewfinder Corner Crosshairs */}
        <div className="absolute top-28 left-8 sm:left-16 w-8 h-8 border-t-2 border-l-2 border-[#E09F3E]/40" />
        <div className="absolute top-28 right-8 sm:right-16 w-8 h-8 border-t-2 border-r-2 border-[#E09F3E]/40" />
        <div className="absolute bottom-20 left-8 sm:left-16 w-8 h-8 border-b-2 border-l-2 border-[#E09F3E]/40" />
        <div className="absolute bottom-20 right-8 sm:right-16 w-8 h-8 border-b-2 border-r-2 border-[#E09F3E]/40" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Big Central Studio Crest */}
        <div className="mb-5 transform hover:scale-105 transition-transform duration-500">
          <SomnathLogo variant="stacked" />
        </div>

        {/* Featured Video / Couple Announcement Chip */}
        <a
          href="#videos"
          className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-950/90 hover:bg-zinc-900 border border-[#E09F3E]/50 text-xs text-zinc-300 transition-all duration-300 mb-6 shadow-xl hover:border-[#E09F3E]"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E09F3E] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E09F3E]" />
          </span>
          <span className="text-zinc-200 text-[11px] sm:text-xs">
            Featured Film: <strong className="text-white">Ravi + Bhumika | The Royal Mandap Union</strong>
          </span>
          <span className="px-2 py-0.5 rounded bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-mono text-[10px] font-bold">
            WATCH 4K
          </span>
        </a>

        {/* Studio Kicker Label (Unboxed text with separators) */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#E09F3E] mb-5 font-semibold">
          <span>Official Studio Portal</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span>{STUDIO_INFO.owner}</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span>{STUDIO_INFO.phone}</span>
        </div>

        {/* Master Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] font-cinzel text-balance mb-6">
          Capturing Timeless Moments with <span className="gold-gradient-text">Elegance & Passion</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed mb-10 text-balance">
          Professional Wedding, Pre-Wedding, Event, & Portrait Cinematography by {STUDIO_INFO.name}. Crafted with royal aesthetics, authentic candids, and masterful cinema color grading.
        </p>

        {/* Prominent CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E09F3E] to-[#B3801D] text-black font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(224,159,62,0.5)] hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Book a Shoot Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${STUDIO_INFO.phoneTel}`}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-white font-medium text-xs sm:text-sm tracking-wider uppercase border border-white/20 hover:border-[#E09F3E]/60 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2.5"
          >
            <Phone className="w-4 h-4 text-[#E09F3E]" />
            <span className="font-mono">{STUDIO_INFO.phone}</span>
          </a>
        </div>

        {/* Notice Badge: Direct Owner Booking & Future Photo Uploads */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-white/10 text-xs text-zinc-400">
          <ShieldCheck className="w-4 h-4 text-[#E09F3E]" />
          <span>Direct Bookings & Dates Managed by Owner <strong>{STUDIO_INFO.owner}</strong></span>
        </div>
      </div>

      {/* Proof & Credentials Adjacency Bar (Clean tabular numerals) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black via-black/90 to-transparent py-4 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-around gap-6 text-center text-xs text-zinc-400">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <span className="text-lg font-bold text-white font-mono tabular-nums">10+</span>
            <span className="tracking-wider uppercase text-[11px] text-zinc-300">Years Experience</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <span className="text-lg font-bold text-white font-mono tabular-nums">450+</span>
            <span className="tracking-wider uppercase text-[11px] text-zinc-300">Weddings Covered</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <span className="text-lg font-bold text-[#E09F3E] font-mono tabular-nums">99.4%</span>
            <span className="tracking-wider uppercase text-[11px] text-zinc-300">Client Satisfaction</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <span className="text-lg font-bold text-white font-mono">4K HDR</span>
            <span className="tracking-wider uppercase text-[11px] text-zinc-300">Cinema Mastery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
