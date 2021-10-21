/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeComponent from '../components/home/index';
import AcceptComponent from '../components/accept';
import MapComponent from '../components/map';
import {getFocusedRouteNameFromRoute} from '@react-navigation/core';
import ProfileComponent from '../components/profile';
import SettingComponent from '../components/profile/Setting';

const Stack = createStackNavigator();

const HomeScreen = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'MapComponent') {
      navigation.setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          display: 'flex',
        },
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeComponent" component={HomeComponent} />
      <Stack.Screen name="AcceptComponent" component={AcceptComponent} />
      <Stack.Screen name="MapComponent" component={MapComponent} />
    </Stack.Navigator>
  );
};

const ProfileScreen = ({navigation, route}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileComponent" component={ProfileComponent} />
      <Stack.Screen name="SettingComponent" component={SettingComponent} />
    </Stack.Navigator>
  );
};

export {HomeScreen, ProfileScreen};
