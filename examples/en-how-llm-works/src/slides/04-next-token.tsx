import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { theme } from '../lib/theme'
import { fadeIn } from '../lib/animations'

export default function Slide04() {
  const tokens = ['The', 'cat', 'sat', 'on', 'the', '???']

  return (
    <SlideLayout>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 120px' }}>
        <motion.div initial="hidden" animate="visible">
          <motion.p
            variants={fadeIn}
            custom={0}
            style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', color: theme.colors.accent, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}
          >
            Core Idea
          </motion.p>
          <motion.h2
            variants={fadeIn}
            custom={1}
            style={{
              fontFamily: theme.fonts.display,
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3vw, 2.6rem)',
              lineHeight: 1.15,
              color: theme.colors.text,
              marginBottom: 12,
            }}
          >
            Next Token Prediction
          </motion.h2>
          <motion.hr variants={fadeIn} custom={2} className="accent" style={{ width: 60 }} />
          <motion.p
            variants={fadeIn}
            custom={3}
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              lineHeight: 1.7,
              maxWidth: 620,
              color: theme.colors.muted,
              marginTop: 8,
            }}
          >
            Given the text so far, predict what comes next. This single objective — repeated
            billions of times during training — is the foundation of every LLM.
          </motion.p>

          <motion.div
            variants={fadeIn}
            custom={4}
            style={{ display: 'flex', gap: 12, marginTop: 40, alignItems: 'center' }}
          >
            {tokens.map((t, i) => (
              <div
                key={i}
                style={{
                  padding: '12px 20px',
                  fontFamily: theme.fonts.display,
                  fontWeight: 700,
                  fontSize: 'clamp(1.1rem, 1.6vw, 1.4rem)',
                  border: `1px solid ${i === tokens.length - 1 ? theme.colors.accent : theme.colors.lightGray}`,
                  color: i === tokens.length - 1 ? theme.colors.accent : theme.colors.text,
                  background: i === tokens.length - 1 ? 'rgba(196, 30, 58, 0.06)' : 'transparent',
                }}
              >
                {t}
              </div>
            ))}
            <span style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1rem)', color: theme.colors.muted, marginLeft: 8 }}>
              → mat? rug? floor?
            </span>
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
