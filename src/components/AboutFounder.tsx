import React from 'react';
import { Instagram, Award, Camera, Film, Aperture, Heart, ArrowUpRight, Check, Phone, ShieldCheck } from 'lucide-react';
import { SomnathLogo } from './SomnathLogo';
import { STUDIO_INFO } from '../data/photographyData';

interface AboutFounderProps {
  onOpenBooking: () => void;
}

export const AboutFounder: React.FC<AboutFounderProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="relative py-28 bg-[#0a0a0a] border-b border-white/5 overflow-hidden">
      {/* Background ambient gold gradient */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#E09F3E]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E09F3E] mb-3 font-semibold">
            <span>Visual Storytellers</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Artistry & Passion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-cinzel text-white mb-6">
            Where Every Frame Tells an <span className="gold-gradient-text">Eternal Story</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Founded with a vision to preserve the soul of Indian traditions and contemporary love, Somnath Photos transforms spontaneous glances, grand celebrations, and quiet bonds into heirloom cinema.
          </p>
        </div>

        {/* 2-Column Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Founder Bipin Makwana Official Studio Card (Without Stock Photos) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold corner frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#E09F3E]/30 -z-10 pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#E09F3E]/20 rounded-full blur-2xl -z-10" />

              {/* Founder Studio Insignia Container */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-8 sm:p-10 border border-[#E09F3E]/40 shadow-2xl flex flex-col items-center text-center justify-between min-h-[520px]">
                {/* Background image overlay */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <img
                    src="https://i.postimg.cc/9QXLZxS9/SP-(4)-jpg.jpg"
                    onError={(e) => {
                      if (e.currentTarget.src !== window.location.origin + '/images/client/sp-4.jpg') {
                        e.currentTarget.src = '/images/client/sp-4.jpg';
                      }
                    }}
                    alt={STUDIO_INFO.owner}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-125 opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E09F3E]/10 border border-[#E09F3E]/30 mb-6">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E09F3E]" />
                  <span className="text-[11px] font-mono tracking-widest text-[#E09F3E] uppercase font-semibold">
                    Owner & Lead Cinematographer
                  </span>
                </div>

                {/* Center Brand Monogram & Founder Avatar */}
                <div className="relative z-10 my-auto flex flex-col items-center">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#E09F3E] shadow-[0_0_25px_rgba(224,159,62,0.4)] mb-4">
                    <img
                      src="/images/founder-portrait.jpg"
                      alt={STUDIO_INFO.owner}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <h3 className="text-3xl font-bold font-cinzel text-white mt-1">
                    {STUDIO_INFO.owner}
                  </h3>
                  <p className="text-xs text-[#E09F3E] mt-1 font-semibold tracking-wider uppercase font-mono">
                    {STUDIO_INFO.role} · {STUDIO_INFO.name}
                  </p>
                  <p className="text-xs text-zinc-400 mt-2 max-w-xs font-light">
                    Specializing in Sony Cinema Line 4K cameras, S-Log3 royal color grading, and candid traditional moments.
                  </p>

                  {/* Direct Contact Phone & WhatsApp */}
                  <a
                    href={`tel:${STUDIO_INFO.phoneTel}`}
                    className="mt-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-[#E09F3E]/50 text-amber-200 hover:text-white transition-all group"
                  >
                    <Phone className="w-4 h-4 text-[#E09F3E] group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-mono font-bold tracking-wider">{STUDIO_INFO.phone}</span>
                  </a>
                </div>

                {/* Direct Social Links for Bipin */}
                <div className="mt-8 pt-6 border-t border-white/10 w-full flex items-center justify-center gap-3">
                  <a
                    href={STUDIO_INFO.instagramOwnerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-200 hover:text-[#E09F3E] transition-colors py-1.5 px-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#E09F3E]" />
                    <span className="font-mono">{STUDIO_INFO.instagramOwner}</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                  </a>

                  <a
                    href={STUDIO_INFO.instagramStudioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-200 hover:text-[#E09F3E] transition-colors py-1.5 px-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#E09F3E]" />
                    <span className="font-mono">{STUDIO_INFO.instagramStudio}</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>

              {/* Floating Award / Experience Seal */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-zinc-900/95 backdrop-blur-md border border-[#E09F3E]/40 p-3.5 rounded-xl shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#E09F3E]/10 flex items-center justify-center text-[#E09F3E]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-zinc-400">Gujarat's Choice</div>
                  <div className="text-xs font-bold text-white font-cinzel">10+ Years Craft</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Story, Philosophy & Credentials */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Studio Badge */}
            <div className="mb-6 flex items-center gap-3">
              <SomnathLogo variant="compact" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white mb-4">
              "We don't just capture how a wedding looks — we capture how it feels."
            </h3>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4 font-light">
              Under the creative direction of <strong className="text-white font-medium">Bipin Makwana</strong>, Somnath Photos has grown into one of Gujarat’s premier wedding and portrait cinematography studios. With an eye trained on genuine human connection and a deep reverence for regional rituals, our team approaches every assignment as a work of fine art.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-light">
              We reject rigid, unnatural poses. Instead, we orchestrate subtle natural light, master cinematic focal lengths, and allow couples to truly immerse in their celebrations while we craft their timeless visual legacy.
            </p>

            {/* Quick Contact Line with Owner Phone */}
            <div className="p-3.5 rounded-xl bg-amber-950/30 border border-[#E09F3E]/30 flex items-center justify-between mb-8">
              <div className="flex items-center gap-2.5 text-xs text-amber-200">
                <Phone className="w-4 h-4 text-[#E09F3E]" />
                <span>Owner Direct Hotline: <strong>+91 97122 22058</strong></span>
              </div>
              <a
                href="tel:+919712222058"
                className="text-xs text-[#E09F3E] hover:underline font-mono font-semibold"
              >
                Call Now →
              </a>
            </div>

            {/* Philosophy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-[#E09F3E]/30 transition-colors">
                <div className="flex items-center gap-2.5 text-[#E09F3E] mb-1.5 font-medium text-sm">
                  <Aperture className="w-4 h-4" />
                  <span>Cinematic Color Science</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Custom handcrafted warm amber LUTs tailored to Indian skin tones, rich silk lehengas, and architectural palaces.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-[#E09F3E]/30 transition-colors">
                <div className="flex items-center gap-2.5 text-[#E09F3E] mb-1.5 font-medium text-sm">
                  <Heart className="w-4 h-4" />
                  <span>Unobtrusive Candids</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Respectful, candid documentation ensuring emotional authenticity during sacred pheras, vidaai tears, and sangeet laughter.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-[#E09F3E]/30 transition-colors">
                <div className="flex items-center gap-2.5 text-[#E09F3E] mb-1.5 font-medium text-sm">
                  <Film className="w-4 h-4" />
                  <span>Cinema-Grade Cinema Line</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Equipped with Sony FX Cinema rigs, G-Master f/1.2 primes, high-speed 4K/120fps slow-motion, and DJI Ronin gimbals.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-[#E09F3E]/30 transition-colors">
                <div className="flex items-center gap-2.5 text-[#E09F3E] mb-1.5 font-medium text-sm">
                  <Check className="w-4 h-4 text-[#E09F3E]" />
                  <span>Punctual Luxury Delivery</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Strict delivery timelines with same-week teaser reels, private encrypted online galleries, and leather flush-mount albums.
                </p>
              </div>
            </div>

            {/* Direct Connect & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(224,159,62,0.4)] transition-all cursor-pointer"
              >
                Schedule Consultation with Bipin
              </button>

              <div className="flex items-center gap-4 text-xs text-zinc-400">
                <span className="text-zinc-500">Connect Directly:</span>
                <a
                  href="https://instagram.com/somnath_photos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 text-zinc-300 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#E09F3E]" />
                  <span>@somnath_photos</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
