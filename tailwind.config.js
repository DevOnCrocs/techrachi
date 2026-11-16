/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#D8D8D8',
        stone: {
          light: '#D8D8D8',
          dark: '#A3A9A4',
          surface: '#EAEBEA',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F3F4F3',
          border: 'rgba(0, 0, 0, 0.08)',
          'border-highlight': 'rgba(0, 0, 0, 0.15)',
        },
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-primary': '0 0 30px -5px rgba(99, 102, 241, 0.25)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.25)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.25)',
        'glass': '0 8px 30px 0 rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'grid-pattern': 'radial-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
