/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';
import { firebase } from '@react-native-firebase/messaging';

firebase.messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
