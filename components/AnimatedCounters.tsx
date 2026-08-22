'use client';

import { useEffect, useRef, useState } from 'react';

type Counter = { end: number; label: string; sub: string };

const COUNTERS: Counter[] = [
  { end: 257, label: 'APPLICANTS', sub: 'and counting ↑' },
  { end: 7, label: 'CHAPTERS', sub: 'across the US' },
  { end: 1, label: 'ACTIVE CHAPTER', sub: 'Chapter 01 · UTD' },
  { end: 4, label: 'LABS PER CHAPTER', sub: 'every campus runs all four' },
];

const DURATION = 2000;
const STAGGER = 150;

function AnimatedNumber({ end, delay, started }: { end: number; delay: number; started: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const startAt = performance.now() + delay;

    const tick = (now: number) => {
      if (now < startAt) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startAt;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(eased * end));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, end, delay]);

  return <>{value}</>;
}

export default function AnimatedCounters() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || started) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section className="tight">
      <div className="wrap">
        <div ref={ref} className="counters-grid">
          {COUNTERS.map((c, i) => (
            <div key={c.label} className="counter-cell">
              <span className="counter-num">
                <AnimatedNumber end={c.end} delay={i * STAGGER} started={started} />
              </span>
              <span className="counter-label mono">{c.label}</span>
              <span className="counter-sub">{c.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
