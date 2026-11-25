import React, { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

interface HeroProps {
  name: string;
  image: string;
}

export const Hero: React.FC<HeroProps> = ({ name, image }) => {
  const ref = useRef<HTMLElement>(null);
  // --p goes 0 → 1 while the hero scrolls out of view
  useScrollProgress(ref, { start: 0, end: 0, fallback: 0 });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative w-full h-[100dvh] min-h-[620px] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Photo: settles in on load, then pushes in and darkens as you scroll */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 hero-settle">
          <div className="absolute inset-0 -translate-y-6 sm:-translate-y-10 md:-translate-y-12">
            <img
              src={image}
              alt="Anes Đumišić looking over Sarajevo"
              fetchPriority="high"
              decoding="async"
              width={1920}
              height={1080}
              className="w-full h-full object-cover object-top hero-photo"
            />
          </div>
        </div>
        <div className="absolute inset-0 hero-vignette" />
        <div className="absolute inset-x-0 bottom-0 h-48 sm:h-56 bg-gradient-to-t from-[#07080b] via-[#07080b]/60 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#07080b]/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-6 flex justify-center text-center translate-y-4 sm:translate-y-8 md:translate-y-10 lg:translate-y-12">
        <h1 className="hero-name font-cinzel text-[25vw] sm:text-8xl md:text-9xl xl:text-[11rem] 2xl:text-[12.5rem] font-medium tracking-[0.06em] -mr-[0.06em] sm:tracking-[0.24em] sm:-mr-[0.24em] uppercase leading-none hero-text-white whitespace-nowrap pointer-events-none">
          <span className="sr-only">Anes Đumišić — Computer Science &amp; Agency Co-Founder</span>
          <span aria-hidden="true">
            {name.split('').map((ch, i) => (
              <span key={i} className="hero-letter" style={{ animationDelay: `${250 + i * 110}ms` }}>
                {ch}
              </span>
            ))}
          </span>
        </h1>
      </div>

      <a
        href="#about"
        className="hero-cue absolute bottom-8 sm:bottom-10 z-20 min-w-[48px] min-h-[48px] flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-6 h-6 stroke-[1.5] animate-bounce" />
      </a>
    </section>
  );
};
