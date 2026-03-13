import { useState, useEffect, useCallback } from 'react'
import { theme } from './theme'

export function useSlideScale() {
  const calc = useCallback(() => {
    const sx = window.innerWidth / theme.slide.width
    const sy = window.innerHeight / theme.slide.height
    return Math.min(sx, sy, 1)
  }, [])

  const [scale, setScale] = useState(calc)

  useEffect(() => {
    const onResize = () => setScale(calc())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [calc])

  return scale
}
