import { motion } from 'framer-motion';
import { staggerContainer, slideUp, terminalLine } from '../lib/animations';

export default function Slide03() {
  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: '60px 80px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={terminalLine} style={{ color: '#39d353', fontSize: 'clamp(12px, 1.2vw, 15px)', marginBottom: 16 }}>
          {'>'}_  thought-experiment.sh
        </motion.div>

        <motion.h2
          variants={slideUp}
          style={{
            fontSize: 'clamp(26px, 3.2vw, 40px)',
            color: '#ffffff',
            fontWeight: 700,
            fontFamily: "'JetBrains Mono', monospace",
            lineHeight: 1.3,
          }}
        >
          Nếu Claude có thể nhớ cách làm những task cụ thể?
        </motion.h2>

        <motion.div
          variants={slideUp}
          className="mt-8"
          style={{
            fontSize: 'clamp(18px, 2.2vw, 28px)',
            color: '#39d353',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
          }}
        >
          Vĩnh viễn.
        </motion.div>

        <motion.div variants={staggerContainer} className="mt-10 flex flex-col gap-5">
          {[
            { cmd: 'nhớ', desc: 'workflow phức tạp của bạn' },
            { cmd: 'áp dụng', desc: 'cùng tiêu chuẩn mỗi lần' },
            { cmd: 'chia sẻ', desc: 'kiến thức cho cả team' },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={terminalLine}
              className="flex items-center gap-4"
              style={{ fontSize: 'clamp(14px, 1.6vw, 20px)', fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span style={{ color: '#39d353' }}>▸ {item.cmd}</span>
              <span style={{ color: '#8b949e' }}>— {item.desc}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
