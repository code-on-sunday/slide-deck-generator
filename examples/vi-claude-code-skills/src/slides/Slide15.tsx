import { motion } from 'framer-motion';
import { staggerContainer, slideUp, terminalLine } from '../lib/animations';
import { ExternalLink } from 'lucide-react';

export default function Slide15() {
  const links = [
    { label: 'Tài liệu Skills', url: 'docs.claude.ai/skills' },
    { label: 'Skill Registry', url: 'github.com/anthropics/skills' },
    { label: 'Ví dụ cộng đồng', url: 'github.com/anthropics/claude-code-skills-examples' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center" style={{ padding: '60px 80px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center">
        <motion.div variants={terminalLine} style={{ color: '#39d353', fontSize: 'clamp(12px, 1.2vw, 15px)', marginBottom: 24 }}>
          {'>'}_  getting-started.sh
        </motion.div>

        <motion.h2
          variants={slideUp}
          style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            color: '#ffffff',
            fontWeight: 700,
            fontFamily: "'JetBrains Mono', monospace",
            marginBottom: 16,
          }}
        >
          Bắt đầu ngay
          <span className="blinking-cursor" style={{ color: '#39d353' }}>|</span>
        </motion.h2>

        <motion.p
          variants={slideUp}
          style={{
            color: '#8b949e',
            fontSize: 'clamp(14px, 1.5vw, 18px)',
            marginBottom: 48,
          }}
        >
          Tạo skill đầu tiên của bạn trong 5 phút
        </motion.p>

        <motion.div variants={staggerContainer} className="flex flex-col gap-4 items-center">
          {links.map((link, i) => (
            <motion.div
              key={i}
              variants={terminalLine}
              className="flex items-center gap-3"
              style={{
                border: '1px solid rgba(57, 211, 83, 0.2)',
                borderRadius: 8,
                padding: '14px 28px',
                minWidth: 420,
              }}
            >
              <ExternalLink size={16} style={{ color: '#39d353' }} />
              <span style={{ color: '#ffffff', fontSize: 'clamp(13px, 1.4vw, 17px)' }}>
                {link.label}
              </span>
              <span style={{ color: '#8b949e', fontSize: 'clamp(11px, 1.1vw, 14px)', marginLeft: 'auto' }}>
                {link.url}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={slideUp}
          className="mt-10"
          style={{
            color: '#39d353',
            fontSize: 'clamp(13px, 1.4vw, 17px)',
            opacity: 0.6,
          }}
        >
          $ npx skills add anthropics/slide-deck-generator
        </motion.div>
      </motion.div>
    </div>
  );
}
