import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Favorite, Home, NewPost, Profile } from '@screens';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  ProfileScreen: undefined;
};
const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="NewPostScreen" component={NewPost} />
      <Tab.Screen name="FavoriteScreen" component={Favorite} />
      <Tab.Screen name="ProfileScreen" component={Profile} />
    </Tab.Navigator>
  );
}
