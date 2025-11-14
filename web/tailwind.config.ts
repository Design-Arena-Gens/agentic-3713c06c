import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        glow: {
          amber: '#FFB36B',
          magenta: '#FF4D83',
          violet: '#7C67FF',
          teal: '#00F5D4'
        }
      },
      backgroundImage: {
        'warm-gradient': 'radial-gradient(1200px 800px at 70% -10%, rgba(255, 179, 107, 0.35), transparent 60%), radial-gradient(900px 700px at 20% 20%, rgba(124, 103, 255, 0.35), transparent 60%), radial-gradient(1000px 800px at 50% 120%, rgba(255, 77, 131, 0.25), transparent 60%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'blur(12px)' },
          '50%': { opacity: '1', filter: 'blur(18px)' }
        },
        swirl: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '100%': { transform: 'rotate(360deg) scale(1.02)' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        floatSlow: 'float 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',
        swirlSlow: 'swirl 60s linear infinite'
      },
      boxShadow: {
        soft: '0 10px 40px rgba(0,0,0,0.35)',
        glowAmber: '0 0 80px rgba(255, 179, 107, 0.35)',
        glowViolet: '0 0 90px rgba(124, 103, 255, 0.35)'
      }
    }
  },
  plugins: [],
}

export default config
