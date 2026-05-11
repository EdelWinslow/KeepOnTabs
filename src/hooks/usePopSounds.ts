import useSound from 'use-sound';
import { useSoundContext } from '@/context/SoundContext';

export function usePopSounds() {
  const { isMuted } = useSoundContext();
  const [playPop1] = useSound('/KeepOnTabs/sounds/pop1.mp3', { volume: 0.5 });
  const [playPop2] = useSound('/KeepOnTabs/sounds/pop2.mp3', { volume: 0.5 });
  const [playPop3] = useSound('/KeepOnTabs/sounds/pop3.mp3', { volume: 0.5 });

  const playRandomPop = () => {
    if (isMuted) return;
    const sounds = [playPop1, playPop2, playPop3];
    const randomIndex = Math.floor(Math.random() * sounds.length);
    sounds[randomIndex]();
  };

  return { playPop1, playPop2, playPop3, playRandomPop };
}
