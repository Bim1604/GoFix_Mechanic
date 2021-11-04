/* eslint-disable prettier/prettier */
import {faChevronRight, faCogs} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import screen from '../../asset/constants/Measure';

const apiUser = 'https://history-search-map.herokuapp.com/api/user';

const ProfileComponent = ({navigation, route}) => {
  const [phone, setPhone] = useState(route.params.phone);
  const [id, setID] = useState(route.params.id);
  const [data, setData] = useState({
    fullName: '',
    avatar:
      'https://static2.yan.vn/YanNews/2167221/202003/dan-mang-du-trend-thiet-ke-avatar-du-kieu-day-mau-sac-tu-anh-mac-dinh-f4781c7a.jpg',
    gender: '',
    DOB: '',
    phone: '',
    password: '',
  });
  useEffect(() => {
    fetch(apiUser)
      .then(res => res.json())
      .then(json => {
        for (let index = 0; index < json.length; index++) {
          if (id === json[index].id && json[index].role === 'mec') {
            setData(json[index]);
          }
        }
      });
  }, [id]);
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailsInfoComponent', {
              phone: phone,
              id: id,
            });
          }}
          style={styles.bodyUserNavContainer}>
          <View style={styles.bodyUserNavImageContainer}>
            <Image
              source={{uri: data.avatar}}
              style={styles.bodyUserNavImage}
            />
          </View>
          <View style={styles.bodyUserNavTextContainer}>
            <Text style={styles.bodyUserNavText}>{data.fullName}</Text>
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
        {/* Đăng xuất */}
        <TouchableOpacity
          onPress={() => {
            route.params.setFullName('');
          }}
          style={styles.bodyUserNavContainer}>
          <View style={styles.bodyUserNavTextContainer}>
            <Text style={styles.bodyLogoutText}>Đăng xuất</Text>
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
  // Logout
  bodyLogoutText: {
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default ProfileComponent;
