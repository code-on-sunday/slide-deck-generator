import { motion } from 'framer-motion';
import { staggerContainer, slideUp, terminalLine } from '../lib/animations';

export default function Slide08() {
  const builtIn = [
    '/commit — Tạo git commit message',
    '/review-pr — Review pull request',
    '/pdf — Đọc và phân tích PDF',
  ];

  const custom = [
    '/slide-deck — Tạo trình chiếu React',
    '/app-screenshots — Ảnh marketing iOS',
    '/deploy-check — Kiểm tra trước deploy',
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: '60px 80px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={terminalLine} style={{ color: '#39d353', fontSize: 'clamp(12px, 1.2vw, 15px)', marginBottom: 16 }}>
          {'>'}_  ls skills/
        </motion.div>

        <motion.h2
          variants={slideUp}
          style={{
            fontSize: 'clamp(26px, 3.2vw, 40px)',
            color: '#ffffff',
            fontWeight: 700,
            fontFamily: "'JetBrains Mono', monospace",
            marginBottom: 40,
          }}
        >
          Skill có sẵn vs Skill tự tạo
        </motion.h2>

        <div className="grid grid-cols-2 gap-10">
          <motion.div variants={slideUp}>
            <div style={{ color: '#8b949e', fontSize: 'clamp(13px, 1.4vw, 17px)', marginBottom: 16 }}>
              // Built-in
            </div>
            {builtIn.map((item, i) => (
              <div
                key={i}
                style={{
                  color: '#8b949e',
                  fontSize: 'clamp(13px, 1.3vw, 16px)',
                  lineHeight: 2.2,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <span style={{ color: '#39d353' }}>{item.split('—')[0]}</span>
                <span>— {item.split('—')[1]}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={slideUp}>
            <div style={{ color: '#39d353', fontSize: 'clamp(13px, 1.4vw, 17px)', marginBottom: 16 }}>
              // Tự tạo ✦
            </div>
            {custom.map((item, i) => (
              <div
                key={i}
                style={{
                  color: '#8b949e',
                  fontSize: 'clamp(13px, 1.3vw, 16px)',
                  lineHeight: 2.2,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <span style={{ color: '#39d353' }}>{item.split('—')[0]}</span>
                <span>— {item.split('—')[1]}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
