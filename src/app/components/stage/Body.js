/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import avatar from '../../asset/image/mechanic.jpg';
import screen from '../../asset/constants/Measure';
import StepIndicator from 'react-native-step-indicator';
import {
  numberOfStage,
  indexStage,
  stepIndicatorStyles,
  stageProcess,
} from '../../asset/constants/Process';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSpinner, faUser, faWrench} from '@fortawesome/free-solid-svg-icons';

const BodyComponent = ({navigation, total, route}) => {
  let renderItem = ({item, index}) => {
    return (
      <View>
        <DetailsFixer content={item.text} />
      </View>
    );
  };
  const DetailsFixer = ({content}) => {
    return (
      <View style={styles.bodyFixTextContainer}>
        <Text style={styles.bodyFixTextTitle}>{content} </Text>
        <Text style={styles.bodyFixTextCost}>{total} Đ</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* Customer */}
      <View style={styles.bodyUserTitleContainer}>
        <FontAwesomeIcon
          icon={faUser}
          size={18}
          color="orange"
          style={styles.bodyIconTitle}
        />
        <Text style={styles.bodyUserTitle}>Thông tin khách hàng</Text>
      </View>
      <View style={styles.bodyUserContainer}>
        <View style={styles.bodyImageContainer}>
          <Image source={{uri: route.params.avatar}} style={styles.bodyImage} />
        </View>
        <View style={styles.bodyTextContainer}>
          <View style={styles.bodyTitleContainer}>
            <Text style={styles.bodyTextName}>{route.params.fullName}</Text>
            <Text style={styles.bodyText}>{route.params.phone}</Text>
            <Text style={styles.bodyText}>{route.params.address}</Text>
          </View>
        </View>
      </View>
      {/* Details Fix */}
      <View style={styles.bodyItemContainer}>
        <View style={styles.bodyItemTitleContainer}>
          <FontAwesomeIcon
            style={styles.bodyIconTitle}
            icon={faWrench}
            size={23}
            color="orange"
          />
          <Text style={styles.bodyItemTitle}>Chi tiết sửa chữa</Text>
        </View>
        <View style={styles.bodyDetailsFixContainer}>
          <View>
            <FlatList data={route.params.detailsFix} renderItem={renderItem} />
          </View>
          <View>
            <View style={styles.bodyTextContainerShow}>
              <Text style={styles.bodyTotalTitle}>Tổng tiền thu:</Text>
              <Text style={styles.bodyTotalText}>{total} Đ</Text>
            </View>
          </View>
        </View>
        {/* Progress */}
        <View>
          <View style={styles.bodyItemTitleContainer}>
            <FontAwesomeIcon
              style={styles.bodyIconTitle}
              icon={faSpinner}
              size={23}
              color="orange"
            />
            <Text style={styles.bodyItemTitle}>Tiến trình sửa chữa</Text>
          </View>
          <View style={styles.bodyProgressContainer}>
            <StepIndicator
              stepCount={numberOfStage}
              customStyles={stepIndicatorStyles}
              currentPosition={indexStage}
              labels={stageProcess}
            />
          </View>
        </View>
      </View>
      {/* Complete Fix */}
      <View style={styles.bodyCompleteContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('StageCompleteComponent', {
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
              status: true,
            });
          }}
          style={styles.bodyCompleteButton}>
          <Text style={styles.bodyCompleteText}>Hoàn Thành sửa chữa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CancelComponent', {
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
              status: false,
            });
          }}
          style={styles.bodyDenyButton}>
          <Text style={styles.bodyCompleteText}>Hủy đơn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: screen.height,
  },
  // Customer
  bodyUserContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    paddingTop: 10,
    borderColor: '#A9A9A9',
    backgroundColor: '#fff',
  },
  bodyUserTitleContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  bodyIconTitle: {
    marginRight: 5,
    marginLeft: screen.width / 50,
  },
  bodyUserTitle: {
    fontWeight: '700',
    fontSize: 18,
    alignSelf: 'flex-start',
  },
  bodyTitle: {
    fontSize: 16,
    margin: 10,
    color: '#AAAAAA',
  },
  bodyImageContainer: {
    margin: 3,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#fb6100',
  },
  bodyImage: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 40,
  },
  bodyTextContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  bodyTitleContainer: {
    marginLeft: 15,
    flexDirection: 'column',
    width: '80%',
    height: screen.height / 9,
  },
  bodyText: {
    fontSize: 14,
    marginTop: 3,
    color: '#7c7d7e',
  },
  bodyTextName: {
    fontSize: 16,
    marginTop: 3,
    marginRight: 80,
  },
  // details fix
  bodyDetailsFixContainer: {
    width: '100%',
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  bodyItemContainer: {
    height: screen.height / 2,
  },
  bodyItemTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  bodyItemTitle: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '700',
  },
  bodyFixTextContainer: {
    flexDirection: 'row',
    width: screen.width,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  bodyFixTextTitle: {
    fontSize: 15,
    marginLeft: 15,
  },
  bodyFixTextCost: {
    fontSize: 15,
    marginRight: 15,
  },
  //  Total
  bodyTextContainerShow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: '#A9A9A9',
  },
  bodyTotalTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 15,
  },
  bodyTotalText: {
    fontSize: 15,
    marginRight: 15,
  },
  // Progress
  bodyProgressContainer: {
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  // Complete fix
  bodyCompleteContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
  },
  bodyCompleteButton: {
    width: screen.width / 1.1,
    height: screen.height / 20,
    backgroundColor: '#00CC00',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#00CC00',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginBottom: 20,
  },
  bodyDenyButton: {
    width: screen.width / 1.1,
    height: screen.height / 20,
    backgroundColor: '#FF3300',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#FF3300',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginBottom: 10,
  },
  bodyCompleteText: {
    color: '#fff',
  },
});

export default BodyComponent;
