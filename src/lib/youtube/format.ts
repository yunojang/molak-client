import { EpisoceCreateDto } from '@/features/content/types/dto';
import { YouTubeApiResponse } from './dto';

export const extractYoutubeURLId = (url: string): string | null => {
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get('v');

  return id;
};

export const responseToEpisode = (
  response: YouTubeApiResponse,
): Partial<EpisoceCreateDto> => {
  const v = response?.items[0];
  return {
    title: v?.snippet.title,
    description: v?.snippet.description,
    thumbnailUrl:
      v?.snippet.thumbnails['standard']?.url ??
      v?.snippet.thumbnails['high']?.url ??
      v?.snippet.thumbnails['medium']?.url ??
      v?.snippet.thumbnails['default']?.url,
  };
};
