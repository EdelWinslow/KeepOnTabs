import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | keep0ntabs — Commission Rates & Calculator",
  description:
    "View commission pricing for sketches, clean lineart, and full renders. Use the interactive calculator to estimate your custom artwork cost.",
  openGraph: {
    title: "Pricing | keep0ntabs",
    description: "Commission pricing for sketches, lineart, and full renders.",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
