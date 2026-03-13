import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { theme } from '../lib/theme'
import { fadeIn } from '../lib/animations'

export default function Slide14() {
  return (
    <SlideLayout gradient={`radial-gradient(ellipse at 40% 50%, #fefdfb 0%, ${theme.colors.bg} 80%)`}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 120px' }}>
        <motion.div initial="hidden" animate="visible">
          <motion.hr variants={fadeIn} custom={0} className="accent" style={{ width: 80 }} />
          <motion.div
            variants={fadeIn}
            custom={1}
            style={{ margin: '40px 0', marginLeft: 40 }}
          >
            <p
              className="pull-quote"
              style={{
                fontFamily: theme.fonts.display,
                fontWeight: 700,
                fontSize: 'clamp(1.6rem, 2.6vw, 2.4rem)',
                lineHeight: 1.3,
                maxWidth: 700,
              }}
            >
              LLMs are sophisticated pattern matchers, not thinkers
            </p>
          </motion.div>
          <motion.hr variants={fadeIn} custom={2} className="accent" style={{ width: 120 }} />

          <motion.p
            variants={fadeIn}
            custom={3}
            className="drop-cap"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              lineHeight: 1.7,
              maxWidth: 640,
              marginTop: 32,
            }}
          >
            They are extraordinary tools — capable of drafting, translating,
            coding, and reasoning to a remarkable degree. But knowing their
            foundations helps us wield them wisely: ask better questions,
            verify outputs, and understand their boundaries.
          </motion.p>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
