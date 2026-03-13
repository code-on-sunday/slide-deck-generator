import { motion } from 'framer-motion'
import SlideLayout, { Circle, DotPattern } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp, fadeIn } from '../lib/animations'

export default function Slide03() {
  return (
    <SlideLayout background={`${gradients.subtle}, ${theme.colors.cream}`}>
      <Circle size={160} top={40} right={60} opacity={0.1} />
      <DotPattern rows={4} cols={4} bottom={80} right={100} opacity={0.12} />

      <div style={{ padding: '70px 100px', position: 'relative', zIndex: 1 }}>
        <motion.p
          variants={fadeIn} initial="hidden" animate="visible" custom={0}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
            textTransform: 'uppercase', letterSpacing: '3px',
            color: theme.colors.orange, marginBottom: 16, fontWeight: 600,
          }}
        >
          Thảo luận
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: theme.fonts.display, fontSize: clamp(32, 42),
            color: theme.colors.charcoal, lineHeight: 1.2, maxWidth: 750,
          }}
        >
          Autocomplete trên điện thoại hoạt động thế nào?
        </motion.h1>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{ width: 50, height: 3, background: theme.colors.orange, margin: '24px 0' }}
        />

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(16, 20),
            color: theme.colors.charcoal, opacity: 0.6, maxWidth: 600, marginBottom: 36,
          }}
        >
          Cùng nguyên lý, quy mô khác
        </motion.p>

        <div style={{ display: 'flex', gap: 30, alignItems: 'flex-start' }}>
          {/* Phone autocomplete example */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
            style={{ flex: 1 }}
          >
            <div style={{
              borderLeft: `3px solid ${theme.colors.orange}`,
              padding: '16px 24px',
            }}>
              <p style={{ fontFamily: theme.fonts.body, fontSize: clamp(15, 18), marginBottom: 12, fontWeight: 500 }}>
                Bạn gõ: "Hôm nay trời..."
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                {['đẹp', 'nắng', 'mưa'].map((w, i) => (
                  <motion.span key={i} variants={fadeUp} initial="hidden" animate="visible" custom={5 + i}
                    style={{
                      padding: '8px 20px',
                      border: `1.5px solid ${theme.colors.warm}`,
                      borderRadius: 20,
                      fontFamily: theme.fonts.body,
                      fontSize: clamp(14, 16),
                      color: theme.colors.charcoal,
                    }}
                  >{w}</motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* LLM comparison */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={6}
            style={{ flex: 1 }}
          >
            <div style={{
              borderLeft: `3px solid ${theme.colors.orange}`,
              padding: '16px 24px',
            }}>
              <p style={{ fontFamily: theme.fonts.body, fontSize: clamp(15, 18), marginBottom: 8, fontWeight: 500 }}>
                LLM: cùng nguyên lý
              </p>
              <p style={{ fontFamily: theme.fonts.body, fontSize: clamp(14, 16), opacity: 0.6, lineHeight: 1.6 }}>
                Thay vì 3 từ gợi ý → dự đoán trên hàng tỷ tham số, bối cảnh hàng nghìn token
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}

function clamp(min: number, max: number) {
  return `clamp(${min}px, ${min + (max - min) * 0.5}px + 1vw, ${max}px)`
}
