import { useEffect, useMemo, useState } from 'react';

import { openFullScreen as ofsUtil } from '../utils/fullScreen';
import { PlayerState } from '../types/player';
import { useLocation } from 'react-router-dom';

interface Player extends PlayerState {
  setProgress(v: number): void;
  slided: number;
}

export const usePlayer = (container: HTMLElement | null): Player => {
  const [fullScreen, setFullScreen] = useState(false);
  const openFullScreen = () => {
    ofsUtil(container)?.then(() => setFullScreen(true), console.log);
  };
  const closeFullScreen = () => {
    document.exitFullscreen().then(() => setFullScreen(false), console.log);
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

  const [volume, setVolume] = useState(80);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [slided, setSlided] = useState(0);

  const location = useLocation();
  useEffect(() => {
    setSlided(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // const setVolume: (volume: number) => void = useMemo(
  //   () => throttle((volume: number) => setVolume(volume), 80),
  //   [],
  // );

  const volumnState = useMemo(
    () => ({ volume, setVolume, muted, setMuted }),
    [volume, muted],
  );
  const progressState = useMemo(() => ({ progress, setSlided }), [progress]);

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
    volume: volumnState,
    progress: progressState,
    setProgress,
    slided,
  };
};
