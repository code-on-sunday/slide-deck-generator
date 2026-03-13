import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { fadeInUp, slideInLeft } from '../lib/animations'
import { theme } from '../lib/theme'
import { FileSearch, Cpu, CheckCircle, ArrowRight } from 'lucide-react'

export default function Slide05() {
  const steps = [
    { icon: FileSearch, label: 'Claude reads SKILL.md', desc: 'When triggered by your message' },
    { icon: Cpu, label: 'Follows instructions', desc: 'Executes the defined workflow' },
    { icon: CheckCircle, label: 'Consistent output', desc: 'Same quality every time' },
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
        How It Works
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
        Trigger → Read → Execute
      </motion.h2>

      <div className="flex items-center justify-center gap-6 flex-1">
        {steps.map((step, i) => (
          <motion.div key={i} className="flex items-center gap-6">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              custom={i + 2}
              className="flex flex-col items-center text-center"
              style={{ width: '280px' }}
            >
              <div
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  border: `1px solid rgba(0, 255, 204, 0.2)`,
                }}
                className="neon-glow"
              >
                <step.icon size={36} color={theme.colors.cyan} />
              </div>
              <span
                style={{
                  fontFamily: theme.fonts.display,
                  fontSize: 'clamp(12px, 1.5vw, 16px)',
                  color: theme.colors.white,
                  marginTop: '16px',
                }}
              >
                {step.label}
              </span>
              <span
                style={{
                  fontSize: 'clamp(12px, 1.3vw, 14px)',
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: '8px',
                }}
              >
                {step.desc}
              </span>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={i + 3}
              >
                <ArrowRight size={24} color={theme.colors.cyan} style={{ opacity: 0.4 }} />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  )
}
