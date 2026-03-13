import { motion } from 'framer-motion';
import { staggerContainer, slideUp, terminalLine } from '../lib/animations';

export default function Slide14() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center" style={{ padding: '60px 80px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center">
        <motion.div variants={terminalLine} style={{ color: '#39d353', fontSize: 'clamp(12px, 1.2vw, 15px)', marginBottom: 24 }}>
          {'>'}_  takeaway.sh
        </motion.div>

        <motion.h2
          variants={slideUp}
          style={{
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            color: '#ffffff',
            fontWeight: 700,
            fontFamily: "'JetBrains Mono', monospace",
            lineHeight: 1.4,
            marginBottom: 24,
          }}
        >
          Skill biến prompt một lần
          <br />
          thành <span style={{ color: '#39d353' }}>chuyên môn tái sử dụng</span>
        </motion.h2>

        <motion.div
          variants={slideUp}
          style={{
            fontSize: 'clamp(16px, 1.8vw, 22px)',
            color: '#8b949e',
            fontFamily: "'JetBrains Mono', monospace",
            marginBottom: 40,
          }}
        >
          Tích lũy kiến thức AI của bạn theo thời gian
        </motion.div>

        <motion.div variants={staggerContainer} className="flex justify-center gap-10">
          {[
            { num: '1×', label: 'Viết skill' },
            { num: '∞', label: 'Tái sử dụng' },
            { num: '0', label: 'Copy-paste' },
          ].map((item, i) => (
            <motion.div key={i} variants={terminalLine} className="text-center">
              <div style={{ color: '#39d353', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700 }}>
                {item.num}
              </div>
              <div style={{ color: '#8b949e', fontSize: 'clamp(12px, 1.2vw, 15px)', marginTop: 4 }}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
