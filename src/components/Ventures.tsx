import React from 'react';
import { Venture } from '../types/portfolio';

export const Ventures: React.FC<{ ventures: Venture[] }> = ({ ventures }) => (
  <section id="ventures" className="px-5 sm:px-8 py-24 sm:py-32">
    <div className="max-w-6xl mx-auto">
      <h2 data-reveal className="text-sm text-neutral-500 mb-8 sm:mb-12">Companies</h2>

      <div className="grid sm:grid-cols-2 gap-16 sm:gap-10">
        {ventures.map((v, i) => (
          <a
            key={v.name}
            data-reveal
            style={{ '--d': `${i * 120}ms` } as React.CSSProperties}
            href={v.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <p className="text-sm text-neutral-500 tabular-nums">
              {v.year} · {v.role}, {v.partners}
            </p>
            <h3 className="mt-3 text-[clamp(2.25rem,5vw,4rem)] leading-none tracking-[-0.035em] font-medium text-white">
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-[length:0%_2px] bg-bottom transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                {v.name}
              </span>
            </h3>
            <p className="mt-4 max-w-sm text-lg leading-snug text-neutral-400">{v.line}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);
