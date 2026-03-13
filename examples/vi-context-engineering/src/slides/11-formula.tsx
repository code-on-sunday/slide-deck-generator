import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { slideUp, popIn, scaleIn } from '../lib/animations';
import { Sparkles } from 'lucide-react';

export default function Slide11() {
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
      <motion.div
        variants={popIn}
        initial="hidden"
        animate="visible"
        style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}
      >
        <Sparkles size={24} color={theme.colors.accent} />
        <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.accent, textTransform: 'uppercase', letterSpacing: '3px' }}>
          Công thức chất lượng
        </span>
      </motion.div>

      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        custom={0}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '48px',
        }}
      >
        <span style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], color: theme.colors.white }}>
          Chất lượng
        </span>
        <span style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], color: theme.colors.whiteAlpha60 }}>=</span>
        <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.lg, color: theme.colors.whiteAlpha60 }}>f(</span>
        <span style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], color: theme.colors.primary }}>
          Khả năng Model
        </span>
        <span style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], color: theme.colors.accent }}>x</span>
        <span style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], color: theme.colors.accent }}>
          Chất lượng Context
        </span>
        <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.lg, color: theme.colors.whiteAlpha60 }}>)</span>
      </motion.div>

      <div style={{ display: 'flex', gap: '60px', maxWidth: '900px' }}>
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ flex: 1, textAlign: 'center' }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: `2px solid ${theme.colors.primary}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontFamily: theme.fonts.display,
              fontSize: theme.fontSizes.xl,
              color: theme.colors.primary,
            }}
          >
            M
          </div>
          <p style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, color: theme.colors.primary, marginBottom: '8px' }}>
            Khả năng Model
          </p>
          <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.6 }}>
            GPT-4, Claude, Gemini — bạn không thay đổi được nhiều
          </p>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{ flex: 1, textAlign: 'center' }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: `2px solid ${theme.colors.accent}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontFamily: theme.fonts.display,
              fontSize: theme.fontSizes.xl,
              color: theme.colors.accent,
            }}
          >
            C
          </div>
          <p style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, color: theme.colors.accent, marginBottom: '8px' }}>
            Chất lượng Context
          </p>
          <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.6 }}>
            Đây là nơi bạn tạo ra sự khác biệt — và đây là Context Engineering
          </p>
        </motion.div>
      </div>
    </div>
  );
}
