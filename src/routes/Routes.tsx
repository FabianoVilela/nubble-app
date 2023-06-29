import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from '../screens/auth/Login';
import {SignUp} from '../screens/auth/SignUp';
import {Success} from '../screens/auth/Success';
import {ForgotPassword} from '../screens/auth/ForgotPassword';
import {IconProps} from '../components/Icon';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}
        initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="SignUpScreen" component={SignUp} />
        <Stack.Screen name="SuccessScreen" component={Success} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
