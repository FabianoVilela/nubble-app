import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Settings } from '@screens';

import { AppTabNavigator } from './AppTabNavigator';

export type AppStackParamList = {
  // HomeScreen: undefined;
  AppTabNavigator: undefined;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigator">
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={Settings} />
    </Stack.Navigator>
  );
}
