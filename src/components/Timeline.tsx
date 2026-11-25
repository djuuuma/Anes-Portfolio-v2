import React from 'react';
import { Milestone } from '../types/portfolio';

export const Timeline: React.FC<{ milestones: Milestone[] }> = ({ milestones }) => (
  <section id="story" className="px-5 sm:px-8 py-24 sm:py-32">
    <div className="max-w-6xl mx-auto">
      <h2 data-reveal className="text-sm text-neutral-500 mb-8 sm:mb-12">So far</h2>

      <ol>
        {milestones.map((m, i) => (
          <li
            key={m.year}
            data-reveal
            style={{ '--d': `${i * 60}ms` } as React.CSSProperties}
            className="grid grid-cols-[4.5rem_1fr] sm:grid-cols-[10rem_1fr] gap-x-4 py-4 sm:py-5 border-t border-white/10 last:border-b"
          >
            <span className="tabular-nums text-neutral-500">{m.year}</span>
            <span className="text-lg sm:text-xl leading-snug text-neutral-200">{m.text}</span>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
