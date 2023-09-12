import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Favorite, Home, NewPost, Profile } from '@screens';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  NewPost: undefined;
  Favorite: undefined;
  Profile: undefined;
};
const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="NewPost" component={NewPost} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
