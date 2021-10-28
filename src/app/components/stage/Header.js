/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import screen from '../../asset/constants/Measure';
const HeaderComponent = ({content}) => {
  return (
    <LinearGradient
      colors={['#fe8c00', '#f83600']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}>
      <View>
        <View style={stylesHeader.headerContainer}>
          <Text
            style={
              content === 'Đã Đến Nơi'
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
  headerText: {
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    // marginLeft: screen.width / 2.5,
  },
  headerTextComplete: {
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    // marginLeft: screen.width / 4,
  },
});

export default HeaderComponent;
