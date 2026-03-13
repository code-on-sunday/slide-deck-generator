import { motion } from 'framer-motion'
import SlideLayout, { Circle, DotPattern } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp, fadeIn, scaleIn } from '../lib/animations'

export default function Slide11() {
  const sequence = [
    { token: 'Hà', done: true },
    { token: 'Nội', done: true },
    { token: 'là', done: true },
    { token: 'thủ', done: true },
    { token: 'đô', done: true },
    { token: 'của', done: true },
    { token: 'Việt', generating: true },
    { token: 'Nam', next: true },
  ]

  return (
    <SlideLayout background={`${gradients.subtle}, ${theme.colors.cream}`}>
      <Circle size={200} top={-70} right={-50} opacity={0.08} />
      <DotPattern rows={4} cols={5} bottom={50} left={50} opacity={0.1} />

      <div style={{ padding: '60px 100px', position: 'relative', zIndex: 1 }}>
        <motion.p
          variants={fadeIn} initial="hidden" animate="visible" custom={0}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
            textTransform: 'uppercase', letterSpacing: '3px',
            color: theme.colors.orange, marginBottom: 16, fontWeight: 600,
          }}
        >
          Suy luận
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: theme.fonts.display, fontSize: clamp(30, 40),
            color: theme.colors.charcoal, lineHeight: 1.2,
          }}
        >
          Model tạo text từng token một
        </motion.h1>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{ width: 50, height: 3, background: theme.colors.orange, margin: '20px 0 30px' }}
        />

        {/* Token generation visualization */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 30 }}>
          {sequence.map((s, i) => (
            <motion.span
              key={i}
              variants={scaleIn} initial="hidden" animate="visible" custom={i + 3}
              style={{
                padding: '10px 18px',
                border: s.next
                  ? `2.5px dashed ${theme.colors.orange}`
                  : s.generating
                    ? `2.5px solid ${theme.colors.orange}`
                    : `1.5px solid ${theme.colors.warm}`,
                background: s.next
                  ? 'rgba(196,113,59,0.06)'
                  : s.generating
                    ? 'rgba(196,113,59,0.1)'
                    : 'transparent',
                fontFamily: theme.fonts.body,
                fontSize: clamp(16, 20),
                color: s.next ? theme.colors.orange : theme.colors.charcoal,
                fontWeight: s.generating || s.next ? 600 : 400,
                opacity: s.done ? 0.7 : 1,
              }}
            >
              {s.token}{s.next && ' ?'}
            </motion.span>
          ))}
        </div>

        {/* Process steps */}
        <div style={{ display: 'flex', gap: 30 }}>
          {[
            { step: 'Autoregressive', desc: 'Mỗi token mới dựa trên tất cả token trước đó' },
            { step: 'Sampling', desc: 'Chọn token theo xác suất (temperature, top-p, top-k)' },
            { step: 'Stop token', desc: 'Dừng khi gặp token kết thúc hoặc đạt giới hạn' },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" animate="visible" custom={i + 10}
              style={{
                flex: 1,
                borderLeft: `2px solid ${theme.colors.warm}`,
                padding: '0 16px',
              }}
            >
              <p style={{
                fontFamily: theme.fonts.body, fontSize: clamp(14, 17),
                fontWeight: 600, color: theme.colors.charcoal, marginBottom: 6,
              }}>
                {item.step}
              </p>
              <p style={{
                fontFamily: theme.fonts.body, fontSize: clamp(13, 15),
                color: theme.colors.charcoal, opacity: 0.5, lineHeight: 1.6,
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
