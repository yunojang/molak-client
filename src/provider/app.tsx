import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';

import { queryClient } from '@/lib/react-query';

import { RecoilRoot } from 'recoil';

interface AppProviderProps {
  children?: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => (
  <Router>
    <ErrorBoundary fallback={({ code, key, message }) => <div>{message}</div>}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<div>대기</div>}>{children}</Suspense>
        </QueryClientProvider>
      </RecoilRoot>
    </ErrorBoundary>
  </Router>
);

export default AppProvider;
