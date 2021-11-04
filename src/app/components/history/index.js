/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import BodyComponent from './Body';
import HeaderComponent from './Header';

const HistoryComponent = ({navigation, route}) => {
  return (
    <View>
      {/* Header */}
      <HeaderComponent navigation={navigation} content="Lịch sử hoạt động" />
      <BodyComponent navigation={navigation} id={route.params.id} />
    </View>
  );
};

export default HistoryComponent;
