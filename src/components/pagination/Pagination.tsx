import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SharedValue} from 'react-native-reanimated';
import {OnboardingProps} from '../../views/auth/onboarding/helpers';
import Dot from './Dot';
import styles from './Pagination.styles';
type Props = {
  data: OnboardingProps[];
  x: SharedValue<number>;
};
const Pagination = ({data, x}: Props) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => {
        return <Dot index={index} x={x} key={index} />;
      })}
    </View>
  );
};

export default Pagination;
