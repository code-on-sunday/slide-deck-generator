import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { Search, FileText, Cpu, ArrowRight } from 'lucide-react';

export default function Slide09() {
  const steps = [
    { icon: Search, label: 'Query', desc: 'User asks a question' },
    { icon: FileText, label: 'Retrieve', desc: 'Find relevant documents' },
    { icon: Cpu, label: 'Augment', desc: 'Inject into context' },
  ];

  return (
    <SlideLayout background="linear-gradient(160deg, #1a1a1a 0%, #1d1d22 50%, #1a1a1a 100%)">
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 80px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(70px, 9vw, 100px)', color: 'rgba(255,87,34,0.12)', lineHeight: 1, marginBottom: -8 }}
        >
          09
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}
        >
          <Search size={20} color="#FF5722" />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 16px)', color: '#FF5722', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2 }}>
            Deep Dive
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={0.6}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(26px, 3vw, 38px)', color: '#fff', lineHeight: 1.2, marginBottom: 12 }}
        >
          RAG — Retrieval Augmented Generation
        </motion.h2>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#a0a0a0', marginBottom: 40, maxWidth: 600 }}
        >
          Automatically pulling in relevant documents so the model has up-to-date, domain-specific knowledge.
        </motion.p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <motion.div
                  variants={fadeUp} initial="hidden" animate="visible" custom={1.5 + i * 0.3}
                  style={{
                    border: i === 2 ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 12,
                    background: i === 2 ? 'linear-gradient(135deg, #FF5722 0%, #E64A19 100%)' : 'rgba(255,255,255,0.03)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ padding: '28px 32px' }}>
                    <Icon size={32} color={i === 2 ? '#fff' : '#FF5722'} strokeWidth={1.5} />
                    <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#fff', marginTop: 12 }}>
                      {step.label}
                    </div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(11px, 1.1vw, 14px)', color: i === 2 ? 'rgba(255,255,255,0.8)' : '#a0a0a0', marginTop: 6 }}>
                      {step.desc}
                    </div>
                  </div>
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1.8 + i * 0.3}>
                    <ArrowRight size={24} color="#FF5722" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(13px, 1.3vw, 16px)', color: '#a0a0a0', marginTop: 36, textAlign: 'center' }}
        >
          RAG lets models answer questions about <strong style={{ color: '#fff' }}>your</strong> data, not just training data.
        </motion.p>
      </div>
    </SlideLayout>
  );
}
