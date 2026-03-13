import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { fadeInUp, slideInRight } from '../lib/animations'
import { theme } from '../lib/theme'
import { Search, Zap } from 'lucide-react'

export default function Slide07() {
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
        Activation
      </motion.p>

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{
          fontFamily: theme.fonts.display,
          fontSize: 'clamp(22px, 3vw, 36px)',
          color: theme.colors.white,
          marginTop: '16px',
        }}
      >
        The Trigger System
      </motion.h2>

      <div className="flex flex-col gap-6 mt-10 flex-1 justify-center max-w-3xl mx-auto w-full">
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          custom={2}
          className="flex items-center gap-4"
        >
          <Search size={20} color={theme.colors.magenta} style={{ flexShrink: 0 }} />
          <span style={{ fontSize: 'clamp(14px, 1.6vw, 18px)', color: 'rgba(255,255,255,0.6)' }}>
            Your message:
          </span>
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 'clamp(14px, 1.6vw, 18px)',
              color: theme.colors.white,
              padding: '8px 16px',
              border: `1px solid rgba(255, 0, 170, 0.3)`,
              borderRadius: '4px',
            }}
          >
            "Check if we're ready to deploy"
          </span>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex justify-center my-4"
        >
          <div
            style={{
              width: '2px',
              height: '40px',
              background: `linear-gradient(180deg, ${theme.colors.magenta}, ${theme.colors.cyan})`,
            }}
          />
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex items-center gap-4"
        >
          <Zap size={20} color={theme.colors.cyan} style={{ flexShrink: 0 }} />
          <span style={{ fontSize: 'clamp(14px, 1.6vw, 18px)', color: 'rgba(255,255,255,0.6)' }}>
            Matches:
          </span>
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 'clamp(14px, 1.6vw, 18px)',
              color: theme.colors.cyan,
              padding: '8px 16px',
              border: `1px solid rgba(0, 255, 204, 0.3)`,
              borderRadius: '4px',
            }}
            className="neon-glow"
          >
            description: "Check deployment readiness"
          </span>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="text-center mt-8"
          style={{
            fontSize: 'clamp(15px, 1.8vw, 20px)',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.6,
          }}
        >
          Skills activate when your message matches the{' '}
          <span style={{ color: theme.colors.cyan }}>description keywords</span> in the frontmatter
        </motion.p>
      </div>
    </SlideLayout>
  )
}
