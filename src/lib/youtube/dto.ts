export interface YouTubeVideo {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
  };
}

// API 응답에 대한 타입을 정의합니다.
export interface YouTubeApiResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  items: YouTubeVideo[];
}
