import React, { useState } from 'react';
import {
  PRE_WEDDING_PACKAGES,
  WEDDING_PACKAGES,
  LIVE_SETUP_PACKAGE,
  EXTRA_SERVICES_LIST,
  RITUAL_SERVICES_LIST,
  TERMS_AND_CONDITIONS,
  PackageItem,
} from '../data/photographyData';
import {
  Crown,
  Film,
  Camera,
  Check,
  ArrowRight,
  Calculator,
  AlertTriangle,
  FileText,
  Tv,
  Sparkles,
  Users,
  Video,
  Clock,
  ShieldAlert,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenTerms: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
  onOpenTerms,
}) => {
  const [activeTab, setActiveTab] = useState<'prewedding' | 'wedding' | 'rasam_live' | 'extras'>('prewedding');

  // Interactive Custom Estimator State (Matching Screenshots exactly)
  const [selectedBasePkg, setSelectedBasePkg] = useState<string>('wed-pkg-1');
  const [addLiveSetup, setAddLiveSetup] = useState<boolean>(false);
  const [addSameDayReel, setAddSameDayReel] = useState<boolean>(false);
  const [addCinematographer, setAddCinematographer] = useState<boolean>(false);
  const [addCandidPhoto, setAddCandidPhoto] = useState<boolean>(false);
  const [addRasamShoot, setAddRasamShoot] = useState<boolean>(false);

  const basePriceLookup: Record<string, { name: string; price: number }> = {
    'pw-pkg-1': { name: 'Pre-Wedding Pkg 1', price: 20000 },
    'pw-pkg-2': { name: 'Pre-Wedding Pkg 2', price: 50000 },
    'pw-pkg-3': { name: 'Pre-Wedding Pkg 3', price: 100000 },
    'wed-pkg-1': { name: 'Wedding Pkg 1', price: 100000 },
    'wed-pkg-2': { name: 'Wedding Pkg 2', price: 200000 },
  };

  const calculateEstimate = () => {
    let total = basePriceLookup[selectedBasePkg]?.price || 100000;
    if (addLiveSetup) total += 50000;
    if (addSameDayReel) total += 15000;
    if (addCinematographer) total += 25000;
    if (addCandidPhoto) total += 15000;
    if (addRasamShoot) total += 10000;
    return total;
  };

  return (
    <section id="services" className="py-28 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Photography Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]">
        <img
          src="/images/sp-royal-mandap.jpg"
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/95 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E09F3E] mb-3 font-semibold">
            <span>Official Studio Rates</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Pre-Wedding & Wedding Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-cinzel text-white mb-4">
            Transparent Pricing with <span className="gold-gradient-text">Zero Hidden Costs</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Crafted for royal memories. Choose between dedicated Pre-Wedding cinema sessions, multi-day Wedding functions, live LED plasma broadcast setups, and custom ritual coverage.
          </p>
        </div>

        {/* ⚠️ HIGHLY PROMINENT TERMS & CONDITIONS ALERT BANNER (As requested by user) */}
        <div className="max-w-4xl mx-auto mb-14 rounded-2xl bg-gradient-to-r from-amber-950/80 via-zinc-900 to-amber-950/80 border-2 border-[#E09F3E] p-5 sm:p-6 shadow-[0_0_30px_rgba(224,159,62,0.25)] relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E09F3E]/20 border border-[#E09F3E] flex items-center justify-center text-[#E09F3E] shrink-0">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold uppercase bg-[#E09F3E] text-black px-2 py-0.5 rounded">
                    Mandatory Notice
                  </span>
                  <span className="text-sm font-bold text-amber-300">
                    ऑर्डर कन्फर्म करने से पहले कृपया Terms & Conditions ध्यान से पढ़ लें।
                  </span>
                </div>
                <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed font-light">
                  Please review all 17 Studio Terms & Conditions before confirming your booking: <strong>50% advance</strong> is required to lock dates, mandatory 1-hour couple shoot time allocation, and client travel/stay arrangements.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenTerms}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(224,159,62,0.4)] transition-all shrink-0 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Read Terms & Conditions</span>
            </button>
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 bg-zinc-900/90 rounded-2xl border border-white/10 max-w-full overflow-x-auto gap-1">
            <button
              onClick={() => setActiveTab('prewedding')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeTab === 'prewedding'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Pre-Wedding Packages</span>
            </button>

            <button
              onClick={() => setActiveTab('wedding')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeTab === 'wedding'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Crown className="w-4 h-4" />
              <span>Wedding Packages</span>
            </button>

            <button
              onClick={() => setActiveTab('rasam_live')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeTab === 'rasam_live'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Tv className="w-4 h-4" />
              <span>Live Setup & Rasam Shoots</span>
            </button>

            <button
              onClick={() => setActiveTab('extras')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeTab === 'extras'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Extra Crew & Rates</span>
            </button>
          </div>
        </div>

        {/* Tab 1: PRE-WEDDING PACKAGES (Screenshot 1) */}
        {activeTab === 'prewedding' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 animate-in fade-in duration-300">
            {PRE_WEDDING_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 sm:p-8 bg-zinc-950/90 border flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? 'border-[#E09F3E] shadow-[0_0_35px_rgba(224,159,62,0.25)]'
                    : 'border-white/10 hover:border-[#E09F3E]/40'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold text-[10px] tracking-widest uppercase shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase font-mono tracking-widest text-[#E09F3E]">
                      Pre-Wedding
                    </span>
                    <span className="text-xs text-zinc-400 font-mono bg-zinc-900 px-2.5 py-1 rounded-md border border-white/5">
                      {pkg.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-cinzel text-white mb-2">
                    {pkg.name}
                  </h3>

                  <div className="py-4 border-y border-white/10 mb-6">
                    <div className="text-3xl sm:text-4xl font-bold text-white font-mono tracking-tight text-[#FFF2C6]">
                      {pkg.priceDisplay}
                    </div>
                    <div className="text-xs text-zinc-400 mt-1">Flat package investment</div>
                  </div>

                  {/* Crew Tag */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                      Included Crew
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.crew.map((member, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-zinc-900 text-xs text-zinc-300 border border-white/5"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-[#E09F3E] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(`Pre-Wedding ${pkg.name} (${pkg.priceDisplay})`)}
                  className={`w-full py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black hover:shadow-lg'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10 hover:border-[#E09F3E]/40'
                  }`}
                >
                  <span>Book {pkg.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: WEDDING PACKAGES (Screenshot 2 Top) */}
        {activeTab === 'wedding' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto animate-in fade-in duration-300">
            {WEDDING_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-7 sm:p-9 bg-zinc-950/90 border flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? 'border-[#E09F3E] shadow-[0_0_40px_rgba(224,159,62,0.3)]'
                    : 'border-white/10 hover:border-[#E09F3E]/40'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold text-[10px] tracking-widest uppercase shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase font-mono tracking-widest text-[#E09F3E]">
                      Wedding Saga
                    </span>
                    <span className="text-xs text-zinc-400 font-mono bg-zinc-900 px-3 py-1 rounded-md border border-white/5">
                      {pkg.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white mb-2">
                    {pkg.name}
                  </h3>

                  <div className="py-4 border-y border-white/10 mb-6">
                    <div className="text-4xl font-bold text-white font-mono tracking-tight text-[#FFF2C6]">
                      {pkg.priceDisplay}
                    </div>
                    <div className="text-xs text-zinc-400 mt-1">Comprehensive 2-Day Function Coverage</div>
                  </div>

                  {/* Included Crew */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                      Full Team Deployed
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pkg.crew.map((member, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-zinc-900 text-xs text-zinc-300 border border-white/5"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-[#E09F3E] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(`Wedding ${pkg.name} (${pkg.priceDisplay})`)}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(224,159,62,0.4)] transition-all cursor-pointer"
                >
                  <span>Book Wedding {pkg.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: LIVE SETUP & LAGAN LAKHAN / VANA RASAM (Screenshot 2 Middle & Bottom) */}
        {activeTab === 'rasam_live' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 animate-in fade-in duration-300">
            {/* Live Setup Card */}
            <div className="lg:col-span-6 rounded-2xl p-7 bg-zinc-950 border border-[#E09F3E]/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#E09F3E] font-mono uppercase mb-3">
                  <Tv className="w-4 h-4" />
                  <span>Broadcast & Visual Stage</span>
                </div>
                <h3 className="text-2xl font-bold font-cinzel text-white mb-2">
                  {LIVE_SETUP_PACKAGE.name}
                </h3>
                <div className="text-3xl font-bold font-mono text-[#FFF2C6] mb-6 pb-4 border-b border-white/10">
                  {LIVE_SETUP_PACKAGE.priceDisplay}
                </div>

                <div className="space-y-3 mb-8">
                  {LIVE_SETUP_PACKAGE.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-[#E09F3E] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(`Live Setup (Half Day - ₹50,000)`)}
                className="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10 hover:border-[#E09F3E] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Add Live Setup to Booking
              </button>
            </div>

            {/* Lagan Lakhan / Vana Rasam Card */}
            <div className="lg:col-span-6 rounded-2xl p-7 bg-zinc-950 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#E09F3E] font-mono uppercase mb-3">
                  <Clock className="w-4 h-4" />
                  <span>Traditional Ritual Specials</span>
                </div>
                <h3 className="text-2xl font-bold font-cinzel text-white mb-2">
                  Lagan Lakhan & Vana Rasam
                </h3>
                <p className="text-xs text-zinc-400 mb-6 pb-4 border-b border-white/10 font-light">
                  Dedicated coverage for intimate pre-wedding home rituals and lagan patrika ceremonies.
                </p>

                <div className="space-y-3 mb-8">
                  {RITUAL_SERVICES_LIST.map((rit) => (
                    <div
                      key={rit.id}
                      className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-semibold text-white">{rit.name}</div>
                        <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                          {rit.duration} · {rit.crew}
                        </div>
                      </div>
                      <div className="text-sm font-bold font-mono text-[#E09F3E]">
                        {rit.priceDisplay}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(`Lagan Lakhan / Vana Rasam Ritual Coverage`)}
                className="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10 hover:border-[#E09F3E] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Inquire Ritual Shoot
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: EXTRAS & A LA CARTE (Screenshot 2 Bottom-Left) */}
        {activeTab === 'extras' && (
          <div className="max-w-4xl mx-auto rounded-2xl p-7 sm:p-9 bg-zinc-950 border border-white/10 mb-16 animate-in fade-in duration-300">
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div>
                <h3 className="text-2xl font-bold font-cinzel text-white">Extra Crew & Add-On Services</h3>
                <p className="text-xs text-zinc-400 mt-1 font-light">
                  Add extra photographers, videographers, or express same-day edits to any base package.
                </p>
              </div>
              <span className="text-xs font-mono text-[#E09F3E] bg-[#E09F3E]/10 px-3 py-1 rounded-full border border-[#E09F3E]/20">
                A La Carte
              </span>
            </div>

            <div className="divide-y divide-white/5">
              {EXTRA_SERVICES_LIST.map((extra) => (
                <div key={extra.id} className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#E09F3E]" />
                    <span className="text-sm font-medium text-white">{extra.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-base font-bold font-mono text-[#FFF2C6]">
                      {extra.priceDisplay}
                    </span>
                    <button
                      onClick={() => onOpenBooking(`Extra: ${extra.name} (${extra.priceDisplay})`)}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-[#E09F3E] hover:text-black text-xs text-zinc-300 font-medium transition-colors cursor-pointer"
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interactive Custom Package Estimator Box (Sync with new exact pricing) */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-6 sm:p-10 border border-[#E09F3E]/40 shadow-2xl relative overflow-hidden mb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E09F3E]/10 flex items-center justify-center text-[#E09F3E]">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-cinzel text-white">Interactive Package Estimator</h3>
                <p className="text-xs text-zinc-400 font-light">Configure your package with exact official rates.</p>
              </div>
            </div>

            <div className="text-left md:text-right">
              <span className="text-[11px] text-zinc-400 uppercase tracking-wider">Estimated Total</span>
              <div className="text-3xl font-bold text-[#E09F3E] font-mono tabular-nums">
                ₹{calculateEstimate().toLocaleString('en-IN')}/-
              </div>
              <span className="text-[10px] text-zinc-500">*Exclusive of client travel, food & stay</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Step 1: Base Package Selection */}
            <div>
              <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-3">
                1. Select Base Package
              </label>
              <div className="space-y-2">
                {Object.entries(basePriceLookup).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedBasePkg(key)}
                    className={`w-full text-left p-3 rounded-xl border text-xs flex items-center justify-between transition-all cursor-pointer ${
                      selectedBasePkg === key
                        ? 'bg-zinc-800/90 border-[#E09F3E] text-white shadow-md'
                        : 'bg-zinc-900/40 border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                    }`}
                  >
                    <div className="font-medium text-white">{val.name}</div>
                    <div className="font-mono text-zinc-300">₹{val.price.toLocaleString('en-IN')}/-</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Add-Ons from Screenshots */}
            <div>
              <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-3">
                2. Select Add-On Options
              </label>
              <div className="space-y-2.5">
                <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/20 cursor-pointer text-xs">
                  <div className="flex items-center gap-2.5 text-zinc-300">
                    <input
                      type="checkbox"
                      checked={addLiveSetup}
                      onChange={(e) => setAddLiveSetup(e.target.checked)}
                      className="w-4 h-4 rounded text-[#E09F3E] accent-[#E09F3E]"
                    />
                    <span>Live Setup (Half Day - 8x12 LED + TVs)</span>
                  </div>
                  <span className="font-mono text-zinc-400">+₹50,000/-</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/20 cursor-pointer text-xs">
                  <div className="flex items-center gap-2.5 text-zinc-300">
                    <input
                      type="checkbox"
                      checked={addCinematographer}
                      onChange={(e) => setAddCinematographer(e.target.checked)}
                      className="w-4 h-4 rounded text-[#E09F3E] accent-[#E09F3E]"
                    />
                    <span>Additional Cinematographer</span>
                  </div>
                  <span className="font-mono text-zinc-400">+₹25,000/-</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/20 cursor-pointer text-xs">
                  <div className="flex items-center gap-2.5 text-zinc-300">
                    <input
                      type="checkbox"
                      checked={addSameDayReel}
                      onChange={(e) => setAddSameDayReel(e.target.checked)}
                      className="w-4 h-4 rounded text-[#E09F3E] accent-[#E09F3E]"
                    />
                    <span>Same Day Highlight Video</span>
                  </div>
                  <span className="font-mono text-zinc-400">+₹15,000/-</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/20 cursor-pointer text-xs">
                  <div className="flex items-center gap-2.5 text-zinc-300">
                    <input
                      type="checkbox"
                      checked={addCandidPhoto}
                      onChange={(e) => setAddCandidPhoto(e.target.checked)}
                      className="w-4 h-4 rounded text-[#E09F3E] accent-[#E09F3E]"
                    />
                    <span>Additional Candid Photographer</span>
                  </div>
                  <span className="font-mono text-zinc-400">+₹15,000/-</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/20 cursor-pointer text-xs">
                  <div className="flex items-center gap-2.5 text-zinc-300">
                    <input
                      type="checkbox"
                      checked={addRasamShoot}
                      onChange={(e) => setAddRasamShoot(e.target.checked)}
                      className="w-4 h-4 rounded text-[#E09F3E] accent-[#E09F3E]"
                    />
                    <span>Lagan Lakhan / Vana Rasam (2 Hr Photo & Video)</span>
                  </div>
                  <span className="font-mono text-zinc-400">+₹10,000/-</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-amber-300/90 font-light">
              <ShieldAlert className="w-4 h-4 text-[#E09F3E] shrink-0" />
              <span>Reminder: Order confirm karne se pehle terms & conditions padh lena.</span>
            </div>

            <button
              onClick={() => {
                const pkgName = basePriceLookup[selectedBasePkg]?.name || 'Custom Package';
                onOpenBooking(`${pkgName} (Total Est. ₹${calculateEstimate().toLocaleString('en-IN')}/-)`);
              }}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(224,159,62,0.4)] transition-all cursor-pointer whitespace-nowrap"
            >
              Request Booking With This Estimate
            </button>
          </div>
        </div>

        {/* Embedded Key Terms Summary Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-zinc-950 border border-white/10 p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-[#E09F3E]" />
              <h3 className="text-lg font-bold font-cinzel text-white">
                Studio Terms & Conditions Highlights
              </h3>
            </div>
            <button
              onClick={onOpenTerms}
              className="text-xs text-[#E09F3E] hover:underline font-mono cursor-pointer"
            >
              View Full 17 Points →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-300">
            <div className="p-3 rounded-lg bg-zinc-900/50 border border-white/5">
              <span className="font-semibold text-white block mb-1">50% Advance Booking:</span>
              To confirm order, 50% must be paid in advance. Booked only after receiving payment.
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/50 border border-white/5">
              <span className="font-semibold text-white block mb-1">Balance & Media Handover:</span>
              Remaining balance settled upon event coverage completion. All data released upon full clearance.
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/50 border border-white/5">
              <span className="font-semibold text-white block mb-1">Mandatory Shoot Timings:</span>
              Allocate 1 hour for couple shoot & 30 min for family shoot before each function.
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/50 border border-white/5">
              <span className="font-semibold text-white block mb-1">Travel, Food & Stay:</span>
              The client is responsible for all travel, food, and accommodation expenses for our team.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
