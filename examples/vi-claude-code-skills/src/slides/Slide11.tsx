import { motion } from 'framer-motion';
import { staggerContainer, slideUp, terminalLine } from '../lib/animations';
import { Smartphone } from 'lucide-react';

export default function Slide11() {
  const features = [
    '▸ Screenshot 6.7" và 6.1" theo chuẩn Apple',
    '▸ Gradient background tùy chỉnh',
    '▸ Device frame mockup',
    '▸ Marketing copy tự động',
    '▸ Export PNG sẵn sàng upload',
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: '60px 80px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={terminalLine} style={{ color: '#39d353', fontSize: 'clamp(12px, 1.2vw, 15px)', marginBottom: 16 }}>
          {'>'}_  example-02.md
        </motion.div>

        <motion.div variants={slideUp} className="flex items-center gap-4 mb-8">
          <Smartphone size={32} style={{ color: '#39d353' }} />
          <h2
            style={{
              fontSize: 'clamp(26px, 3.2vw, 40px)',
              color: '#ffffff',
              fontWeight: 700,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Ví dụ: Skill "app-screenshots"
          </h2>
        </motion.div>

        <motion.p variants={slideUp} style={{ color: '#8b949e', fontSize: 'clamp(14px, 1.5vw, 18px)', marginBottom: 32 }}>
          Tạo ảnh marketing cho ứng dụng iOS — sẵn sàng cho App Store
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
            border: '1px solid rgba(57, 211, 83, 0.2)',
            borderRadius: 8,
            padding: '16px 24px',
            color: '#8b949e',
            fontSize: 'clamp(12px, 1.2vw, 15px)',
          }}
        >
          $ claude "tạo app store screenshots cho ứng dụng của tôi"
        </motion.div>
      </motion.div>
    </div>
  );
}
