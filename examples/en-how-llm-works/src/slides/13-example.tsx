import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { theme } from '../lib/theme'
import { fadeIn } from '../lib/animations'

export default function Slide13() {
  const steps = [
    { step: 'Input', detail: '"What is photosynthesis?"' },
    { step: 'Tokenize', detail: '["What", " is", " photo", "syn", "thesis", "?"] → [2061, 318, 4590, 28869, 24547, 30]' },
    { step: 'Embed', detail: 'Each token ID → 4096-dimensional vector' },
    { step: 'Attend', detail: '96 transformer layers process the sequence — "photo" + "synthesis" attend to each other' },
    { step: 'Predict', detail: 'Output distribution: P("Photo") = 0.42, P("It") = 0.18, P("The") = 0.12 ...' },
    { step: 'Decode', detail: 'Sample "Photo" → append → repeat until done' },
  ]

  return (
    <SlideLayout>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 100px 0 120px' }}>
        <motion.div initial="hidden" animate="visible">
          <motion.p
            variants={fadeIn}
            custom={0}
            style={{ fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)', color: theme.colors.accent, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}
          >
            Worked Example
          </motion.p>
          <motion.h2
            variants={fadeIn}
            custom={1}
            style={{
              fontFamily: theme.fonts.display,
              fontWeight: 700,
              fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)',
              lineHeight: 1.15,
              marginBottom: 12,
            }}
          >
            Tracing a Prompt Through the Model
          </motion.h2>
          <motion.hr variants={fadeIn} custom={2} className="accent" style={{ width: 60 }} />

          <motion.div variants={fadeIn} custom={3} style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
                <div style={{
                  fontFamily: theme.fonts.display,
                  fontWeight: 700,
                  fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
                  color: theme.colors.accent,
                  minWidth: 72,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}>
                  {s.step}
                </div>
                <div style={{
                  fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
                  lineHeight: 1.5,
                  color: theme.colors.text,
                  fontFamily: 'monospace',
                }}>
                  {s.detail}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
