"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { usePopSounds } from "@/hooks/usePopSounds";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image?: string;
  alt?: string;
}

export default function Lightbox({ isOpen, onClose, image, alt = "" }: LightboxProps) {
  const { playRandomPop } = usePopSounds();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm" />

          {/* Content */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative bg-white border-[4px] border-zinc-800 shadow-[8px_8px_0px_0px_rgba(43,47,52,1)] max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => {
                playRandomPop();
                onClose();
              }}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white border-[3px] border-zinc-800 rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(43,47,52,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-zinc-800 font-bold">close</span>
            </button>

            {/* Image */}
            {image ? (
              <img
                src={image}
                alt={alt}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            ) : (
              <div className="w-full h-64 bg-[#E5E7EB] flex items-center justify-center text-zinc-600 font-bold uppercase tracking-widest text-xl">
                No image
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
