"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/gallery", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/tos", label: "TOS" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b-4 border-zinc-800 sticky top-0 z-50 bg-white shadow-[4px_4px_0px_0px_rgba(43,47,52,1)]">
      <div className="flex justify-between items-center h-20 px-8 w-full max-w-full mx-auto">
        <Link
          href="/"
          className="text-2xl font-black text-zinc-800 italic font-headline-xl"
        >
          ArtStationary
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-headline-md font-bold uppercase tracking-tight relative">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-colors hover:translate-x-[2px] hover:translate-y-[2px] ${
                  isActive
                    ? "text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <Link href="/contact">
          <button className="bg-primary-container text-zinc-900 px-6 py-2 border-4 border-zinc-800 hard-shadow-md font-bold uppercase tracking-tighter active-press transition-all cursor-pointer">
            Hire Me
          </button>
        </Link>
      </div>
    </header>
  );
}
