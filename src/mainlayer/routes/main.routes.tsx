import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app/app.routes';

export const MainRoutes:React.FC = () => (
  <NavigationContainer>
    <AppRoutes />
  </NavigationContainer>
);
