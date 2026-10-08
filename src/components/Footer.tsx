import React from 'react';
import { SomnathLogo } from './SomnathLogo';
import { Instagram, Phone, Mail, MapPin, ArrowUp, Heart } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData';

interface FooterProps {
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand Lockup & Bio */}
          <div className="lg:col-span-2">
            <SomnathLogo variant="full" className="mb-6" />
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm mb-6">
              Somnath Photos is an acclaimed luxury photography and cinematography studio led by founder <strong className="text-white">{STUDIO_INFO.owner}</strong>. Capturing timeless wedding sagas, pre-wedding films, and fine art portraits across Gujarat and global destination venues.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={STUDIO_INFO.instagramStudioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 hover:border-[#E09F3E] text-zinc-300 hover:text-[#E09F3E] flex items-center justify-center transition-colors"
                title={`Studio Instagram ${STUDIO_INFO.instagramStudio}`}
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={STUDIO_INFO.instagramOwnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 hover:border-[#E09F3E] text-zinc-300 hover:text-[#E09F3E] flex items-center justify-center transition-colors"
                title={`Founder Instagram ${STUDIO_INFO.instagramOwner}`}
              >
                <Instagram className="w-4 h-4 text-[#E09F3E]" />
              </a>

              <a
                href={`tel:${STUDIO_INFO.phoneTel}`}
                className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 hover:border-[#E09F3E] text-zinc-300 hover:text-[#E09F3E] flex items-center justify-center transition-colors"
                title={`Call Studio ${STUDIO_INFO.phone}`}
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 hover:border-[#E09F3E] text-zinc-300 hover:text-[#E09F3E] flex items-center justify-center transition-colors"
                title={`Email ${STUDIO_INFO.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#E09F3E] font-semibold mb-4 font-mono">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home Experience</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Bipin Makwana</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Curated Portfolio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Pricing & Packages</a>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-[#E09F3E] transition-colors text-left flex items-center gap-1 cursor-pointer text-amber-300/90"
                >
                  <span>Terms & Conditions (17 Points)</span>
                </button>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Inquire & Book</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Portfolio Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#E09F3E] font-semibold mb-4 font-mono">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Royal Heritage Weddings</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Cinematic Pre-Wedding Films</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Mandap & Sacred Rituals</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Haldi & Sangeet Celebrations</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Bridal Fine-Art Portraits</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">4K Drone Cinematography</a>
              </li>
            </ul>
          </div>

          {/* Col 5: Location Coverage */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#E09F3E] font-semibold mb-4 font-mono">
              Locations
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#E09F3E]" />
                <span>Somnath & Veraval</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#E09F3E]" />
                <span>Ahmedabad & Gandhinagar</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#E09F3E]" />
                <span>Surat & Vadodara</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#E09F3E]" />
                <span>Rajkot & Saurashtra</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#E09F3E]" />
                <span>Udaipur & Jaipur, Rajasthan</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#E09F3E]" />
                <span>Worldwide Destination Shoots</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {STUDIO_INFO.name}. All rights reserved.</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>Founder & Lead Cinematographer: {STUDIO_INFO.owner}</span>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={onOpenTerms}
              className="text-zinc-400 hover:text-[#E09F3E] transition-colors cursor-pointer text-xs"
            >
              Terms & Conditions
            </button>
            <span aria-hidden="true">·</span>
            <a
              href={STUDIO_INFO.instagramStudioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#E09F3E] transition-colors"
            >
              {STUDIO_INFO.instagramStudio}
            </a>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
