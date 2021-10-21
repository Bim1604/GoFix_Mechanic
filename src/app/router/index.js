/* eslint-disable prettier/prettier */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import data from '../asset/constants/NavData';
import {Text, View} from 'react-native';
import screen from '../asset/constants/Measure';
const Tab = createBottomTabNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#fe8c00',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            height: screen.width / 8,
          },
        }}>
        {data.map((item, index) => (
          <Tab.Screen
            name={item.name}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarHideOnKeyboard: true,
              tabBarLabelStyle: {
                fontSize: item.fontSize,
              },
              tabBarVisibilityAnimationConfig: true,
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <FontAwesomeIcon icon={item.icon} size={22} color={color} />
                  <Text
                    style={{
                      color: focused ? '#fe8c00' : '#A9A9A9',
                      fontSize: item.fontSize,
                    }}>
                    {item.name}
                  </Text>
                </View>
              ),
            }}
            key={index}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Route;
