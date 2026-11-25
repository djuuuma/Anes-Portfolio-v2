import React from 'react';
import { profile, projects, sideProjects, ventures, milestones } from './data/initialData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Work } from './components/Work';
import { Ventures } from './components/Ventures';
import { SideProjects } from './components/SideProjects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { useReveal } from './hooks/useScrollProgress';

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-[#07080b] text-[#e2e5eb] font-modern-sans antialiased">
      <Navbar brandName={profile.fullName} />
      <Hero name={profile.name} image="/anes-sarajevo.webp" />
      <main>
        <Intro profile={profile} />
        <Work projects={projects} />
        <Ventures ventures={ventures} />
        <SideProjects projects={sideProjects} />
        <Timeline milestones={milestones} />
      </main>
      <Contact profile={profile} image="/anes-seaside.webp" />
    </div>
  );
}
