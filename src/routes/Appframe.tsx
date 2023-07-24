import { Outlet } from 'react-router-dom';

import AppTopbar from '../components/AppTopbar/AppTopbar';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export default function Appframe() {
  return (
    <>
      <AppTopbar />

      <ErrorBoundary fallback={<div>다시 시도해 주십시오</div>}>
        <Outlet />
      </ErrorBoundary>
    </>
  );
}
