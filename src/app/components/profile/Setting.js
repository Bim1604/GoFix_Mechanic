/* eslint-disable prettier/prettier */
import {
  faArrowLeft,
  faCar,
  faMotorcycle,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import screen from '../../asset/constants/Measure';
import {RadioButton} from 'react-native-paper';

const SettingComponent = ({navigation}) => {
  const [value, setValue] = useState('motor');
  return (
    <View>
      {/* Header */}
      <LinearGradient
        colors={['#fe8c00', '#f83600']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}
        style={styles.headerLinearContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}>
          <FontAwesomeIcon icon={faArrowLeft} size={25} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Cài đặt nhận đơn</Text>
        </View>
      </LinearGradient>
      {/* Body */}
      <View>
        <RadioButton.Group
          onValueChange={newValue => setValue(newValue)}
          value={value}>
          <View style={styles.bodyUserNavContainer}>
            <View style={styles.bodyUserNavImageContainer}>
              <FontAwesomeIcon icon={faMotorcycle} size={40} color="#fff" />
            </View>
            <View style={styles.bodyUserNavTextContainer}>
              <Text style={styles.bodyUserNavText}>Sửa xe máy</Text>
            </View>
            <View style={styles.bodyUserNavIconContainer}>
              <RadioButton value="motor" />
            </View>
          </View>
          <View style={styles.bodyUserNavContainer}>
            <View style={styles.bodyUserNavImageContainer}>
              <FontAwesomeIcon icon={faCar} size={40} color="#fff" />
            </View>
            <View style={styles.bodyUserNavTextContainer}>
              <Text style={styles.bodyUserNavText}>Sửa ô tô</Text>
            </View>
            <View style={styles.bodyUserNavIconContainer}>
              <RadioButton value="car" />
            </View>
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Header
  headerLinearContainer: {
    height: screen.height / 13,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  headerContainer: {
    marginLeft: screen.width / 5,
  },
  headerText: {
    fontSize: 23,
    fontWeight: '700',
    bottom: 3,
    color: '#fff',
  },
  // body
  bodyUserNavContainer: {
    height: screen.height / 7,
    width: screen.width,
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginBottom: screen.height / 50,
  },
  bodyUserNavImageContainer: {
    alignSelf: 'center',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#fb6100',
    borderColor: '#fb6100',
    marginLeft: screen.width / 20,
  },
  bodyUserNavImage: {
    height: 65,
    width: 65,
    borderRadius: 50,
  },
  // body user nav Text
  bodyUserNavTextContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: screen.width / 8,
    width: '30%',
  },
  bodyUserNavText: {
    fontSize: 20,
    fontWeight: '700',
  },
  // body user nav icon
  bodyUserNavIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: screen.width / 4,
  },
});

export default SettingComponent;
