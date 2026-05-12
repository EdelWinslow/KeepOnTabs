"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePopSounds } from "@/hooks/usePopSounds";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const { playRandomPop } = usePopSounds();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility);

    // Observe the footer element to hide BackToTop when footer is in view
    const footer = document.querySelector("footer");
    if (footer) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setIsFooterVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observerRef.current.observe(footer);
    }

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToTop = () => {
    playRandomPop();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shouldShow = isVisible && !isFooterVisible;

  return (
    <AnimatePresence>
      {shouldShow && (
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
