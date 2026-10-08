import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PhotoItem, STUDIO_INFO } from '../data/photographyData';
import { Camera, MapPin, X, Sparkles, Sliders, ShieldCheck, Phone, UploadCloud } from 'lucide-react';
import { SomnathLogo } from './SomnathLogo';

interface PortfolioGalleryProps {
  onOpenBooking: (serviceName?: string) => void;
}

type CategoryTab = 'all' | 'weddings' | 'prewedding' | 'portraits' | 'events' | 'cinematic';

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<CategoryTab>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = activeTab === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeTab);

  const tabs: { key: CategoryTab; label: string; count: number }[] = [
    { key: 'all', label: 'All Works', count: PORTFOLIO_ITEMS.length },
    { key: 'weddings', label: 'Weddings', count: PORTFOLIO_ITEMS.filter(p => p.category === 'weddings').length },
    { key: 'prewedding', label: 'Pre-Wedding', count: PORTFOLIO_ITEMS.filter(p => p.category === 'prewedding').length },
    { key: 'portraits', label: 'Portraits', count: PORTFOLIO_ITEMS.filter(p => p.category === 'portraits').length },
    { key: 'events', label: 'Events & Rituals', count: PORTFOLIO_ITEMS.filter(p => p.category === 'events').length },
    { key: 'cinematic', label: 'Cinematic Films', count: PORTFOLIO_ITEMS.filter(p => p.category === 'cinematic').length },
  ];

  return (
    <section id="portfolio" className="relative py-28 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E09F3E] mb-3 font-semibold">
              <span>Curated Gallery</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Somnath Photos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-cinzel text-white leading-tight">
              Studio Photography & <span className="gold-gradient-text">Cinema Portfolios</span>
            </h2>
          </div>

          <p className="text-zinc-400 text-sm max-w-md font-light">
            Every frame is captured by Bipin Makwana with cinema prime optics, authentic emotions, and signature grading.
          </p>
        </div>

        {/* Notice: Photos will be added directly by owner */}
        <div className="mb-12 p-4 rounded-xl bg-zinc-950 border border-[#E09F3E]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-300">
          <div className="flex items-center gap-2.5">
            <UploadCloud className="w-4 h-4 text-[#E09F3E] shrink-0" />
            <span>
              <strong>Gallery Update Notice:</strong> Official client photographs are being curated by {STUDIO_INFO.owner}. For live portfolio albums or custom inquiries, call directly at <strong>{STUDIO_INFO.phone}</strong>.
            </span>
          </div>

          <a
            href={`tel:${STUDIO_INFO.phoneTel}`}
            className="px-4 py-1.5 rounded-lg bg-[#E09F3E]/10 border border-[#E09F3E]/40 text-[#E09F3E] hover:bg-[#E09F3E] hover:text-black transition-colors font-mono whitespace-nowrap shrink-0 font-medium"
          >
            Call {STUDIO_INFO.phone}
          </a>
        </div>

        {/* Category Segmented Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-zinc-900/80 rounded-xl max-w-full overflow-x-auto border border-white/10 mb-12 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E09F3E] ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black shadow-md font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] font-mono tabular-nums ${activeTab === tab.key ? 'text-black/80' : 'text-zinc-500'}`}>
                ({tab.count})
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic Photography Frames Grid with Real Portfolio Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-[#E09F3E] transition-all duration-500 cursor-pointer shadow-xl hover:shadow-[0_10px_35px_rgba(224,159,62,0.25)] flex flex-col justify-between"
            >
              {/* Photo Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-black">
                {photo.image ? (
                  <img
                    src={photo.image}
                    onError={(e) => {
                      if (photo.localFallback && e.currentTarget.src !== window.location.origin + photo.localFallback) {
                        e.currentTarget.src = photo.localFallback;
                      }
                    }}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-[#E09F3E]">
                    <Camera className="w-12 h-12 opacity-50" />
                  </div>
                )}

                {/* Subtle Gradient Fog on Bottom of Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Top Viewfinder Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#E09F3E]" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#E09F3E]">
                      {photo.categoryLabel}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-zinc-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {photo.year}
                  </span>
                </div>

                {/* Camera / Cinema Tag floating badge */}
                <div className="absolute bottom-3 left-3.5 z-10 flex items-center gap-1.5 text-[10px] font-mono text-zinc-300 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                  <Camera className="w-3 h-3 text-[#E09F3E]" />
                  <span>{photo.exif.camera.split(' ')[0]} {photo.exif.lens.split(' ')[1] || 'Prime'}</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-gradient-to-b from-zinc-950 to-black">
                <div>
                  <h3 className="text-lg font-bold font-cinzel text-white group-hover:text-[#FFF2C6] transition-colors leading-snug">
                    {photo.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E09F3E] shrink-0" />
                    <span className="truncate">{photo.location}</span>
                  </div>
                </div>

                {/* Bottom EXIF & Action Strip */}
                <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs mt-4">
                  <div className="font-mono text-[11px] text-zinc-400">
                    <span>{photo.exif.aperture}</span>
                    <span className="text-zinc-600 mx-1">·</span>
                    <span>{photo.exif.shutter}</span>
                  </div>

                  <span className="text-[#E09F3E] font-medium group-hover:translate-x-0.5 transition-transform">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200 overflow-y-auto"
        >
          <div className="relative w-full max-w-3xl bg-zinc-950 border border-[#E09F3E]/40 rounded-2xl shadow-2xl overflow-hidden my-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/70 hover:bg-black text-zinc-300 hover:text-white rounded-full focus-visible:outline-none transition-colors cursor-pointer border border-white/10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Preview in Modal */}
            {selectedPhoto.image && (
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
                <img
                  src={selectedPhoto.image}
                  onError={(e) => {
                    if (selectedPhoto.localFallback && e.currentTarget.src !== window.location.origin + selectedPhoto.localFallback) {
                      e.currentTarget.src = selectedPhoto.localFallback;
                    }
                  }}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#E09F3E]/40 text-xs font-mono text-[#E09F3E] uppercase tracking-wider">
                    {selectedPhoto.categoryLabel}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-zinc-300">
                    {selectedPhoto.year}
                  </span>
                </div>
              </div>
            )}

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <SomnathLogo variant="compact" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white mb-2">
                {selectedPhoto.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-zinc-400 mb-5">
                <MapPin className="w-4 h-4 text-[#E09F3E]" />
                <span>{selectedPhoto.location}</span>
              </div>

              <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6 p-4 rounded-xl bg-zinc-900/60 border border-white/5">
                {selectedPhoto.description}
              </p>

              {/* Technical EXIF Specifications */}
              <div className="mb-6">
                <div className="text-xs uppercase font-mono text-zinc-400 tracking-wider mb-2.5">
                  Technical Camera Specifications
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                  <div className="p-2.5 bg-zinc-900 rounded-lg border border-white/5">
                    <div className="text-zinc-500 text-[10px]">Camera Body</div>
                    <div className="text-white mt-0.5">{selectedPhoto.exif.camera}</div>
                  </div>
                  <div className="p-2.5 bg-zinc-900 rounded-lg border border-white/5">
                    <div className="text-zinc-500 text-[10px]">Cinema Lens</div>
                    <div className="text-white mt-0.5">{selectedPhoto.exif.lens}</div>
                  </div>
                  <div className="p-2.5 bg-zinc-900 rounded-lg border border-white/5">
                    <div className="text-zinc-500 text-[10px]">Aperture</div>
                    <div className="text-[#E09F3E] mt-0.5 font-bold">{selectedPhoto.exif.aperture}</div>
                  </div>
                  <div className="p-2.5 bg-zinc-900 rounded-lg border border-white/5">
                    <div className="text-zinc-500 text-[10px]">Shutter Speed</div>
                    <div className="text-white mt-0.5">{selectedPhoto.exif.shutter}</div>
                  </div>
                  <div className="p-2.5 bg-zinc-900 rounded-lg border border-white/5">
                    <div className="text-zinc-500 text-[10px]">Sensor Sensitivity</div>
                    <div className="text-white mt-0.5">{selectedPhoto.exif.iso}</div>
                  </div>
                  <div className="p-2.5 bg-zinc-900 rounded-lg border border-white/5">
                    <div className="text-zinc-500 text-[10px]">Focal Length</div>
                    <div className="text-white mt-0.5">{selectedPhoto.exif.focalLength}</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    const title = selectedPhoto.title;
                    setSelectedPhoto(null);
                    onOpenBooking(`Style Inquiry: ${title}`);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold text-xs tracking-wider uppercase text-center cursor-pointer hover:shadow-[0_0_20px_rgba(224,159,62,0.4)] transition-all"
                >
                  Inquire Shoot in This Format
                </button>

                <a
                  href={`tel:${STUDIO_INFO.phoneTel}`}
                  className="w-full sm:w-auto px-5 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono text-center border border-white/10 flex items-center justify-center gap-2"
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
