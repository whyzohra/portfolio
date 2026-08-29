import './globals.css';
import type { Metadata } from 'next';
import { AppShell } from '@/components/AppShell';
import { SITE_CONFIG } from '@/data/portfolioData';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  alternates: { canonical: '/' },
  openGraph: { title: SITE_CONFIG.title, description: SITE_CONFIG.description, type: 'website', url: '/' },
  twitter: { card: 'summary', title: SITE_CONFIG.title, description: SITE_CONFIG.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="engineer" suppressHydrationWarning>
      <head />
      <body>
        <AppShell>{children}</AppShell>
        <Analytics />
      </body>
    </html>
  );
}
