import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, Instagram, ExternalLink, Loader2, Sparkles } from 'lucide-react';
import { SomnathLogo } from './SomnathLogo';
import { STUDIO_INFO, submitInquiryEmail, FORM_SUBMISSION_CONFIG } from '../data/photographyData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding Photography',
    date: '',
    location: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const rawInquirySummary = `To: Somnath Photos (${STUDIO_INFO.owner})
Official Email: ${STUDIO_INFO.email}
Phone / WhatsApp: ${STUDIO_INFO.phone}

--- NEW CLIENT INQUIRY DETAILS ---
Client Name: ${formData.name}
Phone / WhatsApp: ${formData.phone}
Email Address: ${formData.email || 'Not provided'}
Event Type: ${formData.eventType}
Event Date: ${formData.date || 'To be finalized'}
Event City / Venue: ${formData.location || 'Gujarat'}
Notes / Vision: ${formData.message || 'Please share quotation and availability.'}

---
Sent via Somnath Photos Official Website Booking Portal (Formspree/Web3Forms Service Key: 3f078060-4c3e-4499-ba5a-8a5e8acc34ad)`;

  const getEmailUrls = () => {
    const subject = encodeURIComponent(`New Inquiry from ${formData.name || 'Client'} - Somnath Photos`);
    const body = encodeURIComponent(rawInquirySummary);

    return {
      mailto: `mailto:${STUDIO_INFO.email}?subject=${subject}&body=${body}`,
      gmailWeb: `https://mail.google.com/mail/?view=cm&fs=1&to=${STUDIO_INFO.email}&su=${subject}&body=${body}`,
    };
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Somnath Photos & Bipin Makwana! I would like to inquire regarding photography for:
Name: ${formData.name || 'Inquirer'}
Event Type: ${formData.eventType}
Event Date: ${formData.date || 'TBD'}
Location: ${formData.location || 'Gujarat'}
Email: ${formData.email || 'Not provided'}
Notes: ${formData.message || 'Looking for package details'}`
    );
    return `https://wa.me/${STUDIO_INFO.phoneRaw}?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await submitInquiryEmail({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        serviceOrType: formData.eventType,
        date: formData.date,
        location: formData.location,
        notesOrMessage: formData.message,
        source: 'Contact Section',
      });
      setSubmissionMessage(res.message);
      setSubmitted(true);
    } catch {
      setSubmissionMessage('Inquiry formatted! You can also use the direct buttons below to reach Bipin Makwana immediately.');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyInquiry = async () => {
    try {
      await navigator.clipboard.writeText(rawInquirySummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#E09F3E]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E09F3E] mb-3 font-semibold">
            <span>Direct Studio Inquiry</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Let's Create Magic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-cinzel text-white mb-4">
            Begin Your <span className="gold-gradient-text">Visual Legacy</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Due to our commitment to artisanal quality and handcrafted color grading, we accept a limited number of weddings per season. Tell us about your celebration below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Studio Information & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col gap-6 shadow-2xl">
              <SomnathLogo variant="full" />

              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Somnath Photos is available for assignments throughout Gujarat (Somnath, Veraval, Ahmedabad, Surat, Rajkot, Vadodara), Rajasthan (Udaipur, Jaipur, Jodhpur), and premier destination wedding venues globally.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#E09F3E] flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono">Head Studio</div>
                    <div className="text-sm font-medium text-white">Somnath Bypass Rd, Somnath & Ahmedabad, Gujarat, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#E09F3E] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono">Owner Direct Phone & WhatsApp</div>
                    <a href={`tel:${STUDIO_INFO.phoneTel}`} className="text-sm font-semibold text-white hover:text-[#E09F3E] transition-colors font-mono">
                      {STUDIO_INFO.phone} ({STUDIO_INFO.owner})
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#E09F3E] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono">Official Gmail (Auto-Booking)</div>
                    <a href={`mailto:${STUDIO_INFO.email}`} className="text-sm font-semibold text-amber-300 hover:text-white transition-colors font-mono">
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#E09F3E] flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono">Studio Consultations</div>
                    <div className="text-sm font-medium text-white">Mon – Sat: 10:00 AM – 8:00 PM (IST)</div>
                  </div>
                </div>
              </div>

              {/* Direct Instagram Links */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Official Handles</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://instagram.com/somnath_photos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 hover:border-[#E09F3E] text-xs text-zinc-300 hover:text-white"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#E09F3E]" />
                    <span>@somnath_photos</span>
                  </a>

                  <a
                    href="https://instagram.com/bipinmakwana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 hover:border-[#E09F3E] text-xs text-zinc-300 hover:text-white"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#E09F3E]" />
                    <span>@bipinmakwana</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="py-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#E09F3E]/20 text-[#E09F3E] flex items-center justify-center mb-4 shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 mb-3">
                    <Sparkles className="w-3 h-3" />
                    <span>Transmitted to {STUDIO_INFO.email}</span>
                  </div>

                  <h3 className="text-2xl font-bold font-cinzel text-white mb-2">
                    Inquiry Sent to {STUDIO_INFO.email}!
                  </h3>
                  <p className="text-zinc-300 text-sm max-w-md font-light mb-2">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry has been sent to {STUDIO_INFO.owner} at <strong className="text-amber-300 font-mono">{STUDIO_INFO.email}</strong> via Formspree/Web3Forms.
                  </p>
                  {submissionMessage && (
                    <p className="text-xs text-emerald-300/90 max-w-md mb-4 bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-800/30">
                      {submissionMessage}
                    </p>
                  )}
                  <p className="text-xs text-zinc-400 mb-6 font-light">
                    Directly dispatch your message to {STUDIO_INFO.owner} via your preferred channel:
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-4">
                    <a
                      href={getEmailUrls().gmailWeb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all text-center"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Gmail ({STUDIO_INFO.email})</span>
                    </a>

                    <a
                      href={getEmailUrls().mailto}
                      className="px-5 py-3 rounded-full bg-zinc-900 hover:bg-zinc-850 text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 border border-white/10 transition-all text-center"
                    >
                      <Mail className="w-4 h-4 text-[#E09F3E]" />
                      <span>Default Mail App</span>
                    </a>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all text-center"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp ({STUDIO_INFO.phone})</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={handleCopyInquiry}
                      className="text-xs text-amber-300 hover:text-white transition-colors cursor-pointer py-1 px-3 rounded-lg bg-white/5 border border-white/10"
                    >
                      {copied ? '✓ Inquiry Copied!' : '📋 Copy Inquiry Details'}
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-zinc-500 hover:text-zinc-300 underline cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="p-3 bg-amber-950/20 border border-[#E09F3E]/30 rounded-xl text-xs text-amber-200/90 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#E09F3E] shrink-0" />
                    <span>Inquiry submissions automatically dispatch to <strong>{STUDIO_INFO.email}</strong>.</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul & Priya / Amit Patel"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-[#E09F3E] text-white text-sm outline-none transition-colors placeholder:text-zinc-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-[#E09F3E] text-white text-sm outline-none transition-colors placeholder:text-zinc-600 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-2">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-[#E09F3E] text-white text-sm outline-none transition-colors placeholder:text-zinc-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-2">
                        Type of Shoot *
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-[#E09F3E] text-white text-sm outline-none transition-colors"
                      >
                        <option>Wedding Package 1 (₹1,00,000/-)</option>
                        <option>Wedding Package 2 (₹2,00,000/-)</option>
                        <option>Pre-Wedding Package 1 (₹20,000/-)</option>
                        <option>Pre-Wedding Package 2 (₹50,000/-)</option>
                        <option>Pre-Wedding Package 3 (₹1,00,000/-)</option>
                        <option>Live Setup Half Day (₹50,000/-)</option>
                        <option>Lagan Lakhan / Vana Rasam Shoot</option>
                        <option>Custom Photography Assignment</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-2">
                        Tentative Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-[#E09F3E] text-white text-sm outline-none transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-2">
                        Event City / Venue
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Udaipur, Ahmedabad, Somnath"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-[#E09F3E] text-white text-sm outline-none transition-colors placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-2">
                      Tell Us About Your Vision & Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your wedding dates, number of guests, specific rituals, or desired add-ons..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-[#E09F3E] text-white text-sm outline-none transition-colors placeholder:text-zinc-600"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E09F3E] to-[#B3801D] text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(224,159,62,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-black" />
                          <span>Sending to {STUDIO_INFO.email}...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send to {STUDIO_INFO.email}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-4 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp ({STUDIO_INFO.phone})</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
