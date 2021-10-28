/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import BodyComponent from './Body';
import HeaderComponent from './Header';

const StartFixComponent = ({navigation, route}) => {
  return (
    <View>
      {/* Header */}
      <HeaderComponent content="Tiến trình sửa chữa" navigation={navigation} />
      {/* Body */}
      <BodyComponent
        navigation={navigation}
        total={route.params.total === undefined ? 0 : route.params.total}
      />
    </View>
  );
};

export default StartFixComponent;
