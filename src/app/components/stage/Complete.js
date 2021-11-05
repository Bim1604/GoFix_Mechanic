/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {
  numberOfStage,
  stageProcess,
  stepIndicatorStyles,
} from '../../asset/constants/Process';
import HeaderComponent from './Header';
import screen from '../../asset/constants/Measure';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
const indexStage = 2;

const apiHistory =
  'https://history-search-map.herokuapp.com/api/historyCustomer';


const CompleteComponent = ({navigation, route}) => {
  const [time, setTime] = useState('');
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + '-' + month + '-' + year;
  };
  const getCurrentTime = () => {
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    return hour + ':' + minutes + ':' + seconds;
  };

  // Thoi gian hien tai
  useEffect(() => {
    var date = getCurrentDate();
    var timeCurrent = getCurrentTime();
    setTime(timeCurrent + ' ' + date);
    sendReqToCus();
  }, []);

  const sendReqToCus = async () => {
    await fetch('http://192.168.1.12:4000/done');
  };

  const AddComplete = () => {
    fetch(apiHistory, {
      method: 'POST',
      body: JSON.stringify({
        name: route.params.fullName,
        avatar: route.params.avatar,
        phone: route.params.phone,
        address: route.params.address,
        detailsFix: route.params.detailsFix,
        time: time,
        description: route.params.description === undefined ? '' : route.params.description,
        image: route.params.image,
        cusID: route.params.userID,
        mecID: route.params.mecID,
        price: route.params.total,
        status: route.params.status,
        motor: route.params.cate !== 'Xe máy' ? '' : route.params.vehicleName,
        car: route.params.cate === 'Xe máy' ? '' : route.params.vehicleName,
        reasonMechanicCancel: '',
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderComponent navigation={navigation} content="Hoàn thành sửa chữa" />
      {/* Body */}
      <View style={styles.bodyContainer}>
        <View style={styles.bodyCompleteContainer}>
          <View style={styles.bodyImageContainer}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={styles.bodyImageComplete}
              size={180}
              color="#33CC00"
            />
          </View>
          <Text style={styles.bodyTextComplete}>ĐÃ HOÀN THÀNH SỬA CHỮA</Text>
        </View>
      </View>
      {/* Progress */}
      <View>
        <StepIndicator
          stepCount={numberOfStage}
          customStyles={stepIndicatorStyles}
          currentPosition={indexStage}
          labels={stageProcess}
        />
      </View>
      {/* Go Back */}
      <LinearGradient
        style={styles.bodyGoBackContainer}
        colors={['#fe8c00', '#f83600']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}>
        <TouchableOpacity
          onPress={() => {
            AddComplete();
            navigation.popToTop();
          }}
          style={styles.bodyGoBackButton}>
          <Text style={styles.bodyGoBackText}>Tiếp tục nhận đơn</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: screen.height,
  },
  bodyContainer: {
    height: screen.height / 2,
  },
  // Header
  bodyCompleteContainer: {
    height: '100%',
  },
  // Image
  bodyImageContainer: {
    height: '80%',
    paddingTop: 20,
  },
  bodyImageComplete: {
    alignSelf: 'center',
    marginTop: screen.height / 15,
  },
  // Text
  bodyTextComplete: {
    fontWeight: '700',
    fontSize: 23,
    alignSelf: 'center',
  },
  // Go back
  bodyGoBackContainer: {
    marginTop: screen.height / 7,
    marginHorizontal: screen.width / 20,
    height: screen.height / 15,
    borderRadius: 8,
  },
  bodyGoBackButton: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyGoBackText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CompleteComponent;
