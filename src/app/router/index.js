/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import data from '../asset/constants/NavData';
import {Text, View} from 'react-native';
import screen from '../asset/constants/Measure';
import LoginScreen from '../components/auth/Login';

import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

const Tab = createBottomTabNavigator();


const Route = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  if (fullName === '') {
    return (
      <LoginScreen
        setFullName={setFullName}
        setInitPhone={setPhone}
        navigation={navigation}
      />
    );
  } else {
    return (
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
            initialParams={{
              fullName: fullName,
              phone: phone,
              setFullName: setFullName,
            }}
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
    );
  }
};

export default Route;
