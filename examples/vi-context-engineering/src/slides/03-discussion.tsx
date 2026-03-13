import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { slideUp, popIn } from '../lib/animations';
import { MessageCircle } from 'lucide-react';

export default function Slide03() {
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
        <MessageCircle size={24} color={theme.colors.primary} />
        <span
          style={{
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSizes.sm,
            color: theme.colors.primary,
            textTransform: 'uppercase',
            letterSpacing: '3px',
          }}
        >
          Thảo luận
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
          marginBottom: '40px',
        }}
      >
        Điều gì tạo nên một prompt{' '}
        <span style={{ color: theme.colors.primary }}>tốt</span> so với một
        prompt <span style={{ color: theme.colors.accent }}>xuất sắc</span>?
      </motion.h2>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <p
          style={{
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSizes.lg,
            color: theme.colors.whiteAlpha60,
            lineHeight: 1.7,
            maxWidth: '800px',
          }}
        >
          Hầu hết mọi người nghĩ prompt engineering chỉ là viết hướng dẫn tốt hơn.
        </p>

        <motion.p
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            fontFamily: theme.fonts.display,
            fontSize: theme.fontSizes['2xl'],
            color: theme.colors.accent,
            lineHeight: 1.4,
          }}
        >
          Nhưng thực tế — prompt chỉ là MỘT phần của bức tranh lớn hơn.
        </motion.p>

        <motion.p
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSizes.base,
            color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.6,
            borderLeft: `2px solid ${theme.colors.primary}`,
            padding: '12px 20px',
            marginTop: '8px',
          }}
        >
          Hãy nghĩ xa hơn việc chỉ viết hướng dẫn. Hãy nghĩ về toàn bộ thông tin bạn đưa cho model.
        </motion.p>
      </motion.div>

      {/* Decorative */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '60px',
          right: '80px',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          border: `1px solid ${theme.colors.primary}`,
          opacity: 0.15,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}
