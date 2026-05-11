import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | keep0ntabs — Frequently Asked Questions",
  description:
    "Got questions about commissioning keep0ntabs? Find answers about turnaround times, payment, revisions, refunds, and what I can draw.",
  openGraph: {
    title: "FAQ | keep0ntabs",
    description: "Answers about commissions, payment, turnaround, and more.",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
