"use client";

import { useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="max-w-container-max mx-auto px-8 py-16 w-full grow flex items-center justify-center">
      <FadeIn>
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          {/* Brutalist Error Badge */}
          <div className="inline-block bg-error-container border-[4px] border-zinc-800 px-8 py-4 shadow-[8px_8px_0px_0px_rgba(43,47,52,1)] rotate-2 mb-4">
            <span className="font-headline-xl text-zinc-800 text-5xl md:text-7xl font-black uppercase">
              Glitch!
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-headline-xl text-headline-xl text-zinc-800">
              Something went wrong
            </h1>
            <p className="font-body-lg text-zinc-600">
              My ink bottle spilled! Don&apos;t worry, I&apos;m cleaning it up. 
              Try refreshing the page or head back home.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <button
              onClick={() => reset()}
              className="bg-primary-container text-zinc-800 border-[3px] border-zinc-800 px-8 py-4 font-headline-md rounded-xl shadow-[6px_6px_0px_0px_rgba(43,47,52,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer"
            >
              Try Again
            </button>
            <Link href="/">
              <button className="bg-white text-zinc-800 border-[3px] border-zinc-800 px-8 py-4 font-headline-md rounded-xl shadow-[6px_6px_0px_0px_rgba(43,47,52,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer">
                Go Home
              </button>
            </Link>
          </div>

          {/* Developer Section */}
          <div className="pt-12">
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="text-zinc-400 hover:text-zinc-600 text-xs font-mono underline cursor-pointer"
            >
              {showDetails ? "Hide technical details" : "Show technical details (for developers)"}
            </button>
            
            {showDetails && (
              <div className="mt-4 p-6 bg-zinc-800 text-green-400 rounded-xl border-[3px] border-zinc-900 text-left overflow-auto max-h-[300px] shadow-inner font-mono text-xs">
                <p className="mb-2 font-bold uppercase text-zinc-500">// Error Message</p>
                <p className="mb-4">{error.message || "Unknown error occurred"}</p>
                {error.digest && (
                  <>
                    <p className="mb-2 font-bold uppercase text-zinc-500">// Digest</p>
                    <p className="mb-4">{error.digest}</p>
                  </>
                )}
                <p className="mb-2 font-bold uppercase text-zinc-500">// Stack Trace (if available)</p>
                <pre className="whitespace-pre-wrap opacity-80">
                  {error.stack || "No stack trace provided by browser"}
                </pre>
              </div>
            )}
          </div>
          
          <div className="pt-4 opacity-20">
            <span className="material-symbols-outlined text-[100px]" style={{ fontVariationSettings: '"FILL" 1' }}>
              warning
            </span>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
