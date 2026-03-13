export const theme = {
  colors: {
    primary: '#0066ff',
    darkBg: '#1a1a2e',
    accent: '#d4ff00',
    white: '#ffffff',
    whiteAlpha10: 'rgba(255, 255, 255, 0.1)',
    whiteAlpha20: 'rgba(255, 255, 255, 0.2)',
    whiteAlpha60: 'rgba(255, 255, 255, 0.6)',
    primaryAlpha20: 'rgba(0, 102, 255, 0.2)',
    accentAlpha20: 'rgba(212, 255, 0, 0.2)',
  },
  fonts: {
    display: "'Syne', sans-serif",
    body: "'Space Mono', monospace",
  },
  fontSizes: {
    xs: 'clamp(10px, 1.1vw, 14px)',
    sm: 'clamp(12px, 1.3vw, 16px)',
    base: 'clamp(14px, 1.5vw, 18px)',
    lg: 'clamp(16px, 1.8vw, 22px)',
    xl: 'clamp(20px, 2.2vw, 28px)',
    '2xl': 'clamp(24px, 2.8vw, 36px)',
    '3xl': 'clamp(30px, 3.5vw, 44px)',
    '4xl': 'clamp(36px, 4.2vw, 54px)',
    '5xl': 'clamp(42px, 5vw, 64px)',
  },
} as const;
