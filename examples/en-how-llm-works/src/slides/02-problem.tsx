import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { theme } from '../lib/theme'
import { fadeIn } from '../lib/animations'

export default function Slide02() {
  return (
    <SlideLayout>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 100px 0 120px' }}>
        <motion.div initial="hidden" animate="visible">
          <motion.h2
            variants={fadeIn}
            custom={0}
            style={{
              fontFamily: theme.fonts.display,
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
              lineHeight: 1.15,
              color: theme.colors.text,
              marginBottom: 24,
            }}
          >
            LLMs seem magical{' '}
            <span style={{ color: theme.colors.accent }}>— but they're not</span>
          </motion.h2>
          <motion.hr variants={fadeIn} custom={1} className="accent" style={{ width: 60 }} />
          <motion.p
            variants={fadeIn}
            custom={2}
            className="drop-cap"
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              lineHeight: 1.7,
              maxWidth: 680,
              marginTop: 8,
            }}
          >
            Understanding how these models actually function — the math, the data,
            the architecture — doesn't diminish their usefulness. It makes you a
            more effective user. When you know the mechanism, you can craft better
            prompts, anticipate failures, and set realistic expectations.
          </motion.p>
          <motion.p
            variants={fadeIn}
            custom={3}
            style={{
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              lineHeight: 1.7,
              maxWidth: 680,
              marginTop: 20,
              color: theme.colors.muted,
            }}
          >
            Let's pull back the curtain — step by step.
          </motion.p>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
