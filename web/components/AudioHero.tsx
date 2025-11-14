"use client";

import ParticlesCanvas from '@/components/ParticlesCanvas';
import { useMemo } from 'react';

function FlacIcon({ className = '', style = {} as React.CSSProperties }) {
  return (
    <div
      className={`select-none will-change-transform rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-soft ${className}`}
      style={style}
    >
      <div className="relative h-full w-full p-3">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-glow-amber/10 via-glow-violet/10 to-glow-teal/10" />
        <div className="relative z-10 flex h-full w-full items-center justify-center gap-1">
          <span className="text-[10px] font-semibold tracking-widest text-white/90">FLAC</span>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M1 6c2.5-4 5.5 4 8 0s5.5 4 8 0" stroke="url(#g)" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="18" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFB36B"/>
                <stop offset="0.5" stopColor="#FF4D83"/>
                <stop offset="1" stopColor="#7C67FF"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeadphonesSilhouette() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] drop-shadow-2xl"
      aria-hidden
    >
      <defs>
        <radialGradient id="skin" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f3f4f6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#d1d5db" stopOpacity="0.75" />
        </radialGradient>
        <linearGradient id="phones" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C67FF" />
          <stop offset="100%" stopColor="#FF4D83" />
        </linearGradient>
        <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient glow */}
      <circle cx="200" cy="210" r="150" fill="url(#phones)" opacity="0.18" filter="url(#softBlur)" />

      {/* Shoulders */}
      <path d="M80 320c30-40 80-60 120-60s90 20 120 60v40H80v-40z" fill="url(#skin)" opacity="0.9" />

      {/* Head */}
      <circle cx="200" cy="170" r="78" fill="url(#skin)" />

      {/* Headband */}
      <path d="M104 168c0-53 43-96 96-96s96 43 96 96" fill="none" stroke="url(#phones)" strokeWidth="22" strokeLinecap="round" filter="url(#glow)" />

      {/* Ear cups */}
      <rect x="92" y="140" width="36" height="80" rx="16" fill="url(#phones)" />
      <rect x="272" y="140" width="36" height="80" rx="16" fill="url(#phones)" />
    </svg>
  );
}

function SoundWaves() {
  // Precompute rings with varying radii and delays
  const rings = useMemo(() => Array.from({ length: 5 }, (_, i) => ({
    r: 190 + i * 26,
    delay: i * 0.6,
    opacity: 0.45 - i * 0.06
  })), []);

  return (
    <svg className="absolute inset-0 -z-10" aria-hidden>
      <defs>
        <radialGradient id="ringGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB36B" />
          <stop offset="60%" stopColor="#FF4D83" />
          <stop offset="100%" stopColor="#7C67FF" />
        </radialGradient>
        <filter id="ringBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      <g className="origin-center" style={{ transformBox: 'fill-box' }}>
        {rings.map((ring, idx) => (
          <circle
            key={idx}
            cx="50%"
            cy="44%"
            r={ring.r}
            fill="none"
            stroke="url(#ringGrad)"
            strokeOpacity={ring.opacity}
            strokeWidth="3"
            filter="url(#ringBlur)"
            className="animate-[pulse_6s_ease-in-out_infinite]"
            style={{ animationDelay: `${ring.delay}s` }}
          />
        ))}
      </g>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.03); opacity: 1; }
        }
      `}</style>
    </svg>
  );
}

export default function AudioHero() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <ParticlesCanvas />

      {/* Light blooms */}
      <div className="pointer-events-none absolute -inset-24 -z-10 animate-pulseGlow bg-warm-gradient blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-white/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-glow-teal shadow-[0_0_18px_6px_rgba(0,245,212,0.35)]" />
            Pure Audio Clarity
          </div>

          <h1 className="text-balance bg-gradient-to-br from-white via-white/95 to-white/80 bg-clip-text text-5xl font-semibold leading-[1.05] text-transparent md:text-6xl">
            Sink into sound with <span className="text-gradient">studio-grade</span> detail
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-white/70 md:text-lg">
            Warm cinematic lighting, soft depth-of-field blur, and immersive particles wrapping around a serene listener.
          </p>

          <div className="relative mt-12">
            <SoundWaves />
            <div className="relative">
              <div className="absolute -inset-14 -z-10 rounded-full bg-gradient-to-br from-glow-amber/20 via-glow-violet/15 to-glow-teal/20 blur-2xl" />
              <HeadphonesSilhouette />
            </div>

            {/* Floating FLAC icons */}
            <FlacIcon className="dof-far absolute -left-20 top-10 h-12 w-16 rotate-[-8deg] animate-float" style={{ transform: 'translateZ(-40px)' }} />
            <FlacIcon className="dof-mid absolute -right-24 top-4 h-14 w-20 rotate-[10deg] animate-floatSlow" style={{ transform: 'translateZ(-10px)' }} />
            <FlacIcon className="dof-near absolute -left-10 -bottom-2 h-16 w-24 rotate-[6deg] animate-float" style={{ transform: 'translateZ(40px)' }} />
            <FlacIcon className="dof-mid absolute -right-10 -bottom-6 h-12 w-16 -rotate-[12deg] animate-floatSlow" style={{ transform: 'translateZ(10px)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
