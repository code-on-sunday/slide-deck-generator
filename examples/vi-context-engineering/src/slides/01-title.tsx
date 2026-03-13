import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { popIn, slideUp } from '../lib/animations';
import { Zap } from 'lucide-react';

export default function Slide01() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
      className="halftone-dots-accent"
    >
      {/* Decorative electric circles */}
      <motion.div
        style={{
          position: 'absolute',
          top: '80px',
          right: '120px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          border: `2px solid ${theme.colors.accent}`,
          opacity: 0.15,
        }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '100px',
          left: '100px',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: `2px solid ${theme.colors.primary}`,
          opacity: 0.2,
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        variants={popIn}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '16px',
        }}
      >
        <Zap size={28} color={theme.colors.accent} fill={theme.colors.accent} />
        <span
          style={{
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSizes.sm,
            color: theme.colors.accent,
            textTransform: 'uppercase',
            letterSpacing: '4px',
          }}
        >
          Creative Voltage
        </span>
        <Zap size={28} color={theme.colors.accent} fill={theme.colors.accent} />
      </motion.div>

      <motion.h1
        variants={popIn}
        initial="hidden"
        animate="visible"
        style={{
          fontFamily: theme.fonts.display,
          fontSize: theme.fontSizes['5xl'],
          color: theme.colors.white,
          textAlign: 'center',
          lineHeight: 1.1,
          marginBottom: '24px',
        }}
      >
        <span style={{ color: theme.colors.primary }}>Context</span>{' '}
        <span style={{ color: theme.colors.accent }}>Engineering</span>
      </motion.h1>

      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{
          fontFamily: theme.fonts.body,
          fontSize: theme.fontSizes.lg,
          color: theme.colors.whiteAlpha60,
          textAlign: 'center',
          maxWidth: '700px',
          lineHeight: 1.6,
        }}
      >
        Kỹ năng phân biệt người dùng AI giỏi và xuất sắc
      </motion.p>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={2}
        style={{
          marginTop: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: theme.fonts.body,
          fontSize: theme.fontSizes.xs,
          color: 'rgba(255,255,255,0.3)',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '1px',
            background: theme.colors.primary,
          }}
        />
        Nhấn phím → để tiếp tục
        <div
          style={{
            width: '40px',
            height: '1px',
            background: theme.colors.primary,
          }}
        />
      </motion.div>
    </div>
  );
}
