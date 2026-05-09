"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  { id: 0, content: "Recent Commission 1", bg: "bg-[#E5E7EB]" },
  { id: 1, content: "Recent Commission 2", bg: "bg-[#D1D5DB]" },
  { id: 2, content: "Recent Commission 3", bg: "bg-[#9CA3AF]" },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0
  })
};

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = SLIDES.length - 1;
      if (nextIndex >= SLIDES.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <div className="w-full aspect-[4/3] rounded-lg border-[3px] border-zinc-800 bg-zinc-100 overflow-hidden relative group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className={`absolute inset-0 flex items-center justify-center text-zinc-700 font-bold font-headline-md ${SLIDES[currentIndex].bg}`}
        >
          <span className="p-4 text-center uppercase tracking-widest">{SLIDES[currentIndex].content}</span>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
        <button 
          onClick={() => paginate(-1)}
          className="w-12 h-12 bg-white border-[3px] border-zinc-800 rounded-full flex items-center justify-center brutal-shadow hover:-translate-y-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer pointer-events-auto"
        >
          <span className="material-symbols-outlined font-black text-zinc-800 text-xl">arrow_back</span>
        </button>
        <button 
          onClick={() => paginate(1)}
          className="w-12 h-12 bg-white border-[3px] border-zinc-800 rounded-full flex items-center justify-center brutal-shadow hover:-translate-y-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer pointer-events-auto"
        >
          <span className="material-symbols-outlined font-black text-zinc-800 text-xl">arrow_forward</span>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center gap-3 z-10">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (idx !== currentIndex) {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }
            }}
            className={`w-3.5 h-3.5 rounded-full border-[2px] border-zinc-800 transition-colors cursor-pointer ${
              idx === currentIndex ? "bg-primary scale-110" : "bg-white hover:bg-zinc-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
