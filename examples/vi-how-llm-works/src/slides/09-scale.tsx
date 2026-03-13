import { motion } from 'framer-motion'
import SlideLayout, { Circle, DotPattern } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp, fadeIn } from '../lib/animations'

export default function Slide09() {
  const models = [
    { name: 'GPT-2', params: '1.5B', year: '2019', width: 60 },
    { name: 'GPT-3', params: '175B', year: '2020', width: 200 },
    { name: 'PaLM', params: '540B', year: '2022', width: 360 },
    { name: 'GPT-4', params: '~1.8T*', year: '2023', width: 520 },
  ]

  return (
    <SlideLayout background={`${gradients.center}, ${theme.colors.cream}`}>
      <Circle size={300} top={-100} right={-100} opacity={0.06} />
      <DotPattern rows={4} cols={6} bottom={40} left={40} opacity={0.1} />

      <div style={{ padding: '60px 100px', position: 'relative', zIndex: 1 }}>
        <motion.p
          variants={fadeIn} initial="hidden" animate="visible" custom={0}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
            textTransform: 'uppercase', letterSpacing: '3px',
            color: theme.colors.orange, marginBottom: 16, fontWeight: 600,
          }}
        >
          Quy mô
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: theme.fonts.display, fontSize: clamp(30, 40),
            color: theme.colors.charcoal, lineHeight: 1.2,
          }}
        >
          Kích thước model ảnh hưởng khả năng
        </motion.h1>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{ width: 50, height: 3, background: theme.colors.orange, margin: '20px 0 30px' }}
        />

        {/* Scale bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {models.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" animate="visible" custom={i + 3}
              style={{ display: 'flex', alignItems: 'center', gap: 16 }}
            >
              <span style={{
                fontFamily: theme.fonts.body, fontSize: clamp(14, 17),
                fontWeight: 600, color: theme.colors.charcoal, minWidth: 70, textAlign: 'right',
              }}>
                {m.name}
              </span>
              <div style={{
                height: 32,
                width: m.width,
                background: `linear-gradient(90deg, ${theme.colors.orange}, rgba(196,113,59,0.5))`,
                display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
                paddingRight: 12,
              }}>
                <span style={{
                  fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
                  color: '#fff', fontWeight: 500,
                }}>
                  {m.params}
                </span>
              </div>
              <span style={{
                fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
                color: theme.colors.charcoal, opacity: 0.4,
              }}>
                {m.year}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={8}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(13, 15),
            color: theme.colors.charcoal, opacity: 0.45, marginTop: 30,
            lineHeight: 1.6, maxWidth: 700,
          }}
        >
          * Ước tính. Scaling laws: model lớn hơn + dữ liệu nhiều hơn = khả năng mới xuất hiện (emergent abilities). Chi phí training GPT-4 ước tính hơn $100M.
        </motion.p>
      </div>
    </SlideLayout>
  )
}

function clamp(min: number, max: number) {
  return `clamp(${min}px, ${min + (max - min) * 0.5}px + 1vw, ${max}px)`
}
