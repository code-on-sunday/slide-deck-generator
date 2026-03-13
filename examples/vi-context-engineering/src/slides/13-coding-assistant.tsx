import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { slideUp, popIn } from '../lib/animations';
import { Terminal, FileCode, GitBranch, MessageSquare, FolderTree } from 'lucide-react';

const contextItems = [
  { icon: FolderTree, label: 'Cấu trúc dự án', desc: 'File tree, dependencies, architecture' },
  { icon: FileCode, label: 'Code hiện tại', desc: 'File đang chỉnh sửa + các file liên quan' },
  { icon: GitBranch, label: 'Git history', desc: 'Recent commits, branch context' },
  { icon: Terminal, label: 'Error logs', desc: 'Terminal output, stack traces' },
  { icon: MessageSquare, label: 'Coding conventions', desc: 'Style guide, naming rules, patterns' },
];

export default function Slide13() {
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
      <motion.div
        variants={popIn}
        initial="hidden"
        animate="visible"
        style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}
      >
        <Terminal size={24} color={theme.colors.primary} />
        <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.primary, textTransform: 'uppercase', letterSpacing: '3px' }}>
          Ứng dụng thực tế
        </span>
      </motion.div>

      <motion.h2
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={0}
        style={{
          fontFamily: theme.fonts.display,
          fontSize: theme.fontSizes['2xl'],
          color: theme.colors.white,
          lineHeight: 1.2,
          marginBottom: '12px',
        }}
      >
        Xây dựng AI Coding Assistant
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
          marginBottom: '32px',
        }}
      >
        Context nào quan trọng nhất cho một coding assistant hiệu quả?
      </motion.p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {contextItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              variants={slideUp}
              initial="hidden"
              animate="visible"
              custom={i + 1}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                border: `1px solid ${theme.colors.whiteAlpha10}`,
                borderRadius: '8px',
                padding: '16px 24px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  border: `1px solid ${i % 2 === 0 ? theme.colors.primary : theme.colors.accent}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={20} color={i % 2 === 0 ? theme.colors.primary : theme.colors.accent} />
              </div>
              <div>
                <p style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, color: theme.colors.white, marginBottom: '4px' }}>
                  {item.label}
                </p>
                <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
