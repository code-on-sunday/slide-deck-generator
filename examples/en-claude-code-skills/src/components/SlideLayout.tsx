import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { pageTransition } from '../lib/animations'

interface SlideLayoutProps {
  children: ReactNode
  className?: string
}

export function SlideLayout({ children, className = '' }: SlideLayoutProps) {
  return (
    <motion.div
      {...pageTransition}
      className={`relative w-full h-full ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="grid-overlay" />
      <div className="relative z-10 w-full h-full flex flex-col" style={{ padding: '60px' }}>
        {children}
      </div>
    </motion.div>
  )
}
