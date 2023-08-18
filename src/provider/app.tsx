import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';

import { queryClient } from '@/lib/react-query';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/lib/chakra';
import { ModalContext, globalModalRootId } from '@/lib/modal/ModalContext';

import SpinnerPage from '@/components/Elements/Spinner/SpinnerPage';

interface AppProviderProps {
  children?: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Router>
      <ErrorBoundary
        fallback={({ code, key, message }) => <div>{message}</div>}
      >
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <ModalContext.Provider value={globalModalRootId}>
              <Suspense fallback={<SpinnerPage />}>{children}</Suspense>
            </ModalContext.Provider>
          </QueryClientProvider>
        </ChakraProvider>
      </ErrorBoundary>
    </Router>
  );
};

export default AppProvider;
