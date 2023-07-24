import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import AppTopbar from '../components/AppTopbar';

export default function Appframe({ sidebar }: { sidebar?: ReactElement }) {
  // const { cls } = useContentWidth();

  return (
    <>
      <AppTopbar />

      <div className="flex">
        <Outlet />
      </div>
    </>
  );
}
