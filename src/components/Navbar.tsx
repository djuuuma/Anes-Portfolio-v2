import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  brandName: string;
}

export const Navbar: React.FC<NavbarProps> = ({ brandName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'LIFE STORY', href: '#story' },
    { label: 'VENTURES', href: '#ventures' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="absolute top-0 inset-x-0 z-40 bg-transparent py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left Balanced Spacer */}
        <div className="hidden lg:block w-1/4" />

        {/* Center Zone - Exactly matching the reference photo layout */}
        {/* In the reference: ABOUT    EARLY LIFE    [NAME]    COMPANIES    CONTACT */}
        <nav className="hidden lg:flex items-center justify-center gap-10 xl:gap-14 text-center">
          <a
            href="#about"
            className="text-[12px] font-medium tracking-[0.28em] text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
          >
            ABOUT
          </a>
          <a
            href="#story"
            className="text-[12px] font-medium tracking-[0.28em] text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
          >
            LIFE STORY
          </a>

          {/* Centered Brand Nameplate */}
          <a
            href="#hero"
            className="font-cinzel text-sm md:text-base font-semibold tracking-[0.35em] text-white hover:text-white/80 transition-colors px-2 whitespace-nowrap"
          >
            {brandName}
          </a>

          <a
            href="#ventures"
            className="text-[12px] font-medium tracking-[0.28em] text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
          >
            VENTURES
          </a>
          <a
            href="#contact"
            className="text-[12px] font-medium tracking-[0.28em] text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
          >
            CONTACT
          </a>
        </nav>

        {/* Brand on Mobile / Tablet */}
        <div className="lg:hidden">
          <a
            href="#hero"
            className="font-cinzel text-sm font-semibold tracking-[0.3em] text-white"
          >
            {brandName}
          </a>
        </div>

        {/* Right Zone - Spacer & Mobile Menu */}
        <div className="flex items-center justify-end gap-3 w-auto lg:w-1/4">
          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pt-6 pb-8 bg-[#090b10]/98 border-b border-white/10 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium tracking-[0.25em] text-neutral-200 hover:text-emerald-400 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
