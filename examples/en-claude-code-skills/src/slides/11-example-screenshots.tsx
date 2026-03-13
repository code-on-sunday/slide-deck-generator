import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { fadeInUp, scaleIn } from '../lib/animations'
import { theme } from '../lib/theme'
import { Smartphone, Image } from 'lucide-react'

export default function Slide11() {
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
        Example #2
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
        App Store Screenshots Skill
      </motion.h2>

      <div className="flex gap-10 mt-8 flex-1 items-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="flex flex-col gap-4 flex-1"
        >
          <span
            style={{
              fontSize: 'clamp(15px, 1.8vw, 20px)',
              color: theme.colors.white,
            }}
          >
            Creates marketing assets for iOS
          </span>
          {[
            'Generates 6.7" & 5.5" screenshot frames',
            'Adds device bezels and backgrounds',
            'Includes marketing copy overlays',
            'Outputs App Store-ready PNGs',
          ].map((item, i) => (
            <div
              key={i}
              style={{
                borderLeft: `2px solid rgba(255, 0, 170, 0.3)`,
                padding: '8px 16px',
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(13px, 1.4vw, 16px)',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex gap-4 items-end"
        >
          {[200, 240, 200].map((h, i) => (
            <div
              key={i}
              style={{
                width: '100px',
                height: `${h}px`,
                borderRadius: '12px',
                border: `1px solid ${i === 1 ? 'rgba(255, 0, 170, 0.3)' : 'rgba(255,255,255,0.1)'}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
              className={i === 1 ? 'neon-glow-magenta' : ''}
            >
              {i === 1 ? (
                <Smartphone size={32} color={theme.colors.magenta} />
              ) : (
                <Image size={24} color="rgba(255,255,255,0.2)" />
              )}
              <span
                style={{
                  fontSize: '10px',
                  color: i === 1 ? theme.colors.magenta : 'rgba(255,255,255,0.2)',
                }}
              >
                {['5.5"', '6.7"', '5.5"'][i]}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}
