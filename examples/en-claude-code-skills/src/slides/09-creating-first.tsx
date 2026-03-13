import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { fadeInUp } from '../lib/animations'
import { theme } from '../lib/theme'
import { FolderPlus, FileText, Play } from 'lucide-react'

export default function Slide09() {
  const steps = [
    {
      icon: FolderPlus,
      step: '1',
      title: 'Create skills/ folder',
      code: 'mkdir -p skills/my-skill',
    },
    {
      icon: FileText,
      step: '2',
      title: 'Add SKILL.md',
      code: 'skills/my-skill/SKILL.md',
    },
    {
      icon: Play,
      step: '3',
      title: 'Write frontmatter + instructions',
      code: '---\nname: my-skill\ndescription: "..."\n---',
    },
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
          color: theme.colors.magenta,
          textTransform: 'uppercase',
          letterSpacing: '3px',
        }}
      >
        Getting Hands-On
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
        Creating Your First Skill
      </motion.h2>

      <div className="flex flex-col gap-6 mt-8 flex-1 justify-center max-w-3xl mx-auto w-full">
        {steps.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={i + 2}
            className="flex items-start gap-5"
          >
            <div
              style={{
                padding: '12px',
                borderRadius: '8px',
                border: `1px solid rgba(0, 255, 204, 0.2)`,
                flexShrink: 0,
              }}
              className="neon-glow"
            >
              <item.icon size={24} color={theme.colors.cyan} />
            </div>
            <div className="flex flex-col gap-2">
              <span
                style={{
                  fontFamily: theme.fonts.display,
                  fontSize: 'clamp(13px, 1.5vw, 16px)',
                  color: theme.colors.white,
                }}
              >
                <span style={{ color: theme.colors.cyan }}>Step {item.step}:</span> {item.title}
              </span>
              <span
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 'clamp(12px, 1.3vw, 15px)',
                  color: 'rgba(255,255,255,0.5)',
                  whiteSpace: 'pre',
                }}
              >
                {item.code}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  )
}
