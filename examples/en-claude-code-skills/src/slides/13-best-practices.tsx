import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { fadeInUp, glitchIn } from '../lib/animations'
import { theme } from '../lib/theme'
import { Target, BookOpen, Layout, ClipboardCheck } from 'lucide-react'

export default function Slide13() {
  const practices = [
    { icon: Target, title: 'Be specific', desc: 'Clear scope prevents ambiguity' },
    { icon: BookOpen, title: 'Include examples', desc: 'Show expected input/output' },
    { icon: Layout, title: 'Define output format', desc: 'File structure, naming conventions' },
    { icon: ClipboardCheck, title: 'Add quality checklists', desc: 'Ensure consistent standards' },
  ]

  return (
    <SlideLayout>
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0}
        style={{
          fontFamily: theme.fonts.display,
          fontSize: 'clamp(11px, 1.4vw, 14px)',
          color: theme.colors.cyan,
          textTransform: 'uppercase',
          letterSpacing: '3px',
        }}
      >
        Guidelines
      </motion.p>

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{
          fontFamily: theme.fonts.display,
          fontSize: 'clamp(22px, 3vw, 36px)',
          color: theme.colors.white,
          marginTop: '16px',
        }}
      >
        Best Practices
      </motion.h2>

      <div className="grid grid-cols-2 gap-6 mt-8 flex-1 items-center">
        {practices.map((item, i) => (
          <motion.div
            key={i}
            variants={glitchIn}
            initial="hidden"
            animate="visible"
            custom={i + 2}
            className="flex items-start gap-4"
            style={{
              borderLeft: `2px solid ${i % 2 === 0 ? theme.colors.cyan : theme.colors.magenta}`,
              padding: '20px 24px',
            }}
          >
            <item.icon
              size={28}
              color={i % 2 === 0 ? theme.colors.cyan : theme.colors.magenta}
              style={{ flexShrink: 0, marginTop: '2px' }}
            />
            <div className="flex flex-col gap-2">
              <span
                style={{
                  fontFamily: theme.fonts.display,
                  fontSize: 'clamp(13px, 1.5vw, 17px)',
                  color: theme.colors.white,
                }}
              >
                {item.title}
              </span>
              <span
                style={{
                  fontSize: 'clamp(13px, 1.4vw, 16px)',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {item.desc}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  )
}
