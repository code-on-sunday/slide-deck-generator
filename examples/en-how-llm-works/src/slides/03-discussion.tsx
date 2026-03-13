import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { theme } from '../lib/theme'
import { fadeIn } from '../lib/animations'

export default function Slide03() {
  return (
    <SlideLayout>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 120px' }}>
        <motion.div initial="hidden" animate="visible">
          <motion.h2
            variants={fadeIn}
            custom={0}
            style={{
              fontFamily: theme.fonts.display,
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              lineHeight: 1.2,
              color: theme.colors.text,
              marginBottom: 32,
            }}
          >
            How does autocomplete on your phone work?
          </motion.h2>
          <motion.hr variants={fadeIn} custom={1} className="accent" style={{ width: 60 }} />
          <motion.div
            variants={fadeIn}
            custom={2}
            style={{ marginTop: 8, marginLeft: 40 }}
          >
            <p
              className="pull-quote"
              style={{
                fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
                lineHeight: 1.6,
                maxWidth: 600,
              }}
            >
              Same principle, vastly different scale
            </p>
          </motion.div>
          <motion.div variants={fadeIn} custom={3} style={{ marginTop: 36, display: 'flex', gap: 48 }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', color: theme.colors.muted, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
                Phone keyboard
              </p>
              <p style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', lineHeight: 1.6 }}>
                Predicts the next word based on a small local model trained on common phrases and your personal texting history.
              </p>
            </div>
            <div style={{ width: 1, background: theme.colors.accent, opacity: 0.3 }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', color: theme.colors.muted, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
                Large Language Model
              </p>
              <p style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', lineHeight: 1.6 }}>
                Predicts the next token using billions of parameters trained on trillions of tokens from the internet.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
