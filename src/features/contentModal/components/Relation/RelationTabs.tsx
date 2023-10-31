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
    <div className="w-full bg-opacity rounded-xl shadow-gray-200 shadow-lg border border-gray-50 p-1">
      <Tabs defaultIndex={defaultIndex} width="120px" onChange={onChange}>
        {relationTabs.map((tab, index) => (
          <Tab key={index}>{tab.name}</Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default RelationTabs;
