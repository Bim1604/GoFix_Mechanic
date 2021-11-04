/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ava from '../../asset/image/mechanic.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faDirections,
  faDollarSign,
  faImages,
  faMale,
  faMapMarkerAlt,
  faMotorcycle,
  faUser,
  faWrench,
  faCar,
} from '@fortawesome/free-solid-svg-icons';
import screen from '../../asset/constants/Measure';
import Modal from 'react-native-modal';
import Swiper from 'react-native-swiper';

const ImageBody = ({image}) => {
  return (
    <View>
      <Image
        style={styles.headerImageModal}
        resizeMode="stretch"
        source={{
          uri: image,
        }}
      />
    </View>
  );
};
const ImageFixer = ({
  image,
  setModalVisible,
  setIndexModalSwiper,
  indexCurrent,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(true);
        setIndexModalSwiper(indexCurrent);
      }}>
      <Image
        style={styles.headerImage}
        source={{
          uri: image,
        }}
      />
    </TouchableOpacity>
  );
};

const ItemFixer = ({title, total, setTotal}) => {
  return (
    <View>
      <View style={styles.itemContainer}>
        {/* <View> */}
        <View style={styles.itemTitleContainer}>
          <Text style={styles.itemTitle}>{title}</Text>
        </View>
        <View style={styles.itemTextInputContainer}>
          <TextInput
            placeholder="Chi phí sửa chữa"
            keyboardType="numeric"
            style={styles.itemTextInput}
            onChangeText={setTotal}
            value={total}
            onChange={text => setTotal(text)}
          />
          <Text style={styles.itemCurrencyText}>Đ</Text>
        </View>
      </View>
    </View>
  );
};

