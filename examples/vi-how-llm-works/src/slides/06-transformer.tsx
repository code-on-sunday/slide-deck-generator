import { motion } from 'framer-motion'
import SlideLayout, { Circle, HLine, DotPattern } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp, fadeIn } from '../lib/animations'

export default function Slide06() {
  const layers = [
    'Input Embedding',
    'Positional Encoding',
    'Multi-Head Attention',
    'Feed Forward',
    'Layer Norm',
    'Output',
  ]

  return (
    <SlideLayout background={`${gradients.subtle}, ${theme.colors.cream}`}>
      <HLine width="100%" thickness={4} color={theme.colors.orange} top={0} left={0} opacity={0.8} />
      <Circle size={250} bottom={-100} right={-80} opacity={0.07} />
      <DotPattern rows={3} cols={4} top={100} left={40} opacity={0.1} />

      <div style={{ padding: '60px 100px', position: 'relative', zIndex: 1, display: 'flex', gap: 60 }}>
        <div style={{ flex: 1.2 }}>
          <motion.p
            variants={fadeIn} initial="hidden" animate="visible" custom={0}
            style={{
              fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
              textTransform: 'uppercase', letterSpacing: '3px',
              color: theme.colors.orange, marginBottom: 16, fontWeight: 600,
            }}
          >
            Kiến trúc
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            style={{
              fontFamily: theme.fonts.display, fontSize: clamp(30, 40),
              color: theme.colors.charcoal, lineHeight: 1.2,
            }}
          >
            Transformer
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            style={{
              fontFamily: theme.fonts.display, fontSize: clamp(16, 20),
              color: theme.colors.orange, fontStyle: 'italic', margin: '12px 0 20px',
            }}
          >
            "Attention Is All You Need" (2017)
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
            style={{ width: 40, height: 3, background: theme.colors.orange, marginBottom: 20 }}
          />

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            style={{
              fontFamily: theme.fonts.body, fontSize: clamp(14, 17),
              color: theme.colors.charcoal, opacity: 0.55, lineHeight: 1.7, maxWidth: 500,
            }}
          >
            Kiến trúc đột phá của Google Brain cho phép xử lý song song toàn bộ chuỗi đầu vào, thay vì từng bước tuần tự như RNN/LSTM trước đó.
          </motion.p>
        </div>

        {/* Architecture diagram */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={4}
          style={{
            flex: 0.8,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            paddingTop: 30,
          }}
        >
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i + 4}
              style={{
                padding: '14px 20px',
                border: i === 2
                  ? `2.5px solid ${theme.colors.orange}`
                  : `1.5px solid ${theme.colors.warm}`,
                background: i === 2 ? 'rgba(196,113,59,0.08)' : 'transparent',
                fontFamily: theme.fonts.body,
                fontSize: clamp(14, 16),
                color: theme.colors.charcoal,
                fontWeight: i === 2 ? 600 : 400,
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {layer}
              {i === 2 && (
                <span style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: clamp(11, 13),
                  color: theme.colors.orange,
                  opacity: 0.7,
                }}>
                  ← trọng tâm
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}

function clamp(min: number, max: number) {
  return `clamp(${min}px, ${min + (max - min) * 0.5}px + 1vw, ${max}px)`
}
