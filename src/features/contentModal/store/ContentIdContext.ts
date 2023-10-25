import { RefObject, createContext } from 'react';

interface ContentInfo {
  contentId: string;
  episodeId?: string;
  contentRef?: RefObject<HTMLDivElement>;
}

export const ContentInfoContext = createContext<ContentInfo>({
  contentId: '',
});
