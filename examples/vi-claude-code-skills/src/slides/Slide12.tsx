import { motion } from 'framer-motion';
import { staggerContainer, slideUp, terminalLine } from '../lib/animations';
import { Share2 } from 'lucide-react';

export default function Slide12() {
  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: '60px 80px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={terminalLine} style={{ color: '#39d353', fontSize: 'clamp(12px, 1.2vw, 15px)', marginBottom: 16 }}>
          {'>'}_  share.sh
        </motion.div>

        <motion.div variants={slideUp} className="flex items-center gap-4 mb-8">
          <Share2 size={28} style={{ color: '#39d353' }} />
          <h2
            style={{
              fontSize: 'clamp(26px, 3.2vw, 40px)',
              color: '#ffffff',
              fontWeight: 700,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Chia sẻ Skill
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="flex flex-col gap-6">
          <motion.div
            variants={slideUp}
            style={{
              border: '1px solid rgba(57, 211, 83, 0.2)',
              borderRadius: 8,
              padding: '20px 28px',
            }}
          >
            <div style={{ color: '#8b949e', fontSize: 'clamp(10px, 1vw, 12px)', marginBottom: 8 }}>
              // Cài skill từ GitHub
            </div>
            <div style={{ color: '#39d353', fontSize: 'clamp(15px, 1.8vw, 22px)', fontFamily: "'JetBrains Mono', monospace" }}>
              $ npx skills add user/repo
            </div>
          </motion.div>

          <motion.div variants={terminalLine} style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: '#8b949e' }}>
            Skill được lưu trong thư mục <span style={{ color: '#39d353' }}>skills/</span> của project
          </motion.div>

          <motion.div variants={staggerContainer} className="flex flex-col gap-3 mt-2">
            {[
              '▸ Commit vào repo — cả team dùng chung',
              '▸ Publish lên GitHub — cộng đồng cài được',
              '▸ Version control — theo dõi thay đổi',
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={terminalLine}
                style={{
                  color: '#39d353',
                  fontSize: 'clamp(13px, 1.4vw, 17px)',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
