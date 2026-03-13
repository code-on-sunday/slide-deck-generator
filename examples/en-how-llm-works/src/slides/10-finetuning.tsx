import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { theme } from '../lib/theme'
import { fadeIn } from '../lib/animations'

export default function Slide10() {
  const steps = [
    { stage: '1', title: 'Pre-trained base model', desc: 'Predicts text well, but has no concept of helpfulness or safety.' },
    { stage: '2', title: 'Supervised fine-tuning (SFT)', desc: 'Trained on curated prompt-response pairs written by humans.' },
    { stage: '3', title: 'RLHF / DPO', desc: 'Human preference data teaches the model which outputs are preferred.' },
  ]

  return (
    <SlideLayout>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 120px' }}>
        <motion.div initial="hidden" animate="visible">
          <motion.h2
            variants={fadeIn}
            custom={0}
            style={{
              fontFamily: theme.fonts.display,
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              lineHeight: 1.15,
              marginBottom: 12,
            }}
          >
            From Base Model to Assistant
          </motion.h2>
          <motion.hr variants={fadeIn} custom={1} className="accent" style={{ width: 60 }} />
          <motion.p
            variants={fadeIn}
            custom={2}
            style={{
              fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
              lineHeight: 1.7,
              maxWidth: 640,
              marginTop: 8,
              color: theme.colors.muted,
            }}
          >
            A raw pre-trained model isn't conversational. Fine-tuning and alignment turn
            it into the assistants we know.
          </motion.p>

          <motion.div variants={fadeIn} custom={3} style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {steps.map((s) => (
              <div key={s.stage} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{
                  fontFamily: theme.fonts.display,
                  fontWeight: 700,
                  fontSize: 'clamp(1.6rem, 2.2vw, 2rem)',
                  color: theme.colors.accent,
                  lineHeight: 1,
                  minWidth: 32,
                }}>
                  {s.stage}
                </div>
                <div>
                  <div style={{
                    fontFamily: theme.fonts.display,
                    fontWeight: 700,
                    fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                    marginBottom: 4,
                  }}>
                    {s.title}
                  </div>
                  <div style={{
                    fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                    color: theme.colors.muted,
                    lineHeight: 1.6,
                  }}>
                    {s.desc}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
