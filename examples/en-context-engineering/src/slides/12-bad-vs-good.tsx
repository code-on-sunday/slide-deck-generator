import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { X, Check } from 'lucide-react';

export default function Slide12() {
  return (
    <SlideLayout background="linear-gradient(160deg, #1a1a1a 0%, #1e1a18 50%, #1a1a1a 100%)">
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 80px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(70px, 9vw, 100px)', color: 'rgba(255,87,34,0.12)', lineHeight: 1, marginBottom: -8 }}
        >
          12
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(24px, 2.8vw, 36px)', color: '#fff', lineHeight: 1.2, marginBottom: 8 }}
        >
          Same Question, <span style={{ color: '#FF5722' }}>Different Context</span>
        </motion.h2>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={0.8}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#a0a0a0', marginBottom: 28 }}
        >
          "How do I fix this bug in my app?"
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Bad context */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, background: 'rgba(255,255,255,0.02)' }}
          >
            <div style={{ padding: '24px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <X size={20} color="#ef4444" />
                <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#ef4444' }}>Bad Context</span>
              </div>
              <ul style={{ listStyle: 'none', fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 15px)', color: '#a0a0a0', lineHeight: 2 }}>
                <li>No error message provided</li>
                <li>No code snippet</li>
                <li>No tech stack mentioned</li>
                <li>No expected behavior</li>
              </ul>
              <div style={{ marginTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ padding: '14px 0 0 0' }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(11px, 1.1vw, 13px)', color: '#666', fontStyle: 'italic' }}>
                    Result: Generic, unhelpful suggestions
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Good context */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={1.5}
            style={{ background: 'linear-gradient(135deg, #FF5722 0%, #E64A19 100%)', borderRadius: 12 }}
          >
            <div style={{ padding: '24px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <Check size={20} color="#fff" />
                <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#fff' }}>Great Context</span>
              </div>
              <ul style={{ listStyle: 'none', fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 15px)', color: 'rgba(255,255,255,0.9)', lineHeight: 2 }}>
                <li>Exact error + stack trace</li>
                <li>Relevant code snippet</li>
                <li>React 18 + TypeScript + Vite</li>
                <li>Expected vs actual behavior</li>
              </ul>
              <div style={{ marginTop: 16, borderTop: '1px solid rgba(255,255,255,0.3)' }}>
                <div style={{ padding: '14px 0 0 0' }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(11px, 1.1vw, 13px)', color: 'rgba(255,255,255,0.8)', fontStyle: 'italic' }}>
                    Result: Precise, actionable fix
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}
