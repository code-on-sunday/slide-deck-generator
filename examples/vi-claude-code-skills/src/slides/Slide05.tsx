import { motion } from 'framer-motion';
import { staggerContainer, slideUp, terminalLine } from '../lib/animations';
import { ArrowRight } from 'lucide-react';

export default function Slide05() {
  const steps = [
    { label: 'Kích hoạt', desc: 'Tin nhắn khớp từ khóa' },
    { label: 'Đọc', desc: 'Claude đọc SKILL.md' },
    { label: 'Thực thi', desc: 'Làm theo hướng dẫn' },
    { label: 'Kết quả', desc: 'Output nhất quán' },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: '60px 80px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={terminalLine} style={{ color: '#39d353', fontSize: 'clamp(12px, 1.2vw, 15px)', marginBottom: 16 }}>
          {'>'}_  skill-flow.sh
        </motion.div>

        <motion.h2
          variants={slideUp}
          style={{
            fontSize: 'clamp(26px, 3.2vw, 40px)',
            color: '#ffffff',
            fontWeight: 700,
            fontFamily: "'JetBrains Mono', monospace",
            marginBottom: 48,
          }}
        >
          Cách Skill hoạt động
        </motion.h2>

        <motion.div variants={staggerContainer} className="flex items-center justify-between">
          {steps.map((step, i) => (
            <motion.div key={i} variants={terminalLine} className="flex items-center gap-4">
              <div className="flex flex-col items-center text-center" style={{ width: 200 }}>
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 56,
                    height: 56,
                    border: '1px solid rgba(57, 211, 83, 0.4)',
                    borderRadius: 8,
                    color: '#39d353',
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ color: '#ffffff', fontSize: 'clamp(13px, 1.4vw, 17px)', fontWeight: 600, marginBottom: 4 }}>
                  {step.label}
                </div>
                <div style={{ color: '#8b949e', fontSize: 'clamp(11px, 1.1vw, 14px)' }}>
                  {step.desc}
                </div>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight style={{ color: '#39d353', opacity: 0.5 }} size={20} />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
