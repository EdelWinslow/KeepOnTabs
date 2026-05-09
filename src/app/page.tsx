"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import { usePopSounds } from "@/hooks/usePopSounds";

export default function Home() {
  const { playRandomPop } = usePopSounds();

  return (
    <main className="max-w-container-max mx-auto px-8 py-16 w-full grow">
      <FadeIn>
        <section className="flex flex-col md:flex-row items-center gap-12 mb-24 mt-8">
          <div className="flex-1 space-y-8 w-full">
            <div className="inline-block bg-primary-container border-[3px] border-zinc-800 px-5 py-3 -rotate-2 shadow-[4px_4px_0px_0px_rgba(43,47,52,1)] mb-4 mt-4">
              <span className="font-headline-lg text-zinc-900 font-black uppercase tracking-wider text-xl md:text-2xl">
                Commissions Open!
              </span>
            </div>
            <h1 className="font-headline-xl text-zinc-900 leading-tight">
              Your imagination, <br className="hidden md:block" />
              <span className="bg-primary text-white px-3 py-1 border-[3px] border-zinc-900 shadow-[4px_4px_0px_0px_rgba(43,47,52,1)] inline-block -rotate-2 my-2 mr-2">
                hand-inked
              </span>
              with joy.
            </h1>
            <p className="text-body-lg text-zinc-700 max-w-lg font-medium">
              Bringing your characters and ideas to life with a professional touch
              and a best-friend vibe. Let's create something amazing together.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/pricing" onClick={playRandomPop}>
                <button className="bg-primary-container text-zinc-800 border-4 border-zinc-800 px-8 py-4 font-headline-md rounded-xl shadow-[6px_6px_0px_0px_rgba(43,47,52,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer">
                  View Pricing
                </button>
              </Link>
              <Link href="/gallery" onClick={playRandomPop}>
                <button className="bg-white text-zinc-800 border-4 border-zinc-800 px-8 py-4 font-headline-md rounded-xl shadow-[6px_6px_0px_0px_rgba(43,47,52,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer">
                  Gallery
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 relative w-full max-w-[85vw] mx-auto md:max-w-none mt-10 md:mt-0">
            <div className="absolute -inset-2 md:-inset-4 bg-secondary-container border-[3px] border-zinc-800 rounded-2xl rotate-3 -z-10"></div>
            <div className="bg-white border-[3px] border-zinc-800 p-2 md:p-4 rounded-2xl shadow-[8px_8px_0px_0px_rgba(43,47,52,1)] md:shadow-[12px_12px_0px_0px_rgba(43,47,52,1)]">
              <HeroCarousel />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="bg-white border-4 border-zinc-800 p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(43,47,52,1)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-200 border-4 border-zinc-800 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-zinc-800 font-bold">check</span>
              </div>
              <h2 className="font-headline-lg text-zinc-800">I Can Do</h2>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-3 bg-secondary-fixed rounded-xl border-2 border-zinc-800">
                <span className="material-symbols-outlined text-primary">person</span>
                <span className="font-label-bold uppercase">OCs</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary-fixed rounded-xl border-2 border-zinc-800">
                <span className="material-symbols-outlined text-primary">favorite</span>
                <span className="font-label-bold uppercase">Fanarts</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary-fixed rounded-xl border-2 border-zinc-800">
                <span className="material-symbols-outlined text-primary">face</span>
                <span className="font-label-bold uppercase">Human</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary-fixed rounded-xl border-2 border-zinc-800">
                <span className="material-symbols-outlined text-primary">pets</span>
                <span className="font-label-bold uppercase">Non-human / Humanoids</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary-fixed rounded-xl border-2 border-zinc-800">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                <span className="font-label-bold uppercase">Kemonomimi</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary-fixed rounded-xl border-2 border-zinc-800">
                <span className="material-symbols-outlined text-primary">groups</span>
                <span className="font-label-bold uppercase">Couples / Ships</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary-fixed rounded-xl border-2 border-zinc-800">
                <span className="material-symbols-outlined text-primary">water_drop</span>
                <span className="font-label-bold uppercase">Light to mild gore</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary-fixed rounded-xl border-2 border-zinc-800">
                <span className="material-symbols-outlined text-primary">celebration</span>
                <span className="font-label-bold uppercase">Suggestive</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary-fixed rounded-xl border-2 border-zinc-800">
                <span className="material-symbols-outlined text-primary">accessibility_new</span>
                <span className="font-label-bold uppercase">Any Poses</span>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-zinc-800 p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(43,47,52,1)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-yellow-200 border-4 border-zinc-800 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-zinc-800 font-bold">help</span>
              </div>
              <h2 className="font-headline-lg text-zinc-800">I&apos;ll Consider</h2>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-3 bg-secondary-container rounded-xl border-2 border-zinc-800">
                <span className="material-symbols-outlined text-primary">smart_toy</span>
                <span className="font-label-bold uppercase">Mecha</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary-container rounded-xl border-2 border-zinc-800">
                <span className="material-symbols-outlined text-primary">design_services</span>
                <span className="font-label-bold uppercase">Heavy Character Design</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary-container rounded-xl border-2 border-zinc-800">
                <span className="material-symbols-outlined text-primary">security</span>
                <span className="font-label-bold uppercase">Armors</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary-container rounded-xl border-2 border-zinc-800">
                <span className="material-symbols-outlined text-primary">landscape</span>
                <span className="font-label-bold uppercase">Sceneries</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary-container rounded-xl border-2 border-zinc-800">
                <span className="material-symbols-outlined text-primary">cruelty_free</span>
                <span className="font-label-bold uppercase">Furries</span>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-zinc-800 p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(43,47,52,1)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-200 border-4 border-zinc-800 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-zinc-800 font-bold">close</span>
              </div>
              <h2 className="font-headline-lg text-zinc-800">Nope</h2>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-3 bg-error-container rounded-xl border-2 border-zinc-800 opacity-80">
                <span className="material-symbols-outlined text-error">block</span>
                <span className="font-label-bold uppercase">NSFW</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-error-container rounded-xl border-2 border-zinc-800 opacity-80">
                <span className="material-symbols-outlined text-error">skull</span>
                <span className="font-label-bold uppercase">Heavy gore</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-error-container rounded-xl border-2 border-zinc-800 opacity-80">
                <span className="material-symbols-outlined text-error">report</span>
                <span className="font-label-bold uppercase">Problematic content</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-error-container rounded-xl border-2 border-zinc-800 opacity-80">
                <span className="material-symbols-outlined text-error">mood_bad</span>
                <span className="font-label-bold uppercase">Fetish</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-error-container rounded-xl border-2 border-zinc-800 opacity-80">
                <span className="material-symbols-outlined text-error">thumb_down</span>
                <span className="font-label-bold uppercase">Hate art</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-error-container rounded-xl border-2 border-zinc-800 opacity-80">
                <span className="material-symbols-outlined text-error">warning</span>
                <span className="font-label-bold uppercase text-xs">Racist / Ableist</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-error-container rounded-xl border-2 border-zinc-800 opacity-80">
                <span className="material-symbols-outlined text-error">cancel</span>
                <span className="font-label-bold uppercase text-xs">Hoyoverse (too complex!)</span>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-zinc-800 mb-4">Latest Works</h2>
            <div className="h-1.5 w-32 bg-primary-container mx-auto border-2 border-zinc-800 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-zinc-800 p-4 rounded-2xl shadow-[6px_6px_0px_0px_rgba(43,47,52,1)] hover:-translate-y-2 transition-all">
              <div className="w-full aspect-square object-cover rounded-lg border-2 border-zinc-800 mb-4 bg-[#E5E7EB] flex items-center justify-center text-zinc-500 font-bold">
                Gallery Item 1
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="font-label-bold uppercase text-zinc-800">Character Design</span>
                <span className="bg-secondary-container px-3 py-1 rounded-full border-2 border-zinc-800 text-xs font-bold">
                  $45+
                </span>
              </div>
            </div>
            <div className="bg-white border-4 border-zinc-800 p-4 rounded-2xl shadow-[6px_6px_0px_0px_rgba(43,47,52,1)] hover:-translate-y-2 transition-all">
              <div className="w-full aspect-square object-cover rounded-lg border-2 border-zinc-800 mb-4 bg-[#E5E7EB] flex items-center justify-center text-zinc-500 font-bold">
                Gallery Item 2
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="font-label-bold uppercase text-zinc-800">Couple Portrait</span>
                <span className="bg-secondary-container px-3 py-1 rounded-full border-2 border-zinc-800 text-xs font-bold">
                  $70+
                </span>
              </div>
            </div>
            <div className="bg-white border-4 border-zinc-800 p-4 rounded-2xl shadow-[6px_6px_0px_0px_rgba(43,47,52,1)] hover:-translate-y-2 transition-all">
              <div className="w-full aspect-square object-cover rounded-lg border-2 border-zinc-800 mb-4 bg-[#E5E7EB] flex items-center justify-center text-zinc-500 font-bold">
                Gallery Item 3
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="font-label-bold uppercase text-zinc-800">Streetwear OC</span>
                <span className="bg-secondary-container px-3 py-1 rounded-full border-2 border-zinc-800 text-xs font-bold">
                  $55+
                </span>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
