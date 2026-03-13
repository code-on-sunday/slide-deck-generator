import { motion } from 'framer-motion';
import { fadeUp, scaleIn } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Weak Model\nGreat Context', value: 75 },
  { name: 'Strong Model\nNo Context', value: 40 },
  { name: 'Strong Model\nGreat Context', value: 95 },
];

export default function Slide11() {
  return (
    <SlideLayout background="linear-gradient(160deg, #1a1a1a 0%, #1d1d22 50%, #1a1a1a 100%)">
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 80px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(70px, 9vw, 100px)', color: 'rgba(255,87,34,0.12)', lineHeight: 1, marginBottom: -8 }}
        >
          11
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(24px, 2.8vw, 36px)', color: '#fff', lineHeight: 1.2, marginBottom: 12 }}
        >
          The Quality Equation
        </motion.h2>

        <motion.div
          variants={scaleIn} initial="hidden" animate="visible" custom={1}
          style={{
            background: 'linear-gradient(135deg, #FF5722 0%, #E64A19 100%)',
            borderRadius: 12,
            maxWidth: 650,
            marginBottom: 32,
            textAlign: 'center',
          }}
        >
          <div style={{ padding: '20px 28px' }}>
            <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(18px, 2vw, 26px)', color: '#fff' }}>
              Output Quality = f(Model Capability × Context Quality)
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={1.5}
          style={{ width: '100%', maxWidth: 700, height: 240 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap="25%">
              <XAxis
                dataKey="name"
                tick={{ fill: '#a0a0a0', fontSize: 12, fontFamily: "'Space Grotesk', sans-serif" }}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: '#666', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
              />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                <Cell fill="#FF8A65" />
                <Cell fill="#666" />
                <Cell fill="#FF5722" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2.5}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(13px, 1.3vw, 16px)', color: '#a0a0a0', marginTop: 12, textAlign: 'center' }}
        >
          Context quality often matters <strong style={{ color: '#fff' }}>more</strong> than model choice.
        </motion.p>
      </div>
    </SlideLayout>
  );
}
