/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import Store from './app/redux';
import {Provider} from 'react-redux';

import {name as appName} from './app.json';

const Wrap = () => (
  <Provider store={Store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Wrap);
