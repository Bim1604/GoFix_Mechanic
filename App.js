import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Route from './src/app/router/index';
export default function App() {
  return (
    <SafeAreaProvider>
      <Route />
    </SafeAreaProvider>
  );
}
