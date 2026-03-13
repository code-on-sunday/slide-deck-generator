import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { Settings, User, BookOpen, Database, Wrench, MessageCircle, Lock } from 'lucide-react';

export default function Slide06() {
  const components = [
    { icon: Settings, label: 'System Prompt', desc: 'Sets behavior & persona' },
    { icon: User, label: 'User Message', desc: 'The actual question' },
    { icon: BookOpen, label: 'Examples', desc: 'Few-shot demonstrations' },
    { icon: Database, label: 'Retrieved Docs', desc: 'RAG-sourced knowledge' },
    { icon: Wrench, label: 'Tool Results', desc: 'Function call outputs' },
    { icon: MessageCircle, label: 'History', desc: 'Conversation memory' },
    { icon: Lock, label: 'Output Constraints', desc: 'Format & guardrails' },
  ];

  return (
    <SlideLayout background="linear-gradient(160deg, #1a1a1a 0%, #1e1a18 50%, #1a1a1a 100%)">
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 70px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(70px, 9vw, 100px)', color: 'rgba(255,87,34,0.12)', lineHeight: 1, marginBottom: -8 }}
        >
          06
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(24px, 2.8vw, 36px)', color: '#fff', lineHeight: 1.2, marginBottom: 32 }}
        >
          The <span style={{ color: '#FF5722' }}>7</span> Components of Context
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {components.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" animate="visible" custom={1 + i * 0.15}
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <div style={{ padding: '20px 16px' }}>
                  <Icon size={22} color="#FF5722" strokeWidth={1.5} />
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(13px, 1.3vw, 16px)', color: '#fff', fontWeight: 600, marginTop: 10 }}>
                    {c.label}
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(11px, 1vw, 13px)', color: '#a0a0a0', marginTop: 4 }}>
                    {c.desc}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
