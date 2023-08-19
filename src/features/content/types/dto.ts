import { Domain } from '@/types';

export interface Content extends Domain {
  title: string;
  description: string;
  provider: string; // 혹은 Provider 매핑
  thumbnail: string;
  url: string;
  type: string;
  tags: string[];
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
