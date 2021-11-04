/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import logo from '../../asset/image/Logo.png';
import screen from '../../asset/constants/Measure';
const apiUser = 'https://history-search-map.herokuapp.com/api/user';

const LoginComponent = ({navigation, setFullName, setInitPhone, setID}) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  let checkVar = false;
  const checkLogin = async () => {
    await fetch(apiUser)
      .then(res => res.json())
      .then(json => {
        for (let index = 0; index < json.length; index++) {
          if (
            phone === json[index].phone &&
            password === json[index].password &&
            json[index].role === 'mec'
          ) {
            setID(json[index].id);
            setInitPhone(json[index].phone);
            setFullName(json[index].fullName);
            checkVar = true;
          }
        }
      });
    if (!checkVar) {
      alert('Thông tin đăng nhập không hợp lệ');
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.headerLogoContainer}>
            <Image source={logo} style={styles.headerLogoImage} />
          </View>
          <Text style={styles.headerLogoTitle}>GoFix - Mechanic</Text>
          <Text style={styles.headerLogoText}>
            Sửa xe nhanh chóng và tiện lợi
          </Text>
        </View>
        {/* Body */}
        <View style={styles.bodyContainer}>
          <View style={styles.bodyContentContainer}>
            <Text style={styles.bodyRegisTitle}>Số điện thoại</Text>
            <TextInput
              onChangeText={setPhone}
              value={phone}
              onChange={text => setPhone(text)}
              style={styles.bodyRegisTextInput}
              placeholder="Nhập số điện thoại"
            />
            <Text style={styles.bodyRegisTitle}>Mật khẩu</Text>
            <TextInput
              onChangeText={setPassword}
              secureTextEntry={true}
              value={password}
              onChange={text => setPassword(text)}
              style={styles.bodyRegisTextInput}
              placeholder="Nhập mật khẩu"
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              checkLogin();
            }}
            style={styles.bodyRegisButton}>
            <Text style={styles.bodyRegisButtonText}>Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: screen.height,
    width: screen.width,
  },
  //   header
  headerContainer: {
    height: screen.height / 2.5,
    paddingTop: screen.height / 20,
  },
  headerLogoContainer: {
    alignItems: 'center',
  },
  headerLogoImage: {
    width: 130,
    height: 130,
  },
  headerLogoTitle: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: '700',
    color: '#ED7D31',
  },
  headerLogoText: {
    fontSize: 22,
    alignSelf: 'center',
    color: '#843C0C',
    fontWeight: '700',
  },
  //   body
  bodyContainer: {
    backgroundColor: '#FF9311',
    height: screen.height / 1.5,
    paddingTop: screen.height / 30,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
  },
  bodyContentContainer: {
    // alignItems: 'center',
  },
  bodyRegisTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: screen.width / 10,
    marginBottom: screen.height / 120,
    marginTop: screen.height / 120,
  },
  bodyRegisTextInput: {
    backgroundColor: '#fff',
    marginHorizontal: screen.width / 10,
    borderRadius: 10,
    paddingLeft: 15,
    height: screen.height / 17,
  },
  //   Button
  bodyRegisButton: {
    backgroundColor: '#DF6613',
    marginHorizontal: screen.width / 10,
    marginTop: screen.height / 40,
    height: screen.height / 17,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DF6613',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyRegisButtonText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default LoginComponent;
