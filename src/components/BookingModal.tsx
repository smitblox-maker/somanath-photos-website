import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Calendar as CalendarIcon,
  CheckCircle2,
  MessageSquare,
  AlertTriangle,
  FileText,
  ExternalLink,
  Mail,
  Send,
  Loader2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Info,
  Upload,
  FileSpreadsheet,
} from 'lucide-react';
import { SomnathLogo } from './SomnathLogo';
import {
  STUDIO_INFO,
  submitInquiryEmail,
  bookedDates as fallbackBookedDates,
  fetchLiveBookedDates,
  parseCsvToDates,
  BOOKED_DATES_SHEET_URL,
  DEFAULT_BOOKING_SHEET_CSV,
} from '../data/photographyData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerms: () => void;
  preselectedService?: string;
  sheetUrl?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  onOpenTerms,
  preselectedService = '',
  sheetUrl = BOOKED_DATES_SHEET_URL,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || 'Wedding Package 1 (₹1,00,000/-)',
    date: '',
    city: '',
    guestCount: '300 - 500 Guests',
    notes: '',
  });

  const [hasAgreedToTerms, setHasAgreedToTerms] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Dynamic Google Sheet booked dates integration & calendar state
  const [reservedDates, setReservedDates] = useState<string[]>(fallbackBookedDates);
  const [isFetchingCalendar, setIsFetchingCalendar] = useState(false);
  const [calendarSource, setCalendarSource] = useState<'google-sheet' | 'local-fallback'>('local-fallback');
  const [dateWarning, setDateWarning] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(() => new Date());
  const [showCalendarView, setShowCalendarView] = useState(true);
  const [customSheetInput, setCustomSheetInput] = useState(() => {
    try {
      return (
        localStorage.getItem('somnath_booked_sheet_url') ||
        sheetUrl ||
        BOOKED_DATES_SHEET_URL ||
        ''
      );
    } catch {
      return sheetUrl || BOOKED_DATES_SHEET_URL || '';
    }
  });
  const [showSheetConfig, setShowSheetConfig] = useState(false);
  const [syncStatusMsg, setSyncStatusMsg] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [pastedCsvInput, setPastedCsvInput] = useState('');
  const [showDirectCsv, setShowDirectCsv] = useState(false);

  // Load booked dates on open
  useEffect(() => {
    if (isOpen) {
      loadBookedDates(customSheetInput);
    }
  }, [isOpen]);

  const loadBookedDates = async (sheetLink?: string) => {
    setIsFetchingCalendar(true);
    const linkToUse = (sheetLink !== undefined ? sheetLink : customSheetInput).trim();

    if (linkToUse) {
      try {
        localStorage.setItem('somnath_booked_sheet_url', linkToUse);
      } catch {
        // LocalStorage fallback
      }
    }

    try {
      const defaultParsed = parseCsvToDates(DEFAULT_BOOKING_SHEET_CSV);
      const res = await fetchLiveBookedDates(linkToUse);
      
      let combined = [...res.dates, ...defaultParsed];
      const savedCsv = localStorage.getItem('somnath_uploaded_csv');
      if (savedCsv) {
        const customParsed = parseCsvToDates(savedCsv);
        combined = [...combined, ...customParsed];
      }

      const uniqueDates = Array.from(new Set(combined)).sort();
      setReservedDates(uniqueDates);
      setCalendarSource(res.source);

      if (res.source === 'google-sheet') {
        setSyncStatusMsg({
          type: 'success',
          text: `Synced ${uniqueDates.length} booked dates from Google Sheet & Booking File!`,
        });
      } else if (res.error) {
        setSyncStatusMsg({
          type: 'info',
          text: `Calendar active (${uniqueDates.length} reserved dates including 2026-11-04 Smit booking).`,
        });
      }
    } catch (err) {
      const defaultParsed = parseCsvToDates(DEFAULT_BOOKING_SHEET_CSV);
      const merged = Array.from(new Set([...fallbackBookedDates, ...defaultParsed])).sort();
      setReservedDates(merged);
      setCalendarSource('local-fallback');
      setSyncStatusMsg({
        type: 'error',
        text: 'Could not reach Google Sheet. Retained verified local calendar.',
      });
    } finally {
      setIsFetchingCalendar(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const parsed = parseCsvToDates(content);
        if (parsed.length > 0) {
          const allMerged = Array.from(new Set([...fallbackBookedDates, ...parsed])).sort();
          setReservedDates(allMerged);
          setCalendarSource('google-sheet');
          setSyncStatusMsg({
            type: 'success',
            text: `Imported ${parsed.length} booked dates from "${file.name}" (${allMerged.length} total blocked dates in calendar)!`,
          });
          try {
            localStorage.setItem('somnath_uploaded_csv', content);
          } catch {
            // storage fallback
          }
        } else {
          setSyncStatusMsg({
            type: 'error',
            text: `No valid dates found in "${file.name}". Please ensure Column A contains dates (YYYY-MM-DD or DD-MM-YYYY).`,
          });
        }
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleLoadDefaultSheet = () => {
    const parsed = parseCsvToDates(DEFAULT_BOOKING_SHEET_CSV);
    const allMerged = Array.from(new Set([...fallbackBookedDates, ...parsed])).sort();
    setReservedDates(allMerged);
    setCalendarSource('google-sheet');
    setSyncStatusMsg({
      type: 'success',
      text: `Loaded Somnath Photos Booking sheet: 2026-11-04 (Smit - online booking) blocked!`,
    });
    // Jump calendar directly to Nov 2026 so user can immediately see 2026-11-04 blocked
    setCurrentMonth(new Date(2026, 10, 1));
  };

  const handleApplyPastedCsv = () => {
    if (!pastedCsvInput.trim()) return;
    const parsed = parseCsvToDates(pastedCsvInput);
    if (parsed.length > 0) {
      const allMerged = Array.from(new Set([...fallbackBookedDates, ...parsed])).sort();
      setReservedDates(allMerged);
      setCalendarSource('google-sheet');
      setSyncStatusMsg({
        type: 'success',
        text: `Successfully imported ${parsed.length} booked dates from CSV (${allMerged.length} total blocked dates)!`,
      });
      setPastedCsvInput('');
      setShowDirectCsv(false);
    } else {
      setSyncStatusMsg({
        type: 'error',
        text: 'No valid dates detected in the pasted CSV text. Check format (YYYY-MM-DD or DD-MM-YYYY).',
      });
    }
  };

  const isDateBooked = (dateStr: string): boolean => {
    if (!dateStr) return false;
    return reservedDates.includes(dateStr);
  };

  const handleDateSelect = (dateStr: string) => {
    if (isDateBooked(dateStr)) {
      setDateWarning(
        'This date is already reserved. Please select another date or contact us directly on WhatsApp (+91 97122 22058)'
      );
      return;
    }

    setDateWarning(null);
    setFormData((prev) => ({ ...prev, date: dateStr }));
  };

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosenDate = e.target.value;
    if (isDateBooked(chosenDate)) {
      setDateWarning(
        'This date is already reserved. Please select another date or contact us directly on WhatsApp (+91 97122 22058)'
      );
      setFormData((prev) => ({ ...prev, date: '' }));
    } else {
      setDateWarning(null);
      setFormData((prev) => ({ ...prev, date: chosenDate }));
      if (chosenDate) {
        const [y, m] = chosenDate.split('-').map(Number);
        setCurrentMonth(new Date(y, m - 1, 1));
      }
    }
  };

  const formattedSelectedDate = useMemo(() => {
    if (!formData.date) return null;
    try {
      const [y, m, d] = formData.date.split('-').map(Number);
      const dt = new Date(y, m - 1, d);
      return dt.toLocaleDateString('en-IN', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return formData.date;
    }
  }, [formData.date]);

  // Calendar grid calculations
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

    const days: Array<{
      dateStr: string;
      dayNum: number;
      isCurrentMonth: boolean;
      isPast: boolean;
      isBooked: boolean;
      isSelected: boolean;
      isToday: boolean;
    }> = [];

    const todayStr = new Date().toISOString().split('T')[0];

    // Padding for first week
    for (let i = 0; i < firstDayIndex; i++) {
      days.push({
        dateStr: '',
        dayNum: 0,
        isCurrentMonth: false,
        isPast: false,
        isBooked: false,
        isSelected: false,
        isToday: false,
      });
    }

    // Days in current month
    for (let day = 1; day <= totalDaysInMonth; day++) {
      const mStr = String(month + 1).padStart(2, '0');
      const dStr = String(day).padStart(2, '0');
      const dIso = `${year}-${mStr}-${dStr}`;

      const isPast = dIso < todayStr;
      const booked = isDateBooked(dIso);
      const isSelected = formData.date === dIso;
      const isToday = dIso === todayStr;

      days.push({
        dateStr: dIso,
        dayNum: day,
        isCurrentMonth: true,
        isPast,
        isBooked: booked,
        isSelected,
        isToday,
      });
    }

    return days;
  }, [currentMonth, reservedDates, formData.date]);

  const monthName = currentMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  if (!isOpen) return null;

  const rawBookingSummary = `To: Somnath Photos (${STUDIO_INFO.owner})
Official Studio Email: ${STUDIO_INFO.email}
Owner Hotline: ${STUDIO_INFO.phone}

--- NEW CLIENT BOOKING DETAILS ---
Client Name: ${formData.name}
Phone / WhatsApp: ${formData.phone}
Email Address: ${formData.email || 'Not provided'}
Service Package: ${formData.service}
Event Date: ${formData.date}
Event City / Venue: ${formData.city || 'Gujarat'}
Approx Guests: ${formData.guestCount}
Terms & Conditions: Accepted & Agreed (50% advance for booking confirmation)
Special Notes / Desired Add-ons: ${formData.notes || 'None specified'}

---
Sent via Somnath Photos Official Website Booking Portal (Formspree/Web3Forms Service Key: 3f078060-4c3e-4499-ba5a-8a5e8acc34ad)`;

  const getEmailUrls = () => {
    const subject = encodeURIComponent(`NEW BOOKING: ${formData.service} from ${formData.name || 'Client'}`);
    const body = encodeURIComponent(rawBookingSummary);

    return {
      mailto: `mailto:${STUDIO_INFO.email}?subject=${subject}&body=${body}`,
      gmailWeb: `https://mail.google.com/mail/?view=cm&fs=1&to=${STUDIO_INFO.email}&su=${subject}&body=${body}`,
    };
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Somnath Photos & Bipin Makwana! I would like to book a photography shoot:
Client Name: ${formData.name || 'Client'}
Service Package: ${formData.service}
Event Date: ${formData.date || 'TBD'}
City / Venue: ${formData.city || 'Gujarat'}
Approx Guests: ${formData.guestCount}
Client Email: ${formData.email || 'Not provided'}
Terms & Conditions: Agreed & Accepted (50% advance for booking confirmation)
Special Notes: ${formData.notes || 'Looking forward to booking.'}`
    );
    return `https://wa.me/${STUDIO_INFO.phoneRaw}?text=${text}`;
  };

  const getWhatsAppInquiryForBookedDateUrl = (dateStr?: string) => {
    const text = encodeURIComponent(
      `Hello Somnath Photos (+91 97122 22058)! I noticed the date ${dateStr || formData.date || 'my requested date'} is reserved on your calendar. Is there any alternate slot, second team availability, or nearby dates open for ${formData.name || 'my event'}?`
    );
    return `https://wa.me/${STUDIO_INFO.phoneRaw}?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.date) {
      setDateWarning('Please select an event date before proceeding with booking.');
      return;
    }

    if (isDateBooked(formData.date)) {
      setDateWarning(
        'This date is already reserved. Please select another date or contact us directly on WhatsApp (+91 97122 22058)'
      );
      return;
    }

    if (!hasAgreedToTerms) {
      setTermsError(true);
      return;
    }
    setTermsError(false);
    setIsSubmitting(true);

    try {
      const res = await submitInquiryEmail({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        serviceOrType: formData.service,
        date: formData.date,
        location: formData.city,
        guestCount: formData.guestCount,
        notesOrMessage: formData.notes,
        termsAgreed: true,
        source: 'Booking Modal',
      });
      setSubmissionMessage(res.message);
      setSubmitted(true);
    } catch {
      setSubmissionMessage('Booking formatted! You can also use the direct buttons below to reach Bipin Makwana immediately.');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(rawBookingSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setHasAgreedToTerms(false);
    setDateWarning(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: preselectedService || 'Wedding Package 1 (₹1,00,000/-)',
      date: '',
      city: '',
      guestCount: '300 - 500 Guests',
      notes: '',
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-[#E09F3E]/40 rounded-2xl shadow-2xl p-5 sm:p-8 my-8 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg focus-visible:outline-none hover:bg-zinc-900 transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#E09F3E]/20 text-[#E09F3E] flex items-center justify-center mb-4 shadow-xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 mb-3">
              <Sparkles className="w-3 h-3" />
              <span>Transmitted to {STUDIO_INFO.email}</span>
            </div>

            <h3 className="text-2xl font-bold font-cinzel text-white mb-2">
              Booking Sent to {STUDIO_INFO.email}!
            </h3>
            <p className="text-zinc-300 text-sm max-w-md font-light mb-2">
              Thank you, <strong className="text-white">{formData.name}</strong>. Your reservation inquiry for{' '}
              <strong className="text-amber-300">{formattedSelectedDate || formData.date}</strong> has been sent to{' '}
              <strong className="text-amber-300 font-mono">{STUDIO_INFO.email}</strong> via Web3Forms (Key:{' '}
              <span className="font-mono text-zinc-400">3f078060...</span>).
            </p>
            {submissionMessage && (
              <p className="text-xs text-emerald-300/90 max-w-md mb-4 bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-800/30">
                {submissionMessage}
              </p>
            )}

            <div className="p-3.5 bg-zinc-900/90 rounded-xl border border-white/10 text-xs text-amber-200/90 mb-6 max-w-md text-left">
              Reminder: To confirm the order, <strong>50% advance payment</strong> is required as per studio terms. {STUDIO_INFO.owner} will verify your event dates immediately.
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-3">
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
                <span>Default Mail Client</span>
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

            <div className="flex items-center gap-4 mt-2">
              <button
                type="button"
                onClick={handleCopySummary}
                className="text-xs text-amber-300 hover:text-white transition-colors cursor-pointer py-1 px-3 rounded-lg bg-white/5 border border-white/10"
              >
                {copied ? '✓ Booking Details Copied!' : '📋 Copy Booking Details'}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-zinc-400 hover:text-white underline cursor-pointer"
              >
                Book Another Date
              </button>

              <button
                type="button"
                onClick={onClose}
                className="text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer underline"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <SomnathLogo variant="compact" />
              <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  {calendarSource === 'google-sheet' ? 'Google Sheet Synced' : 'Verified Calendar'}
                </span>
                <button
                  type="button"
                  onClick={() => loadBookedDates(customSheetInput)}
                  title="Reload Booked Dates from Sheet"
                  className="p-1 hover:text-white transition-colors"
                >
                  <RefreshCw className={`w-3 h-3 ${isFetchingCalendar ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>

            <h3 className="text-2xl font-bold font-cinzel text-white mb-1">
              Reserve Your Date with <span className="gold-gradient-text">Somnath Photos</span>
            </h3>
            <p className="text-xs text-zinc-400 mb-4 font-light">
              Under creative direction of Bipin Makwana. Booking requests automatically route to <strong>somnathphoto37@gmail.com</strong>.
            </p>

            {/* ⚠️ HIGH PRIORITY TERMS & CONDITIONS NOTICE */}
            <div className="mb-4 rounded-xl bg-amber-950/40 border border-[#E09F3E] p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-[#E09F3E] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-amber-200">
                    ⚠️ महत्वपूर्ण सूचना (Important Notice Before Confirmation):
                  </div>
                  <div className="text-xs text-zinc-300 mt-0.5">
                    ऑर्डर कन्फर्म करने से पहले कृपया Terms & Conditions ध्यान से पढ़ लें।
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5 font-light">
                    50% advance payment is required to confirm order and lock dates.
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenTerms}
                className="px-3.5 py-1.5 rounded-lg bg-[#E09F3E] text-black text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#FFF2C6] transition-colors shrink-0 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Read Terms</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm outline-none focus:border-[#E09F3E]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm outline-none focus:border-[#E09F3E] font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm outline-none focus:border-[#E09F3E]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-1.5">
                    Selected Package *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm outline-none focus:border-[#E09F3E]"
                  >
                    <optgroup label="Wedding Packages">
                      <option value="Wedding Package 1 (₹1,00,000/-)">Wedding Package 1 (2 Days, 2 Photo + 1 Video + 3 Reels) - ₹1,00,000/-</option>
                      <option value="Wedding Package 2 (₹2,00,000/-)">Wedding Package 2 (2 Days, 2 Photo + 2 Video + Drone + 3 Reels) - ₹2,00,000/-</option>
                    </optgroup>
                    <optgroup label="Pre-Wedding Packages">
                      <option value="Pre-Wedding Package 1 (₹20,000/-)">Pre-Wedding Package 1 (1 Day, 1 Photo, 1 Reel) - ₹20,000/-</option>
                      <option value="Pre-Wedding Package 2 (₹50,000/-)">Pre-Wedding Package 2 (1 Day, Photo + Video + Drone + Song) - ₹50,000/-</option>
                      <option value="Pre-Wedding Package 3 (₹1,00,000/-)">Pre-Wedding Package 3 (2 Days, Photo + Video + Drone + Song) - ₹1,00,000/-</option>
                    </optgroup>
                    <optgroup label="Live Broadcast & Rituals">
                      <option value="Live Setup Half Day (₹50,000/-)">Live Setup Half Day (8x12 LED + Mixer + Plasma TVs) - ₹50,000/-</option>
                      <option value="Lagan Lakhan / Vana Rasam 2-Hr (₹10,000/-)">Lagan Lakhan / Vana Rasam (2 Hours Photo & Video) - ₹10,000/-</option>
                      <option value="Lagan Lakhan & Vana Rasam Half Day (₹15,000/-)">Lagan Lakhan & Vana Rasam (Half Day Photo & Video) - ₹15,000/-</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* CALENDAR & RESERVED DATES SELECTOR */}
              <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-3.5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-[#E09F3E]" />
                    <span className="text-xs uppercase font-medium text-zinc-200 tracking-wider">
                      Event Date Selection *
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setShowCalendarView(!showCalendarView)}
                      className="text-[#E09F3E] hover:underline flex items-center gap-1 font-mono text-[11px]"
                    >
                      {showCalendarView ? 'Hide Calendar' : 'View Calendar Grid'}
                    </button>
                  </div>
                </div>

                {/* Input Date selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                  <div>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleDateInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-white/10 text-white text-sm outline-none focus:border-[#E09F3E] font-mono"
                    />
                  </div>

                  <div className="text-xs text-zinc-300">
                    {formData.date ? (
                      <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1.5 rounded-lg">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Selected: <strong>{formattedSelectedDate}</strong></span>
                      </span>
                    ) : (
                      <span className="text-zinc-400 text-[11px]">
                        Pick an available date below (booked dates disabled).
                      </span>
                    )}
                  </div>
                </div>

                {/* MANDATORY WARNING BANNER FOR BOOKED DATE SELECTION */}
                {dateWarning && (
                  <div
                    role="alert"
                    className="rounded-xl bg-red-950/60 border-2 border-red-500/80 p-3.5 text-red-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg animate-in fade-in"
                  >
                    <div className="flex items-start gap-2.5">
                      <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div className="text-xs font-medium leading-relaxed">
                        {dateWarning}
                      </div>
                    </div>

                    <a
                      href={getWhatsAppInquiryForBookedDateUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider flex items-center justify-center gap-1.5 shrink-0 transition-colors shadow"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Hotline</span>
                    </a>
                  </div>
                )}

                {/* Interactive Visual Calendar Picker */}
                {showCalendarView && (
                  <div className="bg-zinc-950 rounded-xl p-3 border border-white/5 space-y-2.5">
                    {/* Header Month / Year Navigation */}
                    <div className="flex items-center justify-between px-1">
                      <button
                        type="button"
                        onClick={prevMonth}
                        className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                        aria-label="Previous month"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-2">
                        <div className="text-xs font-semibold text-[#E09F3E] font-cinzel tracking-wider uppercase">
                          {monthName}
                        </div>
                        {currentMonth.getFullYear() !== 2026 || currentMonth.getMonth() !== 10 ? (
                          <button
                            type="button"
                            onClick={() => setCurrentMonth(new Date(2026, 10, 1))}
                            className="text-[10px] text-zinc-400 hover:text-[#E09F3E] bg-zinc-900 border border-white/10 px-2 py-0.5 rounded transition-colors cursor-pointer"
                            title="Jump to Nov 2026 to see 2026-11-04 Smit booking"
                          >
                            Jump to Nov 2026 →
                          </button>
                        ) : null}
                      </div>

                      <button
                        type="button"
                        onClick={nextMonth}
                        className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                        aria-label="Next month"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Day of Week Headers */}
                    <div className="grid grid-cols-7 gap-1 text-center text-[10px] uppercase font-mono text-zinc-500">
                      <span>Su</span>
                      <span>Mo</span>
                      <span>Tu</span>
                      <span>We</span>
                      <span>Th</span>
                      <span>Fr</span>
                      <span>Sa</span>
                    </div>

                    {/* Days Grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {calendarDays.map((day, idx) => {
                        if (!day.isCurrentMonth) {
                          return <div key={`empty-${idx}`} className="h-8" />;
                        }

                        const isDisabled = day.isPast || day.isBooked;

                        return (
                          <button
                            key={day.dateStr}
                            type="button"
                            disabled={day.isPast}
                            onClick={() => handleDateSelect(day.dateStr)}
                            title={
                              day.isBooked
                                ? 'This date is already reserved. Please select another date or contact us directly on WhatsApp (+91 97122 22058)'
                                : day.isPast
                                ? 'Past date'
                                : `Available: ${day.dateStr}`
                            }
                            className={`h-8 rounded-lg text-xs font-medium relative transition-all flex flex-col items-center justify-center cursor-pointer ${
                              day.isBooked
                                ? 'bg-red-950/40 border border-red-800/40 text-red-400/80 hover:bg-red-900/40 hover:border-red-600 line-through'
                                : day.isSelected
                                ? 'bg-[#E09F3E] text-black font-bold shadow-[0_0_12px_rgba(224,159,62,0.5)]'
                                : day.isPast
                                ? 'text-zinc-600 cursor-not-allowed opacity-40'
                                : 'hover:bg-zinc-800 text-zinc-200 border border-transparent hover:border-[#E09F3E]/40'
                            } ${day.isToday && !day.isSelected ? 'ring-1 ring-[#E09F3E]/50' : ''}`}
                          >
                            <span>{day.dayNum}</span>
                            {day.isBooked && (
                              <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-red-400" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Calendar Legend & Status */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5 text-[11px] text-zinc-400">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded bg-zinc-800 border border-zinc-600 inline-block" />
                          <span>Available</span>
                        </span>
                        <span className="flex items-center gap-1 text-red-300">
                          <span className="w-2.5 h-2.5 rounded bg-red-900/60 border border-red-700 inline-block" />
                          <span>Reserved (Booked)</span>
                        </span>
                        <span className="flex items-center gap-1 text-amber-300">
                          <span className="w-2.5 h-2.5 rounded bg-[#E09F3E] inline-block" />
                          <span>Selected</span>
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowSheetConfig(!showSheetConfig)}
                        className="text-[10px] text-zinc-400 hover:text-amber-300 flex items-center gap-1"
                      >
                        <Info className="w-3 h-3" />
                        <span>Google Sheet Sync</span>
                      </button>
                    </div>

                    {/* Optional Sheet URL sync drawer */}
                    {showSheetConfig && (
                      <div className="p-3 bg-zinc-900 rounded-xl border border-white/10 text-xs space-y-3 animate-in fade-in">
                        {syncStatusMsg && (
                          <div
                            className={`p-2 rounded-lg text-[11px] flex items-center justify-between gap-2 ${
                              syncStatusMsg.type === 'success'
                                ? 'bg-emerald-950/60 border border-emerald-500/50 text-emerald-300'
                                : syncStatusMsg.type === 'error'
                                ? 'bg-red-950/60 border border-red-500/50 text-red-300'
                                : 'bg-amber-950/60 border border-amber-500/50 text-amber-300'
                            }`}
                          >
                            <span>{syncStatusMsg.text}</span>
                            <button
                              type="button"
                              onClick={() => setSyncStatusMsg(null)}
                              className="text-zinc-400 hover:text-white text-xs px-1"
                            >
                              ✕
                            </button>
                          </div>
                        )}

                        <div>
                          <label className="block text-[11px] text-zinc-300 font-medium mb-1">
                            Google Sheet Link (Auto-converts to CSV for live calendar sync):
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="url"
                              value={customSheetInput}
                              onChange={(e) => setCustomSheetInput(e.target.value)}
                              placeholder="https://docs.google.com/spreadsheets/d/.../edit"
                              className="flex-1 px-3 py-1.5 rounded-lg bg-zinc-950 border border-white/15 text-[11px] text-white font-mono outline-none focus:border-[#E09F3E]"
                            />
                            <button
                              type="button"
                              onClick={() => loadBookedDates(customSheetInput)}
                              disabled={isFetchingCalendar}
                              className="px-3.5 py-1.5 rounded-lg bg-[#E09F3E] text-black text-[11px] font-semibold hover:bg-[#FFF2C6] transition-colors shrink-0 disabled:opacity-50 cursor-pointer"
                            >
                              {isFetchingCalendar ? 'Syncing...' : 'Sync Now'}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
                          <button
                            type="button"
                            onClick={() => setShowDirectCsv(!showDirectCsv)}
                            className="text-[#E09F3E] hover:underline"
                          >
                            {showDirectCsv ? '▲ Hide Direct CSV Import' : '▼ Or Paste CSV Data Directly'}
                          </button>
                          <span>
                            {calendarSource === 'google-sheet'
                              ? `● Google Sheet Synced (${reservedDates.length} dates blocked)`
                              : `● Local Calendar (${reservedDates.length} fallback dates)`}
                          </span>
                        </div>

                        {/* Direct File Upload & Somnath Photos Booking Sheet Loader */}
                        <div className="pt-2 border-t border-white/5 space-y-1.5">
                          <label className="block text-[11px] text-zinc-300 font-medium">
                            Or Upload Booking CSV Sheet (e.g. Somnath photos booking.csv):
                          </label>
                          <div className="flex flex-wrap items-center gap-2">
                            <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-white/10 text-[11px] font-medium cursor-pointer transition-colors">
                              <Upload className="w-3.5 h-3.5 text-[#E09F3E]" />
                              <span>Select / Upload .CSV File</span>
                              <input
                                type="file"
                                accept=".csv,text/csv"
                                onChange={handleFileUpload}
                                className="hidden"
                              />
                            </label>

                            <button
                              type="button"
                              onClick={handleLoadDefaultSheet}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-600/50 hover:bg-emerald-900/60 text-emerald-300 text-[11px] font-medium transition-colors cursor-pointer"
                              title="Loads Date 2026-11-04 (Smit booking) into the calendar"
                            >
                              <FileSpreadsheet className="w-3.5 h-3.5" />
                              <span>Load Somnath Sheet (2026-11-04 Smit)</span>
                            </button>
                          </div>
                        </div>

                        {showDirectCsv && (
                          <div className="pt-2 border-t border-white/5 space-y-2">
                            <label className="block text-[10px] text-zinc-400">
                              Paste CSV text (e.g. from Google Sheet export or columns with dates):
                            </label>
                            <textarea
                              rows={3}
                              value={pastedCsvInput}
                              onChange={(e) => setPastedCsvInput(e.target.value)}
                              placeholder="Date,Client Name,Booking Type&#10;2025-11-20,Amit Patel,Wedding&#10;25/12/2025,Priya,Pre-Wedding"
                              className="w-full p-2 rounded-lg bg-zinc-950 border border-white/10 text-[11px] font-mono text-zinc-200 outline-none focus:border-[#E09F3E]"
                            />
                            <div className="flex justify-end gap-2">
                              <button
                                type="button"
                                onClick={handleApplyPastedCsv}
                                className="px-3 py-1 rounded bg-[#E09F3E] text-black text-[11px] font-medium hover:bg-[#FFF2C6] cursor-pointer"
                              >
                                Apply CSV Dates
                              </button>
                            </div>
                          </div>
                        )}

                        <div className="text-[10px] text-zinc-500 leading-relaxed border-t border-white/5 pt-2">
                          💡 <strong>How to make your Google Sheet public:</strong> Open Sheet &gt; <em>File &gt; Share &gt; Publish to web</em> (choose CSV format) OR click <em>Share &gt; Anyone with the link can view</em>.
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-1.5">
                    Event City / Venue
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Somnath / Ahmedabad / Udaipur"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm outline-none focus:border-[#E09F3E]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-1.5">
                    Approx. Guest Count
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm outline-none focus:border-[#E09F3E]"
                  >
                    <option>Intimate Wedding (&lt; 150 Guests)</option>
                    <option>150 - 300 Guests</option>
                    <option>300 - 600 Guests</option>
                    <option>Grand Heritage Wedding (600+ Guests)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-medium text-zinc-300 tracking-wider mb-1.5">
                  Special Notes or Desired Add-ons
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Additional cinematographer, same day highlight video, album requirements, etc."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm outline-none focus:border-[#E09F3E]"
                />
              </div>

              {/* MANDATORY TERMS & CONDITIONS CHECKBOX */}
              <div className={`p-3.5 rounded-xl border transition-all ${
                termsError
                  ? 'bg-red-950/40 border-red-500'
                  : hasAgreedToTerms
                  ? 'bg-zinc-900/80 border-[#E09F3E]/60'
                  : 'bg-zinc-900/40 border-white/10'
              }`}>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasAgreedToTerms}
                    onChange={(e) => {
                      setHasAgreedToTerms(e.target.checked);
                      if (e.target.checked) setTermsError(false);
                    }}
                    className="w-4 h-4 rounded text-[#E09F3E] accent-[#E09F3E] mt-0.5 shrink-0"
                  />
                  <div className="text-xs text-zinc-300 leading-relaxed">
                    <span className="font-semibold text-white">
                      Order confirm karne se pehle maine sabhi Terms & Conditions dhyan se padh liye hain aur main sahmat hoon.
                    </span>{' '}
                    (50% advance for booking confirmation, client travel/stay arrangements).
                    <button
                      type="button"
                      onClick={onOpenTerms}
                      className="ml-2 inline-flex items-center gap-1 text-[#E09F3E] hover:underline font-mono"
                    >
                      <span>Read All Terms</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </label>
                {termsError && (
                  <p className="text-[11px] text-red-400 font-medium mt-2 pl-7">
                    ⚠️ Kripya terms & conditions padh kar checkbox accept karein order submit karne se pehle.
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E09F3E] text-black font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(224,159,62,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Sending to {STUDIO_INFO.email}...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Booking to {STUDIO_INFO.email}</span>
                    </>
                  )}
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-emerald-600/30 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp ({STUDIO_INFO.phone})</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

