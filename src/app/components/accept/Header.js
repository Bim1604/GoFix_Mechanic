/* eslint-disable prettier/prettier */
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {stylesHeader} from '../../styles/accept/index';

const HeaderComponent = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#fe8c00', '#f83600']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}>
      <View>
        <View style={stylesHeader.default.headerContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}>
            <FontAwesomeIcon
              style={stylesHeader.default.headerIconBack}
              icon={faArrowLeft}
              size={30}
            />
          </TouchableOpacity>
          <Text style={stylesHeader.default.headerText}>
            YÊU CẦU SỬA CHỮA
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HeaderComponent;
