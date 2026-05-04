import type { Metadata } from "next";
import { Montserrat, Jost } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["600"],
  variable: "--font-montserrat",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NowoDent — stomatologia Kraśnik",
  description: "NowoDent — stomatologia Kraśnik. Lubelska 56A, 23-200 Kraśnik. Tel: 515-038-555. Wkrótce otwarcie.",
  alternates: { canonical: "https://nowodent.pl" },
  openGraph: {
    title: "NowoDent — stomatologia Kraśnik",
    description: "NowoDent — stomatologia Kraśnik. Lubelska 56A, 23-200 Kraśnik. Tel: 515-038-555.",
    url: "https://nowodent.pl",
    siteName: "NowoDent",
    locale: "pl_PL",
    type: "website",
    images: [{ url: "https://nowodent.pl/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NowoDent — stomatologia Kraśnik",
    description: "NowoDent — stomatologia Kraśnik. Lubelska 56A, 23-200 Kraśnik. Tel: 515-038-555.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl-PL" className={`${montserrat.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
