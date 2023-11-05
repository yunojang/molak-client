import { TabInfo } from '@/components/Elements/Tab/types';

import EpisodeViewList from '@/features/contentModal/components/Episode/EpisodeListView';

export const relationTabs: TabInfo[] = [
  // { name: '시리즈', domain: 'content/{id}/episode', ListView: EpisodeViewList },
  { name: '시리즈', domain: 'episode', ListView: EpisodeViewList },
  {
    name: '추천작',
    domain: 'content/{id}/recommend',
    ListView: EpisodeViewList,
  },
];
