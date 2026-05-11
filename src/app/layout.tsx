import type { Metadata } from "next";
import { Fredoka, Be_Vietnam_Pro, Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SoundToggle from "@/components/SoundToggle";
import PageTransition from "@/components/PageTransition";
import { SoundProvider } from "@/context/SoundContext";

const fredoka = Fredoka({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "keep0ntabs | Commission Gallery — Hand-Inked Art Commissions",
    template: "%s",
  },
  description:
    "Hand-inked commissions with joy — OCs, fanarts, character designs & more. Sketches from $6, lineart from $14, full renders from $24. Currently open!",
  metadataBase: new URL("https://edelwinslow.github.io/KeepOnTabs"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "keep0ntabs | Hand-Inked Art Commissions",
    description:
      "Hand-inked commissions with joy — OCs, fanarts, character designs & more. Currently open for commissions!",
    url: "https://edelwinslow.github.io/KeepOnTabs",
    siteName: "keep0ntabs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "keep0ntabs | Hand-Inked Art Commissions",
    description:
      "Hand-inked commissions with joy — OCs, fanarts, character designs & more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "art commissions",
    "character design",
    "OC art",
    "fanart commissions",
    "digital art",
    "illustration commissions",
    "keep0ntabs",
    "commission open",
    "affordable art commissions",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "keep0ntabs",
  description:
    "Hand-inked art commissions — OCs, fanarts, character designs, illustrations, and more.",
  url: "https://edelwinslow.github.io/KeepOnTabs",
  priceRange: "$6 - $42+",
  sameAs: [
    "https://www.instagram.com/keep0ntabs",
    "https://www.tiktok.com/@keep0ntabs",
    "https://discord.gg/BsP7Buc3",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Load only the icons we actually use instead of the full icon set */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fredoka.variable} ${beVietnamPro.variable} ${lexend.variable} antialiased bg-[#D7ECFF] text-on-background font-body-md min-h-screen flex flex-col overflow-x-hidden`}
      >
        <SoundProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <BackToTop />
          <SoundToggle />
        </SoundProvider>
      </body>
    </html>
  );
}
