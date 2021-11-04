/* eslint-disable prettier/prettier */
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import screen from '../../asset/constants/Measure';
const HeaderComponent = ({navigation, content}) => {
  return (
    <LinearGradient
      colors={['#fe8c00', '#f83600']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}>
      <View>
        <View style={stylesHeader.headerContainer}>
          {content === 'Tiến trình sửa chữa' ||
          content === 'Hoàn thành sửa chữa' ? (
            <View />
          ) : (
            <TouchableOpacity
              style={stylesHeader.iconBack}
              onPress={() => {
                navigation.pop();
              }}>
              <FontAwesomeIcon icon={faChevronLeft} size={23} color="#fff" />
            </TouchableOpacity>
          )}
          <Text
            style={
              content === 'Tiến trình sửa chữa' ||
              content === 'Hoàn thành sửa chữa'
                ? stylesHeader.headerText
                : stylesHeader.headerTextComplete
            }>
            {content}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const stylesHeader = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fa',
  },
  headerContainer: {
    flexDirection: 'row',
    height: screen.height / 12,
    justifyContent: 'center',
  },
  iconBack: {
    alignSelf: 'center',
    marginLeft: screen.width / 22,
  },
  headerText: {
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    // marginLeft: screen.width / 3.5,
  },
  headerTextComplete: {
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginLeft: screen.width / 35,
  },
});

export default HeaderComponent;
