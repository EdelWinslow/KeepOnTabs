"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { useState } from "react";
import { usePopSounds } from "@/hooks/usePopSounds";
import dynamic from "next/dynamic";

const Lightbox = dynamic(() => import("@/components/Lightbox"), { ssr: false });

const WORKS = [
  // Characters (characters/)
  {
    id: 1,
    title: "Character",
    category: "Characters",
    image: "/KeepOnTabs/characters/Untitled119.jpg",
    imageText: "Character Design",
    span: "md:col-span-4",
    height: "h-[320px]",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Portrait",
    category: "Characters",
    image: "/KeepOnTabs/characters/Untitled174.jpg",
    imageText: "Portrait",
    span: "md:col-span-4",
    height: "h-[320px]",
    delay: 0.3,
  },
  {
    id: 3,
    title: "Sketch Design",
    category: "Characters",
    image: "/KeepOnTabs/characters/Untitled206.jpg",
    imageText: "Sketch Design",
    span: "md:col-span-4",
    height: "h-[320px]",
    delay: 0.4,
  },
  {
    id: 4,
    title: "Pose Study",
    category: "Characters",
    image: "/KeepOnTabs/characters/Untitled221.jpg",
    imageText: "Pose Study",
    span: "md:col-span-4",
    height: "h-[320px]",
    delay: 0.5,
  },
  {
    id: 5,
    title: "Classic",
    category: "Characters",
    image: "/KeepOnTabs/characters/Untitled35.jpg",
    imageText: "Classic",
    span: "md:col-span-4",
    height: "h-[320px]",
    delay: 0.6,
  },
  {
    id: 6,
    title: "Inked",
    category: "Characters",
    image: "/KeepOnTabs/characters/Untitled848.jpg",
    imageText: "Inked",
    span: "md:col-span-4",
    height: "h-[320px]",
    delay: 0.7,
  },
  // Illustrations (illustrations/)
  {
    id: 7,
    title: "Scene I",
    category: "Illustrations",
    image: "/KeepOnTabs/illustrations/Untitled148.jpg",
    imageText: "Scene I",
    span: "md:col-span-8",
    height: "h-[380px]",
    delay: 0.2,
  },
  {
    id: 8,
    title: "Magic",
    category: "Illustrations",
    image: "/KeepOnTabs/illustrations/Untitled156_20260205182320.jpg",
    imageText: "Magic",
    span: "md:col-span-4",
    height: "h-[380px]",
    delay: 0.3,
  },
  {
    id: 9,
    title: "Warmth",
    category: "Illustrations",
    image: "/KeepOnTabs/illustrations/Untitled217.jpg",
    imageText: "Warmth",
    span: "md:col-span-4",
    height: "h-[280px]",
    delay: 0.4,
  },
  {
    id: 10,
    title: "Soft",
    category: "Illustrations",
    image: "/KeepOnTabs/illustrations/Untitled219.jpg",
    imageText: "Soft",
    span: "md:col-span-6",
    height: "h-[280px]",
    delay: 0.5,
  },
  {
    id: 11,
    title: "Cosmic",
    category: "Illustrations",
    image: "/KeepOnTabs/illustrations/Untitled222 (1).jpg",
    imageText: "Cosmic",
    span: "md:col-span-6",
    height: "h-[280px]",
    delay: 0.6,
  },
  {
    id: 12,
    title: "Epic",
    category: "Illustrations",
    image: "/KeepOnTabs/illustrations/Untitled668_20260525131326.jpg",
    imageText: "Epic",
    span: "md:col-span-8",
    height: "h-[380px]",
    delay: 0.7,
  },
  {
    id: 13,
    title: "Ethereal",
    category: "Illustrations",
    image: "/KeepOnTabs/illustrations/Untitled736.jpg",
    imageText: "Ethereal",
    span: "md:col-span-4",
    height: "h-[380px]",
    delay: 0.2,
  },
  {
    id: 14,
    title: "Grand",
    category: "Illustrations",
    image: "/KeepOnTabs/illustrations/Untitled786.jpg",
    imageText: "Grand",
    span: "md:col-span-4",
    height: "h-[280px]",
    delay: 0.3,
  },
  {
    id: 15,
    title: "Glow",
    category: "Illustrations",
    image: "/KeepOnTabs/illustrations/Untitled859.jpg",
    imageText: "Glow",
    span: "md:col-span-4",
    height: "h-[280px]",
    delay: 0.4,
  },
  {
    id: 16,
    title: "Classic Illus",
    category: "Illustrations",
    image: "/KeepOnTabs/illustrations/Untitled93.jpg",
    imageText: "Classic Illus",
    span: "md:col-span-4",
    height: "h-[280px]",
    delay: 0.5,
  },
];

export default function Gallery() {
  const { playRandomPop } = usePopSounds();
  const [selectedWork, setSelectedWork] = useState<typeof WORKS[0] | null>(null);

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

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        {WORKS.map((work, index) => (
          <FadeIn
            key={work.id}
            delay={work.delay}
            className="break-inside-avoid flex bg-white border-[3px] border-zinc-800 p-4 hard-shadow group flex-col cursor-pointer mb-6"
          >
            <article
              className="overflow-hidden border-2 border-zinc-800"
              onClick={() => {
                playRandomPop();
                setSelectedWork(work);
              }}
              aria-label={`View detail for ${work.title}`}
            >
              {work.image ? (
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-48 bg-[#E5E7EB] flex items-center justify-center text-zinc-600 font-bold uppercase tracking-widest text-center px-4 transition-transform duration-500 group-hover:scale-105">
                  {work.imageText}
                </div>
              )}
            </article>
          </FadeIn>
        ))}
      </div>

      {/* Callout Card */}
      <FadeIn
        delay={0.5}
        className="w-full bg-primary-container border-[4px] border-zinc-800 p-12 hard-shadow flex flex-col md:flex-row items-center justify-between gap-8 mt-8"
      >
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
        <Link href="/contact" onClick={playRandomPop}>
          <button className="bg-white text-zinc-800 font-headline-md text-headline-md px-10 py-5 border-[3px] border-zinc-800 hard-shadow hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all whitespace-nowrap cursor-pointer">
            Start a Project
          </button>
        </Link>
      </FadeIn>

      {/* Lightbox */}
      <Lightbox
        isOpen={!!selectedWork}
        onClose={() => setSelectedWork(null)}
        image={selectedWork?.image}
        alt={selectedWork?.title}
      />
    </div>
  );
}

