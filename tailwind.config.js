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
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        // Restrained shadows — surfaces separate mainly via borders + tonal contrast.
        soft: '0 1px 2px rgba(43,40,48,0.04)',
        card: '0 1px 2px rgba(43,40,48,0.04), 0 4px 12px -8px rgba(43,40,48,0.10)',
        lift: '0 6px 16px -8px rgba(43,40,48,0.16), 0 24px 48px -24px rgba(43,40,48,0.22)',
        glow: '0 2px 8px -2px rgba(122,114,196,0.35)',
        panel: '0 1px 2px rgba(43,40,48,0.04), 0 6px 18px -12px rgba(43,40,48,0.14)',
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
