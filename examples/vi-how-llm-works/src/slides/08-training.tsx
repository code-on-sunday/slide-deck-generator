import { motion } from 'framer-motion'
import SlideLayout, { Circle, HLine, DotPattern } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp, fadeIn } from '../lib/animations'

export default function Slide08() {
  const sources = [
    { name: 'Wikipedia', size: '~6B từ' },
    { name: 'Sách', size: '~100B từ' },
    { name: 'Web crawl', size: '~1T+ từ' },
    { name: 'Code', size: '~100B+ dòng' },
  ]

  return (
    <SlideLayout background={`${gradients.subtle}, ${theme.colors.cream}`}>
      <HLine width="100%" thickness={4} color={theme.colors.orange} top={0} left={0} opacity={0.8} />
      <Circle size={180} bottom={-40} right={-40} opacity={0.08} />
      <DotPattern rows={3} cols={5} top={80} left={40} opacity={0.1} />

      <div style={{ padding: '60px 100px', position: 'relative', zIndex: 1 }}>
        <motion.p
          variants={fadeIn} initial="hidden" animate="visible" custom={0}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
            textTransform: 'uppercase', letterSpacing: '3px',
            color: theme.colors.orange, marginBottom: 16, fontWeight: 600,
          }}
        >
          Huấn luyện
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: theme.fonts.display, fontSize: clamp(30, 40),
            color: theme.colors.charcoal, lineHeight: 1.2,
          }}
        >
          Pre-training trên dữ liệu internet
        </motion.h1>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{ width: 50, height: 3, background: theme.colors.orange, margin: '20px 0' }}
        />

        <div style={{ display: 'flex', gap: 50, marginTop: 20 }}>
          {/* Data sources */}
          <div style={{ flex: 1 }}>
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              style={{
                fontFamily: theme.fonts.body, fontSize: clamp(14, 16),
                fontWeight: 600, color: theme.colors.charcoal, marginBottom: 16,
              }}
            >
              Nguồn dữ liệu huấn luyện
            </motion.p>
            {sources.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" animate="visible" custom={i + 4}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: `1px solid ${theme.colors.warm}`,
                }}
              >
                <span style={{ fontFamily: theme.fonts.body, fontSize: clamp(14, 17), color: theme.colors.charcoal }}>
                  {s.name}
                </span>
                <span style={{ fontFamily: theme.fonts.body, fontSize: clamp(13, 15), color: theme.colors.orange, fontWeight: 500 }}>
                  {s.size}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Training process */}
          <div style={{ flex: 1 }}>
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={8}
              style={{
                fontFamily: theme.fonts.body, fontSize: clamp(14, 16),
                fontWeight: 600, color: theme.colors.charcoal, marginBottom: 16,
              }}
            >
              Quá trình
            </motion.p>
            {[
              'Đọc hàng tỷ câu văn',
              'Che token cuối, dự đoán',
              'So sánh với đáp án thực',
              'Cập nhật trọng số (backprop)',
              'Lặp lại hàng triệu lần',
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" animate="visible" custom={i + 8}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  marginBottom: 14,
                }}
              >
                <span style={{
                  fontFamily: theme.fonts.body, fontSize: clamp(13, 15),
                  color: theme.colors.orange, fontWeight: 600, minWidth: 20,
                }}>
                  {i + 1}.
                </span>
                <span style={{
                  fontFamily: theme.fonts.body, fontSize: clamp(14, 16),
                  color: theme.colors.charcoal, opacity: 0.7, lineHeight: 1.5,
                }}>
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

function clamp(min: number, max: number) {
  return `clamp(${min}px, ${min + (max - min) * 0.5}px + 1vw, ${max}px)`
}
