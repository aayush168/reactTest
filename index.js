import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/reducers/products';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(
  promiseMiddleware(), logger) )

const AppContainer = () => 
  <Provider store = {store}>
    <App/>
  </Provider>

AppRegistry.registerComponent('reactapp', () => AppContainer);
