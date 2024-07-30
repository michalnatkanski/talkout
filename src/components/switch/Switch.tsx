import React, {useState, useEffect} from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import styles from './Switch.styles';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {colors} from '../../styles';

type SwitchProps = {
  setIsEnabled: (isEnabled: boolean) => void;
  isEnabled: boolean;
};

type SquareProps = {
  rotateStyles: any;
  isEnabled: boolean;
  shadowOffset: number;
  opacity: number;
};

const Square = ({
  rotateStyles,
  isEnabled,
  shadowOffset,
  opacity,
}: SquareProps) => {
  const color = isEnabled
    ? colors.MAIN_COLORS.SECONDARY
    : colors.MAIN_COLORS.TERTIARY;
  return (
    <Animated.View
      style={[
        styles.square,
        rotateStyles,
        {
          opacity: opacity,
          backgroundColor: color,
          shadowColor: color,
          shadowOffset: {
            width: shadowOffset,
            height: shadowOffset,
          },
        },
      ]}
    />
  );
};

export const Switch = ({setIsEnabled, isEnabled}: SwitchProps) => {
  const rotation1 = useSharedValue(0);
  const rotation2 = useSharedValue(0);
  const rotation3 = useSharedValue(0);

  useEffect(() => {
    rotation1.value = withRepeat(
      withTiming(360, {
        duration: 2000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
    rotation2.value = withRepeat(
      withTiming(360, {
        duration: 2500,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
    rotation3.value = withRepeat(
      withTiming(360, {
        duration: 3000,

        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, []);

  const switchAnimation = useAnimatedStyle(() => {
    return {
      left: isEnabled ? withTiming(75) : withTiming(0),
    };
  });

  const rotate1Styles = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation1.value}deg`}],
    };
  });

  const rotate2Styles = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation2.value}deg`}],
    };
  });

  const rotate3Styles = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation3.value}deg`}],
    };
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setIsEnabled(!isEnabled)}>
        <View style={styles.switchWrapper}>
          <Animated.View style={[styles.switch, switchAnimation]}>
            <Square
              rotateStyles={rotate1Styles}
              isEnabled={isEnabled}
              shadowOffset={5}
              opacity={1}
            />
            <Square
              rotateStyles={rotate2Styles}
              isEnabled={isEnabled}
              shadowOffset={10}
              opacity={0.5}
            />
            <Square
              rotateStyles={rotate3Styles}
              isEnabled={isEnabled}
              shadowOffset={15}
              opacity={0.7}
            />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.heading}>
        {isEnabled ? 'I need a Power' : 'I have a Power'}
      </Text>
    </View>
  );
};
