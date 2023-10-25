import { FC } from 'react';

import { Tabs } from '@/components/Elements/Tab';
import { Tab } from '@chakra-ui/react';

import { relationTabs } from '@/features/content/constant/tabs';

interface RelationTabsProps {
  defaultIndex: number;
  onChange?(index: number): void;
}

const RelationTabs: FC<RelationTabsProps> = ({ defaultIndex, onChange }) => {
  return (
    <Tabs defaultIndex={defaultIndex} width="128px" onChange={onChange}>
      {relationTabs.map((tab, index) => (
        <Tab key={index}>{tab.name}</Tab>
      ))}
    </Tabs>
  );
};

export default RelationTabs;
