import { motion } from 'framer-motion';
import { slideVariants } from '../lib/animations';
import { useSlideScale } from '../lib/useSlideScale';
import type { ReactNode } from 'react';

interface SlideLayoutProps {
  children: ReactNode;
  background?: string;
}

export default function SlideLayout({ children, background }: SlideLayoutProps) {
  const { scale, slideW, slideH } = useSlideScale();

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <motion.div
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        style={{
          width: slideW,
          height: slideH,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          position: 'relative',
          overflow: 'hidden',
          background: background || 'linear-gradient(135deg, #1a1a1a 0%, #252525 50%, #1a1a1a 100%)',
          borderRadius: 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
