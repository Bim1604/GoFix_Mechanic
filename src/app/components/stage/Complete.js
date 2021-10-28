/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
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

const CompleteComponent = ({navigation, route}) => {
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
    marginTop: screen.height / 5,
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
