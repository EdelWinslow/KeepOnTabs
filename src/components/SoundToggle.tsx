"use client";

import { useSoundContext } from "@/context/SoundContext";
import { motion } from "framer-motion";

export default function SoundToggle() {
  const { isMuted, toggleMute } = useSoundContext();

  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      onClick={toggleMute}
      className="flex items-center justify-center p-2 border-[3px] border-zinc-800 rounded-md bg-white hard-shadow-sm active-press transition-all cursor-pointer"
      aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
    >
      <span className="material-symbols-outlined text-zinc-800 font-bold text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>
        {isMuted ? "volume_off" : "volume_up"}
      </span>
    </motion.button>
  );
}
