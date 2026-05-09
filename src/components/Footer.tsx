"use client";

import Link from "next/link";
import { usePopSounds } from "@/hooks/usePopSounds";

export default function Footer() {
  const { playRandomPop } = usePopSounds();
  return (
    <footer className="w-full border-t-4 border-zinc-800 mt-12 bg-zinc-100">
      <div className="flex flex-col md:flex-row justify-between items-center py-10 px-8 gap-6 w-full max-w-container-max mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-bold text-zinc-800 font-headline-md text-headline-md">
            keep0ntabs
          </span>
          <span className="font-headline-md font-medium text-sm text-zinc-600">
            © {new Date().getFullYear()} keep0ntabs. Created with joy and caffeine.
          </span>
        </div>
        <div className="flex gap-8">
          <a
            className="text-zinc-600 font-headline-md font-medium text-sm hover:text-blue-400 transition-colors"
            href="https://discord.gg/BsP7Buc3"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playRandomPop}
          >
            Discord
          </a>
          <a
            className="text-zinc-600 font-headline-md font-medium text-sm hover:text-blue-400 transition-colors"
            href="https://www.instagram.com/keep0ntabs?igsh=dGxubWFxMWZjYnN6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playRandomPop}
          >
            Instagram
          </a>
          <a
            className="text-zinc-600 font-headline-md font-medium text-sm hover:text-blue-400 transition-colors"
            href="https://www.tiktok.com/@keep0ntabs?_r=1&_t=ZS-95yPiJkVOi4"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playRandomPop}
          >
            TikTok
          </a>
          <a
            className="text-blue-500 font-bold font-headline-md text-sm hover:text-blue-400 transition-colors"
            href="#"
            onClick={playRandomPop}
          >
            PayPal
          </a>
        </div>
      </div>
    </footer>
  );
}
