import useSound from 'use-sound';

export function usePopSounds() {
  const [playPop1] = useSound('/sounds/pop1.mp3', { volume: 0.5 });
  const [playPop2] = useSound('/sounds/pop2.mp3', { volume: 0.5 });
  const [playPop3] = useSound('/sounds/pop3.mp3', { volume: 0.5 });

  const playRandomPop = () => {
    const sounds = [playPop1, playPop2, playPop3];
    const randomIndex = Math.floor(Math.random() * sounds.length);
    sounds[randomIndex]();
  };

  return { playPop1, playPop2, playPop3, playRandomPop };
}
