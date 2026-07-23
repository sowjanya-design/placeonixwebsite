import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.placeonix.com'),
  title: {
    default: 'Placeonix — SAP & IT Training and Placement Institute in Hyderabad',
    template: '%s',
  },
  description: 'SAP & IT training and placement institute in Hyderabad. Training · Placement · Future.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#4f46e5',
};

import RevealObserver from '@/components/layout/RevealObserver';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
