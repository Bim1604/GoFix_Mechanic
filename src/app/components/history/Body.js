/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import ava_cus1 from '../../asset/image/mechanic.jpg';
import ava_cus2 from '../../asset/image/cus2.jpg';
import ava_cus3 from '../../asset/image/cus3.jpg';
import ava_cus4 from '../../asset/image/cus4.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendarAlt,
  faChevronRight,
  faDollarSign,
  faMapMarkerAlt,
  faMotorcycle,
  faUser,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import screen from '../../asset/constants/Measure';

export const ItemListDetails = ({text, icon}) => {
  return (
    <View style={styles.itemContentContainer}>
      <FontAwesomeIcon
        style={styles.itemContentIcon}
        icon={icon}
        size={icon === faMotorcycle ? 23 : 19}
        color="#fe8c00"
      />
      <Text>{text}</Text>
    </View>
  );
};

const completeStatusText = 'Đã hoàn thành';
const cancelStatusText = 'Đã hủy đơn';

const HistoryItem = ({
  name,
  phone,
  address,
  detailsFix,
  time,
  price,
  avatar,
  status,
  navigation,
  motor,
  car,
  description,
  image,
}) => {
  const InfoOrder = [
    {
      icon: faUser,
      content: name,
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
      icon: faWrench,
      content: detailsFix[0].fix,
    },
    {
      icon: faDollarSign,
      content: price,
    },
  ];
  return (
    <View>
      {/* Image */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HistoryDetailsComponent', {
            name: name,
            time: time,
            address: address,
            detailsFix: detailsFix,
            price: price,
            status: status,
            avatar: avatar,
            phone: phone,
            motor: motor,
            car: car,
            description: description,
            image: image,
          });
        }}
        style={styles.itemContainer}>
        {/* Ava */}
        <View style={styles.itemImageContainer}>
          <Image source={avatar} style={styles.itemImageItem} />
          <Text
            style={status ? styles.itemCompleteText : styles.itemCancelText}>
            {status ? completeStatusText : cancelStatusText}
          </Text>
        </View>
        {/* Info */}
        <View style={styles.itemsContentContainer}>
          {InfoOrder.map((item, index) => (
            <ItemListDetails icon={item.icon} text={item.content} key={index} />
          ))}
        </View>
        <View style={styles.itemRouteContainer}>
          <FontAwesomeIcon
            style={styles.itemContentIcon}
            icon={faChevronRight}
            size={23}
            color="#696969"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const data = [
  {
    name: 'Hoàng Quốc Khánh',
    avatar: ava_cus1,
    phone: '0364909656',
    address: '132 Lê Văn Việt, Quận 9, Thành phố Hồ Chí Minh',
    detailsFix: [
      {
        fix: 'Bể bánh xe',
        unitPrice: 80000,
      },
    ],
    time: '15:16:58 30-10-2021',
    price: 80000,
    status: true,
    motor: 'Xe honda tay ga SH 2021',
    car: '',
    description: 'Bể bánh xe sau',
    image: [
      {
        link:
          'https://cdn.xehoiviet.com/images/car/cropthumb/1200x752/2020/08/13/0939636611/cam-do-thanh-ly-sh-da-ga-qua-khong-noi-2l4ggdkk7h4.jpg',
      },
      {
        link:
          'https://muaxegiatot.vn/wp-content/uploads/2019/11/can-truoc-honda-sh-2020-muaxegiatot-vn.jpg',
      },
      {
        link:
          'https://giaxe.2banh.vn/cache/dataupload/products/slides/520_368_66f9e0b774b551ea584e560c347f61a6.jpg',
      },
    ],
  },
  {
    name: 'Trần Đại Đăng',
    avatar: ava_cus2,
    phone: '0364909656',
    address: '25 Nguyễn Xuyển, Quận 9, Thành phố Hồ Chí Minh',
    detailsFix: [
      {
        fix: 'Bể bánh xe',
        unitPrice: 80000,
      },
    ],
    time: '05:06:58 30-10-2021',
    price: 80000,
    status: false,
    motor: 'Xe honda genio 2021',
    car: '',
    description: 'Bể bánh xe sau',
    image: [
      {
        link:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2RZTDSXMCdVIunIZFZVVLqy65Pip7MnAxIQ&usqp=CAU',
      },
    ],
  },
];
const BodyComponent = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return (
      <View>
        <HistoryItem
          name={item.name}
          phone={item.phone}
          time={item.time}
          address={item.address}
          detailsFix={item.detailsFix}
          price={item.price}
          avatar={item.avatar}
          status={item.status}
          navigation={navigation}
          car={item.car}
          motor={item.motor}
          description={item.description}
          image={item.image}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <FlatList data={data} renderItem={renderItem} horizontal={false} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screen.width,
    height: screen.height,
  },
  // Item container
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: screen.height / 80,
  },
  // image item container
  itemImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: screen.width / 60,
    paddingRight: screen.width / 60,
    width: '27%',
  },
  itemImageItem: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: screen.height / 80,
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
  },
  // Image
  itemContentContainer: {
    flexDirection: 'row',
    marginTop: screen.height / 150,
    width: '87%',
  },
  itemContentIcon: {
    marginRight: screen.width / 70,
  },
  // Image route
  itemRouteContainer: {
    width: '13%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BodyComponent;
