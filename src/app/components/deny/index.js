/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponent from './Header';
import screen from '../../asset/constants/Measure';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import LinearGradient from 'react-native-linear-gradient';
const dataReason = [
  {
    text: 'Không liên hệ được với khách hàng',
  },
  {
    text: 'Khách ở quá xa',
  },
  {
    text: 'Thợ sửa gặp vấn đề bất khả kháng mà không thể tiếp tục sửa xe',
  },
  {
    text: 'Lý do khác',
  },
];
const DenyComponent = ({navigation}) => {
  const [checkAnotherProblem, setCheckAnotherProblem] = useState(false);
  const [checkLackOfParts, setCheckLackOfParts] = useState(false);
  const [checkChangeMind, setCheckChangeMind] = useState(false);
  const [checkHardFix, setCheckHardFix] = useState(false);
  const [anotherProblem, setAnotherProblem] = useState('');
  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderComponent navigation={navigation} content="Hủy đơn" />
      {/* Body */}
      <View style={styles.bodyContainer}>
        <View style={styles.bodyTitleContainer}>
          <Text style={styles.bodyTitleText}>Lý do hủy đơn</Text>
        </View>
        <View style={styles.bodyReasonContainer}>
          {dataReason.map((info, index) => (
            <View key={index} style={styles.bodyCheckBoxMiniContainer}>
              <BouncyCheckbox
                style={styles.bodyCheckBox}
                size={20}
                fillColor="#fb6100"
                unfillColor="#FFFFFF"
                disableText
                iconStyle={styles.bodyCheckBoxIcon}
                onPress={() => {
                  if (index === 0) {
                    setCheckLackOfParts(prevState => !prevState);
                  }
                  if (index === 1) {
                    setCheckChangeMind(prevState => !prevState);
                  }
                  if (index === 2) {
                    setCheckHardFix(prevState => !prevState);
                  }
                  if (index === 3) {
                    setCheckAnotherProblem(prev => !prev);
                  }
                }}
              />
              <Text style={styles.bodyReasonText}> {info.text}</Text>
            </View>
          ))}
          <View>
            {checkAnotherProblem === true ? (
              <TextInput
                multiline={true}
                style={styles.bodyCheckBoxContent}
                onChangeText={setAnotherProblem}
                value={anotherProblem}
                onChange={text => setAnotherProblem(text)}
                placeholder="Nhập vấn đề của bạn"
              />
            ) : (
              <View />
            )}
          </View>
        </View>
      </View>
      {/* Footer */}
      <LinearGradient
        style={styles.footerButtonSendContainer}
        colors={['#fe8c00', '#f83600']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}>
        <TouchableOpacity
          onPress={() => {
            navigation.popToTop();
          }}
          style={styles.footerButtonSend}>
          <Text style={styles.footerButtonText}>Gửi Lý do</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: screen.height,
    backgroundColor: '#fff',
  },
  bodyTitleContainer: {
    alignItems: 'center',
    marginTop: screen.height / 30,
  },
  bodyTitleText: {
    fontSize: 21,
  },
  // body
  bodyContainer: {
    height: screen.height / 1.3,
  },
  // Reason
  bodyReasonContainer: {
    marginTop: screen.height / 30,
    marginLeft: screen.width / 20,
    width: '90%',
  },
  bodyCheckBoxMiniContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  bodyCheckBox: {
    marginBottom: 10,
    marginRight: 5,
  },
  bodyCheckBoxIcon: {
    borderColor: 'red',
  },
  bodyCheckBoxContent: {
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: -5,
    width: screen.width / 1.1,
    backgroundColor: '#f7f7f7',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#f7f7f7',
    minHeight: screen.height / 8,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  bodyReasonText: {
    fontSize: 16,
    width: '90%',
  },
  // Footer
  footerButtonSendContainer: {
    marginHorizontal: 20,
    borderRadius: 8,
    height: screen.height / 15,
    marginTop: screen.height / 40,
  },
  footerButtonSend: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 21,
  },
});

export default DenyComponent;
