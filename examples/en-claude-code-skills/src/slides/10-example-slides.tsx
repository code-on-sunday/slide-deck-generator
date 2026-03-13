import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { fadeInUp, scaleIn } from '../lib/animations'
import { theme } from '../lib/theme'
import { Presentation, Sparkles } from 'lucide-react'

export default function Slide10() {
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
        Example #1
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
        A &quot;Slide Deck&quot; Skill
      </motion.h2>

      <div className="flex gap-10 mt-8 flex-1 items-center">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          custom={2}
          className="flex-1"
        >
          <div
            style={{
              border: `1px solid rgba(0, 255, 204, 0.15)`,
              borderRadius: '8px',
              padding: '24px',
              fontFamily: "'Courier New', monospace",
              fontSize: 'clamp(11px, 1.2vw, 14px)',
              lineHeight: 2,
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            <div style={{ color: 'rgba(255,255,255,0.3)' }}>---</div>
            <div>
              <span style={{ color: theme.colors.cyan }}>name:</span> slide-deck
            </div>
            <div>
              <span style={{ color: theme.colors.magenta }}>description:</span> &quot;Generate a
            </div>
            <div style={{ paddingLeft: '20px' }}>React slide deck presentation&quot;</div>
            <div style={{ color: 'rgba(255,255,255,0.3)' }}>---</div>
            <div style={{ marginTop: '8px', color: theme.colors.white }}>
              # Slide Deck Generator
            </div>
            <div style={{ marginTop: '4px' }}>Create a Vite + React + TS app</div>
            <div>with 15 animated slides...</div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col items-center gap-6 flex-1"
        >
          <Presentation size={48} color={theme.colors.cyan} style={{ filter: `drop-shadow(0 0 15px ${theme.colors.cyan})` }} />
          <div className="flex flex-col items-center gap-3">
            <span
              style={{
                fontSize: 'clamp(15px, 1.8vw, 20px)',
                color: theme.colors.white,
              }}
            >
              One prompt generates:
            </span>
            {['15+ animated slides', 'Framer Motion transitions', 'Keyboard navigation', 'Themed design system'].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Sparkles size={14} color={theme.colors.cyan} />
                  <span
                    style={{
                      fontSize: 'clamp(13px, 1.4vw, 16px)',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
