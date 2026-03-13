import { motion } from 'framer-motion'
import SlideLayout, { Circle, HLine, DotPattern } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp, fadeIn, scaleIn } from '../lib/animations'

export default function Slide04() {
  return (
    <SlideLayout background={`${gradients.center}, ${theme.colors.cream}`}>
      <HLine width="100%" thickness={4} color={theme.colors.orange} top={0} left={0} opacity={0.8} />
      <Circle size={400} top={-200} left={-200} opacity={0.06} />
      <DotPattern rows={3} cols={6} bottom={40} right={60} opacity={0.1} />

      <div style={{ padding: '70px 100px', position: 'relative', zIndex: 1 }}>
        <motion.p
          variants={fadeIn} initial="hidden" animate="visible" custom={0}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
            textTransform: 'uppercase', letterSpacing: '3px',
            color: theme.colors.orange, marginBottom: 16, fontWeight: 600,
          }}
        >
          Ý tưởng cốt lõi
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: theme.fonts.display, fontSize: clamp(34, 46),
            color: theme.colors.charcoal, lineHeight: 1.15, maxWidth: 800,
          }}
        >
          Dự đoán token tiếp theo
        </motion.h1>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{ width: 50, height: 3, background: theme.colors.orange, margin: '24px 0' }}
        />

        {/* Token sequence visualization */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 30, flexWrap: 'wrap' }}
        >
          {['Con', 'mèo', 'ngồi', 'trên', '___'].map((token, i) => (
            <motion.span
              key={i}
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              custom={i + 3}
              style={{
                padding: '10px 22px',
                border: i === 4 ? `2.5px solid ${theme.colors.orange}` : `1.5px solid ${theme.colors.warm}`,
                background: i === 4 ? 'rgba(196,113,59,0.08)' : 'transparent',
                fontFamily: theme.fonts.body,
                fontSize: clamp(18, 22),
                fontWeight: i === 4 ? 600 : 400,
                color: i === 4 ? theme.colors.orange : theme.colors.charcoal,
              }}
            >{token}</motion.span>
          ))}
          <motion.span
            variants={fadeIn} initial="hidden" animate="visible" custom={8}
            style={{
              fontFamily: theme.fonts.body, fontSize: clamp(14, 16),
              color: theme.colors.charcoal, opacity: 0.5, marginLeft: 16,
            }}
          >
            → P("bàn") = 0.25, P("ghế") = 0.18, ...
          </motion.span>
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={9}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(15, 18),
            color: theme.colors.charcoal, opacity: 0.55, marginTop: 40, maxWidth: 700,
            lineHeight: 1.7,
          }}
        >
          Toàn bộ sức mạnh của LLM nằm ở một nhiệm vụ đơn giản: cho trước chuỗi token, dự đoán token kế tiếp có xác suất cao nhất.
        </motion.p>
      </div>
    </SlideLayout>
  )
}

function clamp(min: number, max: number) {
  return `clamp(${min}px, ${min + (max - min) * 0.5}px + 1vw, ${max}px)`
}
