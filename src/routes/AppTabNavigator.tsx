import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { Favorite, Home, NewPost, Profile } from '@screens';

import { AppTabBar } from './AppTabBar';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  ProfileScreen: undefined;
};
const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  const renderTabBar = (props: BottomTabBarProps) => {
    return <AppTabBar {...props} />;
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => renderTabBar(props)}>
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="NewPostScreen" component={NewPost} />
      <Tab.Screen name="FavoriteScreen" component={Favorite} />
      <Tab.Screen name="ProfileScreen" component={Profile} />
    </Tab.Navigator>
  );
}
