import { FC, useState } from 'react';

import Tabs from './Tabs';
import { Tab } from '@chakra-ui/react';
import { TabInfo } from './types';
import ListCallToDomain from '@/components/List/ListCallToDomain';

interface ListCovertToTabProps {
  tabs: TabInfo[];
  // tab?: { Wrapper?: FC<LayoutProps>; hidden?: boolean };
  tabWrapperClassName?: string;
  gap?: number;
}

const ListCovertToTab: FC<ListCovertToTabProps> = ({
  tabs,
  tabWrapperClassName,
}) => {
  const [tab, setTab] = useState(0);

  return (
    <>
      <div className={tabWrapperClassName}>
        <Tabs defaultIndex={tab} width="100px" onChange={setTab}>
          {tabs.map(({ name }, idx) => (
            <Tab key={idx}>{name}</Tab>
          ))}
        </Tabs>
      </div>

      <ListCallToDomain ViewComp={<></>} domain={tabs[tab].domain} />
    </>
  );
};

export default ListCovertToTab;
