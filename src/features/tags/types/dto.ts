export interface HotTagItem {
  type: 'tags' | 'genre' | 'type';
  name: string;
}

export interface HotTag {
  title: string;
  items: HotTagItem[];
}
