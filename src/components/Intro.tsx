import React, { useRef } from 'react';
import { Profile } from '../types/portfolio';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const Intro: React.FC<{ profile: Profile }> = ({ profile }) => {
  const [lead, ...rest] = profile.intro;
  const leadRef = useRef<HTMLParagraphElement>(null);
  // Words light up one by one while the lead line crosses the middle of the screen
  useScrollProgress(leadRef, { start: 0.85, end: 0.45 });
  const words = lead.split(' ');

  return (
    <section id="about" className="px-5 sm:px-8 py-28 sm:py-44">
      <div className="max-w-6xl mx-auto">
        <p
          ref={leadRef}
          className="text-[clamp(2.1rem,6vw,5.5rem)] leading-[1.02] tracking-[-0.035em] font-medium text-white"
        >
          <span className="sr-only">{lead}</span>
          <span aria-hidden="true">
            {words.map((w, i) => (
              <span
                key={i}
                className="reveal-word"
                style={{ '--i': ((i / words.length) * 0.85).toFixed(3) } as React.CSSProperties}
              >
                {w}{' '}
              </span>
            ))}
          </span>
        </p>
        {rest.map((line) => (
          <p
            key={line}
            data-reveal
            className="mt-12 sm:mt-16 max-w-2xl ml-auto text-lg sm:text-2xl leading-snug tracking-[-0.01em] text-neutral-400"
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
};
