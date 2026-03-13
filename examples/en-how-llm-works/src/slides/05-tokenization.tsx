import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { theme } from '../lib/theme'
import { fadeIn } from '../lib/animations'

export default function Slide05() {
  const exampleTokens = [
    { text: 'un', id: 348 },
    { text: 'believ', id: 12942 },
    { text: 'ably', id: 2915 },
    { text: ' power', id: 1176 },
    { text: 'ful', id: 913 },
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
              fontSize: 'clamp(2rem, 3vw, 2.6rem)',
              lineHeight: 1.15,
              marginBottom: 12,
            }}
          >
            Tokenization: Text → Numbers
          </motion.h2>
          <motion.hr variants={fadeIn} custom={1} className="accent" style={{ width: 60 }} />
          <motion.p
            variants={fadeIn}
            custom={2}
            className="drop-cap"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.1rem)',
              lineHeight: 1.7,
              maxWidth: 640,
              marginTop: 8,
            }}
          >
            Models don't read text — they process numbers. A tokenizer splits input into
            subword pieces, each mapped to an integer. The word "unbelievably" becomes
            multiple tokens, not one.
          </motion.p>

          <motion.div variants={fadeIn} custom={3} style={{ marginTop: 36 }}>
            <p style={{ fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)', color: theme.colors.muted, marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1.5 }}>
              "unbelievably powerful" →
            </p>
            <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end' }}>
              {exampleTokens.map((t, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{
                    padding: '10px 16px',
                    border: `1px solid ${theme.colors.lightGray}`,
                    fontFamily: 'monospace',
                    fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                    background: 'rgba(196, 30, 58, 0.04)',
                  }}>
                    {t.text}
                  </div>
                  <div style={{
                    fontSize: 'clamp(0.7rem, 0.9vw, 0.8rem)',
                    color: theme.colors.accent,
                    marginTop: 6,
                    fontFamily: 'monospace',
                  }}>
                    {t.id}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p
            variants={fadeIn}
            custom={4}
            style={{
              fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
              color: theme.colors.muted,
              marginTop: 28,
              lineHeight: 1.6,
            }}
          >
            GPT-4's vocabulary: ~100,000 tokens. Each token is roughly 3–4 characters.
          </motion.p>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
