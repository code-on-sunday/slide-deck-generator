import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { fadeInUp, scaleIn } from '../lib/animations'
import { theme } from '../lib/theme'
import { Star } from 'lucide-react'

export default function Slide14() {
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Star
            size={48}
            color={theme.colors.cyan}
            fill={theme.colors.cyan}
            style={{ filter: `drop-shadow(0 0 20px ${theme.colors.cyan})` }}
          />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{
            fontFamily: theme.fonts.display,
            fontSize: 'clamp(11px, 1.4vw, 14px)',
            color: theme.colors.magenta,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            marginTop: '24px',
          }}
        >
          Key Takeaway
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            fontFamily: theme.fonts.display,
            fontSize: 'clamp(24px, 3.5vw, 42px)',
            color: theme.colors.white,
            marginTop: '24px',
            lineHeight: 1.3,
            maxWidth: '900px',
          }}
          className="neon-text"
        >
          Skills turn one-time prompts into{' '}
          <span style={{ color: theme.colors.cyan }}>reusable expertise</span>
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex items-center gap-8 mt-12"
        >
          {[
            { from: 'Repeating yourself', to: 'Write once, use forever' },
            { from: 'Inconsistent output', to: 'Reliable results' },
            { from: 'Lost knowledge', to: 'Shared expertise' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span
                style={{
                  fontSize: 'clamp(12px, 1.3vw, 14px)',
                  color: 'rgba(255,255,255,0.3)',
                  textDecoration: 'line-through',
                }}
              >
                {item.from}
              </span>
              <span
                style={{
                  fontSize: 'clamp(13px, 1.4vw, 16px)',
                  color: theme.colors.cyan,
                }}
              >
                {item.to}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}
