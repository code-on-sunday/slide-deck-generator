import { motion } from 'framer-motion'
import SlideLayout, { Circle, HLine, DotPattern } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp, fadeIn } from '../lib/animations'

export default function Slide10() {
  const steps = [
    {
      title: 'Base Model',
      desc: 'Hoàn thành văn bản, chưa biết trả lời câu hỏi',
      accent: false,
    },
    {
      title: 'Supervised Fine-tuning',
      desc: 'Học từ ví dụ hỏi-đáp do người viết',
      accent: false,
    },
    {
      title: 'RLHF',
      desc: 'Con người đánh giá và xếp hạng câu trả lời',
      accent: true,
    },
    {
      title: 'Assistant Model',
      desc: 'An toàn, hữu ích, tuân theo hướng dẫn',
      accent: false,
    },
  ]

  return (
    <SlideLayout background={`${gradients.topRight}, ${theme.colors.cream}`}>
      <HLine width="100%" thickness={4} color={theme.colors.orange} top={0} left={0} opacity={0.8} />
      <Circle size={160} bottom={-40} left={-30} opacity={0.08} />
      <DotPattern rows={3} cols={4} top={60} right={50} opacity={0.1} />

      <div style={{ padding: '60px 100px', position: 'relative', zIndex: 1 }}>
        <motion.p
          variants={fadeIn} initial="hidden" animate="visible" custom={0}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
            textTransform: 'uppercase', letterSpacing: '3px',
            color: theme.colors.orange, marginBottom: 16, fontWeight: 600,
          }}
        >
          Tinh chỉnh
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: theme.fonts.display, fontSize: clamp(30, 40),
            color: theme.colors.charcoal, lineHeight: 1.2,
          }}
        >
          Từ base model đến assistant
        </motion.h1>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{ width: 50, height: 3, background: theme.colors.orange, margin: '20px 0 30px' }}
        />

        {/* Pipeline */}
        <div style={{ display: 'flex', gap: 20, alignItems: 'stretch' }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" animate="visible" custom={i + 3}
              style={{
                flex: 1,
                borderTop: step.accent
                  ? `3px solid ${theme.colors.orange}`
                  : `2px solid ${theme.colors.warm}`,
                padding: '20px 0 0',
                position: 'relative',
              }}
            >
              <span style={{
                fontFamily: theme.fonts.body, fontSize: clamp(11, 13),
                color: theme.colors.orange, fontWeight: 600,
                position: 'absolute', top: -10,
                background: theme.colors.cream,
                padding: '0 6px',
              }}>
                {i + 1}
              </span>
              <p style={{
                fontFamily: theme.fonts.body, fontSize: clamp(15, 18),
                fontWeight: 600, color: theme.colors.charcoal, marginBottom: 8, marginTop: 8,
              }}>
                {step.title}
              </p>
              <p style={{
                fontFamily: theme.fonts.body, fontSize: clamp(13, 15),
                color: theme.colors.charcoal, opacity: 0.55, lineHeight: 1.6,
              }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={8}
          style={{
            marginTop: 30,
            borderLeft: `3px solid ${theme.colors.orange}`,
            padding: '12px 20px',
          }}
        >
          <p style={{
            fontFamily: theme.fonts.body, fontSize: clamp(14, 16),
            color: theme.colors.charcoal, opacity: 0.6, lineHeight: 1.6,
          }}>
            RLHF (Reinforcement Learning from Human Feedback): con người so sánh 2+ câu trả lời, model học để ưu tiên câu trả lời được đánh giá cao hơn.
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  )
}

function clamp(min: number, max: number) {
  return `clamp(${min}px, ${min + (max - min) * 0.5}px + 1vw, ${max}px)`
}
