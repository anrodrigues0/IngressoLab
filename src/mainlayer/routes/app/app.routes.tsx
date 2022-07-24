/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, ParamListBase } from '@react-navigation/native';
import { ThemeGlobalApp } from '@theme-global/theme.global';

import {
  HomePage,
  CartPage,
  ProfilePage,
  DetailTicketPage,
  PaymentPage,
} from '@pages';

import { TabButtonComponent } from './tabButton/tabButton.component';

const { Navigator, Screen } = createBottomTabNavigator();

type ScreenNotTabBarTypes = {
  [key: string]: string;
}

const ScreenNotVisibleTabBar:ScreenNotTabBarTypes = {
  Payment: 'Payment',
};

function isVisibleTabBar(route:RouteProp<ParamListBase, string>) {
  if (route.name === ScreenNotVisibleTabBar[route.name]) {
    return 'none';
  }
  return 'flex';
}

export const AppRoutes = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarStyle: [
        { display: isVisibleTabBar(route) },
        stylesRoutes.navigator,
      ],
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: ThemeGlobalApp.colors.main,
    })}
  >
    <Screen
      component={CartPage}
      name="Cart"
      options={{
        tabBarButton: (props) => <TabButtonComponent {...props} />,
      }}
    />
    <Screen
      component={HomePage}
      name="Home"
      options={{
        tabBarButton: (props) => <TabButtonComponent nameIcon="home" {...props} />,
      }}
    />
    <Screen
      component={ProfilePage}
      name="Profile"
      options={{
        tabBarButton: (props) => <TabButtonComponent nameIcon="user-circle-o" {...props} />,
      }}
    />
    <Screen
      component={DetailTicketPage}
      name="DetailTicket"
      options={{ tabBarButton: () => false }}
    />
    <Screen
      component={PaymentPage}
      name="Payment"
      options={{ tabBarButton: () => false }}
    />
  </Navigator>
);

const stylesRoutes = StyleSheet.create({
  navigator: {
    position: 'absolute',
    bottom: 7,
    height: 60,
    left: 7,
    right: 7,
    borderRadius: 10,
    elevation: 3,
    borderColor: ThemeGlobalApp.colors.gray_110,
    borderTopColor: ThemeGlobalApp.colors.gray_110,
    borderTopWidth: 0.7,
    borderWidth: 0.6,
  },

  center: {
    backgroundColor: ThemeGlobalApp.colors.main,
    width: 40,
    height: 40,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },

  badge: {
    backgroundColor: ThemeGlobalApp.colors.secondary,
    color: ThemeGlobalApp.colors.white,
    fontWeight: 'bold',
  },
});
