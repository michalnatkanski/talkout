import React from 'react';
import {SafeAreaView, FlatList, ViewToken, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../styles';
import styles from './OnBoarding.styles';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
} from 'react-native-reanimated';
import {data, OnboardingProps} from './helpers';
import OnboardingItem from '../../../components/onboarding_item/OnboardingItem';
import Pagination from '../../../components/pagination/Pagination';
import {PaginationButton} from '../../../components/pagination_button/PaginationButton';
export const OnBoarding: React.FC = () => {
  const flatListRef = useAnimatedRef<FlatList<OnboardingProps>>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0].index !== null) {
      flatListIndex.value = viewableItems[0].index;
    }
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <LinearGradient
      colors={colors.GRADIENT_COLORS.PRIMARY}
      style={styles.container}>
      <SafeAreaView>
        <Animated.FlatList
          ref={flatListRef}
          onScroll={onScroll}
          data={data}
          renderItem={({item, index}) => {
            return <OnboardingItem item={item} index={index} x={x} />;
          }}
          keyExtractor={item => item.id.toString()}
          scrollEventThrottle={16}
          horizontal={true}
          bounces={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            minimumViewTime: 300,
            viewAreaCoveragePercentThreshold: 10,
          }}
        />
        <View style={styles.bottomContainer}>
          <Pagination data={data} x={x} />
          <PaginationButton
            flatListRef={flatListRef}
            flatListIndex={flatListIndex}
            dataLength={data.length}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
