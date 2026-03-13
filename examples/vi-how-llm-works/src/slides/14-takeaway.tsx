import { motion } from 'framer-motion'
import SlideLayout, { Circle, HLine, DotPattern } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp, fadeIn } from '../lib/animations'

export default function Slide14() {
  return (
    <SlideLayout background={`${gradients.center}, ${theme.colors.cream}`}>
      <HLine width="100%" thickness={4} color={theme.colors.orange} top={0} left={0} opacity={0.8} />
      <HLine width="100%" thickness={4} color={theme.colors.orange} bottom={0} left={0} opacity={0.8} />
      <Circle size={350} top={-150} left={-150} opacity={0.06} />
      <Circle size={120} bottom={80} right={80} opacity={0.1} />
      <DotPattern rows={5} cols={8} top={80} right={60} opacity={0.08} />

      <div style={{
        padding: '80px 100px',
        position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        height: '100%',
      }}>
        <motion.p
          variants={fadeIn} initial="hidden" animate="visible" custom={0}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
            textTransform: 'uppercase', letterSpacing: '3px',
            color: theme.colors.orange, marginBottom: 20, fontWeight: 600,
          }}
        >
          Kết luận
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: theme.fonts.display, fontSize: clamp(32, 44),
            color: theme.colors.charcoal, lineHeight: 1.25, maxWidth: 850,
          }}
        >
          "LLM là bộ nhận diện pattern tinh vi, không phải bộ não suy nghĩ"
        </motion.h1>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{ width: 60, height: 4, background: theme.colors.orange, margin: '30px 0' }}
        />

        <div style={{ display: 'flex', gap: 40, marginTop: 10 }}>
          {[
            'Sức mạnh đến từ scale và dữ liệu, không phải "hiểu biết"',
            'Công cụ cực kỳ hữu ích — nếu dùng đúng cách',
            'Hiểu cách hoạt động giúp dùng hiệu quả và nhận biết giới hạn',
          ].map((point, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" animate="visible" custom={i + 3}
              style={{ flex: 1 }}
            >
              <div style={{
                width: 8, height: 8, borderRadius: '50%',
                background: theme.colors.orange, marginBottom: 14,
              }} />
              <p style={{
                fontFamily: theme.fonts.body, fontSize: clamp(14, 17),
                color: theme.colors.charcoal, opacity: 0.65, lineHeight: 1.7,
              }}>
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}

function clamp(min: number, max: number) {
  return `clamp(${min}px, ${min + (max - min) * 0.5}px + 1vw, ${max}px)`
}
