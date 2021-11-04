/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendarAlt,
  faDollarSign,
  faImages,
  faMapMarkerAlt,
  faMotorcycle,
  faPhone,
  faUser,
  faWrench,
  faCar,
} from '@fortawesome/free-solid-svg-icons';
import screen from '../../asset/constants/Measure';
import Modal from 'react-native-modal';
import Swiper from 'react-native-swiper';
import {ItemListDetails} from '../history/Body';

const completeStatusText = 'Đã hoàn thành';
const cancelStatusText = 'Đã hủy đơn';

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

const ItemFixer = ({title, price}) => {
  return (
    <View>
      <View style={styles.itemContainer}>
        {/* <View> */}
        <View style={styles.itemTitleContainer}>
          <Text style={styles.itemTitle}>{title}</Text>
        </View>
        <View style={styles.itemTextInputContainer}>
          <Text style={styles.itemTextInput}>{price}</Text>
          <Text style={styles.itemCurrencyText}> </Text>
        </View>
      </View>
    </View>
  );
};

const BodyDetails = ({
  name,
  time,
  address,
  detailsFix,
  price,
  status,
  avatar,
  phone,
  motor,
  car,
  description,
  image,
}) => {
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
              {image.map((url, index) => (
                <ImageBody key={index} image={url.text} />
              ))}
            </Swiper>
          </View>
        </Modal>
      </View>
    );
  }
  const InfoOrder = [
    {
      icon: faUser,
      content: name,
    },
    {
      icon: faPhone,
      content: phone,
    },
    {
      icon: faCalendarAlt,
      content: time,
    },
    {
      icon: faMapMarkerAlt,
      content: address,
    },
    {
      icon: motor !== '' ? faMotorcycle : faCar,
      content: motor !== '' ? motor : car,
    },
  ];
  return (
    <ScrollView>
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
          <View style={styles.itemImageContainer}>
            <Image source={{uri: avatar}} style={styles.itemImageItem} />
            <Text
              style={status ? styles.itemCompleteText : styles.itemCancelText}>
              {status ? completeStatusText : cancelStatusText}
            </Text>
          </View>
          <View style={styles.headerDetailsContainer}>
            {InfoOrder.map((item, index) => (
              <ItemListDetails
                icon={item.icon}
                text={item.content}
                key={index}
              />
            ))}
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
        {detailsFix.map((item, index) => (
          <ItemFixer title={item.text} price={item.unitPrice} key={index} />
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
          {description === '' || description === undefined ? (
            <Text>Không có mô tả</Text>
          ) : (
            <Text>{description}</Text>
          )}
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
            {image.map((item, index) => (
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
      <View style={styles.bodyItemFooterContainer}>
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
            {price === undefined ? 0 : price} Đ
          </Text>
        </View>
      </View>
    </ScrollView>
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
    backgroundColor: '#fff',
  },
  headerUserImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: screen.width / 20,
  },
  headerDetailsContainer: {
    width: '72%',
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
    marginLeft: -6,
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
  bodyItemFooterContainer: {
    marginTop: screen.height / 50,
    backgroundColor: '#fff',
    height: screen.height / 3,
  },
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
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#AAAA',
  },
  itemTitleContainer: {
    width: '45%',
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemTextInputContainer: {
    flexDirection: 'row',
    height: screen.height / 22,
    borderRadius: 6,
    borderColor: '#AAAAAA',
  },
  itemTextInput: {
    textAlignVertical: 'center',
  },
  itemCurrencyText: {
    alignSelf: 'center',
    marginRight: 10,
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
  // image item container
  itemImageContainer: {
    paddingBottom: screen.width / 60,
    marginRight: screen.width / 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '27%',
  },
  itemImageItem: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: screen.height / 200,
  },
  itemCompleteText: {
    color: '#33CC00',
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemCancelText: {
    color: '#FF3300',
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemsContentContainer: {
    width: '60%',
    backgroundColor: '#000',
  },
});

export default BodyDetails;
