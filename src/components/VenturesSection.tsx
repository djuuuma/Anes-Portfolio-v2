import React, { useState } from 'react';
import { VentureItem } from '../types/portfolio';
import { ArrowUpRight, Globe, Layers, TrendingUp } from 'lucide-react';

interface VenturesSectionProps {
  ventures: VentureItem[];
  onSelectVenture: (venture: VentureItem) => void;
}

export const VenturesSection: React.FC<VenturesSectionProps> = ({
  ventures,
  onSelectVenture,
}) => {
  const [selectedVentureId, setSelectedVentureId] = useState<string>('all');

  const filteredVentures =
    selectedVentureId === 'all'
      ? ventures
      : ventures.filter((v) => v.id === selectedVentureId);

  return (
    <section id="ventures" className="py-28 md:py-36 bg-[#07080b] border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-luxury-green mb-3">
              CO-FOUNDED VENTURES
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              Agencies & Digital Operations
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#10131b] border border-white/[0.08] rounded-lg self-start md:self-auto">
            <button
              onClick={() => setSelectedVentureId('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                selectedVentureId === 'all'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Ventures
            </button>
            <button
              onClick={() => setSelectedVentureId('mreza-studio')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                selectedVentureId === 'mreza-studio'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Mreza Studio
            </button>
            <button
              onClick={() => setSelectedVentureId('metrika-agency')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                selectedVentureId === 'metrika-agency'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Metrika
            </button>
          </div>
        </div>

        {/* Ventures Grid - 2 Column balanced layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVentures.map((venture) => (
            <div
              key={venture.id}
              onClick={() => onSelectVenture(venture)}
              className="group bg-[#0e1118] hover:bg-[#131722] border border-white/[0.07] hover:border-[#386b4d]/50 rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle accent line on top */}
              <div
                className="absolute top-0 inset-x-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: venture.accentColor }}
              />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-6">
                  <div className="flex items-center gap-2">
                    {venture.id === 'mreza-studio' ? (
                      <Layers className="w-3.5 h-3.5 text-luxury-green" />
                    ) : (
                      <TrendingUp className="w-3.5 h-3.5 text-[#60a5fa]" />
                    )}
                    <span className="uppercase tracking-widest text-luxury-green font-semibold">
                      {venture.role}
                    </span>
                  </div>
                  <span className="text-neutral-500">{venture.timeline}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white tracking-wide group-hover:text-luxury-green-bright transition-colors mb-3">
                  {venture.name}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  {venture.shortDescription || venture.overview}
                </p>
              </div>

              {/* Card Footer: Tech Stack Snippet & CTA */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {venture.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 text-[11px] font-mono text-neutral-300 bg-white/[0.03] border border-white/[0.05] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-neutral-300 group-hover:text-white">
                  <span className="tracking-wider uppercase text-[11px]">
                    {venture.projects ? 'Inspect Case Studies & Client Work' : 'Inspect Capabilities & GTM'}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-luxury-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
