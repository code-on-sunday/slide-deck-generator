import { motion } from 'framer-motion'
import SlideLayout, { Circle, HLine, DotPattern } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp, fadeIn } from '../lib/animations'
import { AlertTriangle, Brain, Clock } from 'lucide-react'

export default function Slide12() {
  const limits = [
    {
      icon: <AlertTriangle size={28} color={theme.colors.orange} />,
      title: 'Hallucination',
      desc: 'Tự tin nói sai. Model tạo text có vẻ đúng nhưng thực tế sai hoàn toàn.',
    },
    {
      icon: <Brain size={28} color={theme.colors.orange} />,
      title: 'Lỗ hổng suy luận',
      desc: 'Không thực sự "suy nghĩ". Dễ sai với logic phức tạp, toán nâng cao.',
    },
    {
      icon: <Clock size={28} color={theme.colors.orange} />,
      title: 'Giới hạn kiến thức',
      desc: 'Chỉ biết đến thời điểm training. Không có thông tin mới sau đó.',
    },
  ]

  return (
    <SlideLayout background={`${gradients.warm}, ${theme.colors.cream}`}>
      <HLine width="100%" thickness={4} color={theme.colors.orange} top={0} left={0} opacity={0.8} />
      <Circle size={200} bottom={-60} right={-60} opacity={0.08} />
      <DotPattern rows={3} cols={4} top={80} left={40} opacity={0.1} />

      <div style={{ padding: '60px 100px', position: 'relative', zIndex: 1 }}>
        <motion.p
          variants={fadeIn} initial="hidden" animate="visible" custom={0}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
            textTransform: 'uppercase', letterSpacing: '3px',
            color: theme.colors.orange, marginBottom: 16, fontWeight: 600,
          }}
        >
          Giới hạn
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: theme.fonts.display, fontSize: clamp(30, 40),
            color: theme.colors.charcoal, lineHeight: 1.2, maxWidth: 700,
          }}
        >
          Không phải phép màu — có giới hạn thực sự
        </motion.h1>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{ width: 50, height: 3, background: theme.colors.orange, margin: '24px 0 36px' }}
        />

        <div style={{ display: 'flex', gap: 40 }}>
          {limits.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" animate="visible" custom={i + 3}
              style={{ flex: 1 }}
            >
              <div style={{ marginBottom: 16 }}>
                {item.icon}
              </div>
              <p style={{
                fontFamily: theme.fonts.body, fontSize: clamp(16, 20),
                fontWeight: 600, color: theme.colors.charcoal, marginBottom: 10,
              }}>
                {item.title}
              </p>
              <p style={{
                fontFamily: theme.fonts.body, fontSize: clamp(14, 16),
                color: theme.colors.charcoal, opacity: 0.55, lineHeight: 1.7,
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
