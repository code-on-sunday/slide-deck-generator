import { motion } from 'framer-motion';
import { staggerContainer, slideUp, terminalLine } from '../lib/animations';

export default function Slide04() {
  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: '60px 80px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={terminalLine} style={{ color: '#39d353', fontSize: 'clamp(12px, 1.2vw, 15px)', marginBottom: 16 }}>
          {'>'}_  cat SKILL.md
        </motion.div>

        <motion.h2
          variants={slideUp}
          style={{
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            color: '#ffffff',
            fontWeight: 700,
            fontFamily: "'JetBrains Mono', monospace",
            lineHeight: 1.3,
            marginBottom: 32,
          }}
        >
          Skill là gì?
        </motion.h2>

        <motion.div
          variants={slideUp}
          style={{
            fontSize: 'clamp(16px, 2vw, 24px)',
            color: '#8b949e',
            fontFamily: "'JetBrains Mono', monospace",
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          Một file markdown <span style={{ color: '#39d353' }}>SKILL.md</span> cung cấp cho Claude Code kiến thức chuyên biệt cho một task cụ thể
        </motion.div>

        <motion.div
          variants={slideUp}
          style={{
            border: '1px solid rgba(57, 211, 83, 0.2)',
            borderRadius: 8,
            padding: '24px 32px',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          <div style={{ color: '#8b949e', fontSize: 'clamp(11px, 1.1vw, 13px)', marginBottom: 12 }}>
            // Về cơ bản:
          </div>
          <div style={{ color: '#39d353', fontSize: 'clamp(14px, 1.6vw, 20px)' }}>
            Skill = Prompt có cấu trúc + Tái sử dụng được
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
