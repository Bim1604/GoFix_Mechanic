/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
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

const apiHistoryCus =
  'https://history-search-map.herokuapp.com/api/historyCustomer';

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
      content: detailsFix[0].text,
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
          <Image source={{uri: avatar}} style={styles.itemImageItem} />
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
const BodyComponent = ({navigation, id}) => {
  const [data, setData] = useState();
  const getHistoryCus = async () => {
    await fetch(apiHistoryCus)
      .then(res => res.json())
      .then(json => {
        let historyItem = [];
        for (let index = 0; index < json.length; index++) {
          if (id === json[index].mecID) {
            historyItem.push(json[index]);
          }
        }
        setData(historyItem);
      });
  };

  useEffect(() => {
    getHistoryCus();
  });

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
      <View style={styles.listItemContainer}>
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
  // list
  listItemContainer: {
    height: screen.height - screen.height / 5,
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
