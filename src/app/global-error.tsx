"use client";

import { Fredoka, Be_Vietnam_Pro, Lexend } from "next/font/google";
import "@/app/globals.css";

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

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={`${fredoka.variable} ${beVietnamPro.variable} ${lexend.variable} antialiased bg-[#D7ECFF] text-on-background font-body-md min-h-screen flex flex-col items-center justify-center p-8 text-center`}
      >
        <div className="max-w-2xl bg-white border-[4px] border-zinc-800 p-12 rounded-3xl shadow-[12px_12px_0px_0px_rgba(43,47,52,1)] space-y-8">
          <div className="inline-block bg-error-container border-[4px] border-zinc-800 px-6 py-2 -rotate-3 shadow-[4px_4px_0px_0px_rgba(43,47,52,1)] font-black text-3xl uppercase">
            Critical Error
          </div>
          
          <div className="space-y-4">
            <h1 className="font-headline-xl text-4xl text-zinc-800">Everything went blank!</h1>
            <p className="text-zinc-600 font-medium">
              Even the foundation had a hiccup. Please try refreshing the entire app.
            </p>
          </div>

          <button
            onClick={() => reset()}
            className="bg-primary text-white border-[4px] border-zinc-800 px-10 py-5 font-headline-md text-xl rounded-2xl shadow-[8px_8px_0px_0px_rgba(43,47,52,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer"
          >
            Refresh System
          </button>

          <div className="pt-6">
            <p className="text-xs font-mono text-zinc-400 max-w-sm mx-auto opacity-50">
              Error Digest: {error.digest || "No digest available"}
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
