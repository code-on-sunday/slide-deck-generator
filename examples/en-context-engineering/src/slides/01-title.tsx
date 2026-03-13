import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';

export default function Slide01() {
  return (
    <SlideLayout background="linear-gradient(145deg, #1a1a1a 0%, #222 40%, #1a1a1a 100%)">
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 100px' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(14px, 1.4vw, 18px)',
            fontWeight: 500,
            color: '#FF5722',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          Deep Dive
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: 'clamp(52px, 6vw, 80px)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          Context<br />
          <span style={{ color: '#FF5722' }}>Engineering</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(18px, 2vw, 26px)',
            color: '#a0a0a0',
            maxWidth: 600,
            lineHeight: 1.5,
          }}
        >
          The skill that separates good AI users from great ones
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{
            width: 80,
            height: 4,
            background: '#FF5722',
            marginTop: 36,
            borderRadius: 2,
          }}
        />
      </div>
    </SlideLayout>
  );
}
