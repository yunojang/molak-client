import { FC } from 'react';

export interface TabInfo {
  name: string;
  domain: string;
  ListView: FC<{ data: any[] }>;
}
