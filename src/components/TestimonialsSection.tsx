import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/photographyData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-28 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E09F3E]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E09F3E] mb-3 font-semibold">
            <span>Client Praise & Trust</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Real Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-cinzel text-white mb-6">
            Words From Our <span className="gold-gradient-text">Cherished Couples</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            We are honored to have documented hundreds of heartfelt unions across Gujarat, Rajasthan, and beyond. Here is what families say about their experience with Bipin Makwana & Somnath Photos.
          </p>
        </div>

        {/* Featured Testimonial Highlight Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative rounded-2xl bg-zinc-950 p-8 sm:p-12 border border-[#E09F3E]/30 shadow-2xl">
            {/* Top Row: Stars + Quote Icon */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-1.5 text-[#E09F3E]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="ml-2 text-xs font-mono text-zinc-400">5.0 / 5.0 Rating</span>
              </div>
              <Quote className="w-10 h-10 text-[#E09F3E]/20" />
            </div>

            {/* Glowing Review Quote */}
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-cinzel text-white leading-relaxed mb-8 font-medium">
              "{TESTIMONIALS[activeIndex].quote}"
            </blockquote>

            {/* Author Attribution */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#E09F3E] flex items-center justify-center text-black font-bold font-cinzel text-base">
                  {TESTIMONIALS[activeIndex].author.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-base font-cinzel">
                      {TESTIMONIALS[activeIndex].author}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-[#E09F3E]">
                      <CheckCircle className="w-3 h-3 fill-current" />
                      <span>Verified Client</span>
                    </span>
                  </div>
                  <div className="text-xs text-zinc-400 font-light">
                    {TESTIMONIALS[activeIndex].event} · {TESTIMONIALS[activeIndex].location}
                  </div>
                </div>
              </div>

              {/* Slider Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-zinc-500 px-2">
                  0{activeIndex + 1} / 0{TESTIMONIALS.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Card Grid for Scannable Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-6 rounded-xl bg-zinc-950/70 border transition-all cursor-pointer ${
                activeIndex === idx
                  ? 'border-[#E09F3E] shadow-[0_0_20px_rgba(224,159,62,0.15)]'
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-1 text-[#E09F3E] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4 line-clamp-3 font-light">
                "{item.quote}"
              </p>
              <div className="text-xs font-bold text-white font-cinzel">
                {item.author}
              </div>
              <div className="text-[11px] text-zinc-500 mt-0.5">
                {item.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
