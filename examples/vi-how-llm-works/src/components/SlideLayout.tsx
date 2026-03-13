import type { ReactNode } from 'react'
import { theme } from '../lib/theme'

interface Props {
  children: ReactNode
  background?: string
}

export default function SlideLayout({ children, background }: Props) {
  return (
    <div
      style={{
        width: theme.slide.width,
        height: theme.slide.height,
        background: background ?? theme.colors.cream,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: theme.fonts.body,
        color: theme.colors.charcoal,
      }}
    >
      {children}
    </div>
  )
}

/* Reusable geometric decorations */
export function Circle({
  size,
  color,
  top,
  left,
  right,
  bottom,
  opacity = 0.15,
}: {
  size: number
  color?: string
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
  opacity?: number
}) {
  return (
    <div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        border: `2px solid ${color ?? theme.colors.orange}`,
        top,
        left,
        right,
        bottom,
        opacity,
        pointerEvents: 'none',
      }}
    />
  )
}

export function DotPattern({
  rows = 4,
  cols = 6,
  gap = 14,
  dotSize = 4,
  color,
  top,
  left,
  right,
  bottom,
  opacity = 0.18,
}: {
  rows?: number
  cols?: number
  gap?: number
  dotSize?: number
  color?: string
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
  opacity?: number
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        opacity,
        pointerEvents: 'none',
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${gap}px)`,
        gridTemplateRows: `repeat(${rows}, ${gap}px)`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div
          key={i}
          style={{
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            background: color ?? theme.colors.orange,
          }}
        />
      ))}
    </div>
  )
}

export function HLine({
  width,
  thickness = 2,
  color,
  top,
  left,
  right,
  bottom,
  opacity = 0.2,
}: {
  width: number | string
  thickness?: number
  color?: string
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
  opacity?: number
}) {
  return (
    <div
      style={{
        position: 'absolute',
        width,
        height: thickness,
        background: color ?? theme.colors.orange,
        top,
        left,
        right,
        bottom,
        opacity,
        pointerEvents: 'none',
      }}
    />
  )
}
