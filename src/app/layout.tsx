import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const montserrat = localFont({
  src: [
    { path: "./fonts/montserrat-v31-latin_latin-ext-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

const jost = localFont({
  src: [
    { path: "./fonts/jost-v20-latin_latin-ext-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/jost-v20-latin_latin-ext-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NowoDent — stomatologia Kraśnik",
  description: "NowoDent — nowoczesna stomatologia w Kraśniku. Stomatologia dziecięca i zachowawcza, endodoncja, medycyna estetyczna. ul. Lubelska 56A, tel. 515 038 555.",
  alternates: { canonical: "https://nowodent.pl" },
  openGraph: {
    title: "NowoDent — stomatologia Kraśnik",
    description: "NowoDent — nowoczesna stomatologia w Kraśniku. Stomatologia dziecięca i zachowawcza, endodoncja, medycyna estetyczna. ul. Lubelska 56A, tel. 515 038 555.",
    url: "https://nowodent.pl",
    siteName: "NowoDent",
    locale: "pl_PL",
    type: "website",
    images: [{ url: "https://nowodent.pl/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NowoDent — stomatologia Kraśnik",
    description: "NowoDent — nowoczesna stomatologia w Kraśniku. Stomatologia dziecięca i zachowawcza, endodoncja, medycyna estetyczna. ul. Lubelska 56A, tel. 515 038 555.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl-PL" className={`${montserrat.variable} ${jost.variable}`}>
      <body>
        <span id="top" />
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
