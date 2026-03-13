import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { Layers } from 'lucide-react';

export default function Slide04() {
  return (
    <SlideLayout background="linear-gradient(160deg, #1a1a1a 0%, #1e1a18 50%, #1a1a1a 100%)">
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 80px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(80px, 10vw, 120px)', color: 'rgba(255,87,34,0.12)', lineHeight: 1, marginBottom: -10 }}
        >
          04
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}
        >
          <Layers size={24} color="#FF5722" />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 16px)', color: '#FF5722', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2 }}>
            Core Concept
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(30px, 3.5vw, 46px)', color: '#fff', lineHeight: 1.15, marginBottom: 28 }}
        >
          Context Engineering
        </motion.h2>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{
            background: 'linear-gradient(135deg, #FF5722 0%, #E64A19 100%)',
            borderRadius: 12,
            maxWidth: 700,
          }}
        >
          <div style={{ padding: '32px 36px' }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(18px, 2vw, 24px)', color: '#fff', lineHeight: 1.6, fontWeight: 500 }}>
              The art and science of <strong>curating the right information</strong> that goes into a model's context window to get the best possible output.
            </p>
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#a0a0a0', marginTop: 28, maxWidth: 600, lineHeight: 1.6 }}
        >
          It's not just about what you say — it's about <em>everything</em> the model can see when it generates a response.
        </motion.p>
      </div>
    </SlideLayout>
  );
}
