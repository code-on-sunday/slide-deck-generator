export const theme = {
  colors: {
    cream: '#f5f3ee',
    charcoal: '#1a1a1a',
    warm: '#e8d4c0',
    orange: '#c4713b',
  },
  fonts: {
    display: "'Fraunces', serif",
    body: "'Work Sans', sans-serif",
  },
  slide: {
    width: 1280,
    height: 720,
  },
} as const

export const gradients = {
  subtle: 'radial-gradient(ellipse at 30% 20%, rgba(232,212,192,0.25) 0%, transparent 60%)',
  warm: 'radial-gradient(ellipse at 70% 80%, rgba(232,212,192,0.3) 0%, transparent 50%)',
  center: 'radial-gradient(ellipse at 50% 50%, rgba(232,212,192,0.2) 0%, transparent 70%)',
  topRight: 'radial-gradient(ellipse at 85% 15%, rgba(196,113,59,0.1) 0%, transparent 50%)',
} as const
