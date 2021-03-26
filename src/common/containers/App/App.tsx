import * as React from 'react';
import { Provider } from 'react-redux';
import Main from '@modules/Main';
import store from '@common/redux/store';

const App = (): JSX.Element => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
