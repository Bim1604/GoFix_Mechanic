/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeComponent from '../components/home/index';
import AcceptComponent from '../components/accept';
import MapComponent from '../components/map';
import {getFocusedRouteNameFromRoute} from '@react-navigation/core';
import ProfileComponent from '../components/profile';
import SettingComponent from '../components/profile/Setting';
import StartFixComponent from '../components/stage';
import CompleteComponent from '../components/stage/Complete';
import CancelComponent from '../components/stage/Cancel';
import DenyComponent from '../components/deny';
import HistoryComponent from '../components/history';
import DetailsItem from '../components/detailsHistory/index';
import InfoDetailsComponent from '../components/profile/InfoDetails';

const Stack = createStackNavigator();

const HomeScreen = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === 'MapComponent' ||
      routeName === 'StageComponent' ||
      routeName === 'StageCompleteComponent' ||
      routeName === 'CancelComponent' ||
      routeName === 'DenyComponent'
    ) {
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
      <Stack.Screen
        initialParams={{
          id: route.params.id,
        }}
        name="HomeComponent"
        component={HomeComponent}
      />
      <Stack.Screen name="AcceptComponent" component={AcceptComponent} />
      <Stack.Screen name="DenyComponent" component={DenyComponent} />
      <Stack.Screen name="MapComponent" component={MapComponent} />
      <Stack.Screen name="StageComponent" component={StartFixComponent} />
      <Stack.Screen
        name="StageCompleteComponent"
        component={CompleteComponent}
      />
      <Stack.Screen name="CancelComponent" component={CancelComponent} />
    </Stack.Navigator>
  );
};

const ProfileScreen = ({route}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        initialParams={{
          fullName: route.params.fullName,
          phone: route.params.phone,
          id: route.params.id,
          setFullName: route.params.setFullName,
        }}
        name="ProfileComponent"
        component={ProfileComponent}
      />
      <Stack.Screen name="SettingComponent" component={SettingComponent} />
      <Stack.Screen
        name="DetailsInfoComponent"
        component={InfoDetailsComponent}
      />
    </Stack.Navigator>
  );
};

const HistoryScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HistoryComponent" component={HistoryComponent} />
      <Stack.Screen name="HistoryDetailsComponent" component={DetailsItem} />
    </Stack.Navigator>
  );
};

export {HomeScreen, ProfileScreen, HistoryScreen};
