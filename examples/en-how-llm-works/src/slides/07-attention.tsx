import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { theme } from '../lib/theme'
import { fadeIn } from '../lib/animations'

export default function Slide07() {
  const words = ['The', 'bank', 'by', 'the', 'river']
  const attentionWeights = [0.1, 0.8, 0.15, 0.1, 0.7]

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
            Self-Attention
          </motion.h2>
          <motion.hr variants={fadeIn} custom={1} className="accent" style={{ width: 60 }} />
          <motion.p
            variants={fadeIn}
            custom={2}
            style={{
              fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
              lineHeight: 1.7,
              maxWidth: 640,
              marginTop: 8,
            }}
          >
            Every token looks at every other token. The model learns <em>which</em> words
            matter for understanding each word. In "The bank by the river," the word "bank"
            attends heavily to "river" — resolving the ambiguity.
          </motion.p>

          <motion.div
            variants={fadeIn}
            custom={3}
            style={{ display: 'flex', gap: 20, marginTop: 40, alignItems: 'flex-end' }}
          >
            {words.map((w, i) => (
              <div key={i} style={{ textAlign: 'center', flex: 1 }}>
                <div style={{
                  height: 120,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  marginBottom: 8,
                }}>
                  <div style={{
                    width: 40,
                    height: `${attentionWeights[i] * 100}%`,
                    background: `rgba(196, 30, 58, ${0.15 + attentionWeights[i] * 0.6})`,
                    border: `1px solid ${theme.colors.accent}`,
                    transition: 'height 0.5s ease',
                  }} />
                </div>
                <div style={{
                  fontFamily: theme.fonts.display,
                  fontWeight: 700,
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
                  color: attentionWeights[i] > 0.5 ? theme.colors.accent : theme.colors.text,
                }}>
                  {w}
                </div>
                <div style={{
                  fontSize: 'clamp(0.7rem, 0.9vw, 0.8rem)',
                  color: theme.colors.muted,
                  marginTop: 4,
                  fontFamily: 'monospace',
                }}>
                  {attentionWeights[i].toFixed(2)}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeIn}
            custom={4}
            style={{
              fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
              color: theme.colors.muted,
              marginTop: 20,
              fontStyle: 'italic',
            }}
          >
            Attention weights when processing "bank" — higher bars indicate stronger attention.
          </motion.p>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
