import React, { useState } from 'react';
import { TimelineMilestone } from '../types/portfolio';
import { ChevronRight, Award, GraduationCap, Building2, Code2 } from 'lucide-react';

interface LifeStoryTimelineProps {
  milestones: TimelineMilestone[];
}

export const LifeStoryTimeline: React.FC<LifeStoryTimelineProps> = ({ milestones }) => {
  const [activeMilestoneId, setActiveMilestoneId] = useState<number>(milestones.length - 1);

  const getCategoryIcon = (category: TimelineMilestone['category']) => {
    switch (category) {
      case 'academics':
        return <GraduationCap className="w-4 h-4 text-emerald-400" />;
      case 'agency':
        return <Building2 className="w-4 h-4 text-emerald-400" />;
      case 'software':
        return <Code2 className="w-4 h-4 text-[#60a5fa]" />;
      default:
        return <Award className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="story" className="py-28 md:py-36 bg-[#090c12] border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-emerald-400 mb-3">
              JOURNEY & EVOLUTION
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-white leading-tight">
              From Algorithmic Theory to Enterprise Reality
            </h2>
          </div>
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 font-mono">
            CHRONOLOGICAL MILESTONES · 2022 — PRESENT
          </p>
        </div>

        {/* Timeline Desktop Grid & Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Milestone Navigator / Left Column */}
          <div className="lg:col-span-5 space-y-4">
            {milestones.map((milestone, idx) => {
              const isActive = activeMilestoneId === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveMilestoneId(idx)}
                  className={`w-full text-left p-6 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                    isActive
                      ? 'bg-[#121622] border-emerald-500/40 shadow-xl'
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
                    <h3 className="font-serif-luxury text-base font-medium text-white tracking-wide">
                      {milestone.title}
                    </h3>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 mt-1 transition-transform ${
                      isActive ? 'text-emerald-400 translate-x-1' : 'text-neutral-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Milestone Deep Dive / Right Column */}
          <div className="lg:col-span-7 bg-[#121622] border border-white/[0.08] rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              {/* Header Info */}
              <div className="border-b border-white/[0.08] pb-6">
                <div className="flex items-center gap-3 text-xs text-emerald-400 font-mono mb-2">
                  <span>{milestones[activeMilestoneId].year}</span>
                  <span aria-hidden="true">·</span>
                  <span className="uppercase tracking-widest text-neutral-400">
                    {milestones[activeMilestoneId].phase}
                  </span>
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white tracking-wide mb-3">
                  {milestones[activeMilestoneId].title}
                </h3>
                {milestones[activeMilestoneId].metrics && (
                  <div className="inline-block text-xs font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded">
                    {milestones[activeMilestoneId].metrics}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                <p>{milestones[activeMilestoneId].description}</p>
              </div>

              {/* Key Learnings & Takeaways */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-4">
                  STRATEGIC & TECHNICAL TAKEAWAYS
                </h4>
                <ul className="space-y-3">
                  {milestones[activeMilestoneId].keyLearnings.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation buttons between milestones */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <button
                  disabled={activeMilestoneId === 0}
                  onClick={() => setActiveMilestoneId((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 transition-colors cursor-pointer"
                >
                  ← PREVIOUS PHASE
                </button>
                <span className="text-neutral-500">
                  {activeMilestoneId + 1} / {milestones.length}
                </span>
                <button
                  disabled={activeMilestoneId === milestones.length - 1}
                  onClick={() =>
                    setActiveMilestoneId((prev) => Math.min(milestones.length - 1, prev + 1))
                  }
                  className="px-3 py-1.5 text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 transition-colors cursor-pointer"
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
