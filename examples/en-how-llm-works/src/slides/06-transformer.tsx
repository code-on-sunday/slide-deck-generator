import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { theme } from '../lib/theme'
import { fadeIn } from '../lib/animations'

export default function Slide06() {
  const layers = ['Input Embedding', 'Positional Encoding', 'Multi-Head Attention', 'Feed Forward', 'Layer Norm', 'Output']

  return (
    <SlideLayout>
      <div style={{ display: 'flex', height: '100%', padding: '60px 120px 60px 100px', gap: 60 }}>
        <motion.div initial="hidden" animate="visible" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.p
            variants={fadeIn}
            custom={0}
            style={{ fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)', color: theme.colors.accent, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}
          >
            Architecture
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
            The Transformer
          </motion.h2>
          <motion.hr variants={fadeIn} custom={2} className="accent" style={{ width: 60 }} />
          <motion.p
            variants={fadeIn}
            custom={3}
            style={{
              fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
              lineHeight: 1.7,
              marginTop: 8,
              maxWidth: 440,
            }}
          >
            Introduced in the 2017 paper{' '}
            <em>"Attention Is All You Need"</em> by Vaswani et al., the transformer
            replaced recurrence with pure attention — enabling massive parallelism
            and scaling.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, minWidth: 220 }}
        >
          {layers.map((layer, i) => (
            <motion.div
              key={layer}
              variants={fadeIn}
              custom={i + 1}
              style={{
                padding: '12px 24px',
                border: `1px solid ${theme.colors.lightGray}`,
                fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
                textAlign: 'center',
                fontFamily: theme.fonts.body,
                background: i === 2 ? 'rgba(196, 30, 58, 0.06)' : 'transparent',
                color: i === 2 ? theme.colors.accent : theme.colors.text,
                borderColor: i === 2 ? theme.colors.accent : theme.colors.lightGray,
              }}
            >
              {layer}
            </motion.div>
          ))}
          <div style={{ textAlign: 'center', fontSize: 'clamp(0.75rem, 0.9vw, 0.8rem)', color: theme.colors.muted, marginTop: 4 }}>
            × N layers (e.g. 96 in GPT-4)
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
