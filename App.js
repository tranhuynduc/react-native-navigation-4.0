import React from 'react';

import AppNavigation from './app/navigations';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './app/store/configureStore';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyCgBFyz0TSOsXmIt49tzif9bnz9DjIW06k');

const App = () => {
  return (
    <Provider store={store()}>
      <PaperProvider>
        <AppNavigation />
      </PaperProvider>
    </Provider>
  );
};

export default App;
