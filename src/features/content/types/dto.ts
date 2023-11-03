import { Domain } from '@/types';

interface Channel extends Domain {
  name: string;
  url?: string;
}

export interface Content extends Domain {
  title: string;
  description: string;
  channel: Channel; // 혹은 Provider 매핑
  thumbnailUrl: string;
  url: string;
  type: string;
  tags: string[];
  episode_id: string;
}

export interface RecommendContent extends Domain {
  content: Content;
  background: string;
  textColor: string;
  recommend_text: string;
  recommend_image: string;
  teaser_url: string;
}

export interface ContentCreateDto {
  channelId: string;
  title: string;
  description: string;
  uploadType: string;
  thumbnailUrl: string;
  tags: string[];
  genres: string[];
  episodes: EpisoceCreateDto[];
  type: 'SHORT | SERIES';
}

export interface EpisoceCreateDto {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  uploadType: string;
  order: number;
}

// yt iframe
// <iframe
// width="560"
// height="315"
// src="https://www.youtube.com/embed/6wN_Cewq7_U"
// title="YouTube video player"
// frameborder="0"
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// allowfullscreen />
