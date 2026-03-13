import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { Zap } from 'lucide-react';

export default function Slide14() {
  return (
    <SlideLayout background="linear-gradient(145deg, #1a1a1a 0%, #201a18 40%, #1a1a1a 100%)">
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '60px 80px', textAlign: 'center' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(80px, 10vw, 120px)', color: 'rgba(255,87,34,0.12)', lineHeight: 1, marginBottom: -10 }}
        >
          14
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
          style={{ marginBottom: 24 }}
        >
          <Zap size={40} color="#FF5722" strokeWidth={1.5} />
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(32px, 4vw, 52px)', color: '#fff', lineHeight: 1.15, marginBottom: 20 }}
        >
          Don't just prompt.
        </motion.h2>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={1.5}
          style={{
            background: 'linear-gradient(135deg, #FF5722 0%, #E64A19 100%)',
            borderRadius: 14,
          }}
        >
          <div style={{ padding: '24px 48px' }}>
            <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(28px, 3.5vw, 46px)', color: '#fff' }}>
              Engineer the context.
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={2.5}
          style={{ width: 60, height: 3, background: 'rgba(255,255,255,0.2)', marginTop: 40, borderRadius: 2 }}
        />

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#a0a0a0', marginTop: 20, maxWidth: 500, lineHeight: 1.6 }}
        >
          The difference between a frustrating AI experience and a magical one is the context you provide.
        </motion.p>
      </div>
    </SlideLayout>
  );
}
