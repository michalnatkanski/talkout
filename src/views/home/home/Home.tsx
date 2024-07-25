import React from 'react';
import {Button, Text, SafeAreaView} from 'react-native';
import {SCREENS} from '../../../navigation/constants';

export const Home = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate(SCREENS.HOME.PROFILE.ID)}
      />
    </SafeAreaView>
  );
};
