import React, { useState, useEffect } from 'react';
import { SomnathLogo } from './SomnathLogo';
import { Phone, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenTerms: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenTerms }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Videos', href: '#videos' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single Brand Logo Element */}
          <a
            href="#home"
            className="group flex items-center transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E09F3E]"
            aria-label="Somnath Photos - Home"
          >
            <SomnathLogo variant="full" />
          </a>

          {/* Zone 2: 4-6 Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-300 hover:text-[#E09F3E] transition-colors relative py-1 focus-visible:outline-none focus-visible:text-[#E09F3E] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E09F3E] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${STUDIO_INFO.phoneTel}`}
              className="hidden xl:flex items-center gap-1.5 text-xs text-zinc-300 hover:text-[#E09F3E] transition-colors py-1.5 px-3 rounded-lg border border-white/5 bg-zinc-950/60"
              title={`Call Owner ${STUDIO_INFO.owner}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#E09F3E]" />
              <span className="font-mono text-xs">{STUDIO_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenTerms}
              className="text-xs text-zinc-400 hover:text-[#E09F3E] transition-colors py-1.5 px-3 rounded-lg border border-white/5 hover:border-[#E09F3E]/30 bg-zinc-950/60 cursor-pointer font-medium"
            >
              Terms & Conditions
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E09F3E] to-[#B3801D] text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(224,159,62,0.4)] active:scale-95 flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Shoot</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3 py-1.5 rounded-full bg-[#E09F3E] text-black text-xs font-semibold uppercase tracking-wider"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E09F3E]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/95 backdrop-blur-xl flex flex-col pt-20 px-6 pb-8 border-b border-zinc-800">
          <div className="flex justify-between items-center pb-6 border-b border-zinc-800">
            <SomnathLogo variant="full" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white rounded-lg focus-visible:outline-none"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-5 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-200 hover:text-[#E09F3E] transition-colors flex items-center justify-between py-2 border-b border-zinc-900"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-600" />
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-zinc-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerms();
              }}
              className="w-full py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-medium uppercase tracking-wider"
            >
              Read Terms & Conditions (17 Points)
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold text-sm tracking-wide uppercase flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Shoot Now</span>
            </button>

            <a
              href={STUDIO_INFO.instagramStudioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs text-zinc-400 hover:text-[#E09F3E] py-2"
            >
              Follow on Instagram {STUDIO_INFO.instagramStudio}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
