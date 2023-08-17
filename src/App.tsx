import AppProvider from './provider/app';
import AppRoute from './routes';

import ModalRootContainer from './lib/modal/ModalRootContainer';

const App = () => (
  <AppProvider>
    <AppRoute />
    <ModalRootContainer />
  </AppProvider>
);

export default App;
