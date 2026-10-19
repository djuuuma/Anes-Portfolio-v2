import React from 'react';
import { ChevronDown } from 'lucide-react';
import { CinematicBackground } from './CinematicBackground';

interface HeroProps {
  name: string;
  customImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  name,
  customImage,
}) => {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Cinematic Seascape Backdrop (Canvas/SVG or custom photo) */}
      <CinematicBackground customImage={customImage} />

      {/* Center Monumental Typography - calibrated to rest directly across the shoulder line */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-6 flex flex-col items-center justify-center text-center translate-y-6 sm:translate-y-8 md:translate-y-10 lg:translate-y-12">
        <div className="relative w-full flex items-center justify-center select-none pointer-events-none">
          <h1 className="font-cinzel text-[4.8rem] xs:text-[5.5rem] sm:text-8xl md:text-9xl xl:text-[11rem] 2xl:text-[12.5rem] font-medium tracking-[0.14em] sm:tracking-[0.24em] uppercase leading-none hero-text-white">
            {name}
          </h1>
        </div>
      </div>

      {/* Downward Chevron Scroll Prompt matching reference photo */}
      <div className="absolute bottom-8 sm:bottom-10 inset-x-0 z-20 flex flex-col items-center justify-center pointer-events-auto">
        <button
          onClick={scrollToAbout}
          className="group flex flex-col items-center gap-1 text-neutral-400 hover:text-white transition-all cursor-pointer focus:outline-none"
          aria-label="Scroll to about section"
        >
          <div className="animate-bounce flex flex-col items-center -space-y-2 opacity-80 group-hover:opacity-100">
            <ChevronDown className="w-6 h-6 stroke-[1.5]" />
            <ChevronDown className="w-6 h-6 stroke-[1.5] -mt-3.5 opacity-60" />
          </div>
        </button>
      </div>
    </section>
  );
};
