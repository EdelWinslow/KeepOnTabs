import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function Gallery() {
  return (
    <div className="max-w-container-max mx-auto px-8 py-16 w-full flex-grow">
      <FadeIn>
        <header className="mb-16 mt-8">
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-4">
            The Gallery
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            A colorful collection of visual stories, character designs, and
            late-night sketches fueled by sheer creativity and too much coffee.
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-6 py-3 rounded-full border-2 border-zinc-800 hard-shadow active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer">
            All Works
          </button>
          <button className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-6 py-3 rounded-full border-2 border-zinc-800 hard-shadow-hover active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer">
            Characters
          </button>
          <button className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-6 py-3 rounded-full border-2 border-zinc-800 hard-shadow-hover active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer">
            Illustrations
          </button>
          <button className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-6 py-3 rounded-full border-2 border-zinc-800 hard-shadow-hover active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer">
            Sketches
          </button>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <FadeIn delay={0.2} className="md:col-span-8 bg-white border-[3px] border-zinc-800 p-4 hard-shadow group">
          <div className="overflow-hidden border-2 border-zinc-800 mb-4 h-[400px]">
            <div className="w-full h-full bg-[#E5E7EB] flex items-center justify-center text-zinc-600 font-bold uppercase tracking-widest text-center px-4 transition-transform duration-500 group-hover:scale-105">
              Neon Dreams Metropolis Illustration
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 border border-zinc-800 text-xs font-bold uppercase mb-2 inline-block">
                Illustration
              </span>
              <h3 className="font-headline-md text-headline-md">
                Neon Dreams Metropolis
              </h3>
            </div>
            <span className="material-symbols-outlined text-zinc-800 text-3xl">
              arrow_outward
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="md:col-span-4 bg-white border-[3px] border-zinc-800 p-4 hard-shadow group">
          <div className="overflow-hidden border-2 border-zinc-800 mb-4 h-[400px]">
            <div className="w-full h-full bg-[#E5E7EB] flex items-center justify-center text-zinc-600 font-bold uppercase tracking-widest text-center px-4 transition-transform duration-500 group-hover:scale-105">
              Botany Bot v2.0
            </div>
          </div>
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 border border-zinc-800 text-xs font-bold uppercase mb-2 inline-block">
            Characters
          </span>
          <h3 className="font-headline-md text-headline-md">Botany Bot v2.0</h3>
        </FadeIn>

        <FadeIn delay={0.4} className="md:col-span-4 bg-white border-[3px] border-zinc-800 p-4 hard-shadow group">
          <div className="overflow-hidden border-2 border-zinc-800 mb-4 h-[250px]">
            <div className="w-full h-full bg-[#E5E7EB] flex items-center justify-center text-zinc-600 font-bold uppercase tracking-widest text-center px-4 transition-transform duration-500 group-hover:scale-105">
              Creative Chaos
            </div>
          </div>
          <h3 className="font-headline-md text-headline-md">Creative Chaos</h3>
        </FadeIn>

        <FadeIn delay={0.5} className="md:col-span-4 bg-white border-[3px] border-zinc-800 p-4 hard-shadow group">
          <div className="overflow-hidden border-2 border-zinc-800 mb-4 h-[250px]">
            <div className="w-full h-full bg-[#E5E7EB] flex items-center justify-center text-zinc-600 font-bold uppercase tracking-widest text-center px-4 transition-transform duration-500 group-hover:scale-105">
              Character Expression Sheet
            </div>
          </div>
          <h3 className="font-headline-md text-headline-md">Expression Sheet</h3>
        </FadeIn>

        <FadeIn delay={0.6} className="md:col-span-4 bg-white border-[3px] border-zinc-800 p-4 hard-shadow group">
          <div className="overflow-hidden border-2 border-zinc-800 mb-4 h-[250px]">
            <div className="w-full h-full bg-[#E5E7EB] flex items-center justify-center text-zinc-600 font-bold uppercase tracking-widest text-center px-4 transition-transform duration-500 group-hover:scale-105">
              Azure Horizon Landscape
            </div>
          </div>
          <h3 className="font-headline-md text-headline-md">Azure Horizon</h3>
        </FadeIn>

        <FadeIn delay={0.7} className="md:col-span-12 bg-primary-container border-[4px] border-zinc-800 p-12 hard-shadow flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
          <div className="max-w-xl">
            <h2 className="font-headline-xl text-headline-xl text-on-primary-container mb-4">
              Want something custom?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container opacity-90">
              I&apos;m currently open for commissions! Whether it&apos;s a character for
              your RPG or a full-scale illustration for your brand, let&apos;s make
              something amazing together.
            </p>
          </div>
          <Link href="/contact">
            <button className="bg-white text-zinc-800 font-headline-md text-headline-md px-10 py-5 border-[3px] border-zinc-800 hard-shadow hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all whitespace-nowrap cursor-pointer">
              Start a Project
            </button>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
