import { motion } from 'framer-motion';
import { staggerContainer, slideUp, terminalLine } from '../lib/animations';
import { Presentation } from 'lucide-react';

export default function Slide10() {
  const features = [
    '▸ 15 slide với nội dung đầy đủ',
    '▸ React + Vite + TypeScript + Tailwind',
    '▸ Framer Motion animations',
    '▸ Responsive scaling (1280×720)',
    '▸ Keyboard & click navigation',
    '▸ Style preset tùy chỉnh',
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: '60px 80px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={terminalLine} style={{ color: '#39d353', fontSize: 'clamp(12px, 1.2vw, 15px)', marginBottom: 16 }}>
          {'>'}_  example-01.md
        </motion.div>

        <motion.div variants={slideUp} className="flex items-center gap-4 mb-8">
          <Presentation size={32} style={{ color: '#39d353' }} />
          <h2
            style={{
              fontSize: 'clamp(26px, 3.2vw, 40px)',
              color: '#ffffff',
              fontWeight: 700,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Ví dụ: Skill "slide-deck"
          </h2>
        </motion.div>

        <motion.p variants={slideUp} style={{ color: '#8b949e', fontSize: 'clamp(14px, 1.5vw, 18px)', marginBottom: 32 }}>
          Tạo toàn bộ ứng dụng trình chiếu React từ một chủ đề
        </motion.p>

        <motion.div variants={staggerContainer} className="flex flex-col gap-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={terminalLine}
              style={{
                color: '#39d353',
                fontSize: 'clamp(13px, 1.4vw, 17px)',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {f}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={slideUp}
          className="mt-8"
          style={{
            color: '#8b949e',
            fontSize: 'clamp(12px, 1.2vw, 15px)',
            opacity: 0.7,
          }}
        >
          // Bạn đang xem output của skill này ngay bây giờ!
        </motion.div>
      </motion.div>
    </div>
  );
}
