import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | keep0ntabs — Commission Rules",
  description:
    "Read the terms of service for commissioning keep0ntabs. Learn about payment terms, refund policy, usage rights, and commission rules.",
  openGraph: {
    title: "Terms of Service | keep0ntabs",
    description: "Commission rules, payment terms, and usage rights.",
  },
};

export default function TOSLayout({ children }: { children: React.ReactNode }) {
  return children;
}
