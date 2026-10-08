import React from 'react';
import { Instagram, ArrowUpRight, Phone, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { SomnathLogo } from './SomnathLogo';
import { STUDIO_INFO } from '../data/photographyData';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-20 bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Photography Background Glow */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img
              src="https://i.postimg.cc/4dcPsj7f/Story-04-jpg.jpg"
              onError={(e) => {
                if (e.currentTarget.src !== window.location.origin + '/images/client/story-04.jpg') {
                  e.currentTarget.src = '/images/client/story-04.jpg';
                }
              }}
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-75 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/90" />
          </div>

          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#E09F3E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Top Logo Badge */}
            <div className="mb-4">
              <SomnathLogo variant="stacked" />
            </div>

            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E09F3E] mb-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#E09F3E]" />
              <span>Official Social Channels</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-cinzel text-white mb-3">
              Connect With Us on <span className="gold-gradient-text">Instagram</span>
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-lg mb-8 leading-relaxed">
              Daily wedding teasers, client pre-wedding stories, and behind-the-scenes cinematography are posted regularly on our official handles. Follow both handles below:
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <a
                href={STUDIO_INFO.instagramStudioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-900/60 via-pink-900/60 to-amber-900/60 border border-white/20 hover:border-[#E09F3E] text-xs font-semibold text-white hover:text-[#FFF2C6] transition-all flex items-center gap-2.5 shadow-lg group cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-[#E09F3E]" />
                <span className="font-mono">{STUDIO_INFO.instagramStudio} (Studio)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
              </a>

              <a
                href={STUDIO_INFO.instagramOwnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-zinc-900 border border-white/10 hover:border-[#E09F3E] text-xs font-semibold text-white hover:text-[#E09F3E] transition-all flex items-center gap-2.5 shadow-lg group cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-[#E09F3E]" />
                <span className="font-mono">{STUDIO_INFO.instagramOwner} (Owner)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
              </a>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-zinc-400">
              <a
                href={`tel:${STUDIO_INFO.phoneTel}`}
                className="flex items-center gap-2 text-zinc-300 hover:text-[#E09F3E] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E09F3E]" />
                <span className="font-mono font-bold text-white">{STUDIO_INFO.phone} ({STUDIO_INFO.owner})</span>
              </a>

              <span className="hidden sm:inline text-zinc-700">|</span>

              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:underline"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
