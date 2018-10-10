import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from './src/config';
import App from './App';
import LoadingView from './src/components/Loader.js'

const AppContainer = () => 
  <Provider store = {store}>
    <PersistGate loading={<LoadingView/>} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>

AppRegistry.registerComponent('reactapp', () => AppContainer);
