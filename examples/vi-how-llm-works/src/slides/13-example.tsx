import { motion } from 'framer-motion'
import SlideLayout, { Circle, DotPattern } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp, fadeIn } from '../lib/animations'

export default function Slide13() {
  const steps = [
    { label: 'Prompt', content: '"Thủ đô Việt Nam là gì?"', color: theme.colors.charcoal },
    { label: 'Tokenize', content: '[Thủ] [đô] [Việt] [Nam] [là] [gì] [?]', color: theme.colors.charcoal },
    { label: 'Embedding', content: 'Chuyển thành vector số chiều cao', color: theme.colors.charcoal },
    { label: 'Attention', content: '"Việt Nam" + "thủ đô" → liên kết mạnh', color: theme.colors.orange },
    { label: 'Forward pass', content: 'Qua 96 layer transformer (GPT-4)', color: theme.colors.charcoal },
    { label: 'Output', content: 'P("Hà") = 0.89 → chọn "Hà"', color: theme.colors.orange },
    { label: 'Tiếp tục', content: '"Hà" → P("Nội") = 0.97 → "Hà Nội"', color: theme.colors.charcoal },
  ]

  return (
    <SlideLayout background={`${gradients.subtle}, ${theme.colors.cream}`}>
      <Circle size={180} top={-50} right={-40} opacity={0.08} />
      <DotPattern rows={3} cols={5} bottom={40} right={50} opacity={0.1} />

      <div style={{ padding: '55px 100px', position: 'relative', zIndex: 1 }}>
        <motion.p
          variants={fadeIn} initial="hidden" animate="visible" custom={0}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
            textTransform: 'uppercase', letterSpacing: '3px',
            color: theme.colors.orange, marginBottom: 14, fontWeight: 600,
          }}
        >
          Ví dụ thực tế
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: theme.fonts.display, fontSize: clamp(28, 36),
            color: theme.colors.charcoal, lineHeight: 1.2, marginBottom: 24,
          }}
        >
          Theo dõi prompt qua model từng bước
        </motion.h1>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" animate="visible" custom={i + 2}
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '8px 0',
                borderBottom: i < steps.length - 1 ? `1px solid rgba(232,212,192,0.5)` : 'none',
              }}
            >
              <div style={{
                minWidth: 28, height: 28,
                borderRadius: '50%',
                border: `2px solid ${theme.colors.orange}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: theme.fonts.body, fontSize: clamp(11, 13),
                color: theme.colors.orange, fontWeight: 600,
              }}>
                {i + 1}
              </div>
              <span style={{
                fontFamily: theme.fonts.body, fontSize: clamp(13, 15),
                fontWeight: 600, color: theme.colors.charcoal, minWidth: 100,
              }}>
                {step.label}
              </span>
              <span style={{
                fontFamily: theme.fonts.body, fontSize: clamp(13, 16),
                color: step.color,
                opacity: step.color === theme.colors.orange ? 1 : 0.6,
                fontWeight: step.color === theme.colors.orange ? 500 : 400,
              }}>
                {step.content}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={10}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(13, 15),
            color: theme.colors.charcoal, opacity: 0.45, marginTop: 20,
            lineHeight: 1.6,
          }}
        >
          Toàn bộ quá trình này diễn ra trong mili-giây, lặp lại cho mỗi token output.
        </motion.p>
      </div>
    </SlideLayout>
  )
}

function clamp(min: number, max: number) {
  return `clamp(${min}px, ${min + (max - min) * 0.5}px + 1vw, ${max}px)`
}
