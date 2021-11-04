/* eslint-disable prettier/prettier */
import {
  faCar,
  faDirections,
  faMapMarkerAlt,
  faMotorcycle,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Image} from 'react-native';
import screen from '../../asset/constants/Measure';
import AdvertisementComponent from './Advertisement';
import HeaderComponent from './Header';
import StatusWork from './StatusWork';
import Modal from 'react-native-modal';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import messaging from '@react-native-firebase/messaging';
const apiCustomerRequest =
  'https://history-search-map.herokuapp.com/api/customerRequest/1';

const HomeComponent = ({navigation, route}) => {
  const [isActive, setIsActive] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [id, setID] = useState(route.params.id);
  const [data, setData] = useState({
    fullName: '',
    avatar:
      'https://static2.yan.vn/YanNews/2167221/202003/dan-mang-du-trend-thiet-ke-avatar-du-kieu-day-mau-sac-tu-anh-mac-dinh-f4781c7a.jpg',
    phone: '',
    address: '',
    distance: '',
    cate: '',
    vehicleName: '',
    userID: '',
    detailsFix: '',
    description: '',
    image: '',
  });
  useEffect(() => {
    fetch(apiCustomerRequest)
      .then(res => res.json())
      .then(json => {
        setData(json);
      });
  }, []);

  messaging().onMessage(async remoteMessage => {
    if (isActive === true) {
      setModalVisible(true);
    }
  });

  function ModalTester() {
    return (
      <View>
        <Modal
          onBackdropPress={() => {
            setModalVisible(false);
          }}
          isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeaderContainer}>
              <View>
                <Image
                  source={{uri: data.avatar}}
                  style={styles.modalHeaderImage}
                />
              </View>
              <View style={styles.modalHeaderDetailsContainer}>
                <View style={styles.modalHeaderTitle}>
                  <FontAwesomeIcon
                    icon={faUser}
                    size={18}
                    color="orange"
                    style={styles.modalHeaderIconUser}
                  />
                  <Text>{data.fullName}</Text>
                </View>
                <View style={styles.modalHeaderTitle}>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size={23}
                    color="orange"
                    style={styles.modalHeaderIconLocate}
                  />
                  <Text>{data.address}</Text>
                </View>
                <View style={styles.modalHeaderTitle}>
                  <FontAwesomeIcon
                    icon={faDirections}
                    size={20}
                    color="orange"
                    style={styles.modalHeaderIconLocate}
                  />
                  <Text style={styles.modalTitleText}>{data.distance}</Text>
                </View>
                {/* Xe sửa chữa */}
                <View style={styles.headerVehicleContainer}>
                  <FontAwesomeIcon
                    style={styles.headerIconVehicle}
                    icon={data.cate === 'Xe máy' ? faMotorcycle : faCar}
                    color="orange"
                    size={27}
                  />
                  <Text>{data.vehicleName}</Text>
                </View>
              </View>
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                }}>
                <FontAwesomeIcon icon={faTimes} color="#000" size={25} />
              </Pressable>
            </View>
            {/*Footer */}
            <View style={styles.modalFooterContainer}>
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('AcceptComponent', {
                    fullName: data.fullName,
                    avatar: data.avatar,
                    phone: data.phone,
                    address: data.address,
                    distance: data.distance,
                    cate: data.cate,
                    vehicleName: data.vehicleName,
                    userID: data.userID,
                    mecID: id,
                    detailsFix: data.detailsFix,
                    description: data.description,
                    image: data.image,
                  });
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
        <StatusWork
          // setModalVisible={setModalVisible}
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
    minHeight: screen.height / 2.6,
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
