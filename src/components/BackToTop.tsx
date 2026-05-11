"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePopSounds } from "@/hooks/usePopSounds";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { playRandomPop } = usePopSounds();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    playRandomPop();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-white border-[3px] border-zinc-800 rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(43,47,52,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
          aria-label="Back to top"
        >
          <span className="material-symbols-outlined text-zinc-800 font-bold text-2xl">
            arrow_upward
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
