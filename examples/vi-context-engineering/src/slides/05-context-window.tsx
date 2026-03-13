import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { slideUp, slideInLeft, scaleIn } from '../lib/animations';
import { Box } from 'lucide-react';

export default function Slide05() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        padding: '60px 80px',
        gap: '60px',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* Left content */}
      <div style={{ flex: 1 }}>
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}
        >
          <Box size={22} color={theme.colors.primary} />
          <span
            style={{
              fontFamily: theme.fonts.body,
              fontSize: theme.fontSizes.xs,
              color: theme.colors.primary,
              textTransform: 'uppercase',
              letterSpacing: '3px',
            }}
          >
            Nền tảng
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
            marginBottom: '24px',
          }}
        >
          Cửa sổ ngữ cảnh
          <br />
          <span style={{ color: theme.colors.accent }}>(Context Window)</span>
        </motion.h2>

        <motion.p
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSizes.base,
            color: theme.colors.whiteAlpha60,
            lineHeight: 1.7,
          }}
        >
          Một container có kích thước cố định chứa mọi thứ model có thể "thấy" khi sinh câu trả lời.
        </motion.p>
      </div>

      {/* Right visual — context window box */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '400px',
            height: '460px',
            border: `2px solid ${theme.colors.primary}`,
            borderRadius: '12px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '24px 20px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-14px',
              left: '20px',
              fontFamily: theme.fonts.body,
              fontSize: theme.fontSizes.xs,
              color: theme.colors.primary,
              background: theme.colors.darkBg,
              padding: '2px 10px',
            }}
          >
            context_window
          </div>

          {['System Prompt', 'User Message', 'Few-shot Examples', 'Retrieved Docs', 'Tool Results', 'Chat History', 'Output Constraints'].map(
            (item, i) => (
              <motion.div
                key={item}
                variants={slideUp}
                initial="hidden"
                animate="visible"
                custom={i + 1}
                style={{
                  padding: '12px 16px',
                  border: `1px solid ${i === 0 ? theme.colors.accent : theme.colors.whiteAlpha10}`,
                  borderRadius: '6px',
                  fontFamily: theme.fonts.body,
                  fontSize: theme.fontSizes.xs,
                  color: i === 0 ? theme.colors.accent : theme.colors.whiteAlpha60,
                }}
              >
                {item}
              </motion.div>
            )
          )}

          <div
            style={{
              position: 'absolute',
              bottom: '-20px',
              right: '20px',
              fontFamily: theme.fonts.body,
              fontSize: theme.fontSizes.xs,
              color: 'rgba(255,255,255,0.25)',
            }}
          >
            128K tokens
          </div>
        </div>
      </motion.div>
    </div>
  );
}
