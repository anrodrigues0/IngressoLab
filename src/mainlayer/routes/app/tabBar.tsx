/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {
  View, TouchableOpacity, StyleSheet, Dimensions, Animated,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import IconFeather from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components';

const NotShowScreenOnTabBar:{[key:string]:string} = {
  DetailTicket: 'DetailTicket',
  Payment: 'Payment',
};

const IconName:{[key:string]:string} = {
  Home: 'home',
  Profile: 'user-circle',
  Cart: 'cart',
};

const { width } = Dimensions.get('window');
const TAB_WIDTH = width / 1.05;

export function MyTabBar({ state, descriptors, navigation }:BottomTabBarProps) {
  const { colors } = useTheme();
  const [trasnlateX] = React.useState(new Animated.Value(0));

  const trasnlatedTab = (index:any) => {
    Animated.spring(trasnlateX, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true,
    }).stop();
  };

  React.useEffect(() => {
    trasnlatedTab(state.index);
  }, [state.index]);

  return (
    <View style={style.container}>
      {state.routes.map((route, index) => {
        if (route.name !== NotShowScreenOnTabBar[route.name]) {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true } as never);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <Animated.View style={[{
                backgroundColor: 'rgba(72,43,123,1)',
                padding: 7,
                borderRadius: 30,
              }, { transform: [{ translateX }] }]}
              />
              <View style={isFocused ? [style.view] : false}>
                {label === 'Cart'
                  ? <IconFeather name="cart" color={isFocused ? colors.white : colors.gray_110} size={30} />
                  : <IconFontAwesome name={IconName[label as string]} color={isFocused ? colors.white : colors.gray_110} size={30} /> }
              </View>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: TAB_WIDTH,
    borderWidth: 1,
    position: 'relative',
    top: -10,
    borderRadius: 10,
    elevation: 5,
    borderColor: 'rgba(177,177,177,0.5)',
  },
  view: {
    backgroundColor: 'rgba(72,43,123,1)',
    padding: 7,
    borderRadius: 30,
  },
});
