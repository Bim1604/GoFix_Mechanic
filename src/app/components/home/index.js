/* eslint-disable prettier/prettier */
import {
  faDirections,
  faMapMarkerAlt,
  faMotorcycle,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Image} from 'react-native';
import screen from '../../asset/constants/Measure';
import AdvertisementComponent from './Advertisement';
import HeaderComponent from './Header';
import Services from './Service';
import StatusWork from './StatusWork';
import Modal from 'react-native-modal';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import ava from '../../asset/image/mechanic.jpg';

const HomeComponent = ({navigation, route}) => {
  const [isActive, setIsActive] = useState(false);
  const [isFixMotor, setIsFixMotor] = useState(false);
  const [isFixCar, setIsFixCar] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  function ModalTester() {
    return (
      <View>
        <Modal
          onBackdropPress={() => {
            toggleModal();
          }}
          isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeaderContainer}>
              <View>
                <Image source={ava} style={styles.modalHeaderImage} />
              </View>
              <View style={styles.modalHeaderDetailsContainer}>
                <View style={styles.modalHeaderTitle}>
                  <FontAwesomeIcon
                    icon={faUser}
                    size={18}
                    color="orange"
                    style={styles.modalHeaderIconUser}
                  />
                  <Text>Trần Đại Đăng</Text>
                </View>
                <View style={styles.modalHeaderTitle}>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size={23}
                    color="orange"
                    style={styles.modalHeaderIconLocate}
                  />
                  <Text>231 Lê Văn Việt Quận 9, Thành phố Hồ Chí Minh</Text>
                </View>
                <View style={styles.modalHeaderTitle}>
                  <FontAwesomeIcon
                    icon={faDirections}
                    size={20}
                    color="orange"
                    style={styles.modalHeaderIconLocate}
                  />
                  <Text style={styles.modalTitleText}>5km</Text>
                </View>
                {/* Xe sửa chữa */}
                <View style={styles.headerVehicleContainer}>
                  <FontAwesomeIcon
                    style={styles.headerIconVehicle}
                    icon={faMotorcycle}
                    color="orange"
                    size={27}
                  />
                  <Text>Xe Honda tay ga SH 2021</Text>
                </View>
              </View>
              <Pressable onPress={toggleModal}>
                <FontAwesomeIcon icon={faTimes} color="#000" size={25} />
              </Pressable>
            </View>
            {/*Footer */}
            <View style={styles.modalFooterContainer}>
              <Pressable
                onPress={() => {
                  navigation.navigate('AcceptComponent');
                }}
                style={styles.modalFooterButtonAccept}>
                <Text style={styles.modalFooterButtonText}>Xem chi tiết</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderComponent />
        <AdvertisementComponent />
        {/* <Services
          isActive={isActive}
          isFixCar={isFixCar}
          isFixMotor={isFixMotor}
          setIsActive={setIsActive}
          setIsFixCar={setIsFixCar}
          setIsFixMotor={setIsFixMotor}
        /> */}
        <StatusWork
          setModalVisible={setModalVisible}
          isActive={isActive}
          setIsActive={setIsActive}
        />
        <ModalTester />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screen.height,
    width: screen.width,
    backgroundColor: '#f0f2f5',
  },
  // modal
  modalContainer: {
    minHeight: screen.height / 3.5,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  // header modal
  modalHeaderContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  modalHeaderImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: screen.width / 20,
  },
  modalHeaderDetailsContainer: {
    width: '50%',
    marginRight: screen.width / 8,
    marginTop: 5,
  },
  modalHeaderTitle: {flexDirection: 'row'},
  modalHeaderIconUser: {
    marginRight: 10,
    marginBottom: 5,
    marginLeft: 3,
  },
  modalHeaderIconLocate: {
    marginRight: 8,
    marginTop: 5,
    marginBottom: 10,
  },
  modalTitleText: {
    alignSelf: 'center',
  },
  // Vehicle
  headerVehicleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -2,
  },
  headerIconVehicle: {
    marginRight: 5,
  },
  // Footer modal
  modalFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  modalFooterButtonAccept: {
    width: screen.width / 1.3,
    height: 40,
    backgroundColor: '#00a504',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#00a504',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalFooterButtonText: {
    color: '#fff',
  },
});

export default HomeComponent;
