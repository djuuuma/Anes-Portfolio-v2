import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#050608] border-t border-white/[0.05] text-neutral-500 text-xs">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Note */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="font-serif-luxury text-sm font-semibold tracking-[0.25em] text-neutral-200">
            {name}
          </span>
          <span className="hidden sm:inline text-neutral-700" aria-hidden="true">
            /
          </span>
          <span className="font-light text-neutral-400">
            Computer Science & Co-Founder (Mreza Studio · Metrika)
          </span>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-6 text-[11px] tracking-[0.2em] font-medium text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">
            ABOUT
          </a>
          <a href="#story" className="hover:text-white transition-colors">
            LIFE STORY
          </a>
          <a href="#ventures" className="hover:text-white transition-colors">
            VENTURES
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            CONTACT
          </a>
        </div>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 mt-8 pt-8 border-t border-white/[0.03] text-center text-[11px] text-neutral-600 font-mono">
        © {new Date().getFullYear()} {name}. All rights reserved. Architected with precision.
      </div>
    </footer>
  );
};
