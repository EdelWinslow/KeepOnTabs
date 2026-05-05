import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-4 border-zinc-800 mt-12 bg-zinc-100">
      <div className="flex flex-col md:flex-row justify-between items-center py-10 px-8 gap-6 w-full max-w-container-max mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-bold text-zinc-800 font-headline-md text-headline-md">
            ArtStationary
          </span>
          <span className="font-headline-md font-medium text-sm text-zinc-600">
            © {new Date().getFullYear()} ArtStationary. Created with joy and caffeine.
          </span>
        </div>
        <div className="flex gap-8">
          <a
            className="text-zinc-600 font-headline-md font-medium text-sm hover:text-blue-400 transition-colors"
            href="#"
          >
            Twitter
          </a>
          <a
            className="text-zinc-600 font-headline-md font-medium text-sm hover:text-blue-400 transition-colors"
            href="#"
          >
            Instagram
          </a>
          <a
            className="text-zinc-600 font-headline-md font-medium text-sm hover:text-blue-400 transition-colors"
            href="#"
          >
            Bluesky
          </a>
          <a
            className="text-blue-500 font-bold font-headline-md text-sm hover:text-blue-400 transition-colors"
            href="#"
          >
            PayPal
          </a>
        </div>
      </div>
    </footer>
  );
}
