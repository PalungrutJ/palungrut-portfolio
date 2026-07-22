/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        primary: 'var(--primary)',
        'primary-strong': 'var(--primary-strong)',
        secondary: 'var(--secondary)',
        text: 'var(--text)',
        'text-soft': 'var(--text-soft)',
        muted: 'var(--muted)',
        success: 'var(--success)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
      },
      fontFamily: {
        display: [
          'Space Grotesk',
          'Inter',
          'system-ui',
          'Segoe UI',
          'sans-serif',
        ],
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        // Depth on a dark foundation: darker ambient shadow + subtle light rim on top.
        soft: '0 1px 2px rgba(0,0,0,0.3)',
        card: '0 1px 2px rgba(0,0,0,0.3), 0 8px 24px -12px rgba(0,0,0,0.5)',
        lift: '0 10px 24px -12px rgba(0,0,0,0.55), 0 28px 56px -28px rgba(0,0,0,0.65)',
        glow: '0 4px 16px -4px rgba(91,124,255,0.45)',
        panel: '0 1px 2px rgba(0,0,0,0.35), 0 10px 30px -16px rgba(0,0,0,0.55)',
      },
      borderRadius: {
        panel: '1rem',
      },
      maxWidth: {
        content: '1200px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(.22,.61,.36,1)',
      },
      keyframes: {
        'grid-fade': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
