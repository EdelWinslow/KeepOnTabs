"use client";

import { useSoundContext } from "@/context/SoundContext";
import { motion } from "framer-motion";

export default function SoundToggle() {
  const { isMuted, toggleMute } = useSoundContext();

  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      onClick={toggleMute}
      className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-white border-[3px] border-zinc-800 rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(43,47,52,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
      aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
    >
      <span className="material-symbols-outlined text-zinc-800 font-bold text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>
        {isMuted ? "volume_off" : "volume_up"}
      </span>
    </motion.button>
  );
}
