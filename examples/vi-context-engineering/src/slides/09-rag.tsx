import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { slideUp, slideInLeft, popIn } from '../lib/animations';
import { Database, Search, FileText, ArrowRight } from 'lucide-react';

export default function Slide09() {
  const steps = [
    { icon: Search, label: 'Truy vấn', desc: 'Người dùng hỏi câu hỏi' },
    { icon: Database, label: 'Tìm kiếm', desc: 'Hệ thống tìm tài liệu liên quan' },
    { icon: FileText, label: 'Đưa vào context', desc: 'Tài liệu được thêm vào prompt' },
  ];

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
        <Database size={24} color={theme.colors.primary} />
        <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.primary, textTransform: 'uppercase', letterSpacing: '3px' }}>
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
          marginBottom: '12px',
        }}
      >
        RAG <span style={{ color: theme.colors.whiteAlpha60, fontSize: theme.fontSizes.lg }}>(Retrieval-Augmented Generation)</span>
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
          marginBottom: '48px',
          maxWidth: '800px',
        }}
      >
        Tự động kéo tài liệu <span style={{ color: theme.colors.accent }}>liên quan</span> vào context — model không cần nhớ mọi thứ.
      </motion.p>

      {/* Flow diagram */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                animate="visible"
                custom={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  width: '200px',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    border: `2px solid ${i % 2 === 0 ? theme.colors.primary : theme.colors.accent}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={28} color={i % 2 === 0 ? theme.colors.primary : theme.colors.accent} />
                </div>
                <span style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, color: theme.colors.white }}>
                  {step.label}
                </span>
                <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60, textAlign: 'center', lineHeight: 1.5 }}>
                  {step.desc}
                </span>
              </motion.div>

              {i < steps.length - 1 && (
                <motion.div
                  variants={slideUp}
                  initial="hidden"
                  animate="visible"
                  custom={i + 1}
                >
                  <ArrowRight size={24} color={theme.colors.whiteAlpha20} />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={4}
        style={{
          fontFamily: theme.fonts.body,
          fontSize: theme.fontSizes.sm,
          color: theme.colors.accent,
          textAlign: 'center',
          marginTop: '48px',
        }}
      >
        RAG giúp model trả lời chính xác với dữ liệu cập nhật — không bị "ảo giác"
      </motion.p>
    </div>
  );
}
