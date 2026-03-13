import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'
import { theme } from '../lib/theme'
import { fadeIn } from '../lib/animations'

export default function Slide12() {
  const limitations = [
    { title: 'Hallucinations', desc: 'Models confidently generate false information because they optimize for plausible-sounding text, not truth.' },
    { title: 'Reasoning gaps', desc: 'Multi-step logical reasoning remains fragile. Models can fail at tasks a child could solve.' },
    { title: 'Knowledge cutoffs', desc: 'Training data has a fixed end date. The model doesn\'t know what happened after.' },
    { title: 'No true understanding', desc: 'Pattern matching over tokens is not comprehension. Context is statistical, not semantic.' },
  ]

  return (
    <SlideLayout>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 120px' }}>
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeIn} custom={0} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <AlertTriangle size={24} color={theme.colors.accent} />
            <h2 style={{
              fontFamily: theme.fonts.display,
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              lineHeight: 1.15,
            }}>
              Limitations
            </h2>
          </motion.div>
          <motion.hr variants={fadeIn} custom={1} className="accent" style={{ width: 60 }} />

          <motion.div variants={fadeIn} custom={2} style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 48px' }}>
            {limitations.map((l, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: theme.fonts.display,
                  fontWeight: 700,
                  fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                  marginBottom: 6,
                  color: theme.colors.text,
                }}>
                  {l.title}
                </div>
                <div style={{
                  fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
                  color: theme.colors.muted,
                  lineHeight: 1.6,
                }}>
                  {l.desc}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
