import type { ReactNode } from 'react'
import { theme } from '../lib/theme'

interface SlideLayoutProps {
  children: ReactNode
  className?: string
  gradient?: string
}

export default function SlideLayout({ children, className = '', gradient }: SlideLayoutProps) {
  const bg = gradient ?? `radial-gradient(ellipse at 30% 20%, #fefdfb 0%, ${theme.colors.bg} 70%)`

  return (
    <div
      className={className}
      style={{
        width: theme.slide.width,
        height: theme.slide.height,
        background: bg,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: theme.fonts.body,
        color: theme.colors.text,
      }}
    >
      {children}
    </div>
  )
}
