import { motion, AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';
import { useSlideScale } from '../lib/useSlideScale';
import { theme } from '../lib/theme';

interface SlideLayoutProps {
  children: ReactNode;
  slideIndex: number;
  totalSlides: number;
  className?: string;
  onNext: () => void;
  onPrev: () => void;
}

export function SlideLayout({
  children,
  slideIndex,
  totalSlides,
  className = '',
  onNext,
  onPrev,
}: SlideLayoutProps) {
  const { scale, width, height } = useSlideScale();

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0d0d1a',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
      }}
      onClick={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        if (clickX < rect.width / 3) {
          onPrev();
        } else {
          onNext();
        }
      }}
    >
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          position: 'relative',
          overflow: 'hidden',
          background: theme.colors.darkBg,
        }}
        className={`halftone-dots ${className}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              inset: 0,
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'rgba(255,255,255,0.05)',
            zIndex: 50,
          }}
        >
          <motion.div
            style={{
              height: '100%',
              background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent})`,
            }}
            initial={false}
            animate={{ width: `${((slideIndex + 1) / totalSlides) * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>

        {/* Slide counter */}
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            right: '24px',
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSizes.xs,
            color: 'rgba(255,255,255,0.35)',
            zIndex: 50,
          }}
        >
          {slideIndex + 1} / {totalSlides}
        </div>
      </div>
    </div>
  );
}
