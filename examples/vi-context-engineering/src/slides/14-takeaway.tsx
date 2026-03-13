import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { slideUp, popIn, electricPulse } from '../lib/animations';
import { Zap } from 'lucide-react';

export default function Slide14() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 80px',
        position: 'relative',
      }}
      className="halftone-dots-accent"
    >
      {/* Decorative circles */}
      <motion.div
        style={{
          position: 'absolute',
          top: '100px',
          left: '100px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: `1px solid ${theme.colors.accent}`,
          opacity: 0.1,
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '80px',
          right: '120px',
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          border: `1px solid ${theme.colors.primary}`,
          opacity: 0.1,
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        variants={electricPulse}
        initial="hidden"
        animate="visible"
        style={{ marginBottom: '32px' }}
      >
        <Zap size={48} color={theme.colors.accent} fill={theme.colors.accent} />
      </motion.div>

      <motion.h2
        variants={popIn}
        initial="hidden"
        animate="visible"
        style={{
          fontFamily: theme.fonts.display,
          fontSize: theme.fontSizes['3xl'],
          color: theme.colors.white,
          textAlign: 'center',
          lineHeight: 1.3,
          marginBottom: '20px',
          maxWidth: '800px',
        }}
      >
        Đừng chỉ <span style={{ color: theme.colors.whiteAlpha60 }}>prompt</span>.
        <br />
        Hãy <span style={{ color: theme.colors.accent }}>thiết kế context</span>.
      </motion.h2>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{
          width: '60px',
          height: '3px',
          background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent})`,
          marginBottom: '28px',
        }}
      />

      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={2}
        style={{
          fontFamily: theme.fonts.body,
          fontSize: theme.fontSizes.lg,
          color: theme.colors.whiteAlpha60,
          textAlign: 'center',
          maxWidth: '700px',
          lineHeight: 1.7,
        }}
      >
        Context Engineering là một <span style={{ color: theme.colors.primary }}>discipline thiết kế</span> —
        không phải chỉ là kỹ năng viết prompt. Nó đòi hỏi tư duy hệ thống về toàn bộ thông tin đầu vào.
      </motion.p>

      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={3}
        style={{
          fontFamily: theme.fonts.body,
          fontSize: theme.fontSizes.base,
          color: theme.colors.accent,
          textAlign: 'center',
          marginTop: '32px',
        }}
      >
        Người giỏi viết prompt. Người xuất sắc thiết kế context.
      </motion.p>
    </div>
  );
}
