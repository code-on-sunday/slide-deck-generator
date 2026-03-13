import { motion } from 'framer-motion';
import { staggerContainer, slideUp, terminalLine } from '../lib/animations';

export default function Slide07() {
  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: '60px 80px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={terminalLine} style={{ color: '#39d353', fontSize: 'clamp(12px, 1.2vw, 15px)', marginBottom: 16 }}>
          {'>'}_  trigger-system.sh
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
          Hệ thống kích hoạt
        </motion.h2>

        <motion.div variants={staggerContainer} className="flex flex-col gap-6">
          <motion.div variants={terminalLine} style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: '#8b949e' }}>
            Skill được kích hoạt khi tin nhắn của bạn khớp với từ khóa trong <span style={{ color: '#39d353' }}>description</span>
          </motion.div>

          <motion.div
            variants={slideUp}
            style={{
              border: '1px solid rgba(57, 211, 83, 0.2)',
              borderRadius: 8,
              padding: '20px 28px',
            }}
          >
            <div style={{ color: '#8b949e', fontSize: 'clamp(10px, 1vw, 12px)', marginBottom: 8 }}>description trong SKILL.md:</div>
            <div style={{ color: '#39d353', fontSize: 'clamp(13px, 1.4vw, 17px)' }}>
              "Tạo slide deck khi người dùng yêu cầu tạo presentation"
            </div>
          </motion.div>

          <motion.div variants={terminalLine} className="flex items-center gap-3" style={{ fontSize: 'clamp(13px, 1.4vw, 17px)' }}>
            <span style={{ color: '#8b949e' }}>Bạn nói:</span>
            <span style={{ color: '#ffffff' }}>"Tạo cho tôi một slide deck về React"</span>
          </motion.div>

          <motion.div variants={terminalLine} className="flex items-center gap-3" style={{ fontSize: 'clamp(13px, 1.4vw, 17px)' }}>
            <span style={{ color: '#8b949e' }}>Claude:</span>
            <span style={{ color: '#39d353' }}>✓ Skill "slide-deck" được kích hoạt!</span>
          </motion.div>

          <motion.div variants={terminalLine} style={{ fontSize: 'clamp(12px, 1.2vw, 15px)', color: '#8b949e', opacity: 0.7, marginTop: 8 }}>
            // Hoặc gọi trực tiếp: /slide-deck
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
