import { motion } from 'framer-motion';
import { staggerContainer, terminalLine, slideUp } from '../lib/animations';

export default function Slide02() {
  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: '60px 80px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={terminalLine} style={{ color: '#39d353', fontSize: 'clamp(12px, 1.2vw, 15px)', marginBottom: 16 }}>
          {'>'}_  vấn-đề.md
        </motion.div>

        <motion.h2
          variants={slideUp}
          style={{
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            color: '#ffffff',
            fontWeight: 700,
            fontFamily: "'JetBrains Mono', monospace",
            lineHeight: 1.3,
          }}
        >
          Bạn cứ lặp đi lặp lại cùng một hướng dẫn
        </motion.h2>

        <motion.div variants={staggerContainer} className="mt-10 flex flex-col gap-4">
          {[
            '$ copy-paste cùng một prompt mỗi ngày',
            '$ giải thích lại workflow cho Claude lần thứ n',
            '$ context bị mất khi bắt đầu session mới',
            '$ team members viết prompt khác nhau cho cùng task',
          ].map((line, i) => (
            <motion.div
              key={i}
              variants={terminalLine}
              style={{
                fontSize: 'clamp(14px, 1.6vw, 20px)',
                color: i === 3 ? '#39d353' : '#8b949e',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {line}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={slideUp}
          className="mt-10"
          style={{
            fontSize: 'clamp(14px, 1.5vw, 18px)',
            color: '#39d353',
            fontFamily: "'JetBrains Mono', monospace",
            opacity: 0.7,
          }}
        >
          // Thời gian lãng phí = ∞
        </motion.div>
      </motion.div>
    </div>
  );
}
