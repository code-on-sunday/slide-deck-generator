import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { fadeInUp, slideInLeft, slideInRight } from '../lib/animations'
import { theme } from '../lib/theme'
import { Package, Wrench } from 'lucide-react'

export default function Slide08() {
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
        Types
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
        Built-in vs Custom
      </motion.h2>

      <div className="flex gap-10 mt-10 flex-1 items-start">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          custom={2}
          className="flex-1 flex flex-col gap-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <Package size={24} color={theme.colors.cyan} />
            <span
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 'clamp(14px, 1.6vw, 18px)',
                color: theme.colors.cyan,
              }}
            >
              Built-in
            </span>
          </div>
          {['Create PR', 'Review code', 'Write tests', 'Debug errors'].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3"
              style={{
                borderLeft: `2px solid rgba(0, 255, 204, 0.3)`,
                padding: '10px 16px',
              }}
            >
              <span style={{ fontSize: 'clamp(14px, 1.5vw, 17px)', color: 'rgba(255,255,255,0.7)' }}>
                {item}
              </span>
            </div>
          ))}
          <span
            style={{
              fontSize: 'clamp(12px, 1.2vw, 14px)',
              color: 'rgba(255,255,255,0.35)',
              marginTop: '8px',
            }}
          >
            Ships with Claude Code
          </span>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{
            width: '1px',
            height: '280px',
            background: 'rgba(255,255,255,0.1)',
            alignSelf: 'center',
          }}
        />

        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex-1 flex flex-col gap-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <Wrench size={24} color={theme.colors.magenta} />
            <span
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 'clamp(14px, 1.6vw, 18px)',
                color: theme.colors.magenta,
              }}
            >
              Custom
            </span>
          </div>
          {['Your team workflows', 'Project-specific tasks', 'Domain expertise', 'Output templates'].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3"
              style={{
                borderLeft: `2px solid rgba(255, 0, 170, 0.3)`,
                padding: '10px 16px',
              }}
            >
              <span style={{ fontSize: 'clamp(14px, 1.5vw, 17px)', color: 'rgba(255,255,255,0.7)' }}>
                {item}
              </span>
            </div>
          ))}
          <span
            style={{
              fontSize: 'clamp(12px, 1.2vw, 14px)',
              color: 'rgba(255,255,255,0.35)',
              marginTop: '8px',
            }}
          >
            Created by you
          </span>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
