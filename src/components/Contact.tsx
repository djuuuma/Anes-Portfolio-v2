import React, { useEffect, useRef, useState } from 'react';
import { Profile } from '../types/portfolio';
import { useScrollProgress } from '../hooks/useScrollProgress';

const sarajevoTime = () =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Sarajevo',
    hour: '2-digit',
    minute: '2-digit',
  })
    .format(new Date())
    .split(':');

const Clock: React.FC = () => {
  const [[h, m], setTime] = useState(sarajevoTime);
  useEffect(() => {
    const t = setInterval(() => setTime(sarajevoTime()), 10_000);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="tabular-nums">
      {h}
      <span className="animate-pulse">:</span>
      {m}
    </span>
  );
};

export const Contact: React.FC<{ profile: Profile; image: string }> = ({ profile, image }) => {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLElement>(null);
  // Photo eases out of a slight zoom as the page reaches its end
  useScrollProgress(ref, { start: 1, end: 1 });

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const city = profile.location.split(',')[0];

  return (
    <footer ref={ref} id="contact" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          width={1376}
          height={768}
          className="w-full h-full object-cover object-[50%_35%]"
          style={{ transform: 'scale(calc(1.18 - var(--p, 1) * 0.18))' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080b] via-[#07080b]/20 via-35% to-[#07080b]/90" />
      </div>

      <div className="relative px-5 sm:px-8 pb-8 sm:pb-10">
        <div className="max-w-6xl mx-auto">
          <h2 data-reveal className="text-sm text-neutral-300 mb-5">
            Got a project? Write to me.
          </h2>
          <a
            data-reveal
            href={`mailto:${profile.email}`}
            className="block text-[clamp(1.45rem,6.4vw,5.75rem)] leading-none tracking-[-0.045em] font-medium text-white hover:opacity-70 transition-opacity"
          >
            {profile.email}
          </a>
          <button
            onClick={copy}
            className="mt-4 min-h-[44px] text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            {copied ? 'Copied ✓' : 'Copy address'}
          </button>

          <div className="mt-20 sm:mt-28 pt-5 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-y-3 text-sm text-neutral-400">
            <span>
              {city} <Clock />
            </span>
            <span className="text-right sm:text-center">© {new Date().getFullYear()}</span>
            <div className="col-span-2 sm:col-span-1 flex sm:justify-end gap-6">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
