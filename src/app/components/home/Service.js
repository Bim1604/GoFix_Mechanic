/* eslint-disable prettier/prettier */
import {faCar, faMotorcycle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {stylesService} from '../../styles/home/index';
const Services = ({
  setIsFixMotor,
  setIsFixCar,
  setIsActive,
  isFixMotor,
  isFixCar,
  isActive,
}) => {
  return (
    <View style={stylesService.default.servicesContainer}>
      <View>
        <Text style={stylesService.default.bodyTextTitle}>
          {' '}
          Dịch vụ sửa chữa
        </Text>
      </View>
      <View style={stylesService.default.servicesItemContainer}>
        <TouchableOpacity
          onPress={() => {
            setIsFixMotor(prev => !prev);
          }}
          style={stylesService.default.servicesItemButtonContainer}>
          <View
            style={
              isFixMotor
                ? stylesService.default.servicesItemReadyCircle
                : stylesService.default.servicesItemCircle
            }>
            <FontAwesomeIcon icon={faMotorcycle} size={30} color="#fff" />
          </View>
          <Text
            style={
              !isFixMotor
                ? stylesService.default.servicesItemText
                : stylesService.default.servicesItemReadyText
            }>
            Sửa xe máy
          </Text>
        </TouchableOpacity>
        <View style={stylesService.default.servicesItemLine} />
        <TouchableOpacity
          onPress={() => {
            setIsFixCar(prev => !prev);
          }}
          style={stylesService.default.servicesItemButtonContainer}>
          <View
            style={
              isFixCar
                ? stylesService.default.servicesItemReadyCircle
                : stylesService.default.servicesItemCircle
            }>
            <FontAwesomeIcon icon={faCar} size={30} color="#fff" />
          </View>
          <Text
            style={
              !isFixCar
                ? stylesService.default.servicesItemText
                : stylesService.default.servicesItemReadyText
            }>
            Sửa ô tô
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Services;
