import React, { useState } from 'react';
import { TERMS_AND_CONDITIONS, TermItem } from '../data/photographyData';
import { X, AlertTriangle, ShieldCheck, FileText, CheckCircle2, Search, ArrowRight } from 'lucide-react';
import { SomnathLogo } from './SomnathLogo';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAgreeAndProceed?: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({
  isOpen,
  onClose,
  onAgreeAndProceed,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const categories = ['All', 'Booking & Payment', 'Schedule & Conduct', 'Delivery & Editing', 'Data & Revisions', 'Expenses & Policy'];

  const filteredTerms = TERMS_AND_CONDITIONS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.text.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-[#0c0c0e] border border-[#E09F3E]/40 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] max-h-[92vh] flex flex-col overflow-hidden my-4">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E09F3E]/10 border border-[#E09F3E]/30 flex items-center justify-center text-[#E09F3E] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white">
                  Terms & Conditions
                </h3>
                <span className="text-[10px] font-mono uppercase bg-[#E09F3E]/20 text-[#E09F3E] px-2 py-0.5 rounded border border-[#E09F3E]/30">
                  Official Studio Policy
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5 font-light">
                Somnath Photos · Please review carefully before placing or confirming your booking.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors cursor-pointer"
            aria-label="Close Terms Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prominent Golden Warning Notice Bar (As strictly requested by user) */}
        <div className="bg-gradient-to-r from-amber-950/80 via-amber-900/40 to-zinc-950 border-b border-[#E09F3E]/30 p-4 sm:px-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#E09F3E] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-amber-200 tracking-wide">
                ⚠️ महत्वपूर्ण सूचना (Important Notice Before Booking)
              </div>
              <div className="text-xs text-amber-100/90 font-medium mt-0.5 leading-relaxed">
                ऑर्डर कन्फर्म करने से पहले कृपया Terms & Conditions ध्यान से पढ़ लें।
              </div>
              <div className="text-[11px] text-zinc-400 mt-0.5 font-light">
                Please read all terms & conditions thoroughly before confirming your booking. 50% advance is mandatory to secure dates.
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:px-6 border-b border-white/5 bg-zinc-950/60 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#E09F3E] text-black font-semibold shadow-sm'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search terms (e.g. advance, timeline, drone)..."
              className="w-full pl-8 pr-3 py-1.5 bg-zinc-900 border border-white/10 rounded-lg text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#E09F3E]"
            />
          </div>
        </div>

        {/* Scrollable Terms Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 flex-1 max-h-[50vh]">
          {filteredTerms.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-xl border transition-all ${
                item.highlight
                  ? 'bg-amber-950/20 border-amber-600/40 shadow-sm'
                  : 'bg-zinc-900/40 border-white/5 hover:border-white/15'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[11px] font-mono font-bold text-[#E09F3E] shrink-0 mt-0.5">
                  {item.id}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-zinc-300 font-light leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {filteredTerms.length === 0 && (
            <div className="py-12 text-center text-zinc-500 text-xs">
              No terms match your search filter.
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:px-6 border-t border-white/10 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-zinc-400 font-light text-center sm:text-left flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>By proceeding to book, you acknowledge and agree to abide by these {TERMS_AND_CONDITIONS.length} studio terms.</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-medium cursor-pointer transition-colors"
            >
              Close
            </button>
            {onAgreeAndProceed && (
              <button
                onClick={() => {
                  onClose();
                  onAgreeAndProceed();
                }}
                className="flex-1 sm:flex-none px-5 py-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:shadow-lg cursor-pointer"
              >
                <span>I Understand & Book</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
