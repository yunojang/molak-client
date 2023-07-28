import { Outlet } from 'react-router-dom';

import AppTopbar from '../components/AppTopbar/AppTopbar';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Suspense } from 'react';

export default function Appframe() {
  return (
    <>
      <AppTopbar />

      <Suspense fallback={<div>대기</div>}>
        <ErrorBoundary fallback={<div>다시 시도해 주십시오</div>}>
          <Outlet />
        </ErrorBoundary>
      </Suspense>
    </>
  );
}
