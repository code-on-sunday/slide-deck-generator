import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { fadeInUp, glitchIn } from '../lib/animations'
import { theme } from '../lib/theme'
import { Copy, RefreshCw, MessageSquare } from 'lucide-react'

export default function Slide02() {
  const painPoints = [
    { icon: Copy, text: 'Copy-pasting the same prompt every session' },
    { icon: RefreshCw, text: 'Re-explaining your preferred workflow each time' },
    { icon: MessageSquare, text: 'Losing context between conversations' },
  ]

  return (
    <SlideLayout>
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0}
        style={{
          fontFamily: theme.fonts.display,
          fontSize: 'clamp(11px, 1.4vw, 14px)',
          color: theme.colors.magenta,
          textTransform: 'uppercase',
          letterSpacing: '3px',
        }}
      >
        The Problem
      </motion.p>

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{
          fontFamily: theme.fonts.display,
          fontSize: 'clamp(24px, 3.5vw, 40px)',
          color: theme.colors.white,
          marginTop: '20px',
          lineHeight: 1.2,
        }}
      >
        You keep repeating the{' '}
        <span style={{ color: theme.colors.magenta }} className="neon-text-magenta">
          same instructions
        </span>
      </motion.h2>

      <div className="flex flex-col gap-6 mt-12 flex-1 justify-center">
        {painPoints.map((item, i) => (
          <motion.div
            key={i}
            variants={glitchIn}
            initial="hidden"
            animate="visible"
            custom={i + 2}
            className="flex items-center gap-5"
            style={{
              borderLeft: `2px solid ${theme.colors.magenta}`,
              padding: '16px 24px',
            }}
          >
            <item.icon size={24} color={theme.colors.magenta} style={{ flexShrink: 0 }} />
            <span style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'rgba(255,255,255,0.85)' }}>
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  )
}
