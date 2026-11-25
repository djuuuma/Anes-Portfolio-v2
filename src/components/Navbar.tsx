import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const left = [
  { label: 'ABOUT', href: '#about' },
  { label: 'WORK', href: '#work' },
];
const right = [
  { label: 'COMPANIES', href: '#ventures' },
  { label: 'CONTACT', href: '#contact' },
];

const linkClass =
  'text-[12px] font-medium tracking-[0.28em] text-neutral-300 hover:text-white transition-colors whitespace-nowrap';

export const Navbar: React.FC<{ brandName: string }> = ({ brandName }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 inset-x-0 z-40 py-5 sm:py-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between lg:justify-center">
        <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
          {left.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
          <a
            href="#hero"
            className="font-cinzel text-base font-semibold tracking-[0.35em] text-white hover:text-white/80 transition-colors px-2 whitespace-nowrap"
          >
            {brandName}
          </a>
          {right.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#hero"
          className="lg:hidden font-cinzel text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-white"
        >
          {brandName}
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-300 hover:text-white cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden mt-4 mx-5 py-4 flex flex-col bg-[#090b10]/95 backdrop-blur-xl border border-white/10 rounded-lg">
          {[...left, ...right].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="min-h-[48px] flex items-center justify-center text-xs font-medium tracking-[0.25em] text-neutral-200 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
