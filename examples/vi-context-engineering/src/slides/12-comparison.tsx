import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { slideUp, slideInLeft, slideInRight } from '../lib/animations';
import { ThumbsDown, ThumbsUp } from 'lucide-react';

export default function Slide12() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '50px 70px',
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
          marginBottom: '8px',
        }}
      >
        Context tệ vs Context tốt
      </motion.h2>
      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={0}
        style={{
          fontFamily: theme.fonts.body,
          fontSize: theme.fontSizes.sm,
          color: theme.colors.whiteAlpha60,
          marginBottom: '28px',
        }}
      >
        Cùng câu hỏi — kết quả khác nhau hoàn toàn
      </motion.p>

      <div style={{ display: 'flex', gap: '32px', flex: 1 }}>
        {/* Bad context */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            flex: 1,
            border: '1px solid rgba(255, 80, 80, 0.3)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(255, 80, 80, 0.2)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ThumbsDown size={18} color="#ff5050" />
            <span style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.sm, color: '#ff5050' }}>Context tệ</span>
          </div>
          <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ borderLeft: '2px solid rgba(255, 80, 80, 0.3)', padding: '8px 14px' }}>
              <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>Prompt:</p>
              <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.6 }}>
                "Viết code cho tôi"
              </p>
            </div>
            <div style={{ borderLeft: '2px solid rgba(255, 80, 80, 0.3)', padding: '8px 14px' }}>
              <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>Không có:</p>
              <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60, lineHeight: 1.6 }}>
                Ngôn ngữ, framework, yêu cầu, ví dụ, coding style, cấu trúc dự án
              </p>
            </div>
            <div style={{ borderLeft: '2px solid rgba(255, 80, 80, 0.3)', padding: '8px 14px' }}>
              <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>Kết quả:</p>
              <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: '#ff5050', lineHeight: 1.6 }}>
                Code generic, sai ngôn ngữ, không phù hợp dự án
              </p>
            </div>
          </div>
        </motion.div>

        {/* Good context */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            flex: 1,
            border: '1px solid rgba(212, 255, 0, 0.3)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(212, 255, 0, 0.2)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ThumbsUp size={18} color={theme.colors.accent} />
            <span style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.sm, color: theme.colors.accent }}>Context tốt</span>
          </div>
          <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ borderLeft: '2px solid rgba(212, 255, 0, 0.3)', padding: '8px 14px' }}>
              <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>System:</p>
              <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60, lineHeight: 1.6 }}>
                "Senior React dev, TypeScript strict, functional components"
              </p>
            </div>
            <div style={{ borderLeft: '2px solid rgba(212, 255, 0, 0.3)', padding: '8px 14px' }}>
              <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>Context kèm:</p>
              <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60, lineHeight: 1.6 }}>
                Cấu trúc dự án, coding conventions, ví dụ component, API types
              </p>
            </div>
            <div style={{ borderLeft: '2px solid rgba(212, 255, 0, 0.3)', padding: '8px 14px' }}>
              <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>Kết quả:</p>
              <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.accent, lineHeight: 1.6 }}>
                Code chính xác, đúng style, sẵn sàng merge
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
