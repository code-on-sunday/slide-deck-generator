import { motion } from 'framer-motion';
import { staggerContainer, slideUp, terminalLine } from '../lib/animations';

export default function Slide06() {
  const codeLines = [
    { text: '---', color: '#8b949e' },
    { text: 'name: my-awesome-skill', color: '#39d353' },
    { text: 'description: "Tạo component React', color: '#39d353' },
    { text: '  khi người dùng yêu cầu tạo UI"', color: '#39d353' },
    { text: '---', color: '#8b949e' },
    { text: '', color: '#8b949e' },
    { text: '# Hướng dẫn', color: '#ffffff' },
    { text: '', color: '#8b949e' },
    { text: 'Khi tạo React component, hãy:', color: '#8b949e' },
    { text: '1. Dùng TypeScript', color: '#8b949e' },
    { text: '2. Dùng Tailwind CSS', color: '#8b949e' },
    { text: '3. Export default component', color: '#8b949e' },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: '60px 80px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={terminalLine} style={{ color: '#39d353', fontSize: 'clamp(12px, 1.2vw, 15px)', marginBottom: 16 }}>
          {'>'}_  skill-anatomy.md
        </motion.div>

        <motion.h2
          variants={slideUp}
          style={{
            fontSize: 'clamp(26px, 3.2vw, 40px)',
            color: '#ffffff',
            fontWeight: 700,
            fontFamily: "'JetBrains Mono', monospace",
            marginBottom: 12,
          }}
        >
          Cấu trúc Skill
        </motion.h2>

        <motion.p variants={slideUp} style={{ color: '#8b949e', fontSize: 'clamp(13px, 1.4vw, 17px)', marginBottom: 32 }}>
          name, description (từ khóa kích hoạt), và phần hướng dẫn — chỉ là markdown thôi
        </motion.p>

        <motion.div
          variants={slideUp}
          style={{
            border: '1px solid rgba(57, 211, 83, 0.2)',
            borderRadius: 8,
            padding: '24px 28px',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          <div style={{ color: '#8b949e', fontSize: 'clamp(10px, 1vw, 12px)', marginBottom: 12 }}>
            skills/my-skill/SKILL.md
          </div>
          {codeLines.map((line, i) => (
            <div
              key={i}
              style={{
                color: line.color,
                fontSize: 'clamp(12px, 1.3vw, 16px)',
                lineHeight: 1.8,
                minHeight: line.text === '' ? 12 : undefined,
              }}
            >
              {line.text}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
