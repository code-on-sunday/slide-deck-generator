import { motion } from 'framer-motion'
import SlideLayout, { Circle, DotPattern, HLine } from '../components/SlideLayout'
import { theme, gradients } from '../lib/theme'
import { fadeUp, fadeIn } from '../lib/animations'
import { BookOpen, ExternalLink, Video } from 'lucide-react'

export default function Slide15() {
  const resources = [
    {
      icon: <BookOpen size={22} color={theme.colors.orange} />,
      title: 'Attention Is All You Need',
      desc: 'Vaswani et al., 2017 — bài báo gốc về Transformer',
    },
    {
      icon: <Video size={22} color={theme.colors.orange} />,
      title: '3Blue1Brown — Neural Networks',
      desc: 'Loạt video trực quan hóa cách neural network hoạt động',
    },
    {
      icon: <BookOpen size={22} color={theme.colors.orange} />,
      title: 'Language Models are Few-Shot Learners',
      desc: 'Brown et al., 2020 — bài báo GPT-3',
    },
    {
      icon: <ExternalLink size={22} color={theme.colors.orange} />,
      title: 'Andrej Karpathy — Let\'s build GPT',
      desc: 'Video hướng dẫn xây dựng GPT từ đầu bằng code',
    },
    {
      icon: <BookOpen size={22} color={theme.colors.orange} />,
      title: 'Training language models to follow instructions (RLHF)',
      desc: 'Ouyang et al., 2022 — InstructGPT paper',
    },
  ]

  return (
    <SlideLayout background={`${gradients.warm}, ${theme.colors.cream}`}>
      <HLine width="100%" thickness={4} color={theme.colors.orange} bottom={0} left={0} opacity={0.8} />
      <Circle size={200} top={-60} right={-60} opacity={0.08} />
      <DotPattern rows={3} cols={4} bottom={60} left={40} opacity={0.1} />

      <div style={{ padding: '55px 100px', position: 'relative', zIndex: 1 }}>
        <motion.p
          variants={fadeIn} initial="hidden" animate="visible" custom={0}
          style={{
            fontFamily: theme.fonts.body, fontSize: clamp(12, 14),
            textTransform: 'uppercase', letterSpacing: '3px',
            color: theme.colors.orange, marginBottom: 14, fontWeight: 600,
          }}
        >
          Tài liệu
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: theme.fonts.display, fontSize: clamp(28, 38),
            color: theme.colors.charcoal, lineHeight: 1.2, marginBottom: 28,
          }}
        >
          Đọc thêm
        </motion.h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {resources.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" animate="visible" custom={i + 2}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 16,
                padding: '12px 0',
                borderBottom: i < resources.length - 1 ? `1px solid rgba(232,212,192,0.5)` : 'none',
              }}
            >
              <div style={{ marginTop: 2, flexShrink: 0 }}>
                {r.icon}
              </div>
              <div>
                <p style={{
                  fontFamily: theme.fonts.body, fontSize: clamp(15, 18),
                  fontWeight: 600, color: theme.colors.charcoal, marginBottom: 4,
                }}>
                  {r.title}
                </p>
                <p style={{
                  fontFamily: theme.fonts.body, fontSize: clamp(13, 15),
                  color: theme.colors.charcoal, opacity: 0.5, lineHeight: 1.5,
                }}>
                  {r.desc}
                </p>
              </div>
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
