/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import BodyAccept from './BodyAccept';
import HeaderComponent from './Header';

const AcceptComponent = ({navigation}) => {
  const [total, setTotal] = useState();
  return (
    <ScrollView>
      <View>
        <HeaderComponent navigation={navigation} />
        <BodyAccept total={total} setTotal={setTotal} navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default AcceptComponent;
