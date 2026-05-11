import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | keep0ntabs — Art Portfolio & Commissions",
  description:
    "Browse the keep0ntabs art gallery — character designs, illustrations, sketches, and more. See examples of commission work and styles available.",
  openGraph: {
    title: "Gallery | keep0ntabs",
    description: "Browse character designs, illustrations, sketches, and more.",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
