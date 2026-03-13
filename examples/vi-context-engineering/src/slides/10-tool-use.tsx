import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { slideUp, popIn, slideInLeft } from '../lib/animations';
import { Wrench, Code, ArrowDownRight } from 'lucide-react';

export default function Slide10() {
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
        <Wrench size={24} color={theme.colors.accent} />
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
          marginBottom: '16px',
        }}
      >
        Tool Use
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
          marginBottom: '40px',
          maxWidth: '750px',
        }}
      >
        Cho model <span style={{ color: theme.colors.accent }}>gọi hàm</span> và sử dụng kết quả — mở rộng khả năng vượt xa text.
      </motion.p>

      {/* Tool use flow */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'stretch' }}>
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{
            flex: 1,
            border: `1px solid ${theme.colors.whiteAlpha10}`,
            borderRadius: '8px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <Code size={20} color={theme.colors.primary} />
          <span style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, color: theme.colors.primary }}>
            1. Model quyết định gọi tool
          </span>
          <code style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60, lineHeight: 1.6 }}>
            get_weather(city="Hà Nội")
          </code>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <ArrowDownRight size={24} color={theme.colors.whiteAlpha20} style={{ transform: 'rotate(-90deg)' }} />
        </motion.div>

        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            flex: 1,
            border: `1px solid ${theme.colors.whiteAlpha10}`,
            borderRadius: '8px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <Wrench size={20} color={theme.colors.accent} />
          <span style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, color: theme.colors.accent }}>
            2. Hệ thống thực thi
          </span>
          <code style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60, lineHeight: 1.6 }}>
            {`{ "temp": "28°C", "humidity": "75%" }`}
          </code>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <ArrowDownRight size={24} color={theme.colors.whiteAlpha20} style={{ transform: 'rotate(-90deg)' }} />
        </motion.div>

        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{
            flex: 1,
            border: `1px solid ${theme.colors.whiteAlpha10}`,
            borderRadius: '8px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <Code size={20} color={theme.colors.primary} />
          <span style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, color: theme.colors.primary }}>
            3. Kết quả vào context
          </span>
          <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60, lineHeight: 1.6 }}>
            Model dùng kết quả để trả lời chính xác
          </p>
        </motion.div>
      </div>
    </div>
  );
}
