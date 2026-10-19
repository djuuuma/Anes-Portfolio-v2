import React, { useState } from 'react';
import { VentureItem, VentureCategory } from '../types/portfolio';
import { ArrowUpRight, Building, Code, TrendingUp } from 'lucide-react';

interface VenturesSectionProps {
  ventures: VentureItem[];
  onSelectVenture: (venture: VentureItem) => void;
}

export const VenturesSection: React.FC<VenturesSectionProps> = ({
  ventures,
  onSelectVenture,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<VentureCategory>('all');

  const filteredVentures =
    selectedCategory === 'all'
      ? ventures
      : ventures.filter((v) => v.category === selectedCategory);

  const getCategoryBadgeIcon = (category: VentureItem['category']) => {
    switch (category) {
      case 'agency':
        return <Building className="w-3.5 h-3.5 text-emerald-400" />;
      case 'software':
        return <Code className="w-3.5 h-3.5 text-[#60a5fa]" />;
      case 'advisory':
        return <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />;
    }
  };

  return (
    <section id="ventures" className="py-28 md:py-36 bg-[#07080b] border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-emerald-400 mb-3">
              PORTFOLIO & VENTURES
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-white leading-tight">
              Companies, Software & Investments
            </h2>
          </div>

          {/* Interactive Filter Tabs (Segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#10131b] border border-white/[0.08] rounded-lg self-start md:self-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('agency')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                selectedCategory === 'agency'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Agency
            </button>
            <button
              onClick={() => setSelectedCategory('software')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                selectedCategory === 'software'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Software
            </button>
            <button
              onClick={() => setSelectedCategory('advisory')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                selectedCategory === 'advisory'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Advisory
            </button>
          </div>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVentures.map((venture) => (
            <div
              key={venture.id}
              onClick={() => onSelectVenture(venture)}
              className="group bg-[#0e1118] hover:bg-[#131722] border border-white/[0.07] hover:border-emerald-500/40 rounded-xl p-8 flex flex-col justify-between transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-1"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-6">
                  <div className="flex items-center gap-2">
                    {getCategoryBadgeIcon(venture.category)}
                    <span className="uppercase tracking-widest text-emerald-400">
                      {venture.category}
                    </span>
                  </div>
                  <span className="text-neutral-500">{venture.timeline}</span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-white tracking-wide group-hover:text-emerald-300 transition-colors mb-2">
                  {venture.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6 line-clamp-2">
                  {venture.tagline}
                </p>

                {/* Key Metric Feature */}
                <div className="p-4 rounded-lg bg-black/40 border border-white/[0.05] mb-6">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">
                    {venture.keyMetric.label}
                  </span>
                  <span className="font-serif-luxury text-2xl font-bold text-white tabular-nums tracking-wide">
                    {venture.keyMetric.value}
                  </span>
                </div>
              </div>

              {/* Card Footer: Tech Stack Snippet & CTA */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {venture.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[11px] font-mono text-neutral-400 bg-white/[0.03] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {venture.techStack.length > 3 && (
                    <span className="px-2 py-0.5 text-[11px] font-mono text-neutral-500">
                      +{venture.techStack.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-neutral-300 group-hover:text-white">
                  <span className="tracking-wider uppercase text-[11px]">Inspect Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
