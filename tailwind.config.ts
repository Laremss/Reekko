import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-grid':
          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '50px 50px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': 'rgb(161 161 170)',
            '--tw-prose-headings': 'rgb(250 250 250)',
            '--tw-prose-lead': 'rgb(161 161 170)',
            '--tw-prose-links': 'rgb(129 140 248)',
            '--tw-prose-bold': 'rgb(250 250 250)',
            '--tw-prose-counters': 'rgb(113 113 122)',
            '--tw-prose-bullets': 'rgb(63 63 70)',
            '--tw-prose-hr': 'rgb(39 39 42)',
            '--tw-prose-quotes': 'rgb(250 250 250)',
            '--tw-prose-quote-borders': 'rgb(99 102 241)',
            '--tw-prose-captions': 'rgb(113 113 122)',
            '--tw-prose-code': 'rgb(250 250 250)',
            '--tw-prose-pre-code': 'rgb(212 212 216)',
            '--tw-prose-pre-bg': 'rgb(24 24 27)',
            '--tw-prose-th-borders': 'rgb(39 39 42)',
            '--tw-prose-td-borders': 'rgb(39 39 42)',
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
