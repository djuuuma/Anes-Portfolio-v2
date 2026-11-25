import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SideProject } from '../types/portfolio';

const linkClass =
  'inline-flex items-center gap-1 min-h-[44px] text-sm text-neutral-400 hover:text-white transition-colors';

export const SideProjects: React.FC<{ projects: SideProject[] }> = ({ projects }) => (
  <section id="side-projects" className="px-5 sm:px-8 py-24 sm:py-32">
    <div className="max-w-6xl mx-auto">
      <h2 data-reveal className="text-sm text-neutral-500 mb-8 sm:mb-12">
        Side projects
      </h2>

      <ul className="grid sm:grid-cols-2 gap-x-10 border-t border-white/10">
        {projects.map((p, i) => (
          <li
            key={p.name}
            data-reveal
            style={{ '--d': `${i * 90}ms` } as React.CSSProperties}
            className="py-6 sm:py-8 border-b border-white/10"
          >
            <p className="text-sm text-neutral-500 tabular-nums">{p.year}</p>
            <h3 className="mt-2 text-[clamp(1.6rem,3.2vw,2.5rem)] leading-none tracking-[-0.035em] font-medium text-white">
              {p.name}
            </h3>
            <p className="mt-3 max-w-md text-lg leading-snug text-neutral-400">{p.line}</p>
            <div className="mt-2 flex gap-6">
              <a href={p.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Open <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Code <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
