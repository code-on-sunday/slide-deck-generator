import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { slides } from './slides';

export default function App() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goNext = useCallback(() => setCurrent((c) => Math.min(c + 1, total - 1)), [total]);
  const goPrev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  const CurrentSlide = slides[current];

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#1a1a1a' }}>
      <AnimatePresence mode="wait">
        <CurrentSlide key={current} />
      </AnimatePresence>

      {/* Progress bar */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 3,
          background: 'rgba(255,255,255,0.05)',
          zIndex: 50,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${((current + 1) / total) * 100}%`,
            background: '#FF5722',
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      {/* Slide counter */}
      <div
        style={{
          position: 'fixed',
          bottom: 12,
          right: 20,
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          color: 'rgba(255,255,255,0.3)',
          zIndex: 50,
        }}
      >
        {current + 1} / {total}
      </div>
    </div>
  );
}
