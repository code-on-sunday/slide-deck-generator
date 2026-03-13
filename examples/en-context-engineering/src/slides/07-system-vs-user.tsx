import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';

export default function Slide07() {
  return (
    <SlideLayout background="linear-gradient(160deg, #1a1a1a 0%, #1d1d22 50%, #1a1a1a 100%)">
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 80px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(70px, 9vw, 100px)', color: 'rgba(255,87,34,0.12)', lineHeight: 1, marginBottom: -8 }}
        >
          07
        </motion.div>

        <motion.span
          variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 16px)', color: '#FF5722', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}
        >
          Deep Dive
        </motion.span>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={0.6}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(26px, 3vw, 38px)', color: '#fff', lineHeight: 1.2, marginBottom: 36 }}
        >
          System Prompt vs User Message
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            style={{ background: 'linear-gradient(135deg, #FF5722 0%, #E64A19 100%)', borderRadius: 12 }}
          >
            <div style={{ padding: '28px 24px' }}>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(16px, 1.6vw, 22px)', color: '#fff', marginBottom: 14 }}>
                System Prompt
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(13px, 1.3vw, 16px)', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                Sets the <strong>identity</strong> and <strong>rules</strong>. Persists across the conversation. Think of it as the model's "operating instructions."
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(11px, 1.1vw, 14px)', color: 'rgba(255,255,255,0.7)', marginTop: 14, fontStyle: 'italic' }}>
                "You are a senior code reviewer. Be concise. Focus on security issues."
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={1.5}
            style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, background: 'rgba(255,255,255,0.03)' }}
          >
            <div style={{ padding: '28px 24px' }}>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(16px, 1.6vw, 22px)', color: '#fff', marginBottom: 14 }}>
                User Message
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(13px, 1.3vw, 16px)', color: '#a0a0a0', lineHeight: 1.6 }}>
                The <strong style={{ color: '#fff' }}>specific request</strong> in the moment. Changes every turn. Contains the actual task or question.
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(11px, 1.1vw, 14px)', color: '#666', marginTop: 14, fontStyle: 'italic' }}>
                "Review this pull request for SQL injection vulnerabilities."
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(13px, 1.3vw, 16px)', color: '#a0a0a0', marginTop: 24, textAlign: 'center' }}
        >
          Different roles, different effects — both essential for quality output.
        </motion.p>
      </div>
    </SlideLayout>
  );
}
