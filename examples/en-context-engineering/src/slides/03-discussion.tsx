import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { MessageSquare } from 'lucide-react';

export default function Slide03() {
  const points = [
    'Clear instructions?',
    'Relevant examples?',
    'Background knowledge?',
    'The right constraints?',
  ];

  return (
    <SlideLayout background="linear-gradient(160deg, #1a1a1a 0%, #1d1d22 50%, #1a1a1a 100%)">
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 80px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(80px, 10vw, 120px)', color: 'rgba(255,87,34,0.12)', lineHeight: 1, marginBottom: -10 }}
        >
          03
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}
        >
          <MessageSquare size={24} color="#FF5722" />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 16px)', color: '#FF5722', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2 }}>
            Discussion
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(28px, 3.5vw, 42px)', color: '#fff', lineHeight: 1.2, marginBottom: 12 }}
        >
          What makes a good prompt<br />vs a <span style={{ color: '#FF5722' }}>great</span> prompt?
        </motion.h2>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={1.5}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(16px, 1.5vw, 20px)', color: '#a0a0a0', marginBottom: 36 }}
        >
          Think beyond just instructions. What else does a model need?
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 700 }}>
          {points.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" animate="visible" custom={2 + i * 0.3}
              style={{
                borderLeft: '3px solid #FF5722',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(15px, 1.5vw, 20px)',
                color: '#fff',
                fontWeight: 500,
              }}
            >
              <div style={{ padding: '12px 20px' }}>{p}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
