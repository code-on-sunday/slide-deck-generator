import { motion } from 'framer-motion';
import { staggerContainer, slideUp } from '../lib/animations';

export default function Slide01() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center" style={{ padding: '60px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center">
        <motion.div variants={slideUp} className="mb-6" style={{ color: '#39d353', fontSize: 'clamp(12px, 1.2vw, 16px)' }}>
          {'>'}_  claude-code --skills
        </motion.div>

        <motion.h1
          variants={slideUp}
          style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#ffffff',
            fontWeight: 700,
          }}
        >
          Skills trong Claude Code
          <span className="blinking-cursor" style={{ color: '#39d353' }}>|</span>
        </motion.h1>

        <motion.p
          variants={slideUp}
          className="mt-6"
          style={{
            fontSize: 'clamp(16px, 2vw, 24px)',
            color: '#8b949e',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          Dạy AI agent của bạn những kỹ năng mới
        </motion.p>

        <motion.div
          variants={slideUp}
          className="mt-10"
          style={{
            fontSize: 'clamp(11px, 1.1vw, 14px)',
            color: '#39d353',
            opacity: 0.5,
          }}
        >
          ▸ Nhấn phím mũi tên để tiếp tục
        </motion.div>
      </motion.div>
    </div>
  );
}
