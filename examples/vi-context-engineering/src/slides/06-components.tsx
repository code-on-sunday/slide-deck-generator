import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { slideUp, popIn } from '../lib/animations';
import { Settings, User, BookOpen, Database, Wrench, MessageSquare, ShieldCheck } from 'lucide-react';

const components = [
  { icon: Settings, label: 'System Prompt', desc: 'Vai trò & quy tắc cho model', color: theme.colors.accent },
  { icon: User, label: 'User Message', desc: 'Câu hỏi / yêu cầu người dùng', color: theme.colors.primary },
  { icon: BookOpen, label: 'Ví dụ (Few-shot)', desc: 'Ví dụ minh họa đầu vào-đầu ra', color: theme.colors.accent },
  { icon: Database, label: 'Tài liệu truy xuất', desc: 'Dữ liệu từ RAG pipeline', color: theme.colors.primary },
  { icon: Wrench, label: 'Kết quả Tool', desc: 'Output từ function calls', color: theme.colors.accent },
  { icon: MessageSquare, label: 'Lịch sử hội thoại', desc: 'Các tin nhắn trước đó', color: theme.colors.primary },
  { icon: ShieldCheck, label: 'Ràng buộc đầu ra', desc: 'Format, schema, constraints', color: theme.colors.accent },
];

export default function Slide06() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 60px',
        position: 'relative',
      }}
    >
      <motion.h2
        variants={popIn}
        initial="hidden"
        animate="visible"
        style={{
          fontFamily: theme.fonts.display,
          fontSize: theme.fontSizes['2xl'],
          color: theme.colors.white,
          marginBottom: '8px',
        }}
      >
        <span style={{ color: theme.colors.accent }}>7</span> thành phần của Context
      </motion.h2>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={0}
        style={{
          width: '50px',
          height: '3px',
          background: theme.colors.primary,
          marginBottom: '28px',
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
          flex: 1,
        }}
      >
        {components.map((comp, i) => {
          const Icon = comp.icon;
          return (
            <motion.div
              key={comp.label}
              variants={slideUp}
              initial="hidden"
              animate="visible"
              custom={i}
              style={{
                border: `1px solid ${theme.colors.whiteAlpha10}`,
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '20px 16px',
              }}
            >
              <Icon size={22} color={comp.color} style={{ marginBottom: '10px' }} />
              <span
                style={{
                  fontFamily: theme.fonts.display,
                  fontSize: theme.fontSizes.sm,
                  color: comp.color,
                  marginBottom: '6px',
                }}
              >
                {comp.label}
              </span>
              <span
                style={{
                  fontFamily: theme.fonts.body,
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.whiteAlpha60,
                  lineHeight: 1.5,
                }}
              >
                {comp.desc}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
