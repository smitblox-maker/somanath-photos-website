import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TopVideosSection } from './components/TopVideosSection';
import { AboutFounder } from './components/AboutFounder';
import { PortfolioGallery } from './components/PortfolioGallery';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramFeed } from './components/InstagramFeed';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { TermsModal } from './components/TermsModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(undefined);
  };

  const handleOpenTerms = () => {
    setIsTermsOpen(true);
  };

  const handleCloseTerms = () => {
    setIsTermsOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col selection:bg-[#E09F3E]/30 selection:text-white">
      {/* 3-Zone Navigation Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenTerms={handleOpenTerms}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Cinema Background */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Top Videos & Cinema Teasers Showcase */}
        <TopVideosSection onOpenBooking={handleOpenBooking} />

        {/* 3. About Us & Owner Spotlight (Bipin Makwana) */}
        <AboutFounder onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Portfolio Showcase (Real Photo Frames) */}
        <PortfolioGallery onOpenBooking={handleOpenBooking} />

        {/* 4. Services & Official Pricing Packages + Terms Notice */}
        <ServicesSection
          onOpenBooking={handleOpenBooking}
          onOpenTerms={handleOpenTerms}
        />

        {/* 6. Client Testimonials */}
        <TestimonialsSection />

        {/* 7. Instagram Live Showcase */}
        <InstagramFeed />

        {/* 8. Studio Contact & Quick Inquiry Form */}
        <ContactSection />
      </main>

      {/* Studio Footer */}
      <Footer onOpenTerms={handleOpenTerms} />

      {/* Interactive Booking Wizard Modal with Terms Verification */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        onOpenTerms={handleOpenTerms}
        preselectedService={selectedService}
      />

      {/* Dedicated Terms & Conditions Modal (17 Points Policy) */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={handleCloseTerms}
        onAgreeAndProceed={() => {
          setIsTermsOpen(false);
          setIsBookingOpen(true);
        }}
      />
    </div>
  );
}
