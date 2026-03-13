import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { BookOpen, ExternalLink, ArrowRight } from 'lucide-react';

export default function Slide15() {
  const resources = [
    { title: 'Anthropic Docs', desc: 'Prompt engineering guide' },
    { title: 'OpenAI Cookbook', desc: 'Best practices & examples' },
    { title: 'LangChain', desc: 'Context orchestration framework' },
    { title: 'LlamaIndex', desc: 'RAG pipeline toolkit' },
  ];

  const nextSteps = [
    'Audit your current prompts for missing context',
    'Build a RAG pipeline for your domain',
    'Experiment with system prompt variations',
    'Measure output quality with structured evals',
  ];

  return (
    <SlideLayout background="linear-gradient(160deg, #1a1a1a 0%, #1d1d22 50%, #1a1a1a 100%)">
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 80px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(70px, 9vw, 100px)', color: 'rgba(255,87,34,0.12)', lineHeight: 1, marginBottom: -8 }}
        >
          15
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}
        >
          <BookOpen size={20} color="#FF5722" />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 16px)', color: '#FF5722', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2 }}>
            What's Next
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={0.6}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(24px, 2.8vw, 36px)', color: '#fff', lineHeight: 1.2, marginBottom: 28 }}
        >
          Resources & Next Steps
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {/* Resources */}
          <div>
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 15px)', color: '#FF5722', fontWeight: 600, marginBottom: 14, textTransform: 'uppercase', letterSpacing: 1 }}
            >
              Resources
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {resources.map((r, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp} initial="hidden" animate="visible" custom={1.2 + i * 0.15}
                  style={{ display: 'flex', alignItems: 'center', gap: 12, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, background: 'rgba(255,255,255,0.02)' }}
                >
                  <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
                    <ExternalLink size={14} color="#FF5722" />
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 15px)', color: '#fff', fontWeight: 600 }}>{r.title}</div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(10px, 1vw, 12px)', color: '#a0a0a0' }}>{r.desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div>
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 15px)', color: '#FF5722', fontWeight: 600, marginBottom: 14, textTransform: 'uppercase', letterSpacing: 1 }}
            >
              Action Items
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {nextSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp} initial="hidden" animate="visible" custom={1.2 + i * 0.15}
                  style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                >
                  <ArrowRight size={14} color="#FF5722" />
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 15px)', color: '#ccc', lineHeight: 1.5 }}>{step}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ marginTop: 32, textAlign: 'center' }}
        >
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#a0a0a0' }}>
            Thank you! Questions?
          </span>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
