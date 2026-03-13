import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { theme } from '../lib/theme'
import { fadeIn } from '../lib/animations'

export default function Slide01() {
  return (
    <SlideLayout gradient={`radial-gradient(ellipse at 50% 40%, #fefdfb 0%, ${theme.colors.bg} 80%)`}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 120px' }}>
        <motion.div
          initial="hidden"
          animate="visible"
          style={{ marginBottom: 32 }}
        >
          <motion.hr
            variants={fadeIn}
            custom={0}
            className="accent"
            style={{ width: 80, marginBottom: 48 }}
          />
          <motion.h1
            variants={fadeIn}
            custom={1}
            style={{
              fontFamily: theme.fonts.display,
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
              lineHeight: 1.1,
              color: theme.colors.text,
              marginBottom: 20,
            }}
          >
            How Large Language
            <br />
            Models Work
          </motion.h1>
          <motion.p
            variants={fadeIn}
            custom={2}
            style={{
              fontFamily: theme.fonts.body,
              fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
              color: theme.colors.muted,
              fontStyle: 'italic',
            }}
          >
            From text prediction to artificial intelligence
          </motion.p>
          <motion.hr
            variants={fadeIn}
            custom={3}
            className="accent"
            style={{ width: 120, marginTop: 48 }}
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
