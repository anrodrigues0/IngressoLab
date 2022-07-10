/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import 'module-alias/register';
// import { Test } from '../presentation/components';
import { Test1 } from '@components';

function App() {
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Test1 />
    </SafeAreaView>
  );
}

export default App;
