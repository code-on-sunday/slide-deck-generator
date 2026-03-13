import { motion } from 'framer-motion'
import SlideLayout, { Circle, DotPattern, HLine } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp, fadeIn } from '../lib/animations'

export default function Slide02() {
  return (
    <SlideLayout background={`${gradients.warm}, ${theme.colors.cream}`}>
      <HLine width="100%" thickness={4} color={theme.colors.orange} top={0} left={0} opacity={0.8} />
      <Circle size={300} top={-150} right={-100} opacity={0.08} />
      <DotPattern rows={3} cols={5} bottom={50} left={40} opacity={0.1} />

      <div style={{ padding: '80px 100px', position: 'relative', zIndex: 1 }}>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            fontFamily: theme.fonts.body,
            fontSize: clamp(12, 14),
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: theme.colors.orange,
            marginBottom: 20,
            fontWeight: 600,
          }}
        >
          Vấn đề
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{
            fontFamily: theme.fonts.display,
            fontSize: clamp(36, 48),
            color: theme.colors.charcoal,
            lineHeight: 1.2,
            maxWidth: 800,
          }}
        >
          LLM có vẻ kỳ diệu — nhưng không phải vậy
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{ width: 50, height: 3, background: theme.colors.orange, margin: '30px 0' }}
        />

        <div style={{ display: 'flex', gap: 40, marginTop: 20 }}>
          {[
            { label: 'ChatGPT trả lời mọi câu hỏi', desc: 'Có thực sự "hiểu" không?' },
            { label: 'Viết code, dịch thuật, sáng tạo', desc: 'Hay chỉ là pattern matching?' },
            { label: 'Giống con người đáng sợ', desc: 'Bên trong là gì?' },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i + 3}
              style={{ flex: 1 }}
            >
              <p style={{
                fontFamily: theme.fonts.body,
                fontSize: clamp(16, 19),
                fontWeight: 600,
                color: theme.colors.charcoal,
                marginBottom: 8,
              }}>
                {item.label}
              </p>
              <p style={{
                fontFamily: theme.fonts.body,
                fontSize: clamp(14, 16),
                color: theme.colors.charcoal,
                opacity: 0.55,
              }}>
                {item.desc}
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
