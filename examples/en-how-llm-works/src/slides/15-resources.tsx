import { motion } from 'framer-motion'
import { BookOpen, ExternalLink } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'
import { theme } from '../lib/theme'
import { fadeIn } from '../lib/animations'

export default function Slide15() {
  const resources = [
    { title: '"Attention Is All You Need"', author: 'Vaswani et al., 2017', url: 'arxiv.org/abs/1706.03762' },
    { title: '"Language Models are Few-Shot Learners"', author: 'Brown et al. (GPT-3), 2020', url: 'arxiv.org/abs/2005.14165' },
    { title: '"Training language models to follow instructions"', author: 'Ouyang et al. (InstructGPT), 2022', url: 'arxiv.org/abs/2203.02155' },
    { title: '3Blue1Brown — "But what is a GPT?"', author: 'Visual explainer on YouTube', url: 'youtube.com/@3blue1brown' },
    { title: 'Andrej Karpathy — "Let\'s build GPT"', author: 'From-scratch coding walkthrough', url: 'youtube.com/watch?v=kCc8FmEb1nY' },
  ]

  return (
    <SlideLayout>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 120px' }}>
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeIn} custom={0} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <BookOpen size={22} color={theme.colors.accent} />
            <h2 style={{
              fontFamily: theme.fonts.display,
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              lineHeight: 1.15,
            }}>
              Further Reading
            </h2>
          </motion.div>
          <motion.hr variants={fadeIn} custom={1} className="accent" style={{ width: 60 }} />

          <motion.div variants={fadeIn} custom={2} style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {resources.map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <ExternalLink size={14} color={theme.colors.accent} style={{ flexShrink: 0, marginTop: 4 }} />
                <div>
                  <div style={{
                    fontFamily: theme.fonts.display,
                    fontWeight: 700,
                    fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
                  }}>
                    {r.title}
                  </div>
                  <div style={{
                    fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                    color: theme.colors.muted,
                    lineHeight: 1.5,
                  }}>
                    {r.author} — <span style={{ fontFamily: 'monospace', fontSize: '0.85em' }}>{r.url}</span>
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
