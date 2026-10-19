import React from 'react';
import { X, CheckCircle2, UserCheck, ExternalLink, ArrowUpRight } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog / Mobile Bottom Sheet */}
      <div className="relative w-full max-w-3xl bg-[#0c0f16] border-t sm:border border-white/10 rounded-t-3xl sm:rounded-2xl shadow-2xl p-5 sm:p-10 z-10 max-h-[88vh] sm:max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-6 sm:slide-in-from-bottom-0 duration-300">
        {/* Mobile Pull Handle Indicator */}
        <div className="w-12 h-1.5 rounded-full bg-white/20 mx-auto mb-4 sm:hidden" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-3 mb-8 pr-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
            <span className="uppercase tracking-widest text-luxury-green font-semibold">
              Co-Founded Agency
            </span>
            <span aria-hidden="true">·</span>
            <span>{venture.timeline}</span>
            <span aria-hidden="true">·</span>
            <span className="text-luxury-green">{venture.status}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <h3 className="font-serif-luxury text-2xl sm:text-4xl font-normal text-white tracking-wide">
              {venture.name}
            </h3>
            {venture.featuredLink && (
              <a
                href={venture.featuredLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-300 hover:text-white transition-colors"
              >
                <span>Visit Agency</span>
                <ExternalLink className="w-3.5 h-3.5 text-luxury-green" />
              </a>
            )}
          </div>
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            {venture.shortDescription || venture.tagline}
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
          <div className="text-xs text-neutral-300 font-mono flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-luxury-green" />
            <span>Role: {venture.role}</span>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-3 mb-8 text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-400">
            OVERVIEW & VALUE PROPOSITION
          </h4>
          <p>{venture.overview}</p>
        </div>

        {/* Clickable Projects / Case Studies Showcase (for Mreza Studio) */}
        {venture.projects && venture.projects.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-300">
                SHIPPED CLIENT PLATFORMS & LIVE CASE STUDIES
              </h4>
              <span className="text-[11px] font-mono text-luxury-green">
                Click to view live site
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {venture.projects.map((proj, idx) => (
                <a
                  key={idx}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit live platform: ${proj.title}`}
                  aria-label={`Visit live platform: ${proj.title}`}
                  className="group/card p-4 rounded-xl bg-[#12151e] border border-white/[0.07] hover:border-luxury-green/60 hover:bg-[#161a25] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-serif-luxury text-base font-medium text-white group-hover/card:text-luxury-green-bright transition-colors">
                        {proj.title}
                      </h5>
                      <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover/card:text-luxury-green group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed mb-3">
                      {proj.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {proj.tags.map((t, tidx) => (
                      <span
                        key={tidx}
                        className="px-2 py-0.5 text-[10px] font-mono bg-white/[0.04] text-neutral-400 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Deliverables / Capabilities */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-400 mb-4">
            CORE CAPABILITIES & AGENCY DELIVERABLES
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {venture.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs sm:text-sm text-neutral-200"
              >
                <CheckCircle2 className="w-4 h-4 text-luxury-green shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-400 mb-3">
            TOOLS & INFRASTRUCTURE
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
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <button
            onClick={() => {
              onClose();
              onInquire();
            }}
            className="w-full sm:w-auto min-h-[48px] px-7 py-3 bg-luxury-green-button text-xs font-semibold tracking-wider uppercase rounded-xl sm:rounded transition-all active:scale-[0.98] cursor-pointer"
          >
            DISCUSS PROJECT OR ENGAGEMENT
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
