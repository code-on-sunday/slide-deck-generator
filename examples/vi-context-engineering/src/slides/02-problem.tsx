import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { slideUp, slideInLeft } from '../lib/animations';
import { AlertTriangle } from 'lucide-react';

export default function Slide02() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px 80px',
        position: 'relative',
      }}
    >
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '24px',
        }}
      >
        <AlertTriangle size={24} color={theme.colors.accent} />
        <span
          style={{
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSizes.sm,
            color: theme.colors.accent,
            textTransform: 'uppercase',
            letterSpacing: '3px',
          }}
        >
          Vấn đề
        </span>
      </motion.div>

      <motion.h2
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={0}
        style={{
          fontFamily: theme.fonts.display,
          fontSize: theme.fontSizes['3xl'],
          color: theme.colors.white,
          lineHeight: 1.2,
          marginBottom: '32px',
        }}
      >
        Tại sao ChatGPT đôi khi
        <br />
        cho câu trả lời{' '}
        <span style={{ color: theme.colors.accent, textDecoration: 'underline', textDecorationColor: theme.colors.accent, textUnderlineOffset: '6px' }}>
          tệ
        </span>
        ?
      </motion.h2>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{
          display: 'flex',
          gap: '40px',
          marginTop: '16px',
        }}
      >
        <div
          style={{
            flex: 1,
            borderLeft: `3px solid ${theme.colors.primary}`,
            padding: '20px 24px',
          }}
        >
          <p
            style={{
              fontFamily: theme.fonts.body,
              fontSize: theme.fontSizes.base,
              color: theme.colors.whiteAlpha60,
              lineHeight: 1.7,
            }}
          >
            Cùng một model, cùng một câu hỏi — nhưng kết quả khác nhau hoàn toàn giữa người dùng A và người dùng B.
          </p>
        </div>

        <div
          style={{
            flex: 1,
            borderLeft: `3px solid ${theme.colors.accent}`,
            padding: '20px 24px',
          }}
        >
          <p
            style={{
              fontFamily: theme.fonts.body,
              fontSize: theme.fontSizes.base,
              color: theme.colors.whiteAlpha60,
              lineHeight: 1.7,
            }}
          >
            Điểm khác biệt không nằm ở model.
            <br />
            Mà nằm ở <span style={{ color: theme.colors.white, fontWeight: 'bold' }}>context</span> bạn cung cấp.
          </p>
        </div>
      </motion.div>

      {/* Decorative dots */}
      <div
        style={{
          position: 'absolute',
          top: '40px',
          right: '60px',
          width: '100px',
          height: '100px',
        }}
        className="halftone-dots-accent"
      />
    </div>
  );
}
