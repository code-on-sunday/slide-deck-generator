import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { fadeInUp } from '../lib/animations'
import { theme } from '../lib/theme'
import { Zap } from 'lucide-react'

export default function Slide01() {
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0}>
          <Zap size={56} color={theme.colors.cyan} style={{ filter: `drop-shadow(0 0 20px ${theme.colors.cyan})` }} />
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="neon-text"
          style={{
            fontFamily: theme.fonts.display,
            fontSize: 'clamp(32px, 5vw, 56px)',
            color: theme.colors.white,
            marginTop: '24px',
          }}
        >
          Skills in Claude Code
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            fontSize: 'clamp(18px, 2.5vw, 26px)',
            color: theme.colors.cyan,
            marginTop: '16px',
            fontWeight: 500,
          }}
          className="neon-text"
        >
          Teach your AI agent new tricks
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{
            marginTop: '40px',
            width: '120px',
            height: '2px',
            background: `linear-gradient(90deg, ${theme.colors.cyan}, ${theme.colors.magenta})`,
            boxShadow: theme.glow.cyan,
          }}
        />

        {/* Particle dots */}
        {[
          { top: '15%', left: '20%' },
          { top: '25%', right: '15%' },
          { bottom: '20%', left: '30%' },
          { bottom: '30%', right: '25%' },
          { top: '40%', left: '10%' },
          { top: '60%', right: '10%' },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="particle-dot"
            style={pos}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>
    </SlideLayout>
  )
}
