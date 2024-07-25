import React from 'react';
import {SCREENS} from '../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding} from '../../views/auth/onboarding/OnBoarding';
import {SignUp} from '../../views/auth/signup/SignUp';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.AUTH.ONBOARDING.ID}
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.AUTH.SIGN_UP.ID}
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
