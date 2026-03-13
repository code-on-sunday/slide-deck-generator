import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts'
import SlideLayout from '../components/SlideLayout'
import { theme } from '../lib/theme'
import { fadeIn } from '../lib/animations'

const data = [
  { name: '1B', capability: 20 },
  { name: '7B', capability: 35 },
  { name: '13B', capability: 48 },
  { name: '70B', capability: 68 },
  { name: '175B', capability: 82 },
  { name: '540B+', capability: 95 },
]

export default function Slide09() {
  return (
    <SlideLayout>
      <div style={{ display: 'flex', height: '100%', padding: '60px 100px 60px 120px', gap: 60 }}>
        <motion.div initial="hidden" animate="visible" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.h2
            variants={fadeIn}
            custom={0}
            style={{
              fontFamily: theme.fonts.display,
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              lineHeight: 1.15,
              marginBottom: 12,
            }}
          >
            Scale Matters
          </motion.h2>
          <motion.hr variants={fadeIn} custom={1} className="accent" style={{ width: 60 }} />
          <motion.p
            variants={fadeIn}
            custom={2}
            style={{
              fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
              lineHeight: 1.7,
              marginTop: 8,
              maxWidth: 400,
            }}
          >
            Larger models don't just get slightly better — they unlock entirely new abilities.
            Tasks like chain-of-thought reasoning, translation, and code generation
            <em> emerge</em> at certain scales without being explicitly trained for.
          </motion.p>
          <motion.p
            variants={fadeIn}
            custom={3}
            style={{
              fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
              color: theme.colors.muted,
              marginTop: 16,
              fontStyle: 'italic',
            }}
          >
            These are called "emergent abilities."
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          custom={2}
          initial="hidden"
          animate="visible"
          style={{ flex: 1, display: 'flex', alignItems: 'center' }}
        >
          <ResponsiveContainer width="100%" height={360}>
            <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme.colors.lightGray} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: theme.colors.muted }}
                axisLine={{ stroke: theme.colors.lightGray }}
                tickLine={false}
                label={{ value: 'Parameters', position: 'insideBottom', offset: -2, fontSize: 11, fill: theme.colors.muted }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: theme.colors.muted }}
                axisLine={{ stroke: theme.colors.lightGray }}
                tickLine={false}
                label={{ value: 'Capability', angle: -90, position: 'insideLeft', fontSize: 11, fill: theme.colors.muted }}
              />
              <Bar dataKey="capability" radius={[2, 2, 0, 0]}>
                {data.map((_, i) => (
                  <Cell key={i} fill={i >= 4 ? theme.colors.accent : `rgba(196, 30, 58, ${0.15 + i * 0.1})`} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
