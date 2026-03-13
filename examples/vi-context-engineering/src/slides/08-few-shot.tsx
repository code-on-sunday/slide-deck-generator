import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { slideUp, popIn } from '../lib/animations';
import { BookOpen } from 'lucide-react';

export default function Slide08() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '60px 80px',
        position: 'relative',
      }}
    >
      <motion.div
        variants={popIn}
        initial="hidden"
        animate="visible"
        style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}
      >
        <BookOpen size={24} color={theme.colors.accent} />
        <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.accent, textTransform: 'uppercase', letterSpacing: '3px' }}>
          Kỹ thuật
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
          marginBottom: '36px',
        }}
      >
        Few-shot Examples
      </motion.h2>

      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{
          fontFamily: theme.fonts.body,
          fontSize: theme.fontSizes.lg,
          color: theme.colors.whiteAlpha60,
          lineHeight: 1.6,
          marginBottom: '32px',
          maxWidth: '800px',
        }}
      >
        Cho model <span style={{ color: theme.colors.accent }}>thấy</span> điều bạn muốn qua ví dụ minh họa — thay vì chỉ{' '}
        <span style={{ color: theme.colors.whiteAlpha60 }}>giải thích</span>.
      </motion.p>

      <div style={{ display: 'flex', gap: '24px' }}>
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            flex: 1,
            border: `1px solid ${theme.colors.whiteAlpha10}`,
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: '12px 16px', borderBottom: `1px solid ${theme.colors.whiteAlpha10}` }}>
            <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.primary }}>Input mẫu</span>
          </div>
          <div style={{ padding: '16px' }}>
            <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.7 }}>
              "Tóm tắt email này thành 1 dòng: [nội dung email dài về meeting Q3]"
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{
            flex: 1,
            border: `1px solid ${theme.colors.whiteAlpha10}`,
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: '12px 16px', borderBottom: `1px solid ${theme.colors.whiteAlpha10}` }}>
            <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.accent }}>Output mẫu</span>
          </div>
          <div style={{ padding: '16px' }}>
            <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.7 }}>
              "Meeting Q3 vào thứ 5 tuần sau — cần chuẩn bị slide doanh thu."
            </p>
          </div>
        </motion.div>
      </div>

      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={4}
        style={{
          fontFamily: theme.fonts.body,
          fontSize: theme.fontSizes.sm,
          color: theme.colors.primary,
          marginTop: '28px',
          textAlign: 'center',
        }}
      >
        2-3 ví dụ tốt có thể thay đổi hoàn toàn chất lượng output
      </motion.p>
    </div>
  );
}
