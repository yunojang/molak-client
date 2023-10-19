import { createContext } from 'react';

interface ContentIds {
  contentId: string;
  episodeId?: string;
}

export const ContentIdContext = createContext<ContentIds>({
  contentId: '',
});
