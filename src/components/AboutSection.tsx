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
    <section id="about" className="relative py-28 md:py-36 bg-[#07080b] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-emerald-400 mb-3">
            ARCHITECT & FOUNDER
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-white leading-tight">
            The Convergence of Code and Commercial Scale
          </h2>
          <div className="w-12 h-[1px] bg-emerald-500/40 mx-auto mt-6" />
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Lead Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <p className="font-editorial-serif text-2xl sm:text-3xl text-neutral-200 leading-snug italic font-light">
              "{profile.bioLead}"
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenStory}
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Pillar 1: Computer Science */}
          <div className="p-8 sm:p-10 rounded-xl bg-[#0d1017] border border-white/[0.08] hover:border-emerald-500/30 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-xl font-medium tracking-wider text-white mb-3">
              The Computer Science Discipline
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
              Rigorous grounding in algorithmic complexity, distributed systems, memory hierarchies, and software architecture. Academic inquiry provides the mental models to engineer software that does not break under load.
            </p>
            <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
              <span>Algorithms</span>
              <span aria-hidden="true">·</span>
              <span>Distributed Computing</span>
              <span aria-hidden="true">·</span>
              <span>Systems Design</span>
            </div>
          </div>

          {/* Pillar 2: Agency & Commercial Scale */}
          <div className="p-8 sm:p-10 rounded-xl bg-[#0d1017] border border-white/[0.08] hover:border-emerald-500/30 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-xl font-medium tracking-wider text-white mb-3">
              Commercial Leverage & Agency Leadership
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
              Translating technical depth into high-converting digital authority and revenue pipelines for enterprise clients. Leading teams, managing client relationships, and shipping high-stakes digital infrastructure.
            </p>
            <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
              <span>High-Ticket Delivery</span>
              <span aria-hidden="true">·</span>
              <span>Brand Authority</span>
              <span aria-hidden="true">·</span>
              <span>Operational SOPs</span>
            </div>
          </div>
        </div>

        {/* Quantified Impact Numbers */}
        <div className="pt-12 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
