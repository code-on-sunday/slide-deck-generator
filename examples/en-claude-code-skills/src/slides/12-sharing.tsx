import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { fadeInUp, scaleIn } from '../lib/animations'
import { theme } from '../lib/theme'
import { Share2, Github, Users, Download } from 'lucide-react'

export default function Slide12() {
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
        Collaboration
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
        Sharing Skills
      </motion.h2>

      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        custom={2}
        className="flex justify-center mt-10"
      >
        <div
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 'clamp(16px, 2vw, 22px)',
            color: theme.colors.cyan,
            padding: '16px 32px',
            border: `1px solid rgba(0, 255, 204, 0.3)`,
            borderRadius: '8px',
          }}
          className="neon-glow"
        >
          npx skills add user/repo
        </div>
      </motion.div>

      <div className="flex justify-center gap-16 mt-auto">
        {[
          { icon: Github, label: 'Install from GitHub', desc: 'Any public repo' },
          { icon: Users, label: 'Share with team', desc: 'Consistent workflows' },
          { icon: Download, label: 'Version controlled', desc: 'Track changes in git' },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={i + 3}
            className="flex flex-col items-center gap-3 text-center"
          >
            <div
              style={{
                padding: '12px',
                borderRadius: '8px',
                border: `1px solid rgba(0, 255, 204, 0.15)`,
              }}
            >
              <item.icon size={28} color={theme.colors.cyan} />
            </div>
            <span
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 'clamp(11px, 1.3vw, 14px)',
                color: theme.colors.white,
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontSize: 'clamp(11px, 1.2vw, 13px)',
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              {item.desc}
            </span>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  )
}
