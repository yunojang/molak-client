import { Suspense } from 'react';
import AppProvider from './provider/app';
import AppRoute from './routes';

const App = () => (
  <AppProvider>
    <AppRoute />
  </AppProvider>
);

export default App;
