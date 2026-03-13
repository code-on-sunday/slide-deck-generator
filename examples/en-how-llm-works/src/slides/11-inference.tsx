import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { theme } from '../lib/theme'
import { fadeIn } from '../lib/animations'

export default function Slide11() {
  const concepts = [
    { term: 'Autoregressive', desc: 'Each token is generated one at a time, conditioned on all previous tokens.' },
    { term: 'Temperature', desc: 'Controls randomness. Low = deterministic, high = creative / risky.' },
    { term: 'Top-k / Top-p', desc: 'Sampling strategies that limit which tokens are considered at each step.' },
  ]

  return (
    <SlideLayout>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 120px' }}>
        <motion.div initial="hidden" animate="visible">
          <motion.p
            variants={fadeIn}
            custom={0}
            style={{ fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)', color: theme.colors.accent, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}
          >
            Inference
          </motion.p>
          <motion.h2
            variants={fadeIn}
            custom={1}
            style={{
              fontFamily: theme.fonts.display,
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              lineHeight: 1.15,
              marginBottom: 12,
            }}
          >
            How a Model Generates Text
          </motion.h2>
          <motion.hr variants={fadeIn} custom={2} className="accent" style={{ width: 60 }} />

          <motion.div variants={fadeIn} custom={3} style={{ display: 'flex', gap: 8, marginTop: 24, alignItems: 'center' }}>
            {['What', 'is', 'the', 'capital', 'of', 'France?', '→', 'The', 'capital', '...'].map((t, i) => (
              <span key={i} style={{
                padding: '6px 10px',
                fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
                fontFamily: t === '→' ? theme.fonts.body : 'monospace',
                color: i >= 7 ? theme.colors.accent : theme.colors.text,
                border: i >= 7 ? `1px solid ${theme.colors.accent}` : `1px solid ${theme.colors.lightGray}`,
                background: i >= 7 ? 'rgba(196, 30, 58, 0.06)' : 'transparent',
              }}>
                {t}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeIn} custom={4} style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {concepts.map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
                <span style={{
                  fontFamily: theme.fonts.display,
                  fontWeight: 700,
                  fontSize: 'clamp(1rem, 1.3vw, 1.1rem)',
                  color: theme.colors.accent,
                  minWidth: 140,
                }}>
                  {c.term}
                </span>
                <span style={{
                  fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                  color: theme.colors.muted,
                  lineHeight: 1.5,
                }}>
                  {c.desc}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
