import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { slideUp, slideInLeft, slideInRight } from '../lib/animations';
import { Settings, User } from 'lucide-react';

export default function Slide07() {
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
      <motion.h2
        variants={slideUp}
        initial="hidden"
        animate="visible"
        style={{
          fontFamily: theme.fonts.display,
          fontSize: theme.fontSizes['2xl'],
          color: theme.colors.white,
          marginBottom: '40px',
        }}
      >
        System Prompt vs User Message
      </motion.h2>

      <div style={{ display: 'flex', gap: '40px', flex: 1 }}>
        {/* System prompt */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <Settings size={22} color={theme.colors.accent} />
            <span
              style={{
                fontFamily: theme.fonts.display,
                fontSize: theme.fontSizes.lg,
                color: theme.colors.accent,
              }}
            >
              System Prompt
            </span>
          </div>

          <div style={{ borderLeft: `2px solid ${theme.colors.accent}`, padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.7 }}>
              Thiết lập <span style={{ color: theme.colors.white }}>vai trò, tính cách</span> và quy tắc chung cho model
            </p>
            <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.7 }}>
              Được xử lý <span style={{ color: theme.colors.accent }}>trước tiên</span> — ảnh hưởng mọi câu trả lời
            </p>
            <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.7 }}>
              Ví dụ: "Bạn là chuyên gia phân tích dữ liệu. Luôn trả lời bằng tiếng Việt."
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{
            width: '1px',
            background: `linear-gradient(180deg, transparent, ${theme.colors.whiteAlpha20}, transparent)`,
          }}
        />

        {/* User message */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <User size={22} color={theme.colors.primary} />
            <span
              style={{
                fontFamily: theme.fonts.display,
                fontSize: theme.fontSizes.lg,
                color: theme.colors.primary,
              }}
            >
              User Message
            </span>
          </div>

          <div style={{ borderLeft: `2px solid ${theme.colors.primary}`, padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.7 }}>
              Câu hỏi hoặc yêu cầu <span style={{ color: theme.colors.white }}>cụ thể</span> từ người dùng
            </p>
            <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.7 }}>
              Thay đổi mỗi lượt — là <span style={{ color: theme.colors.primary }}>input chính</span> cho mỗi câu trả lời
            </p>
            <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.7 }}>
              Ví dụ: "Phân tích doanh thu Q3/2025 và so sánh với Q2."
            </p>
          </div>
        </motion.div>
      </div>

      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={3}
        style={{
          fontFamily: theme.fonts.body,
          fontSize: theme.fontSizes.sm,
          color: theme.colors.accent,
          textAlign: 'center',
          marginTop: '24px',
        }}
      >
        Vai trò khác nhau → Tác động khác nhau lên output
      </motion.p>
    </div>
  );
}
