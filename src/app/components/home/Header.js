/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {stylesHeader} from '../../styles/home/index';
const HeaderComponent = () => {
  return (
    <LinearGradient
      style={stylesHeader.default.LinearGradient}
      colors={['#fe8c00', '#f83600']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}>
      <View style={stylesHeader.default.headerContainer}>
        <Text style={stylesHeader.default.headerText}>GoFix - Mechanic</Text>
      </View>
      <Text style={stylesHeader.default.headerWelcome}>
        Chào mừng bạn đến với GoFix
      </Text>
    </LinearGradient>
  );
};

export default HeaderComponent;
