import { motion } from 'framer-motion';
import { fadeUp, scaleIn } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { Box } from 'lucide-react';

export default function Slide05() {
  const segments = [
    { label: 'System Prompt', pct: 10, color: '#FF5722' },
    { label: 'User Message', pct: 8, color: '#FF7043' },
    { label: 'Examples', pct: 12, color: '#FF8A65' },
    { label: 'Retrieved Docs', pct: 30, color: '#FFAB91' },
    { label: 'Conversation', pct: 25, color: '#FFCCBC' },
    { label: 'Tool Results', pct: 10, color: '#FBE9E7' },
    { label: 'Available', pct: 5, color: '#2f2f2f' },
  ];

  return (
    <SlideLayout background="linear-gradient(160deg, #1a1a1a 0%, #1d1d22 50%, #1a1a1a 100%)">
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 80px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(80px, 10vw, 120px)', color: 'rgba(255,87,34,0.12)', lineHeight: 1, marginBottom: -10 }}
        >
          05
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}
        >
          <Box size={22} color="#FF5722" />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 16px)', color: '#FF5722', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2 }}>
            Visualization
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(26px, 3vw, 38px)', color: '#fff', lineHeight: 1.2, marginBottom: 32 }}
        >
          The Context Window
        </motion.h2>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={1.5}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#a0a0a0', marginBottom: 28 }}
        >
          A fixed-size container holding everything the model can "see"
        </motion.p>

        {/* Stacked bar */}
        <motion.div
          variants={scaleIn} initial="hidden" animate="visible" custom={2}
          style={{ display: 'flex', borderRadius: 8, overflow: 'hidden', height: 52, marginBottom: 24, border: '1px solid rgba(255,255,255,0.1)' }}
        >
          {segments.map((s, i) => (
            <div key={i} style={{ width: `${s.pct}%`, background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {s.pct >= 10 && (
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(9px, 0.8vw, 12px)', color: s.color === '#2f2f2f' ? '#666' : '#1a1a1a', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {s.pct}%
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Legend */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {segments.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" animate="visible" custom={2.5 + i * 0.1}
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <div style={{ width: 12, height: 12, borderRadius: 3, background: s.color }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(11px, 1.1vw, 14px)', color: s.color === '#2f2f2f' ? '#666' : '#ccc' }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
