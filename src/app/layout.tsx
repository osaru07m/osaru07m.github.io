import type { Metadata, Viewport } from "next";
import "@/app/globals.scss";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Config } from "@/config";
import SiteHeader from "@/components/layouts/SiteHeader";
import SiteFooter from "@/components/layouts/SiteFooter";
import Navigation from "@/components/layouts/Navigation/Navigation";
import { spaceMono } from "@/fonts";

export const metadata: Metadata = {
  title: {
    default: Config.siteMeta.title,
    template: "%s | " + Config.siteMeta.title,
  },
  description: Config.siteMeta.description,
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: {
      default: "Top",
      template: "%s"
    },
    description: Config.siteMeta.description,
    url: 'https://osaru07m.github.io/',
    siteName: Config.siteMeta.title,
    images: [
      {
        url: 'https://osaru07m.github.io/ogp.png',
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: Config.siteMeta.title,
    description: Config.siteMeta.description,
    creator: `@${Config.profiles.x_twitter.username}`,
    images: ['https://osaru07m.github.io/icon.png'],
  },
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
      <body className={spaceMono.className}>
        <SiteHeader />

        {children}

        <Navigation />

        <SiteFooter />

        <GoogleAnalytics gaId="G-GK03ZK4487" />
      </body>
    </html>
  );
}
