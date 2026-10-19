import React from 'react';
import { Terminal, Briefcase, ArrowRight } from 'lucide-react';
import { UserProfile } from '../types/portfolio';

interface AboutSectionProps {
  profile: UserProfile;
  onOpenStory: () => void;
  onOpenVentures: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  profile,
  onOpenStory,
  onOpenVentures,
}) => {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-36 bg-[#07080b] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-luxury-green mb-3">
            ARCHITECT & FOUNDER
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            The Convergence of Code and Commercial Scale
          </h2>
          <div className="w-12 h-[1px] bg-[#2d5a3f]/60 mx-auto mt-5 sm:mt-6" />
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-24">
          {/* Left Column: Lead Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <p className="font-editorial-serif text-xl sm:text-3xl text-neutral-200 leading-snug font-normal">
              "{profile.bioLead}"
            </p>
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenStory}
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-luxury-green hover:text-luxury-green-bright transition-colors cursor-pointer group min-h-[44px] py-2"
              >
                <span>EXPLORE THE LIFE STORY</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: In-depth Story */}
          <div className="lg:col-span-7 space-y-6 text-sm md:text-base text-neutral-400 font-light leading-relaxed">
            {profile.bioStory.map((paragraph, idx) => (
              <p key={idx} className="text-neutral-300/90">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Dual Foundation Cards: Computer Science Rigor vs. Agency Velocity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {/* Pillar 1: Computer Science */}
          <div className="p-5 sm:p-8 md:p-10 rounded-xl bg-[#0d1017] border border-white/[0.08] hover:border-[#386b4d]/50 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-[#091b12]/90 border border-[#2b563c]/40 flex items-center justify-center text-luxury-green mb-6">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-lg sm:text-xl font-medium tracking-wider text-white mb-3">
              The Computer Science Discipline
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mb-6">
              Rigorous grounding in algorithmic complexity, distributed systems, memory hierarchies, and software architecture. Academic inquiry provides the mental models to engineer software that does not break under load.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 font-mono">
              <span>Algorithms</span>
              <span aria-hidden="true">·</span>
              <span>Distributed Computing</span>
              <span aria-hidden="true">·</span>
              <span>Systems Design</span>
            </div>
          </div>

          {/* Pillar 2: Agency & Commercial Scale */}
          <div className="p-5 sm:p-8 md:p-10 rounded-xl bg-[#0d1017] border border-white/[0.08] hover:border-[#386b4d]/50 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-[#091b12]/90 border border-[#2b563c]/40 flex items-center justify-center text-luxury-green mb-6">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-lg sm:text-xl font-medium tracking-wider text-white mb-3">
              Agency Co-Founder & Digital Execution
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mb-6">
              Co-founding Mreza Studio and Metrika to engineer bespoke web platforms and direct-response digital infrastructure. Translating technical precision into high-converting digital authority, client growth, and reliable execution.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 font-mono">
              <span>Mreza Studio</span>
              <span aria-hidden="true">·</span>
              <span>Metrika</span>
              <span aria-hidden="true">·</span>
              <span>Web Architecture & Growth</span>
            </div>
          </div>
        </div>

        {/* Quantified Impact Numbers */}
        <div className="pt-10 sm:pt-12 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {profile.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-white tabular-nums mb-2">
                  {metric.value}
                </span>
                <span className="text-xs uppercase tracking-[0.18em] font-medium text-neutral-300 mb-1">
                  {metric.label}
                </span>
                <span className="text-xs text-neutral-500 font-light leading-relaxed">
                  {metric.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
