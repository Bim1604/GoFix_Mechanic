import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginScreen from './src/app/container/Login';
import messaging from '@react-native-firebase/messaging';

export default function App() {
  // get token server
  const getToken = async () => {
    const token = await messaging().getToken();
    fetch(`http://192.168.1.12:3000/token`, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        token: token,
      }),
    });
    messaging().onMessageSent(messageId => {
      console.log('Message has been sent to the FCM server', messageId);
    });
    console.log('.............: ', token);
  };

  useEffect(() => {
    getToken();
  });

  return (
    <SafeAreaProvider>
      <LoginScreen />
    </SafeAreaProvider>
  );
}
