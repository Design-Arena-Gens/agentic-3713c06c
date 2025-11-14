"use client";

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  z: number; // depth 0..1 where 0 is far, 1 is near
  vx: number;
  vy: number;
  radius: number;
  hue: number;
};

export default function ParticlesCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d', { alpha: true })!;
    let animationFrame = 0;

    const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    function resize() {
      const { innerWidth, innerHeight } = window;
      canvas.width = Math.floor(innerWidth * DPR);
      canvas.height = Math.floor(innerHeight * DPR);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize);

    const MAX_PARTICLES = Math.min(220, Math.floor((window.innerWidth * window.innerHeight) / 9000));
    const particles: Particle[] = Array.from({ length: MAX_PARTICLES }, () => {
      const z = Math.random();
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z,
        vx: (Math.random() - 0.5) * (0.2 + z * 0.8),
        vy: (Math.random() - 0.5) * (0.2 + z * 0.8),
        radius: 0.8 + z * 2.2,
        hue: 20 + z * 280
      } as Particle;
    });

    function step() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // wrap around
        if (p.x < -10) p.x = window.innerWidth + 10;
        if (p.x > window.innerWidth + 10) p.x = -10;
        if (p.y < -10) p.y = window.innerHeight + 10;
        if (p.y > window.innerHeight + 10) p.y = -10;

        const alpha = 0.08 + p.z * 0.35;
        const r = p.radius * (1 + Math.sin((p.x + p.y) * 0.002) * 0.15);

        // soft glow dot
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 8);
        gradient.addColorStop(0, `hsla(${p.hue}, 90%, ${70 + p.z * 20}%, ${alpha})`);
        gradient.addColorStop(1, 'hsla(0,0%,0%,0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 8, 0, Math.PI * 2);
        ctx.fill();

        // bright core
        ctx.fillStyle = `hsla(${p.hue}, 95%, 85%, ${Math.min(1, alpha + 0.15)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(step);
    }

    step();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 -z-10 pointer-events-none [mask-image:radial-gradient(70%_60%_at_50%_45%,black,transparent)]"
    />
  );
}
