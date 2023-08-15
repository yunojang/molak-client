import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ListCompProps } from '@/components/List/withScrollLoadOrder';
import { FilterProps, withListFilter } from '@/components/List/withListFilter';

import CTPPage from '../CTPPage';

import { PagesName } from '../pages';
import { home_titles } from '../titles';
import { list_actions } from '../actions';
import ListActions from '@/components/Pages/ListPages/ListActions';

interface ListPageProps {
  name: PagesName;
  Listcomp: FC<ListCompProps>;
  FilterComp?: FC<FilterProps>;
}

const ListPage: FC<ListPageProps> = ({ name, Listcomp, FilterComp }) => {
  const navigate = useNavigate();

  const FilterableList = withListFilter(Listcomp, FilterComp);

  return (
    <CTPPage
      title={home_titles[name]}
      titleExtra={<ListActions actions={list_actions[name]} />}
    >
      <FilterableList onSelect={id => navigate(id.toString())} />
    </CTPPage>
  );
};

export default ListPage;
