import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { fadeInUp } from '../lib/animations'
import { theme } from '../lib/theme'
import { Brain } from 'lucide-react'

export default function Slide03() {
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            padding: '20px',
            borderRadius: '50%',
            border: `1px solid rgba(0, 255, 204, 0.2)`,
          }}
          className="neon-glow"
        >
          <Brain size={48} color={theme.colors.cyan} />
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{
            fontFamily: theme.fonts.display,
            fontSize: 'clamp(22px, 3.2vw, 38px)',
            color: theme.colors.white,
            marginTop: '32px',
            lineHeight: 1.3,
            maxWidth: '800px',
          }}
        >
          What if Claude could{' '}
          <span style={{ color: theme.colors.cyan }} className="neon-text">
            remember
          </span>{' '}
          how to do specific tasks?
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            fontSize: 'clamp(16px, 2vw, 22px)',
            color: 'rgba(255,255,255,0.5)',
            marginTop: '24px',
            fontStyle: 'italic',
          }}
        >
          Permanently.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{
            marginTop: '48px',
            padding: '12px 32px',
            border: `1px solid rgba(0, 255, 204, 0.3)`,
            borderRadius: '4px',
            fontSize: 'clamp(14px, 1.6vw, 18px)',
            color: theme.colors.cyan,
          }}
          className="neon-glow"
        >
          No more repeating yourself
        </motion.div>
      </div>
    </SlideLayout>
  )
}
