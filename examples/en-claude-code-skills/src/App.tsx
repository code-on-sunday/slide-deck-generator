import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useSlideScale } from './lib/useSlideScale'
import { slides } from './slides'
import { theme } from './lib/theme'

function App() {
  const [current, setCurrent] = useState(0)
  const { scale, slideWidth, slideHeight } = useSlideScale()

  const goNext = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, slides.length - 1))
  }, [])

  const goPrev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0))
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        goNext()
      }
      if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev])

  const CurrentSlide = slides[current]
  const progress = ((current + 1) / slides.length) * 100

  return (
    <div
      className="w-screen h-screen flex items-center justify-center overflow-hidden"
      style={{ background: theme.colors.navy }}
    >
      <div
        style={{
          width: slideWidth,
          height: slideHeight,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          background: theme.colors.navy,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <AnimatePresence mode="wait">
          <CurrentSlide key={current} />
        </AnimatePresence>

        {/* Progress bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'rgba(255,255,255,0.05)',
            zIndex: 50,
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${theme.colors.cyan}, ${theme.colors.magenta})`,
              transition: 'width 0.3s ease',
              boxShadow: `0 0 10px ${theme.colors.cyan}`,
            }}
          />
        </div>

        {/* Slide counter */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '20px',
            fontSize: 'clamp(10px, 1.2vw, 13px)',
            color: 'rgba(255,255,255,0.3)',
            fontFamily: theme.fonts.display,
            zIndex: 50,
          }}
        >
          {current + 1} / {slides.length}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: current === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.3)',
            fontSize: '24px',
            cursor: current === 0 ? 'default' : 'pointer',
            zIndex: 50,
            padding: '10px',
          }}
        >
          &#9664;
        </button>
        <button
          onClick={goNext}
          aria-label="Next slide"
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: current === slides.length - 1 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.3)',
            fontSize: '24px',
            cursor: current === slides.length - 1 ? 'default' : 'pointer',
            zIndex: 50,
            padding: '10px',
          }}
        >
          &#9654;
        </button>
      </div>
    </div>
  )
}

export default App
