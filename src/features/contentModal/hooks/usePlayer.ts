import { useEffect, useState } from 'react';

import { openFullScreen as ofsUtil } from '../utils/fullScreen';
import { PlayerState } from '../types/player';

interface Player extends PlayerState {
  setProgress(v: number): void;
  slidedProgress: number;
}

export const usePlayer = (container: HTMLElement | null): Player => {
  const [fullScreen, setFullScreen] = useState(false);
  const openFullScreen = () => {
    ofsUtil(container)?.then(() => setFullScreen(true));
  };
  const closeFullScreen = () => {
    document.exitFullscreen().then(() => setFullScreen(false));
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) setFullScreen(false);
    };
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () =>
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
  }, []);

  const [playing, setPlaying] = useState(true);
  const play = () => setPlaying(true);
  const pause = () => setPlaying(false);

  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [slidedProgress, setSlided] = useState(0);

  return {
    fullScreen: {
      fullScreen,
      onFullScreen: openFullScreen,
      onExitFullScreen: closeFullScreen,
    },
    playing: {
      playing,
      play,
      pause,
    },
    volume: {
      volume,
      setVolume,
      muted,
      toggleMuted: () => setMuted(m => !m),
    },
    progress: {
      progress,
      setSlided,
    },
    setProgress,
    slidedProgress,
  };
};
