/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import BodyDetails from './Body';
import HeaderComponent from './Header';

const DetailsItem = ({navigation, route}) => {
  return (
    <View>
      <HeaderComponent navigation={navigation} content="Chi tiết đơn hàng" />
      <BodyDetails
        name={route.params.name}
        time={route.params.time}
        address={route.params.address}
        detailsFix={route.params.detailsFix}
        price={route.params.price}
        status={route.params.status}
        avatar={route.params.avatar}
        phone={route.params.phone}
        motor={route.params.motor}
        car={route.params.car}
        description={route.params.description}
        image={route.params.image}
      />
    </View>
  );
};

export default DetailsItem;
