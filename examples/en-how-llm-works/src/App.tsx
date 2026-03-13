import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slides } from './slides'
import { useSlideScale } from './lib/useSlideScale'
import { theme } from './lib/theme'

export default function App() {
  const [current, setCurrent] = useState(0)
  const scale = useSlideScale()
  const total = slides.length

  const go = useCallback(
    (dir: 1 | -1) => {
      setCurrent((c) => Math.max(0, Math.min(total - 1, c + dir)))
    },
    [total],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        go(1)
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        go(-1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const SlideComponent = slides[current]

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1a1a1a',
        position: 'relative',
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'rgba(255,255,255,0.1)',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${((current + 1) / total) * 100}%`,
            background: theme.colors.accent,
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
          fontFamily: theme.fonts.body,
          fontSize: 13,
          color: 'rgba(255,255,255,0.4)',
          letterSpacing: 1,
        }}
      >
        {current + 1} / {total}
      </div>
    </div>
  )
}
