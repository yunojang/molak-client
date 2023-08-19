import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppTopbar from '../components/AppTopbar/AppTopbar';
import { ErrorBoundary } from '@/components/ErrorBoundary';

import AppFooter from '@/components/AppFooter';
import SpinnerPage from '@/components/Elements/Spinner/SpinnerPage';

interface AppframeProps {
  hasFooter?: boolean;
}

export default function Appframe({ hasFooter = true }: AppframeProps) {
  return (
    <>
      <AppTopbar />

      <div className="min-h-[70vh]">
        <Suspense fallback={<SpinnerPage />}>
          <ErrorBoundary fallback={<div>다시 시도해 주십시오</div>}>
            <Outlet />
          </ErrorBoundary>
        </Suspense>
      </div>

      {hasFooter && (
        <div className="mt-40">
          <AppFooter />
        </div>
      )}
    </>
  );
}
