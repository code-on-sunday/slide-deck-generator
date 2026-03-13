import { motion } from 'framer-motion'
import SlideLayout, { Circle, DotPattern } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp, fadeIn } from '../lib/animations'

export default function Slide07() {
  const words = ['Con', 'mèo', 'uống', 'sữa', 'của', 'nó']
  // Attention weights for "nó" → other tokens
  const attentionWeights = [0.05, 0.65, 0.05, 0.1, 0.05, 0.1]

  return (
    <SlideLayout background={`${gradients.warm}, ${theme.colors.cream}`}>
      <Circle size={200} top={-60} left={-60} opacity={0.08} />
      <DotPattern rows={4} cols={3} bottom={50} right={60} opacity={0.12} />

      <div style={{ padding: '60px 100px', position: 'relative', zIndex: 1 }}>
        <motion.p
          variants={fadeIn} initial="hidden" animate="visible" custom={0}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
            textTransform: 'uppercase', letterSpacing: '3px',
            color: theme.colors.orange, marginBottom: 16, fontWeight: 600,
          }}
        >
          Cơ chế cốt lõi
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: theme.fonts.display, fontSize: clamp(30, 40),
            color: theme.colors.charcoal, lineHeight: 1.2,
          }}
        >
          Self-Attention
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(16, 19),
            color: theme.colors.charcoal, opacity: 0.55, marginTop: 10, marginBottom: 30,
          }}
        >
          Mỗi token nhìn vào mọi token khác để hiểu ngữ cảnh
        </motion.p>

        {/* Attention visualization */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ marginBottom: 16 }}
        >
          <p style={{
            fontFamily: theme.fonts.body, fontSize: clamp(13, 15),
            color: theme.colors.orange, marginBottom: 16, fontWeight: 500,
          }}>
            Token "nó" chú ý đến token nào nhiều nhất?
          </p>

          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-end' }}>
            {words.map((w, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" animate="visible" custom={i + 4}
                style={{ textAlign: 'center', flex: 1 }}
              >
                {/* Bar */}
                <div style={{
                  width: '100%',
                  height: attentionWeights[i] * 180,
                  background: i === 1
                    ? theme.colors.orange
                    : `rgba(196,113,59,${0.15 + attentionWeights[i] * 0.5})`,
                  marginBottom: 10,
                  transition: 'height 0.5s ease',
                }} />
                <span style={{
                  fontFamily: theme.fonts.body,
                  fontSize: clamp(15, 18),
                  fontWeight: i === 1 || i === 5 ? 600 : 400,
                  color: i === 5 ? theme.colors.orange : theme.colors.charcoal,
                }}>
                  {w}
                </span>
                <div style={{
                  fontFamily: theme.fonts.body,
                  fontSize: clamp(11, 13),
                  color: theme.colors.charcoal,
                  opacity: 0.4,
                  marginTop: 4,
                }}>
                  {(attentionWeights[i] * 100).toFixed(0)}%
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={10}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(13, 15),
            color: theme.colors.charcoal, opacity: 0.45, marginTop: 20,
            lineHeight: 1.6, maxWidth: 700,
          }}
        >
          "Nó" tham chiếu đến "mèo" → attention weight cao nhất. Cơ chế này giúp model hiểu ngữ nghĩa và mối quan hệ giữa các từ.
        </motion.p>
      </div>
    </SlideLayout>
  )
}

function clamp(min: number, max: number) {
  return `clamp(${min}px, ${min + (max - min) * 0.5}px + 1vw, ${max}px)`
}
