import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slides } from './slides'
import { useSlideScale } from './lib/useSlideScale'
import { theme } from './lib/theme'

export default function App() {
  const [current, setCurrent] = useState(0)
  const scale = useSlideScale()
  const total = slides.length

  const goTo = useCallback((n: number) => {
    setCurrent(Math.max(0, Math.min(total - 1, n)))
  }, [total])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        goTo(current + 1)
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        goTo(current - 1)
      } else if (e.key === 'Home') {
        goTo(0)
      } else if (e.key === 'End') {
        goTo(total - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, goTo, total])

  const SlideComponent = slides[current]

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.colors.charcoal,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Slide container */}
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 3,
        background: 'rgba(232,212,192,0.15)',
        zIndex: 100,
      }}>
        <motion.div
          style={{
            height: '100%',
            background: theme.colors.orange,
          }}
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      {/* Slide counter */}
      <div style={{
        position: 'fixed',
        bottom: 12,
        right: 20,
        fontFamily: theme.fonts.body,
        fontSize: 13,
        color: 'rgba(232,212,192,0.4)',
        zIndex: 100,
        letterSpacing: '1px',
      }}>
        {current + 1} / {total}
      </div>

      {/* Click areas for navigation */}
      <div
        onClick={() => goTo(current - 1)}
        style={{
          position: 'fixed',
          left: 0, top: 0, width: '15%', height: '100%',
          cursor: current > 0 ? 'w-resize' : 'default',
          zIndex: 50,
        }}
      />
      <div
        onClick={() => goTo(current + 1)}
        style={{
          position: 'fixed',
          right: 0, top: 0, width: '15%', height: '100%',
          cursor: current < total - 1 ? 'e-resize' : 'default',
          zIndex: 50,
        }}
      />
    </div>
  )
}
