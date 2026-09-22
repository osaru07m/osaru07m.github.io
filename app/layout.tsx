import type { Metadata } from "next";
import Config from "@/config";
import { LINE_Seed_JP } from "next/font/google";
import "./styles/globals.scss";
import HeaderComponent from "@/app/components/Header/Header";

const lineSeedJp = LINE_Seed_JP({
  variable: "--font-line-seed-jp",
  weight: ["100", "400", "700", "800"]
});

export const metadata: Metadata = {
  title: {
    default: Config.site.title,
    template: `%s | ${Config.site.title}`
  },
  description: Config.site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={lineSeedJp.variable}>
      <body>
        <h1 className="visually-hidden">{Config.site.title}</h1>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
