import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types/portfolio';
import { prefersReducedMotion } from '../hooks/useScrollProgress';

export const Work: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });

  // Preview card trails the cursor with easing (fine pointers only; hidden on touch via CSS)
  useEffect(() => {
    const el = previewRef.current;
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const ease = prefersReducedMotion() ? 1 : 0.14;
    const pos = { x: 0, y: 0 };
    let frame = 0;
    let first = true;

    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (first) {
        pos.x = e.clientX;
        pos.y = e.clientY;
        first = false;
      }
    };
    const tick = () => {
      pos.x += (target.current.x - pos.x) * ease;
      pos.y += (target.current.y - pos.y) * ease;
      const tilt = Math.max(-8, Math.min(8, (target.current.x - pos.x) * 0.06));
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(3rem, -50%) rotate(${tilt}deg)`;
      frame = requestAnimationFrame(tick);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="work" className="px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 data-reveal className="text-sm text-neutral-500 mb-8 sm:mb-12">
          Selected work
        </h2>

        <ul className="group/list border-t border-white/10" onMouseLeave={() => setActive(null)}>
          {projects.map((p, i) => (
            <li
              key={p.name}
              data-reveal
              style={{ '--d': `${i * 70}ms` } as React.CSSProperties}
              className="border-b border-white/10"
            >
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="group grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_14rem_4rem_auto] items-baseline gap-x-6 py-6 sm:py-9 transition-opacity duration-300 [@media(hover:hover)]:group-hover/list:opacity-30 [@media(hover:hover)]:hover:!opacity-100"
              >
                <span className="text-[clamp(1.9rem,5.6vw,5rem)] leading-none tracking-[-0.04em] font-medium text-white transition-transform duration-500 ease-out group-hover:translate-x-4">
                  {p.name}
                </span>
                <span className="hidden sm:block text-neutral-500">{p.kind}</span>
                <span className="hidden sm:block text-neutral-500 tabular-nums">{p.year}</span>
                <ArrowUpRight className="w-5 h-5 text-neutral-500 transition-all duration-300 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1" />
                <span className="sm:hidden col-span-2 mt-2 text-sm text-neutral-500">
                  {p.kind} · {p.year}
                </span>
                {/* Touch screens get the screenshot inline instead of the cursor preview */}
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={750}
                  className="hidden [@media(hover:none)]:block col-span-full mt-5 w-full aspect-[16/10] object-cover object-top rounded-sm"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={previewRef}
        aria-hidden="true"
        className="work-preview hidden [@media(hover:hover)_and_(pointer:fine)]:block fixed top-0 left-0 z-30 w-[26rem] aspect-[16/10] pointer-events-none overflow-hidden rounded-sm shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
        style={{ opacity: active === null ? 0 : 1, scale: active === null ? '0.85' : '1' }}
      >
        {projects.map((p, i) => (
          <img
            key={p.name}
            src={p.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300"
            style={{ opacity: active === i ? 1 : 0 }}
          />
        ))}
      </div>
    </section>
  );
};
