import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemAgitation } from './components/ProblemAgitation';
import { ServicesBento } from './components/ServicesBento';
import { HowItWorks } from './components/HowItWorks';
import { Comparison } from './components/Comparison';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | undefined>(undefined);
  const [activeDemoTab, setActiveDemoTab] = useState('chat');

  const handleOpenBooking = (tier?: string) => {
    setSelectedTier(tier);
    setIsBookingOpen(true);
  };

  const handleExploreDemo = (tab: string) => {
    setActiveDemoTab(tab);
    const demoElement = document.getElementById('demos');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#D8D8D8] text-slate-900 selection:bg-indigo-500/20 selection:text-indigo-900">
      {/* Sticky Navigation */}
      <Navbar onBookCall={() => handleOpenBooking()} />

      <main>
        {/* 1. Hero Section (#D8D8D8 background) */}
        <Hero onBookCall={() => handleOpenBooking()} />

        {/* 2. Trust Bar (#A3A9A4 background) */}
        <TrustBar />

        {/* 3. Problem Agitation Section (#D8D8D8 background) */}
        <ProblemAgitation />

        {/* 4. Core Services Bento Grid (#A3A9A4 background) */}
        <ServicesBento 
          onBookCall={() => handleOpenBooking()} 
          onExploreDemo={handleExploreDemo} 
        />

        {/* 5. 4-Step Process & Live Agent Interactive Demo Showcase (#D8D8D8 background) */}
        <HowItWorks 
          onBookCall={() => handleOpenBooking()} 
          activeDemoTab={activeDemoTab}
        />

        {/* 6. Manual vs. AI Comparison Table & Interactive ROI Calculator (#A3A9A4 background) */}
        <Comparison onBookCall={() => handleOpenBooking()} />

        {/* 7. Engagement Models & Transparent Pricing Tiers (#D8D8D8 background) */}
        <Pricing onBookCall={(tier) => handleOpenBooking(tier)} />

        {/* 8. FAQ Accordion (#A3A9A4 background) */}
        <FAQ />

        {/* 9. Final High-Impact Strategy Call CTA (#D8D8D8 background) */}
        <FinalCTA onBookCall={() => handleOpenBooking()} />
      </main>

      {/* Footer (#A3A9A4 background) */}
      <Footer onBookCall={() => handleOpenBooking()} />

      {/* Global Booking & Roadmap Strategy Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedTier={selectedTier}
      />
    </div>
  );
};

export default App;
