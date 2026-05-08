"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = ["All Works", "Characters", "Illustrations", "Sketches"];

const WORKS = [
  {
    id: 1,
    title: "Neon Dreams Metropolis",
    category: "Illustrations",
    imageText: "Neon Dreams Metropolis Illustration",
    span: "md:col-span-8",
    height: "h-[400px]",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Botany Bot v2.0",
    category: "Characters",
    imageText: "Botany Bot v2.0",
    span: "md:col-span-4",
    height: "h-[400px]",
    delay: 0.3,
  },
  {
    id: 3,
    title: "Creative Chaos",
    category: "Sketches",
    imageText: "Creative Chaos",
    span: "md:col-span-4",
    height: "h-[250px]",
    delay: 0.4,
  },
  {
    id: 4,
    title: "Expression Sheet",
    category: "Characters",
    imageText: "Character Expression Sheet",
    span: "md:col-span-4",
    height: "h-[250px]",
    delay: 0.5,
  },
  {
    id: 5,
    title: "Azure Horizon",
    category: "Illustrations",
    imageText: "Azure Horizon Landscape",
    span: "md:col-span-4",
    height: "h-[250px]",
    delay: 0.6,
  },
  {
    id: 6,
    title: "Sci-Fi Mercenary",
    category: "Characters",
    imageText: "Sci-Fi Mercenary Concept",
    span: "md:col-span-4",
    height: "h-[250px]",
    delay: 0.7,
  },
  {
    id: 7,
    title: "Café Doodle",
    category: "Sketches",
    imageText: "Quick Café Sketch",
    span: "md:col-span-4",
    height: "h-[250px]",
    delay: 0.8,
  },
  {
    id: 8,
    title: "Starlight Battle",
    category: "Illustrations",
    imageText: "Epic Space Battle",
    span: "md:col-span-4",
    height: "h-[250px]",
    delay: 0.9,
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All Works");

  const filteredWorks =
    activeCategory === "All Works"
      ? WORKS
      : WORKS.filter((work) => work.category === activeCategory);

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
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category
                  ? "bg-primary-container text-on-primary-container"
                  : "bg-secondary-container text-on-secondary-container"
              } font-label-bold text-label-bold px-6 py-3 rounded-full border-2 border-zinc-800 ${
                activeCategory === category ? "hard-shadow" : "hard-shadow-hover"
              } active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer`}
            >
              {category}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {filteredWorks.map((work, index) => (
          <FadeIn
            key={work.id}
            delay={work.delay}
            className={`${work.span} ${index >= 4 ? "hidden md:flex" : "flex"} bg-white border-[3px] border-zinc-800 p-4 hard-shadow group flex-col`}
          >
            <div
              className={`overflow-hidden border-2 border-zinc-800 mb-4 ${work.height}`}
            >
              <div className="w-full h-full bg-[#E5E7EB] flex items-center justify-center text-zinc-600 font-bold uppercase tracking-widest text-center px-4 transition-transform duration-500 group-hover:scale-105">
                {work.imageText}
              </div>
            </div>
            <div className="flex justify-between items-end mt-auto">
              <div>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 border border-zinc-800 text-xs font-bold uppercase mb-2 inline-block">
                  {work.category}
                </span>
                <h3 className="font-headline-md text-headline-md">
                  {work.title}
                </h3>
              </div>
              <span className="material-symbols-outlined text-zinc-800 text-3xl">
                arrow_outward
              </span>
            </div>
          </FadeIn>
        ))}

        <FadeIn
          delay={0.5}
          className="md:col-span-12 bg-primary-container border-[4px] border-zinc-800 p-12 hard-shadow flex flex-col md:flex-row items-center justify-between gap-8 mt-8"
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
