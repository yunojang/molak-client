import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import CTPPage from '../CTPPage';
import DetailActions from '@/components/Pages/DetailPage/DetailActions';

import { detail_titles } from '../titles';
import { detail_actions } from '../actions';
import { PagesName } from '../pages';
import BottomControl from '@/components/Elements/BottomControl';

export interface DetailComponentProps {
  id: string;
  isEdit?: boolean;
  bottomControl?: (inner: React.ReactNode) => React.ReactNode;
}

interface DetailPageProps {
  name: PagesName;
  DetailComp: FC<DetailComponentProps>;
  editDefault?: boolean;
}

const DetailPage: FC<DetailPageProps> = ({ name, DetailComp, editDefault }) => {
  const { id } = useParams();
  const [isEdit, setEdit] = useState(editDefault ?? false);

  if (!id) throw new Error('[DEV] Routing Error!! (id is required)');

  return (
    <CTPPage
      title={detail_titles[name]}
      titleExtra={<DetailActions actions={detail_actions[name]} id={id} />}
    >
      {/* isEdit ? form : view => same component */}
      <DetailComp
        id={id}
        isEdit={isEdit}
        bottomControl={inner => <BottomControl>{inner}</BottomControl>}
      />

      {/* bottom control bar - save reset */}
      {/* {isEdit && <></>} */}
    </CTPPage>
  );
};

export default DetailPage;

// edit toggle action
// {Component: () => <button>수정/취소</button>, authKey: 'own' }
