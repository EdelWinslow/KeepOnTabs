import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-container-max mx-auto px-8 py-16 w-full grow flex items-center justify-center">
      <FadeIn>
        <div className="text-center space-y-8">
          <div className="inline-block bg-error-container border-[4px] border-zinc-800 px-8 py-4 shadow-[8px_8px_0px_0px_rgba(43,47,52,1)] -rotate-3">
            <span className="font-headline-xl text-zinc-800 text-6xl md:text-8xl font-black">
              404
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-headline-xl text-headline-xl text-zinc-800">
              Oops! Page Not Found
            </h1>
            <p className="font-body-lg text-zinc-600 max-w-md mx-auto">
              Looks like this page wandered off to get some coffee.
              Let&apos;s get you back on track!
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link href="/">
              <button className="bg-primary-container text-zinc-800 border-[3px] border-zinc-800 px-8 py-4 font-headline-md rounded-xl shadow-[6px_6px_0px_0px_rgba(43,47,52,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer">
                Go Home
              </button>
            </Link>
            <Link href="/gallery">
              <button className="bg-white text-zinc-800 border-[3px] border-zinc-800 px-8 py-4 font-headline-md rounded-xl shadow-[6px_6px_0px_0px_rgba(43,47,52,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer">
                View Gallery
              </button>
            </Link>
          </div>

          <div className="pt-8">
            <span className="material-symbols-outlined text-zinc-300 text-[120px]" style={{ fontVariationSettings: '"FILL" 1' }}>
              sentiment_dissatisfied
            </span>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
