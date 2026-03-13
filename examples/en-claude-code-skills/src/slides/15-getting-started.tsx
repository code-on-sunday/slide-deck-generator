import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { fadeInUp } from '../lib/animations'
import { theme } from '../lib/theme'
import { ExternalLink, BookOpen, Github, Rocket } from 'lucide-react'

export default function Slide15() {
  const links = [
    { icon: BookOpen, label: 'Documentation', url: 'docs.anthropic.com' },
    { icon: Github, label: 'Example Skills', url: 'github.com/anthropics/skills' },
    { icon: Rocket, label: 'Claude Code CLI', url: 'claude.ai/code' },
  ]

  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full text-center">
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
          Next Steps
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{
            fontFamily: theme.fonts.display,
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            color: theme.colors.white,
            marginTop: '20px',
          }}
          className="neon-text"
        >
          Get Started Today
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            fontSize: 'clamp(15px, 1.8vw, 20px)',
            color: 'rgba(255,255,255,0.6)',
            marginTop: '16px',
            maxWidth: '600px',
            lineHeight: 1.6,
          }}
        >
          Create your first skill, share it with your team, and watch Claude Code become an expert
          at your workflows
        </motion.p>

        <div className="flex gap-8 mt-12">
          {links.map((link, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={i + 3}
              className="flex flex-col items-center gap-3"
              style={{
                padding: '24px 32px',
                border: `1px solid rgba(0, 255, 204, 0.2)`,
                borderRadius: '8px',
              }}
            >
              <link.icon size={28} color={theme.colors.cyan} />
              <span
                style={{
                  fontFamily: theme.fonts.display,
                  fontSize: 'clamp(12px, 1.3vw, 15px)',
                  color: theme.colors.white,
                }}
              >
                {link.label}
              </span>
              <span className="flex items-center gap-1" style={{ fontSize: 'clamp(11px, 1.1vw, 13px)', color: 'rgba(255,255,255,0.4)' }}>
                <ExternalLink size={12} />
                {link.url}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={6}
          style={{
            marginTop: '40px',
            width: '120px',
            height: '2px',
            background: `linear-gradient(90deg, ${theme.colors.cyan}, ${theme.colors.magenta})`,
            boxShadow: theme.glow.cyan,
          }}
        />
      </div>
    </SlideLayout>
  )
}
