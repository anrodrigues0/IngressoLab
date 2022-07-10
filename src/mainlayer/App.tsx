import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Test1, Test2 } from '@components';

function App() {
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Test1 />
      <Test2 />
    </SafeAreaView>
  );
}

export default App;
