/* eslint-disable prettier/prettier */
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {stylesStatusWork} from '../../styles/home/index';
const StatusWork = ({isActive, setIsActive, setModalVisible}) => {
  return (
    <View style={stylesStatusWork.default.statusContainer}>
      <View style={stylesStatusWork.default.titleContainer}>
        <Text style={stylesStatusWork.default.bodyTextTitleStatus}>
          Trạng thái hoạt động:
        </Text>
        <Text
          style={
            !isActive
              ? stylesStatusWork.default.bodyTextTitle
              : stylesStatusWork.default.bodyTextReadyTitle
          }>
          {isActive ? 'Đang hoạt động' : 'Không hoạt động'}
        </Text>
      </View>
      <View style={stylesStatusWork.default.statusButtonContainer}>
        <LinearGradient
          colors={['#fe8c00', '#f83600']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={stylesStatusWork.default.bodyLinearGradient}>
          <TouchableOpacity
            style={
              isActive === false
                ? stylesStatusWork.default.bodyInActiveButton
                : stylesStatusWork.default.bodyActiveButton
            }
            onPress={() => {
              setIsActive(prevState => !prevState);
              // if (!isActive) {
              //   setTimeout(() => setModalVisible(true), 2000);
              // }
            }}>
            <FontAwesomeIcon
              style={
                isActive === false
                  ? stylesStatusWork.default.bodyInActiveText
                  : stylesStatusWork.default.bodyActiveText
              }
              icon={faPowerOff}
              size={20}
            />
            <Text
              style={
                isActive === false
                  ? stylesStatusWork.default.bodyInActiveText
                  : stylesStatusWork.default.bodyActiveText
              }>
              {isActive === false ? 'Bật kết nối' : 'Tắt kết nối'}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default StatusWork;
