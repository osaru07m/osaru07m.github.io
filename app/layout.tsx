import type { Metadata } from "next";
import Config from "@/config";
import { LINE_Seed_JP } from "next/font/google";
import "./styles/globals.scss";
import HeaderComponent from "@/app/components/Header/Header";
import { GoogleAnalytics } from "@next/third-parties/google";
import FooterComponent from "./components/Footer/Footer";

const lineSeedJp = LINE_Seed_JP({
  variable: "--font-line-seed-jp",
  weight: ["100", "400", "700", "800"]
});

export const metadata: Metadata = {
  // 相対パスで指定したOGP画像などのURLを、このURLを基準に絶対URLへ解決する
  metadataBase: new URL(Config.site.url),
  title: {
    default: Config.site.title,
    template: `%s | ${Config.site.title}`
  },
  description: Config.site.description,
  openGraph: {
    type: "article",
    siteName: Config.site.title,
    images: ["/ogp.png"]
  },
  verification: {
    google: "D4HQPTE17WYelaOFG75TRGqlxTKvTMlMqT3_tRR2cYs"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={lineSeedJp.variable}>
      <body>
        <h1 className="visually-hidden">{Config.site.title}</h1>
        <HeaderComponent />
        {children}
        <GoogleAnalytics gaId="G-TPV9H42CE2" />
        <FooterComponent />
      </body>
    </html>
  );
}
