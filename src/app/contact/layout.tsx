import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | keep0ntabs — Start a Commission",
  description:
    "Ready to commission keep0ntabs? Send an inquiry, find social links, and get payment details. Currently accepting new commissions!",
  openGraph: {
    title: "Contact | keep0ntabs",
    description: "Send an inquiry and start your commission today!",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
