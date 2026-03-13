import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { slideUp, popIn, scaleIn } from '../lib/animations';
import { Layers } from 'lucide-react';

export default function Slide04() {
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
    >
      <motion.div
        variants={popIn}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '24px',
        }}
      >
        <Layers size={24} color={theme.colors.accent} />
        <span
          style={{
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSizes.sm,
            color: theme.colors.accent,
            textTransform: 'uppercase',
            letterSpacing: '3px',
          }}
        >
          Khái niệm chính
        </span>
      </motion.div>

      <motion.h2
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={0}
        style={{
          fontFamily: theme.fonts.display,
          fontSize: theme.fontSizes['4xl'],
          color: theme.colors.white,
          textAlign: 'center',
          lineHeight: 1.2,
          marginBottom: '16px',
        }}
      >
        <span style={{ color: theme.colors.primary }}>Context</span>{' '}
        <span style={{ color: theme.colors.accent }}>Engineering</span> là gì?
      </motion.h2>

      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{
          width: '60px',
          height: '3px',
          background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent})`,
          marginBottom: '32px',
        }}
      />

      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={2}
        style={{
          fontFamily: theme.fonts.body,
          fontSize: theme.fontSizes.xl,
          color: theme.colors.white,
          textAlign: 'center',
          maxWidth: '900px',
          lineHeight: 1.6,
        }}
      >
        Nghệ thuật và khoa học{' '}
        <span style={{ color: theme.colors.accent }}>sắp xếp đúng thông tin</span>{' '}
        vào <span style={{ color: theme.colors.primary }}>cửa sổ ngữ cảnh</span> của model
      </motion.p>

      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={3}
        style={{
          fontFamily: theme.fonts.body,
          fontSize: theme.fontSizes.base,
          color: theme.colors.whiteAlpha60,
          textAlign: 'center',
          maxWidth: '700px',
          lineHeight: 1.6,
          marginTop: '24px',
        }}
      >
        Không chỉ là viết prompt — mà là thiết kế toàn bộ thông tin đầu vào để model có thể hiểu và thực hiện tốt nhất.
      </motion.p>

      {/* Decorative elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50px',
          left: '50px',
          width: '200px',
          height: '200px',
        }}
        className="halftone-dots-large"
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '50px',
          right: '50px',
          width: '150px',
          height: '150px',
        }}
        className="halftone-dots-accent"
      />
    </div>
  );
}
