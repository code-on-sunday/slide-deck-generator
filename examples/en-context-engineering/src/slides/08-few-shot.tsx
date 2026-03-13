import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { Copy } from 'lucide-react';

export default function Slide08() {
  const examples = [
    { input: '"The movie was great"', output: 'Positive' },
    { input: '"Terrible experience"', output: 'Negative' },
    { input: '"It was okay I guess"', output: 'Neutral' },
  ];

  return (
    <SlideLayout background="linear-gradient(160deg, #1a1a1a 0%, #1e1a18 50%, #1a1a1a 100%)">
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 80px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(70px, 9vw, 100px)', color: 'rgba(255,87,34,0.12)', lineHeight: 1, marginBottom: -8 }}
        >
          08
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}
        >
          <Copy size={20} color="#FF5722" />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 16px)', color: '#FF5722', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2 }}>
            Deep Dive
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={0.6}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(26px, 3vw, 38px)', color: '#fff', lineHeight: 1.2, marginBottom: 12 }}
        >
          Few-Shot Examples
        </motion.h2>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#a0a0a0', marginBottom: 32, maxWidth: 600 }}
        >
          Show the model what you want through demonstration — don't just tell it.
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 700 }}>
          {examples.map((ex, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" animate="visible" custom={1.5 + i * 0.2}
              style={{ display: 'flex', alignItems: 'center', gap: 16, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, background: 'rgba(255,255,255,0.03)' }}
            >
              <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 15px)', color: '#a0a0a0', fontWeight: 500, minWidth: 50 }}>Input:</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#fff', flex: 1 }}>{ex.input}</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 15px)', color: '#a0a0a0', fontWeight: 500 }}>→</span>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(13px, 1.3vw, 16px)',
                  color: '#FF5722',
                  fontWeight: 600,
                }}>
                  {ex.output}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#FF5722' }} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(13px, 1.3vw, 16px)', color: '#a0a0a0' }}>
            The model learns the <strong style={{ color: '#fff' }}>pattern</strong> and <strong style={{ color: '#fff' }}>format</strong> from your examples.
          </span>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
