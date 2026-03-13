import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { theme } from '../lib/theme'
import { fadeIn } from '../lib/animations'

export default function Slide08() {
  const stats = [
    { label: 'Parameters', value: '175B – 1.8T', note: 'GPT-3 to GPT-4 class' },
    { label: 'Training tokens', value: '1 – 15 trillion', note: 'web text, books, code' },
    { label: 'Compute', value: '~$100M+', note: 'thousands of GPUs for weeks' },
  ]

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
              lineHeight: 1.15,
              marginBottom: 12,
            }}
          >
            Pre-training on Internet Text
          </motion.h2>
          <motion.hr variants={fadeIn} custom={1} className="accent" style={{ width: 60 }} />
          <motion.p
            variants={fadeIn}
            custom={2}
            className="drop-cap"
            style={{
              fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
              lineHeight: 1.7,
              maxWidth: 640,
              marginTop: 8,
            }}
          >
            Pre-training is where the model learns language. It reads vast amounts of text
            and adjusts its billions of parameters to become better at predicting the next
            token. This stage is unsupervised — no human labels needed.
          </motion.p>

          <motion.div
            variants={fadeIn}
            custom={3}
            style={{ display: 'flex', gap: 40, marginTop: 40 }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{ flex: 1 }}>
                <div style={{
                  fontFamily: theme.fonts.display,
                  fontWeight: 700,
                  fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)',
                  color: theme.colors.accent,
                  marginBottom: 4,
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                  fontWeight: 700,
                  fontFamily: theme.fonts.display,
                  marginBottom: 4,
                }}>
                  {s.label}
                </div>
                <div style={{
                  fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                  color: theme.colors.muted,
                }}>
                  {s.note}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
