import { motion } from 'framer-motion'
import SlideLayout, { Circle, DotPattern, HLine } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp, fadeIn } from '../lib/animations'

export default function Slide01() {
  return (
    <SlideLayout background={`${gradients.subtle}, ${theme.colors.cream}`}>
      <Circle size={220} top={-60} right={-40} opacity={0.12} />
      <Circle size={90} bottom={80} left={60} opacity={0.1} />
      <DotPattern rows={5} cols={8} top={50} right={80} opacity={0.12} />
      <HLine width={200} top={360} left={0} thickness={4} color={theme.colors.orange} opacity={0.7} />

      <div style={{ padding: '100px 100px 60px 100px', position: 'relative', zIndex: 1 }}>
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
            marginBottom: 24,
            fontWeight: 600,
          }}
        >
          Giải mã công nghệ
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{
            fontFamily: theme.fonts.display,
            fontSize: clamp(38, 52),
            color: theme.colors.charcoal,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Large Language Model
          <br />
          Hoạt Động Như Thế Nào
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            width: 60,
            height: 4,
            background: theme.colors.orange,
            margin: '28px 0',
          }}
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{
            fontFamily: theme.fonts.body,
            fontSize: clamp(18, 22),
            color: theme.colors.charcoal,
            opacity: 0.65,
            maxWidth: 600,
          }}
        >
          Từ dự đoán văn bản đến trí tuệ nhân tạo
        </motion.p>
      </div>

      <Circle size={12} color={theme.colors.orange} bottom={60} right={120} opacity={0.5} />
    </SlideLayout>
  )
}

function clamp(min: number, max: number) {
  return `clamp(${min}px, ${min + (max - min) * 0.5}px + 1vw, ${max}px)`
}
