'use client';

import { useEffect, useRef } from 'react';

export default function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    try {
      const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) {
        el.classList.add('revealed');
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      io.observe(el);
      return () => io.disconnect();
    } catch (e) {
      console.warn('Scroll reveal animation skipped:', e);
    }
  }, []);

  return (
    <div ref={ref} className={`reveal${className ? ` ${className}` : ''}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
