import { SiteConfig } from '@/site.config';
import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

import './globals.css'

import SiteHeader from '../components/SiteHeader/SiteHeader';
import SiteFooter from '../components/SiteFooter/SiteFooter';

export const metadata: Metadata = {
  title: {
    default: SiteConfig.siteMeta.title,
    template: "%s | " + SiteConfig.siteMeta.title,
  },
  description: SiteConfig.siteMeta.description,
};

export const viewport: Viewport = {
  width: "device-width",
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />

        {children}

        <SiteFooter />

        <GoogleAnalytics gaId="G-GK03ZK4487" />
      </body>
    </html>
  );
}
