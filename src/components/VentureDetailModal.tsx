import React from 'react';
import { X, CheckCircle2, UserCheck } from 'lucide-react';
import { VentureItem } from '../types/portfolio';

interface VentureDetailModalProps {
  venture: VentureItem | null;
  onClose: () => void;
  onInquire: () => void;
}

export const VentureDetailModal: React.FC<VentureDetailModalProps> = ({
  venture,
  onClose,
  onInquire,
}) => {
  if (!venture) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0c0f16] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-10 z-10 my-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-3 mb-8 pr-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
            <span className="uppercase tracking-widest text-emerald-400">
              {venture.category === 'agency'
                ? 'Flagship Agency'
                : venture.category === 'software'
                ? 'Proprietary Software'
                : 'Venture Advisory'}
            </span>
            <span aria-hidden="true">·</span>
            <span>{venture.timeline}</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400">{venture.status}</span>
          </div>

          <h3 className="font-serif-luxury text-2xl sm:text-4xl font-normal text-white tracking-wide">
            {venture.name}
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            {venture.tagline}
          </p>
        </div>

        {/* Primary Metric Banner */}
        <div className="p-6 rounded-xl bg-[#131722] border border-white/[0.08] mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">
              {venture.keyMetric.label}
            </span>
            <span className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tabular-nums tracking-wide">
              {venture.keyMetric.value}
            </span>
          </div>
          <div className="text-xs text-neutral-400 font-mono flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>Role: {venture.role}</span>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-6 mb-8 text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-400">
            STRATEGIC OVERVIEW & ARCHITECTURE
          </h4>
          <p>{venture.overview}</p>
        </div>

        {/* Deliverables / Capabilities */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-400 mb-4">
            KEY DELIVERABLES & CORE CAPABILITIES
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {venture.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs sm:text-sm text-neutral-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-400 mb-3">
            TECHNOLOGY STACK
          </h4>
          <div className="flex flex-wrap gap-2">
            {venture.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onInquire();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-semibold tracking-wider uppercase rounded transition-colors cursor-pointer shadow-lg"
          >
            DISCUSS PARTNERSHIP OR CLIENT WORK
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
