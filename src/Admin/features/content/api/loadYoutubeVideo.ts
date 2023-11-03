import { useMutation } from 'react-query';

import client from '@/lib/client';
import { env } from '@/config';

import { YouTubeApiResponse } from '@/lib/youtube/dto';

export const loadYoutubeVideo = async (
  videoId: string,
): Promise<YouTubeApiResponse> => {
  return client.get(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${env.auth.youtube_key}`,
  );
};

export const useLoadYoutubeVideo = () => {
  return useMutation({ mutationFn: loadYoutubeVideo, useErrorBoundary: false });
};