const BodyAccept = ({navigation, total, setTotal, route}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [indexModalSwiper, setIndexModalSwiper] = useState(0);

  function ModalTester() {
    return (
      <View>
        <Modal
          onBackdropPress={() => {
            setModalVisible(false);
          }}
          isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
            <Swiper
              index={indexModalSwiper}
              showsButtons={true}
              autoplay={false}
              activeDotStyle={styles.headerActiveDot}
              dotStyle={styles.headerDot}>
              {route.params.image.map((url, index) => (
                <ImageBody key={index} image={url.text} />
              ))}
            </Swiper>
          </View>
        </Modal>
      </View>
    );
  }

  return (
    <View>
      <ModalTester />
      {/* User */}
      <View style={styles.userContainer}>
        <View style={styles.headerUserTitleContainer}>
          <FontAwesomeIcon
            icon={faUser}
            size={18}
            color="orange"
            style={styles.headerIconTitle}
          />
          <Text style={styles.headerUserTitle}>Thông tin khách hàng</Text>
        </View>
        <View style={styles.headerUserContainer}>
          <View>
            <Image
              source={{uri: route.params.avatar}}
              style={styles.headerUserImage}
            />
          </View>
          <View style={styles.headerDetailsContainer}>
            {/* Tên khách hàng */}
            <View style={styles.headerTitle}>
              <FontAwesomeIcon
                icon={faMale}
                size={25}
                color="orange"
                style={styles.headerIconUser}
              />
              <Text>{route.params.fullName}</Text>
            </View>
            {/* Địa chỉ */}
            <View style={styles.headerTitle}>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size={23}
                color="orange"
                style={styles.headerIconLocate}
              />
              <Text>{route.params.address}</Text>
            </View>
            <View style={styles.headerTitle}>
              <FontAwesomeIcon
                icon={faDirections}
                size={20}
                color="orange"
                style={styles.headerIconDirect}
              />
              <Text style={styles.titleText}>{route.params.distance}</Text>
            </View>
            {/* Xe sửa chữa */}
            <View style={styles.headerVehicleContainer}>
              <FontAwesomeIcon
                style={styles.headerIconVehicle}
                icon={route.params.cate === 'Xe máy' ? faMotorcycle : faCar}
                color="orange"
                size={27}
              />
              <Text>{route.params.vehicleName}</Text>
            </View>
          </View>
        </View>
      </View>
      {/* details fix */}
      <View style={styles.bodyItemContainer}>
        <View style={styles.bodyItemTitleContainer}>
          <FontAwesomeIcon
            style={styles.headerIconTitle}
            icon={faWrench}
            size={23}
            color="orange"
          />
          <Text style={styles.bodyItemTitle}>Chi tiết sửa chữa</Text>
        </View>
        {route.params.detailsFix.map((item, index) => (
          <ItemFixer
            setTotal={setTotal}
            total={total}
            key={index}
            title={item.text}
          />
        ))}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 20,
            justifyContent: 'space-between',
            marginLeft: 8,
            marginRight: 10,
          }}>
          <Text>Mô tả chi tiết:</Text>
          <Text>{route.params.description}</Text>
        </View>
      </View>
      {/* Hình ảnh sửa chữa */}
      <View style={styles.bodyItemContainer}>
        <View style={styles.bodyItemTitleContainer}>
          <FontAwesomeIcon
            style={styles.headerIconTitle}
            icon={faImages}
            size={23}
            color="orange"
          />
          <Text style={styles.bodyItemTitle}>Hình ảnh sửa chữa</Text>
        </View>
        <View style={styles.headerImageFixer}>
          <ScrollView horizontal={true}>
            {route.params.image.map((item, index) => (
              <ImageFixer
                setIndexModalSwiper={setIndexModalSwiper}
                indexCurrent={index}
                setModalVisible={setModalVisible}
                key={index}
                image={item.text}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      {/* Tổng tiền */}
      <View style={styles.bodyItemContainer}>
        <View style={styles.bodyItemTitleContainer}>
          <FontAwesomeIcon
            style={styles.headerIconTitle}
            icon={faDollarSign}
            size={23}
            color="orange"
          />
          <Text style={styles.bodyItemTitle}>Tổng chi phí sửa chữa</Text>
        </View>
        <View style={styles.bodyItemPriceContainer}>
          <Text style={styles.bodyItemPriceText}>Tổng chi phí</Text>
          <Text style={styles.bodyItemPriceText}>
            {total === undefined ? 0 : total} Đ
          </Text>
        </View>
      </View>
      {/* Xác nhận */}
      <View style={styles.bodyButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeComponent');
          }}
          style={styles.modalFooterButtonDeny}>
          <Text style={styles.modalFooterButtonText}>Từ chối</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (total === undefined || total === '') {
              alert('Nhập chi phí sửa chữa');
            } else {
              navigation.navigate('MapComponent', {
                total: total,
                fullName: route.params.fullName,
                avatar: route.params.avatar,
                phone: route.params.phone,
                address: route.params.address,
                distance: route.params.distance,
                cate: route.params.cate,
                vehicleName: route.params.vehicleName,
                userID: route.params.userID,
                mecID: route.params.mecID,
                detailsFix: route.params.detailsFix,
                description: route.params.description,
                image: route.params.image,
              });
            }
          }}
          style={styles.modalFooterButtonAccept}>
          <Text style={styles.modalFooterButtonText}>Chấp nhận</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    marginTop: screen.height / 50,
    backgroundColor: '#FFFFFF',
  },
  // header user
  headerUserTitleContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#AAAA',
    paddingBottom: 10,
  },
  headerIconTitle: {
    marginRight: 5,
    marginLeft: screen.width / 50,
  },
  headerUserTitle: {
    fontWeight: '700',
    fontSize: 20,
    alignSelf: 'flex-start',
    color: '#696969',
  },
  headerUserContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    backgroundColor: '#fff',
  },
  headerUserImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: screen.width / 20,
  },
  headerDetailsContainer: {
    width: '50%',
    marginRight: screen.width / 8,
    marginTop: 5,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerIconUser: {
    marginRight: 5,
    marginBottom: 5,
    marginLeft: -3,
  },
  headerIconLocate: {
    marginRight: 5,
    marginTop: 5,
    marginLeft: -2,
    marginBottom: 5,
  },
  headerIconDirect: {
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  titleText: {
    alignSelf: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  headerIconVehicle: {
    marginRight: 5,
  },
  // item
  bodyItemContainer: {
    marginTop: screen.height / 50,
    backgroundColor: '#fff',
  },
  bodyItemTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#AAAA',
    paddingBottom: 10,
  },
  bodyItemTitle: {
    alignSelf: 'flex-start',
    color: '#696969',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: '700',
  },
  // Price
  bodyItemPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  bodyItemPriceText: {
    fontSize: 20,
  },
  // Item
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: '#AAAA',
  },
  itemTitleContainer: {
    width: '45%',
    marginLeft: 20,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemTextInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    margin: 20,
    height: screen.height / 18,
    borderRadius: 6,
    borderColor: '#AAAAAA',
  },
  itemTextInput: {
    width: screen.width / 2,
    paddingLeft: screen.width / 18,
    textAlignVertical: 'center',
  },
  itemCurrencyText: {
    alignSelf: 'center',
    right: screen.width / 30,
  },
  // Item image Swiper
  //Header swiper
  headerWrap: {
    height: 200,
    width: 370,
    marginLeft: 21,
    bottom: screen.height / 5.8,
  },
  LinearGradientWrap: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    marginBottom: 15,
  },
  headerImageFixer: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  headerImage: {
    flexDirection: 'row',
    height: screen.height / 8,
    width: screen.width / 2,
    borderRadius: 4,
    marginRight: 15,
  },
  headerImageModal: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    borderRadius: 4,
    marginRight: 15,
  },
  // Item image swiper dotStyle
  // Dot
  headerDot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 20,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  headerActiveDot: {
    backgroundColor: '#fe8c00',
    width: 20,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  // Image
  itemImageContainer: {
    borderBottomWidth: 1,
    borderColor: '#AAAAAA',
    paddingBottom: 10,
    flexDirection: 'column',
  },
  // Button footer
  bodyButtonContainer: {
    marginTop: screen.height / 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalFooterButtonAccept: {
    width: screen.width / 2.25,
    height: 40,
    backgroundColor: '#00a504',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#00a504',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalFooterButtonDeny: {
    width: screen.width / 2.25,
    height: 40,
    backgroundColor: '#FF0000',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalFooterButtonText: {
    color: '#fff',
  },
});

export default BodyAccept;
