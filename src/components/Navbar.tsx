"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePopSounds } from "@/hooks/usePopSounds";
import SoundToggle from "@/components/SoundToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/tos", label: "TOS" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { playRandomPop } = usePopSounds();

  return (
    <header className="w-full border-b-4 border-zinc-800 sticky top-0 z-50 bg-white shadow-[4px_4px_0px_0px_rgba(43,47,52,1)]">
      <div className="relative flex justify-between items-center h-20 px-8 w-full max-w-full mx-auto">
        {/* Left: Logo + Open badge */}
        <div className="flex items-center gap-3 z-20 relative">
          <Link
            href="/"
            className="text-2xl font-black text-zinc-800 italic font-headline-xl"
          >
            keep0ntabs
          </Link>
          <div className="hidden sm:flex items-center gap-1.5 bg-green-200 border-[2px] border-zinc-800 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-label-bold uppercase text-zinc-800">Open</span>
          </div>
        </div>

        {/* Center: Desktop nav links (absolutely centered) */}
        <nav className="hidden md:flex items-center gap-8 font-headline-md font-bold uppercase tracking-tight absolute left-1/2 -translate-x-1/2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={playRandomPop}
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

        {/* Right: Mobile buttons / Desktop SoundToggle + Hire Me */}
        <div className="flex items-center gap-2 z-20 relative">
          <div className="md:hidden">
            <SoundToggle />
          </div>
          <button 
            className="md:hidden flex items-center justify-center p-2 border-[3px] border-zinc-800 rounded-md bg-white hard-shadow-sm active-press z-20 relative cursor-pointer"
            onClick={() => {
              playRandomPop();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined font-bold text-zinc-800">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
          <div className="hidden md:flex items-center gap-3">
            <SoundToggle />
            <Link href="/contact" onClick={playRandomPop}>
              <button 
                className="bg-primary-container text-zinc-900 px-6 py-2 border-4 border-zinc-800 hard-shadow-md font-bold uppercase tracking-tighter active-press transition-all cursor-pointer"
              >
                Hire Me
              </button>
            </Link>
          </div>
        </div>
      </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[76px] left-0 w-full bg-white border-b-4 border-zinc-800 flex flex-col p-8 gap-6 z-10 shadow-[4px_4px_0px_0px_rgba(43,47,52,1)]">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    playRandomPop();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`font-headline-md font-bold text-2xl uppercase tracking-tight border-b-2 border-zinc-100 pb-2 ${
                    isActive ? "text-primary" : "text-zinc-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" onClick={() => {
              playRandomPop();
              setIsMobileMenuOpen(false);
            }}>
              <button className="w-full bg-primary-container text-zinc-900 px-6 py-4 border-[3px] border-zinc-800 hard-shadow font-bold text-xl uppercase tracking-tighter active-press transition-all cursor-pointer mt-4">
                Hire Me
              </button>
            </Link>
          </div>
        )}
    </header>
  );
}
