import React, {useEffect} from 'react';
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
  colorStyles: any;
  shadowOffset: number;
  opacity: number;
};

const rotationConfigs = [
  {duration: 2000, shadowOffset: 5, opacity: 1},
  {duration: 2500, shadowOffset: 10, opacity: 0.5},
  {duration: 3000, shadowOffset: 15, opacity: 0.7},
];

const Square = React.memo(
  ({rotateStyles, colorStyles, shadowOffset, opacity}: SquareProps) => {
    console.log('QA - Square rendered');
    return (
      <Animated.View
        style={[
          styles.square,
          rotateStyles,
          colorStyles,
          {
            opacity: opacity,
            shadowOffset: {
              width: shadowOffset,
              height: shadowOffset,
            },
          },
        ]}
      />
    );
  },
);

export const Switch = React.memo(({setIsEnabled, isEnabled}: SwitchProps) => {
  const rotations = rotationConfigs.map(() => useSharedValue(0));

  useEffect(() => {
    rotations.map((rotation, i) => {
      rotation.value = withRepeat(
        withTiming(360, {
          duration: rotationConfigs[i].duration,
          easing: Easing.linear,
        }),
        -1,
        false,
      );
    });
  }, [rotations]);

  const switchAnimation = useAnimatedStyle(() => {
    return {
      left: isEnabled ? withTiming(75) : withTiming(0),
    };
  });

  const rotationsStyles = rotations.map((rotation, i) => {
    return useAnimatedStyle(() => {
      return {
        transform: [{rotate: `${rotation.value}deg`}],
      };
    });
  });

  const colorStyles = useAnimatedStyle(() => {
    const color = isEnabled
      ? colors.MAIN_COLORS.SECONDARY
      : colors.MAIN_COLORS.TERTIARY;
    return {
      backgroundColor: withTiming(color),
      shadowColor: withTiming(color),
    };
  });

  console.log('QA - Switch rendered');

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setIsEnabled(!isEnabled)}>
        <View style={styles.switchWrapper}>
          <Animated.View style={[styles.switch, switchAnimation]}>
            {rotationsStyles.map((style, i) => (
              <Square
                key={i}
                rotateStyles={style}
                colorStyles={colorStyles}
                shadowOffset={rotationConfigs[i].shadowOffset}
                opacity={rotationConfigs[i].opacity}
              />
            ))}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.heading}>
        {isEnabled ? 'I need Power' : 'I have the Power'}
      </Text>
    </View>
  );
});
