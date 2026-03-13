import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { fadeInUp, scaleIn } from '../lib/animations'
import { theme } from '../lib/theme'
import { FileText, Target, Lightbulb } from 'lucide-react'

export default function Slide04() {
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
          color: theme.colors.cyan,
          textTransform: 'uppercase',
          letterSpacing: '3px',
        }}
      >
        Definition
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
          marginTop: '16px',
        }}
      >
        What is a Skill?
      </motion.h2>

      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        custom={2}
        className="flex items-center justify-center mt-10"
      >
        <div
          style={{
            border: `1px solid rgba(0, 255, 204, 0.2)`,
            borderRadius: '8px',
            padding: '24px 40px',
          }}
          className="neon-glow"
        >
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 'clamp(18px, 2.5vw, 28px)',
              color: theme.colors.cyan,
            }}
            className="neon-text"
          >
            SKILL.md
          </span>
        </div>
      </motion.div>

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={3}
        className="text-center mt-8"
        style={{
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: 'rgba(255,255,255,0.8)',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.6,
        }}
      >
        A markdown file that gives Claude Code{' '}
        <span style={{ color: theme.colors.cyan }}>specialized knowledge</span> for a specific task
      </motion.p>

      <div className="flex justify-center gap-12 mt-auto">
        {[
          { icon: FileText, label: 'Just markdown' },
          { icon: Target, label: 'Task-specific' },
          { icon: Lightbulb, label: 'Reusable knowledge' },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={i + 4}
            className="flex flex-col items-center gap-3"
          >
            <item.icon size={28} color={theme.colors.cyan} style={{ opacity: 0.7 }} />
            <span style={{ fontSize: 'clamp(12px, 1.4vw, 15px)', color: 'rgba(255,255,255,0.5)' }}>
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  )
}
