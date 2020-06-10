import React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'mobx-react';
import Store from './src/Store';
import 'mobx-react-lite/batchingForReactNative';

const StoreApp = () => {
  return (
    <Provider Store={Store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => StoreApp);
