import React, { useState } from 'react';
import { initialProfile, initialVentures, initialMilestones } from './data/initialData';
import { VentureItem } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { LifeStoryTimeline } from './components/LifeStoryTimeline';
import { VenturesSection } from './components/VenturesSection';
import { VentureDetailModal } from './components/VentureDetailModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const profile = initialProfile;
  const heroImage = '/anes-sarajevo.webp';
  const [selectedVenture, setSelectedVenture] = useState<VentureItem | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07080b] text-[#e2e5eb] selection:bg-[#1b4332]/60 selection:text-white font-modern-sans antialiased">
      {/* Top Navigation */}
      <Navbar brandName={profile.fullName} />

      {/* Hero Section */}
      <Hero
        name={profile.name}
        customImage={heroImage}
      />

      {/* About Section */}
      <AboutSection
        profile={profile}
        onOpenStory={() => scrollToSection('story')}
        onOpenVentures={() => scrollToSection('ventures')}
      />

      {/* Life Story & Milestones Timeline */}
      <LifeStoryTimeline milestones={initialMilestones} />

      {/* Ventures & Companies Showcase */}
      <VenturesSection
        ventures={initialVentures}
        onSelectVenture={(v) => setSelectedVenture(v)}
      />

      {/* Direct Contact & Inquiries */}
      <ContactSection profile={profile} />

      {/* Footer */}
      <Footer name={profile.fullName} />

      {/* Venture Detail Modal */}
      <VentureDetailModal
        venture={selectedVenture}
        onClose={() => setSelectedVenture(null)}
        onInquire={() => {
          setSelectedVenture(null);
          scrollToSection('contact');
        }}
      />
    </div>
  );
}
