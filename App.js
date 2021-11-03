import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginScreen from './src/app/container/Login';
export default function App() {
  return (
    <SafeAreaProvider>
      <LoginScreen />
    </SafeAreaProvider>
  );
}
