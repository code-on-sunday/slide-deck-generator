import { motion, AnimatePresence } from 'framer-motion';
import { useSlideScale } from '../lib/useSlideScale';

interface SlideLayoutProps {
  children: React.ReactNode;
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

export function SlideLayout({ children, currentSlide, totalSlides, onNext, onPrev }: SlideLayoutProps) {
  const { scale, slideWidth, slideHeight } = useSlideScale();

  return (
    <div
      style={{ background: '#0d1117', fontFamily: "'JetBrains Mono', monospace" }}
      className="w-screen h-screen flex items-center justify-center overflow-hidden relative cursor-pointer"
      onClick={onNext}
    >
      <div
        style={{
          width: slideWidth,
          height: slideHeight,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
        className="relative overflow-hidden"
      >
        {/* Scan line overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-50"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
            style={{ background: '#0d1117' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 z-40" style={{ height: 3 }}>
          <motion.div
            className="h-full"
            style={{ background: '#39d353' }}
            initial={false}
            animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Slide counter */}
        <div
          className="absolute bottom-3 right-6 z-40"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(10px, 1.1vw, 13px)',
            color: '#8b949e',
          }}
        >
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </div>
  );
}
