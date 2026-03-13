import { motion } from 'framer-motion';
import { staggerContainer, slideUp, terminalLine } from '../lib/animations';

export default function Slide09() {
  const steps = [
    { cmd: '$ mkdir -p skills/my-skill', desc: 'Tạo thư mục' },
    { cmd: '$ touch skills/my-skill/SKILL.md', desc: 'Tạo file skill' },
    { cmd: '$ vim skills/my-skill/SKILL.md', desc: 'Viết hướng dẫn' },
  ];

  const frontmatter = [
    '---',
    'name: my-skill',
    'description: "Mô tả khi nào skill',
    '  này nên được kích hoạt"',
    '---',
    '',
    '# Hướng dẫn chi tiết ở đây...',
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: '60px 80px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={terminalLine} style={{ color: '#39d353', fontSize: 'clamp(12px, 1.2vw, 15px)', marginBottom: 16 }}>
          {'>'}_  first-skill.sh
        </motion.div>

        <motion.h2
          variants={slideUp}
          style={{
            fontSize: 'clamp(26px, 3.2vw, 40px)',
            color: '#ffffff',
            fontWeight: 700,
            fontFamily: "'JetBrains Mono', monospace",
            marginBottom: 36,
          }}
        >
          Tạo skill đầu tiên
        </motion.h2>

        <div className="grid grid-cols-2 gap-10">
          <motion.div variants={staggerContainer} className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <motion.div key={i} variants={terminalLine}>
                <div style={{ color: '#39d353', fontSize: 'clamp(13px, 1.4vw, 17px)', fontFamily: "'JetBrains Mono', monospace" }}>
                  {step.cmd}
                </div>
                <div style={{ color: '#8b949e', fontSize: 'clamp(11px, 1.1vw, 14px)', marginTop: 4 }}>
                  {step.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={slideUp}
            style={{
              border: '1px solid rgba(57, 211, 83, 0.2)',
              borderRadius: 8,
              padding: '20px 24px',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <div style={{ color: '#8b949e', fontSize: 'clamp(10px, 1vw, 12px)', marginBottom: 8 }}>
              SKILL.md
            </div>
            {frontmatter.map((line, i) => (
              <div
                key={i}
                style={{
                  color: line.startsWith('---') ? '#8b949e' : line.startsWith('#') ? '#ffffff' : '#39d353',
                  fontSize: 'clamp(12px, 1.2vw, 15px)',
                  lineHeight: 1.8,
                  minHeight: line === '' ? 10 : undefined,
                }}
              >
                {line}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
