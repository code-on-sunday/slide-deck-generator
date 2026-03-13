import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SlideLayout from '../components/SlideLayout';
import { Wrench, Code, Globe, Calculator } from 'lucide-react';

export default function Slide10() {
  const tools = [
    { icon: Code, name: 'code_exec()', desc: 'Run code and get output' },
    { icon: Globe, name: 'web_search()', desc: 'Fetch live information' },
    { icon: Calculator, name: 'calculate()', desc: 'Precise math operations' },
  ];

  return (
    <SlideLayout background="linear-gradient(160deg, #1a1a1a 0%, #1e1a18 50%, #1a1a1a 100%)">
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 80px' }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(70px, 9vw, 100px)', color: 'rgba(255,87,34,0.12)', lineHeight: 1, marginBottom: -8 }}
        >
          10
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}
        >
          <Wrench size={20} color="#FF5722" />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 16px)', color: '#FF5722', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2 }}>
            Deep Dive
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate="visible" custom={0.6}
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(26px, 3vw, 38px)', color: '#fff', lineHeight: 1.2, marginBottom: 12 }}
        >
          Tool Use
        </motion.h2>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#a0a0a0', marginBottom: 36, maxWidth: 600 }}
        >
          Let the model call functions and feed results back into context — extending its capabilities beyond text.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {tools.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" animate="visible" custom={1.5 + i * 0.2}
                style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, background: 'rgba(255,255,255,0.03)' }}
              >
                <div style={{ padding: '28px 24px' }}>
                  <Icon size={28} color="#FF5722" strokeWidth={1.5} />
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#fff', fontWeight: 600, marginTop: 14 }}>
                    <code style={{ background: 'rgba(255,87,34,0.15)', borderRadius: 4, fontFamily: "'Space Grotesk', sans-serif" }}>
                      <span style={{ padding: '2px 8px', display: 'inline-block' }}>{t.name}</span>
                    </code>
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.2vw, 15px)', color: '#a0a0a0', marginTop: 10 }}>
                    {t.desc}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{
            marginTop: 32,
            borderLeft: '3px solid #FF5722',
          }}
        >
          <div style={{ padding: '12px 20px' }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(13px, 1.3vw, 16px)', color: '#a0a0a0' }}>
              Tool results become <strong style={{ color: '#fff' }}>new context</strong> — the model reasons over real data, not guesses.
            </span>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
