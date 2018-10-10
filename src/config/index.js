import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

import rootReducer from '../reducers/products'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(promiseMiddleware(), logger))
export const persistor = persistStore(store)
