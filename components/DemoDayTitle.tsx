'use client';

import { useEffect, useRef } from 'react';

export default function DemoDayTitle() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = ref.current;
    if (!title) return;
    try {
      const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) {
        title.classList.add('revealed');
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
        { threshold: 0.35 }
      );
      io.observe(title);
      return () => io.disconnect();
    } catch (e) {
      console.warn('Demo Day reveal animation skipped:', e);
    }
  }, []);

  return (
    <div className="demoday-title" id="demoday-title" ref={ref}>
      <span className="word">DEMO</span>
      <span className="word day">DAY</span>
    </div>
  );
}
