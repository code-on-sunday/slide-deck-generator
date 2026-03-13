import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { AlertTriangle } from 'lucide-react';

export default function Slide02() {
  return (
    <SlideLayout background="linear-gradient(160deg, #1a1a1a 0%, #201a18 50%, #1a1a1a 100%)">
      <div style={{ width: '100%', height: '100%', display: 'flex', padding: '60px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(80px, 10vw, 120px)', color: 'rgba(255,87,34,0.12)', lineHeight: 1, marginBottom: -20 }}
          >
            02
          </motion.div>

          <motion.h2
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#fff', lineHeight: 1.2, marginBottom: 20 }}
          >
            Why does ChatGPT sometimes give <span style={{ color: '#FF5722' }}>terrible</span> answers?
          </motion.h2>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(16px, 1.6vw, 22px)', color: '#a0a0a0', maxWidth: 500, lineHeight: 1.6 }}
          >
            Even with the same model, the same parameters, the same API — results vary wildly.
          </motion.p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 0.6 }}>
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            style={{
              background: 'linear-gradient(135deg, #FF5722 0%, #E64A19 100%)',
              borderRadius: 16,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
            }}
            className="p-0"
          >
            <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <AlertTriangle size={56} color="#fff" strokeWidth={1.5} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#fff', fontWeight: 600, textAlign: 'center' }}>
                Same model.<br />Different results.<br />Why?
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}
