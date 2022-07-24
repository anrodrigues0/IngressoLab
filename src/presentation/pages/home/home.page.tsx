/* eslint-disable no-return-assign */
import React from 'react';
import {
  Text, View, StyleSheet, Animated,
} from 'react-native';
import { ContainerMain } from './home.page.style';

export const HomePage = () => {
  const progress = React.useRef(new Animated.Value(0.5)).current;
  const scale = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.spring(progress, {
            toValue: 1,
            useNativeDriver: true,
          }),

          Animated.spring(progress, {
            toValue: 0.5,
            useNativeDriver: true,
          }),
        ]),

        Animated.sequence([
          Animated.spring(scale, {
            toValue: 2,
            useNativeDriver: true,
          }),

          Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
          }),
        ]),
      ]),
      { iterations: 3 },
    ).start();
  }, []);

  return (
    <ContainerMain>
      <View>
        <Text style={{ color: 'black', fontSize: 22 }}> Tela Home </Text>
      </View>
      {/* <Animated.View style={[styles.square, {
        borderRadius: progress.interpolate({
          inputRange: [0.5, 1],
          outputRange: [SIZE / 4, SIZE / 2],
        }),
        opacity: progress,
        transform: [{ scale }, {
          rotate: progress.interpolate({
            inputRange: [0.5, 1],
            outputRange: [`${Math.PI}deg`, `${2 * Math.PI}deg`],
          }),
        }],
      }]}
      /> */}
    </ContainerMain>
  );
};

const SIZE = 100;
const styles = StyleSheet.create({
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'rgba(0,0,256,0.5)',
  },
});
