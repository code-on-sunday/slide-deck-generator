import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { slideUp, popIn } from '../lib/animations';
import { BookOpen, ArrowRight, ExternalLink } from 'lucide-react';

const resources = [
  { title: 'Anthropic Prompt Engineering Guide', url: 'docs.anthropic.com' },
  { title: 'OpenAI Best Practices', url: 'platform.openai.com' },
  { title: 'LangChain Documentation', url: 'langchain.com/docs' },
  { title: 'Context Window Research Papers', url: 'arxiv.org' },
];

const nextSteps = [
  'Thực hành xây dựng system prompt cho dự án thực tế',
  'Thử nghiệm few-shot examples với các task khác nhau',
  'Xây dựng RAG pipeline đơn giản với dữ liệu của bạn',
  'Đo lường và so sánh chất lượng output với context khác nhau',
];

export default function Slide15() {
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
        style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}
      >
        <BookOpen size={24} color={theme.colors.accent} />
        <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.accent, textTransform: 'uppercase', letterSpacing: '3px' }}>
          Tài liệu & bước tiếp theo
        </span>
      </motion.div>

      <div style={{ display: 'flex', gap: '40px', flex: 1 }}>
        {/* Resources */}
        <div style={{ flex: 1 }}>
          <motion.h3
            variants={slideUp}
            initial="hidden"
            animate="visible"
            custom={0}
            style={{
              fontFamily: theme.fonts.display,
              fontSize: theme.fontSizes.lg,
              color: theme.colors.primary,
              marginBottom: '20px',
            }}
          >
            Tài liệu tham khảo
          </motion.h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {resources.map((res, i) => (
              <motion.div
                key={res.title}
                variants={slideUp}
                initial="hidden"
                animate="visible"
                custom={i + 1}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: `1px solid ${theme.colors.whiteAlpha10}`,
                  borderRadius: '8px',
                  padding: '14px 18px',
                }}
              >
                <ExternalLink size={16} color={theme.colors.primary} style={{ flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white, marginBottom: '2px' }}>
                    {res.title}
                  </p>
                  <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60 }}>
                    {res.url}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next steps */}
        <div style={{ flex: 1 }}>
          <motion.h3
            variants={slideUp}
            initial="hidden"
            animate="visible"
            custom={0}
            style={{
              fontFamily: theme.fonts.display,
              fontSize: theme.fontSizes.lg,
              color: theme.colors.accent,
              marginBottom: '20px',
            }}
          >
            Bước tiếp theo
          </motion.h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {nextSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={slideUp}
                initial="hidden"
                animate="visible"
                custom={i + 1}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '12px 0',
                  borderBottom: `1px solid ${theme.colors.whiteAlpha10}`,
                }}
              >
                <ArrowRight size={16} color={theme.colors.accent} style={{ flexShrink: 0, marginTop: '3px' }} />
                <p style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.6 }}>
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={6}
        style={{
          fontFamily: theme.fonts.display,
          fontSize: theme.fontSizes.base,
          color: theme.colors.accent,
          textAlign: 'center',
          marginTop: '20px',
        }}
      >
        Cảm ơn! Hãy bắt đầu thiết kế context ngay hôm nay.
      </motion.p>
    </div>
  );
}
