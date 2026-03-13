import { motion } from 'framer-motion'
import SlideLayout, { Circle, DotPattern } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp, fadeIn, scaleIn } from '../lib/animations'

export default function Slide05() {
  const tokens = [
    { text: 'Xin', id: 1521 },
    { text: 'chào', id: 8734 },
    { text: 'thế', id: 2901 },
    { text: 'giới', id: 4562 },
    { text: '!', id: 0 },
  ]

  return (
    <SlideLayout background={`${gradients.topRight}, ${theme.colors.cream}`}>
      <Circle size={180} bottom={-60} left={-40} opacity={0.08} />
      <DotPattern rows={5} cols={5} top={60} right={50} opacity={0.1} />

      <div style={{ padding: '65px 100px', position: 'relative', zIndex: 1 }}>
        <motion.p
          variants={fadeIn} initial="hidden" animate="visible" custom={0}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
            textTransform: 'uppercase', letterSpacing: '3px',
            color: theme.colors.orange, marginBottom: 16, fontWeight: 600,
          }}
        >
          Bước 1
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: theme.fonts.display, fontSize: clamp(32, 42),
            color: theme.colors.charcoal, lineHeight: 1.2,
          }}
        >
          Tokenization: Text → Số
        </motion.h1>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{ width: 50, height: 3, background: theme.colors.orange, margin: '20px 0' }}
        />

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(15, 18),
            color: theme.colors.charcoal, opacity: 0.55, marginBottom: 32, maxWidth: 650,
          }}
        >
          Máy tính không hiểu chữ — cần chuyển văn bản thành chuỗi số (token IDs)
        </motion.p>

        {/* Original text */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(20, 26),
            color: theme.colors.charcoal, marginBottom: 20,
          }}
        >
          "Xin chào thế giới!"
        </motion.div>

        {/* Arrow */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={5}
          style={{
            fontSize: clamp(20, 28), color: theme.colors.orange, marginBottom: 20,
          }}
        >
          ↓ Tokenizer
        </motion.div>

        {/* Tokens */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {tokens.map((t, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              custom={i + 5}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                padding: '12px 24px',
                border: `2px solid ${theme.colors.orange}`,
                background: 'rgba(196,113,59,0.06)',
                fontFamily: theme.fonts.body,
                fontSize: clamp(18, 22),
                fontWeight: 500,
                color: theme.colors.charcoal,
                marginBottom: 6,
              }}>
                {t.text}
              </div>
              <span style={{
                fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
                color: theme.colors.orange, opacity: 0.7,
              }}>
                ID: {t.id}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={11}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(13, 15),
            color: theme.colors.charcoal, opacity: 0.45, marginTop: 30, maxWidth: 600,
            lineHeight: 1.6,
          }}
        >
          Mỗi model có bộ tokenizer riêng. GPT-4 dùng ~100,000 token. Một từ có thể thành nhiều token.
        </motion.p>
      </div>
    </SlideLayout>
  )
}

function clamp(min: number, max: number) {
  return `clamp(${min}px, ${min + (max - min) * 0.5}px + 1vw, ${max}px)`
}
