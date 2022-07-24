import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeGlobalProvider } from '@providers/theme-global.provider';
import { MainRoutes } from '@routes/main.routes';

function App() {
  return (
    <ThemeGlobalProvider>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <MainRoutes />
    </ThemeGlobalProvider>
  );
}

export default App;
