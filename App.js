import {Provider} from 'react-redux';
import store from './src/store/store';
import React from 'react';
import Navigation from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
