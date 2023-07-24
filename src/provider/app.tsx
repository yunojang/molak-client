import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';

import { queryClient } from '@/lib/react-query';

import { RecoilRoot } from 'recoil';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/lib/chakra';

interface AppProviderProps {
  children?: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => (
  <Router>
    <ErrorBoundary fallback={({ code, key, message }) => <div>{message}</div>}>
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div>대기</div>}>{children}</Suspense>
          </QueryClientProvider>
        </ChakraProvider>
      </RecoilRoot>
    </ErrorBoundary>
  </Router>
);

export default AppProvider;
