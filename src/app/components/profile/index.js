/* eslint-disable prettier/prettier */
import {faChevronRight, faCog, faCogs} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import screen from '../../asset/constants/Measure';
import ava from '../../asset/image/mechanic.jpg';
const ProfileComponent = ({navigation}) => {
  return (
    <View>
      {/* Header */}
      <LinearGradient
        colors={['#fe8c00', '#f83600']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}
        style={styles.headerLinearContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Tài khoản</Text>
        </View>
      </LinearGradient>
      {/* Body */}
      <View>
        {/* ava */}
        <TouchableOpacity style={styles.bodyUserNavContainer}>
          <View style={styles.bodyUserNavImageContainer}>
            <Image source={ava} style={styles.bodyUserNavImage} />
          </View>
          <View style={styles.bodyUserNavTextContainer}>
            <Text style={styles.bodyUserNavText}>Trần Đại Minh</Text>
          </View>
          <View style={styles.bodyUserNavIconContainer}>
            <FontAwesomeIcon icon={faChevronRight} size={20} color="#808080" />
          </View>
        </TouchableOpacity>
        {/* Setting */}
        <TouchableOpacity
          style={styles.bodyUserNavContainer}
          onPress={() => {
            navigation.navigate('SettingComponent');
          }}>
          <View style={styles.bodyUserNavImageContainer}>
            <FontAwesomeIcon icon={faCogs} size={40} color="orange" />
          </View>
          <View style={styles.bodyUserNavTextContainer}>
            <Text style={styles.bodyUserNavText}>Chuyển đổi dịch vụ</Text>
          </View>
          <View style={styles.bodyUserNavIconContainer}>
            <FontAwesomeIcon icon={faChevronRight} size={20} color="#808080" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Header
  headerLinearContainer: {
    height: screen.height / 13,
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
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
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyUserNavImage: {
    height: 65,
    width: 65,
    borderRadius: 50,
  },
  // body user nav Text
  bodyUserNavTextContainer: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  bodyUserNavText: {
    fontSize: 17,
    fontWeight: '700',
  },
  // body user nav icon
  bodyUserNavIconContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileComponent;
