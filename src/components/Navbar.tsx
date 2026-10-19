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
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07080b]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 sm:py-4 shadow-xl'
          : 'bg-transparent py-5 sm:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
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
            className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-white"
          >
            {brandName}
          </a>
        </div>

        {/* Right Zone - Spacer & Mobile Menu */}
        <div className="flex items-center justify-end gap-3 w-auto lg:w-1/4">
          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-neutral-300 hover:text-white hover:bg-white/5 active:scale-95 rounded-lg transition-all focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer & Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Dismissible Backdrop */}
          <div
            className="lg:hidden fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm -z-10 animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="lg:hidden relative z-40 px-6 pt-4 pb-8 bg-[#090b10]/98 border-b border-white/10 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-1 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[48px] flex items-center justify-center text-xs font-medium tracking-[0.25em] text-neutral-200 hover:text-luxury-green active:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-white/[0.08]">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[48px] flex items-center justify-center bg-luxury-green-button text-xs font-semibold tracking-[0.2em] uppercase rounded-lg active:scale-[0.98] transition-all"
                >
                  DIRECT INQUIRY
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
