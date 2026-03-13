import { motion } from 'framer-motion';
import { staggerContainer, slideUp, terminalLine } from '../lib/animations';
import { CheckCircle } from 'lucide-react';

export default function Slide13() {
  const practices = [
    { title: 'Hướng dẫn cụ thể', desc: 'Không mơ hồ — chỉ rõ từng bước' },
    { title: 'Bao gồm ví dụ', desc: 'Cho Claude thấy output mong muốn' },
    { title: 'Định nghĩa format đầu ra', desc: 'Cấu trúc file, naming convention' },
    { title: 'Thêm checklist chất lượng', desc: 'Tự kiểm tra trước khi hoàn thành' },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: '60px 80px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={terminalLine} style={{ color: '#39d353', fontSize: 'clamp(12px, 1.2vw, 15px)', marginBottom: 16 }}>
          {'>'}_  best-practices.md
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
          Best Practices
        </motion.h2>

        <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-6">
          {practices.map((p, i) => (
            <motion.div
              key={i}
              variants={terminalLine}
              className="flex gap-4"
              style={{
                border: '1px solid rgba(57, 211, 83, 0.2)',
                borderRadius: 8,
                padding: '20px 24px',
              }}
            >
              <CheckCircle size={20} style={{ color: '#39d353', flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ color: '#ffffff', fontSize: 'clamp(14px, 1.5vw, 18px)', fontWeight: 600, marginBottom: 4 }}>
                  {p.title}
                </div>
                <div style={{ color: '#8b949e', fontSize: 'clamp(12px, 1.2vw, 15px)' }}>
                  {p.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
