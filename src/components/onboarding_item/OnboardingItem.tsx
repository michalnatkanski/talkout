import {View, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {OnboardingProps} from '../../views/auth/onboarding/helpers';
import LottieView from 'lottie-react-native';
import styles from './OnboardingItem.styles';
type Props = {
  index: number;
  x: SharedValue<number>;
  item: OnboardingProps;
};

const RenderItem = ({index, x, item}: Props) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  const lottieAnimationStyle = useAnimatedStyle(() => {
    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [200, 0, -200],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{translateY: translateYAnimation}],
    };
  });

  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [1, 4, 4],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{scale: scale}],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    const delay = 100;

    return {
      opacity:
        x.value >= (index - 0.5) * SCREEN_WIDTH &&
        x.value <= (index + 0.5) * SCREEN_WIDTH
          ? withDelay(delay, withTiming(1))
          : withTiming(0),
    };
  });

  return (
    <View style={[styles.itemContainer, {width: SCREEN_WIDTH}]}>
      <View style={styles.circleContainer}>
        <Animated.View
          style={[
            {
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              borderRadius: SCREEN_WIDTH / 2,
            },
            circleAnimation,
          ]}
        />
      </View>
      <Animated.View style={lottieAnimationStyle}>
        <LottieView
          source={item.animation}
          style={{
            width: SCREEN_WIDTH * 0.9,
            height: SCREEN_WIDTH * 0.9,
          }}
          autoPlay
          speed={1.5}
        />
      </Animated.View>
      <View>
        <Animated.Text style={[styles.itemTitle, textAnimationStyle]}>
          {item.title}
        </Animated.Text>
        <Animated.Text style={[styles.itemSubtitle, textAnimationStyle]}>
          {item.subtitle}
        </Animated.Text>
      </View>
    </View>
  );
};

export default RenderItem;
