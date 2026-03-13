import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { Terminal } from 'lucide-react';

export default function Slide13() {
  const contextItems = [
    { label: 'System', value: '"You are a senior TypeScript developer"' },
    { label: 'Codebase', value: 'Relevant files via RAG / tree-sitter' },
    { label: 'Errors', value: 'Compiler output, stack traces' },
    { label: 'Docs', value: 'API docs, style guides, ADRs' },
    { label: 'History', value: 'Recent edits, conversation turns' },
    { label: 'Tools', value: 'File read/write, terminal, search' },
  ];

  return (
    <SlideLayout background="linear-gradient(160deg, #1a1a1a 0%, #1d1d22 50%, #1a1a1a 100%)">
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 80px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(70px, 9vw, 100px)', color: 'rgba(255,87,34,0.12)', lineHeight: 1, marginBottom: -8 }}
        >
          13
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}
        >
          <Terminal size={20} color="#FF5722" />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 16px)', color: '#FF5722', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2 }}>
            Real-World Application
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={0.6}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(24px, 2.8vw, 36px)', color: '#fff', lineHeight: 1.2, marginBottom: 32 }}
        >
          Building an AI Coding Assistant
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {contextItems.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" animate="visible" custom={1 + i * 0.15}
              style={{
                borderLeft: '3px solid #FF5722',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '0 8px 8px 0',
              }}
            >
              <div style={{ padding: '16px 16px' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.1vw, 14px)', color: '#FF5722', fontWeight: 600, marginBottom: 4 }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(11px, 1.1vw, 14px)', color: '#a0a0a0', lineHeight: 1.5 }}>
                  {item.value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(13px, 1.3vw, 16px)', color: '#a0a0a0', marginTop: 28, textAlign: 'center' }}
        >
          Every great AI coding tool is essentially a <strong style={{ color: '#fff' }}>context engineering system</strong>.
        </motion.p>
      </div>
    </SlideLayout>
  );
}
