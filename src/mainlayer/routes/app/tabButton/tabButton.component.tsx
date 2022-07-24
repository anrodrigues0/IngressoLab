/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React from 'react';
import IconFeather from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, Animated } from 'react-native';
import { Button, CircleIcon } from './tabButton.components.styles';

interface Props extends BottomTabBarButtonProps {
    nameIcon?:string
}

const bottomPos = 20;
export const TabButtonComponent = ({ nameIcon, accessibilityState, onPress }:Props) => {
  const { colors } = useTheme();
  const focused = accessibilityState?.selected;
  const [scale] = React.useState(new Animated.Value(0));
  const [test] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    if (focused) {
      Animated.sequence([
        Animated.spring(scale, {
          toValue: 15,
          useNativeDriver: true,
        }),

        Animated.spring(test, {
          toValue: -20,
          useNativeDriver: true,
          velocity: 300,
          delay: 0,
        }),
      ]).start();
    } else {
      Animated.sequence([
        Animated.spring(scale, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.spring(test, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [focused]);

  return (
    <Button onPress={onPress}>
      <CircleIcon IsFocused={focused} style={focused ? [animationStyle.view, { borderRadius: scale, translateY: test }] : false}>
        {!nameIcon
          ? <IconFeather name="cart" color={focused ? colors.white : colors.gray_110} size={30} />
          : <IconFontAwesome name={nameIcon} color={focused ? colors.white : colors.gray_110} size={30} />}
      </CircleIcon>
    </Button>
  );
};

const animationStyle = StyleSheet.create({
  view: {
    position: 'relative',
  },