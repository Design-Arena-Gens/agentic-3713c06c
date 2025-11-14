import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pure Audio Clarity ? High-Quality Listening Experience',
  description:
    'A warm, cinematic hero showcasing pure audio clarity with immersive particles, glowing soundwaves, and floating FLAC icons.',
  openGraph: {
    title: 'Pure Audio Clarity ? High-Quality Listening Experience',
    description:
      'Experience warm cinematic lighting, depth-of-field, and immersive particle effects around a serene listener with studio headphones.',
    type: 'website'
  },
  icons: {
    icon: '/icon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased selection:bg-glow-violet/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
