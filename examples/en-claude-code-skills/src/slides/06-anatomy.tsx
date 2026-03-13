import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { fadeInUp } from '../lib/animations'
import { theme } from '../lib/theme'

export default function Slide06() {
  const lines = [
    { text: '---', color: 'rgba(255,255,255,0.3)' },
    { text: 'name: deploy-checker', color: theme.colors.cyan },
    { text: 'description: "Check deployment readiness"', color: theme.colors.magenta },
    { text: '---', color: 'rgba(255,255,255,0.3)' },
    { text: '', color: 'transparent' },
    { text: '# Deploy Checker Skill', color: theme.colors.white },
    { text: '', color: 'transparent' },
    { text: '## Instructions', color: 'rgba(255,255,255,0.7)' },
    { text: 'When asked to check deployment...', color: 'rgba(255,255,255,0.5)' },
    { text: '1. Run all tests', color: 'rgba(255,255,255,0.5)' },
    { text: '2. Check environment variables', color: 'rgba(255,255,255,0.5)' },
    { text: '3. Validate config files', color: 'rgba(255,255,255,0.5)' },
  ]

  const annotations = [
    { label: 'Name', top: '15%', color: theme.colors.cyan },
    { label: 'Trigger Words', top: '25%', color: theme.colors.magenta },
    { label: 'Instruction Body', top: '60%', color: theme.colors.white },
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
        Anatomy
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
        It&apos;s just{' '}
        <span style={{ color: theme.colors.cyan }} className="neon-text">
          Markdown
        </span>
      </motion.h2>

      <div className="flex gap-12 mt-8 flex-1 items-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="flex-1"
          style={{
            border: `1px solid rgba(0, 255, 204, 0.15)`,
            borderRadius: '8px',
            padding: '24px',
            fontFamily: "'Courier New', monospace",
            fontSize: 'clamp(12px, 1.3vw, 15px)',
            lineHeight: 1.8,
          }}
        >
          {lines.map((line, i) => (
            <div key={i} style={{ color: line.color, minHeight: '20px' }}>
              {line.text}
            </div>
          ))}
        </motion.div>

        <div className="flex flex-col gap-8" style={{ width: '240px' }}>
          {annotations.map((ann, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={i + 3}
              className="flex items-center gap-3"
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: ann.color,
                  boxShadow: `0 0 10px ${ann.color}`,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: theme.fonts.display,
                  fontSize: 'clamp(11px, 1.3vw, 14px)',
                  color: ann.color,
                }}
              >
                {ann.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}
