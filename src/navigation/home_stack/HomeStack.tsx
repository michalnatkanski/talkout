import React from 'react';
import {SCREENS} from '../constants';
import {Home} from '../../views/home/home/Home';
import {Profile} from '../../views/home/profile/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.HOME.HOME.ID}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.HOME.PROFILE.ID}
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
