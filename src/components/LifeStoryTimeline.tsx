import React, { useState, useRef } from 'react';
import { TimelineMilestone } from '../types/portfolio';
import { ChevronRight, Award, GraduationCap, Building2, Code2 } from 'lucide-react';

interface LifeStoryTimelineProps {
  milestones: TimelineMilestone[];
}

export const LifeStoryTimeline: React.FC<LifeStoryTimelineProps> = ({ milestones }) => {
  const [activeMilestoneId, setActiveMilestoneId] = useState<number>(milestones.length - 1);
  const detailCardRef = useRef<HTMLDivElement>(null);

  const handleMilestoneSelect = (idx: number) => {
    setActiveMilestoneId(idx);
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setTimeout(() => {
        detailCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  const getCategoryIcon = (category: TimelineMilestone['category']) => {
    switch (category) {
      case 'academics':
        return <GraduationCap className="w-4 h-4 text-luxury-green" />;
      case 'agency':
        return <Building2 className="w-4 h-4 text-luxury-green" />;
      case 'software':
        return <Code2 className="w-4 h-4 text-[#60a5fa]" />;
      default:
        return <Award className="w-4 h-4 text-luxury-green" />;
    }
  };

  return (
    <section id="story" className="py-16 sm:py-24 md:py-36 bg-[#090c12] border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-4 sm:gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-luxury-green mb-3">
              JOURNEY & EVOLUTION
            </p>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              From Algorithmic Theory to Enterprise Reality
            </h2>
          </div>
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 font-mono">
            CHRONOLOGICAL MILESTONES · 2022 — PRESENT
          </p>
        </div>

        {/* Timeline Desktop Grid & Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Milestone Navigator / Left Column */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            {milestones.map((milestone, idx) => {
              const isActive = activeMilestoneId === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleMilestoneSelect(idx)}
                  className={`w-full text-left p-4 sm:p-6 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-4 active:scale-[0.99] ${
                    isActive
                      ? 'bg-[#121622] border-luxury-green shadow-xl ring-1 ring-luxury-green/40'
                      : 'bg-[#0d1017]/70 border-white/[0.06] hover:bg-[#121622]/60 hover:border-white/15'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5 text-xs">
                      {getCategoryIcon(milestone.category)}
                      <span className="font-mono text-xs font-semibold tracking-wider text-neutral-300">
                        {milestone.year}
                      </span>
                      <span className="text-neutral-600" aria-hidden="true">·</span>
                      <span className="text-[11px] uppercase tracking-widest text-neutral-400">
                        {milestone.phase}
                      </span>
                    </div>
                    <h3 className="font-serif-luxury text-sm sm:text-base font-medium text-white tracking-wide">
                      {milestone.title}
                    </h3>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 mt-1 shrink-0 transition-transform ${
                      isActive ? 'text-luxury-green translate-x-1' : 'text-neutral-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Milestone Deep Dive / Right Column */}
          <div
            ref={detailCardRef}
            className="lg:col-span-7 bg-[#121622] border border-white/[0.08] rounded-2xl p-5 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden scroll-mt-24"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#163825]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6 sm:space-y-8">
              {/* Header Info */}
              <div className="border-b border-white/[0.08] pb-5 sm:pb-6">
                <div className="flex items-center gap-3 text-xs text-luxury-green font-mono mb-2">
                  <span>{milestones[activeMilestoneId].year}</span>
                  <span aria-hidden="true">·</span>
                  <span className="uppercase tracking-widest text-neutral-400">
                    {milestones[activeMilestoneId].phase}
                  </span>
                </div>
                <h3 className="font-serif-luxury text-xl sm:text-3xl font-medium text-white tracking-wide mb-3">
                  {milestones[activeMilestoneId].title}
                </h3>
                {milestones[activeMilestoneId].metrics && (
                  <div className="inline-block text-xs font-medium bg-luxury-green-badge px-3 py-1 rounded">
                    {milestones[activeMilestoneId].metrics}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="text-neutral-300 text-xs sm:text-base leading-relaxed font-light">
                <p>{milestones[activeMilestoneId].description}</p>
              </div>

              {/* Key Learnings & Takeaways */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-3 sm:mb-4">
                  STRATEGIC & TECHNICAL TAKEAWAYS
                </h4>
                <ul className="space-y-2.5 sm:space-y-3">
                  {milestones[activeMilestoneId].keyLearnings.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4a775a] mt-1.5 sm:mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation buttons between milestones */}
              <div className="pt-5 sm:pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <button
                  disabled={activeMilestoneId === 0}
                  onClick={() => handleMilestoneSelect(Math.max(0, activeMilestoneId - 1))}
                  className="min-h-[44px] px-3.5 py-2 text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 transition-colors cursor-pointer flex items-center"
                >
                  ← PREVIOUS PHASE
                </button>
                <span className="text-neutral-500">
                  {activeMilestoneId + 1} / {milestones.length}
                </span>
                <button
                  disabled={activeMilestoneId === milestones.length - 1}
                  onClick={() =>
                    handleMilestoneSelect(Math.min(milestones.length - 1, activeMilestoneId + 1))
                  }
                  className="min-h-[44px] px-3.5 py-2 text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 transition-colors cursor-pointer flex items-center"
                >
                  NEXT PHASE →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
