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
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "keep0ntabs | Commission Gallery",
  description:
    "Hand-inked commissions with joy — OCs, fanarts, character designs & more. Currently open for commissions!",
  metadataBase: new URL("https://edelwinslow.github.io/KeepOnTabs"),
  openGraph: {
    title: "keep0ntabs | Commission Gallery",
    description:
      "Hand-inked commissions with joy — OCs, fanarts, character designs & more. Currently open for commissions!",
    url: "https://edelwinslow.github.io/KeepOnTabs",
    siteName: "keep0ntabs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "keep0ntabs | Commission Gallery",
    description:
      "Hand-inked commissions with joy — OCs, fanarts, character designs & more.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
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
