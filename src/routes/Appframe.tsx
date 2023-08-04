import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppTopbar from '../components/AppTopbar/AppTopbar';
import { ErrorBoundary } from '@/components/ErrorBoundary';

import { Spinner } from '@/components/Elements/Spinner';
import AppFooter from '@/components/AppFooter';

export default function Appframe() {
  return (
    <>
      <AppTopbar />

      <div className="min-h-screen">
        <Suspense fallback={<Spinner pad={48} />}>
          <ErrorBoundary fallback={<div>다시 시도해 주십시오</div>}>
            <Outlet />
          </ErrorBoundary>
        </Suspense>
      </div>

      <AppFooter />
    </>
  );
}
