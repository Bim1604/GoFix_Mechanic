/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GetLocation from 'react-native-get-location';
import MapView, {Marker, Polyline} from 'react-native-maps';
import customer from '../../asset/image/XeMay2.png';
import avatar from '../../asset/image/mechanic.jpg';
import screen from '../../asset/constants/Measure';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
  faMapMarkerAlt,
  faPhoneAlt,
  faUser,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';

const apiKey = 'dJFdCdCFCXpUHfhlyWyv3h8uAmLaTRn15TEAVoF2';
const accessToken =
  'pk.eyJ1IjoiYmltMTYwNCIsImEiOiJja3U3N2Rnbm40MDE3MnJxdGFpNW56bDJ3In0.MsFZyi3660Z_FdDm7ptx7A';
const MapComponent = ({navigation, route}) => {
  const [latUser, setLatUser] = useState(10.8385133);
  const [lngUser, setLngUser] = useState(106.8334517);
  const [address, setAddress] = useState('');
  const [polyCoord, setPoLyCoord] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const latMechanic = latUser + 0.0045;
  const lngMechanic = lngUser + 0.0045;
  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    }).then(location => {
      setLatUser(location.latitude);
      setLngUser(location.longitude);
      fetch(
        `https://rsapi.goong.io/Geocode?latlng=${location.latitude},${location.longitude}&api_key=${apiKey}`,
      )
        .then(res => res.json())
        .then(local => {
          setAddress(local.results[0].formatted_address);
        });
    });
  }, []);
  useEffect(() => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.mapbox.com/v4/directions/mapbox.driving/${lngUser},${latUser};${lngMechanic},${latMechanic}.json?geojson=true&access_token=${accessToken}`,
      )
        .then(response => {
          return response.json();
        })
        .then(json => {
          let coords = json.routes[0].geometry.coordinates.map(
            (item, index) => ({
              latitude: item[1],
              longitude: item[0],
            }),
          );
          setPoLyCoord(coords);
          resolve(json);
        })
        .catch(err => {
          reject(err);
        });
    });
  }, [latMechanic, latUser, lngMechanic, lngUser]);
  useEffect(() => {
    if (isLoaded === false) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 3000);
    }
  }, [isLoaded]);
  return (
    <View>
      {isLoaded === true ? (
        <DirectComponent
          navigation={navigation}
          address={address}
          latUser={latUser}
          lngUser={lngUser}
          polyCoord={polyCoord}
          latMechanic={latMechanic}
          lngMechanic={lngMechanic}
          total={route.params.total}
        />
      ) : (
        <View style={styles.cancelContainer}>
          <View>
            <ActivityIndicator
              style={styles.loadingIcon}
              size={150}
              color="#fb6100"
            />
            <Text style={styles.loadingText}>
              Đang tìm tuyến đường tốt nhất
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const data = [
  {
    content: 'Bể bánh xe',
  },
];

const DetailsFixer = ({content, total}) => {
  return (
    <View style={styles.bottomBodyFixTextContainer}>
      <Text style={styles.bottomBodyFixTextTitle}>{content} </Text>
      <Text style={styles.bottomBodyFixTextCost}>{total} Đ</Text>
    </View>
  );
};

const DirectComponent = ({
  latUser,
  lngUser,
  address,
  navigation,
  polyCoord,
  latMechanic,
  lngMechanic,
  total,
}) => {
  const [latAverage, setLatAverage] = useState(1);
  const [lngAverage, setLngAverage] = useState(1);
  const [isShowInfo, setIsShowInfo] = useState(false);
  const LONGITUDE_DELTA =
    lngUser < lngMechanic
      ? (lngMechanic - lngUser) / (lngUser / lngMechanic / 2)
      : (lngUser - lngMechanic) / (lngUser / lngMechanic / 2);
  const LATITUDE_DELTA =
    latUser < latMechanic
      ? (latMechanic - latUser) / (latUser / latMechanic / 2)
      : (latUser - latMechanic) / (latUser / latMechanic / 2);

  useEffect(() => {
    if (latUser > latMechanic) {
      setLatAverage(latMechanic + (latUser - latMechanic) / 2);
    } else {
      setLatAverage(latUser + (latMechanic - latUser) / 2);
    }
    if (lngUser > lngMechanic) {
      setLngAverage(lngMechanic + (lngUser - lngMechanic) / 2);
    } else {
      setLngAverage(lngUser + (lngMechanic - lngUser) / 2);
    }
  }, [latMechanic, latUser, lngMechanic, lngUser]);
  let renderItem = ({item, index}) => {
    if (item.isChoose === false) {
      return;
    }
    return (
      <View>
        <DetailsFixer content={item.content} total={total} />
      </View>
    );
  };
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={isShowInfo === true ? styles.map : styles.mapDetailsShow}
        region={{
          latitude: latAverage,
          longitude: lngAverage,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        <Marker
          image={customer}
          coordinate={{
            latitude: latUser,
            longitude: lngUser,
          }}
          title={'Your Location'}
          description={'Bạn đang ở đây'}
          draggable
        />
        <Polyline coordinates={polyCoord} strokeWidth={6} strokeColor="red" />
        <Marker
          coordinate={{
            latitude: latMechanic,
            longitude: lngMechanic,
          }}
          pinColor="#fb6100"
          title={"Mechanic 's Location"}
          description={'Người sửa xe ở đây'}
          draggable
        />
      </MapView>
      <View style={styles.bottomContainer}>
        {/* Bottom Header */}
        <TouchableOpacity
          style={styles.bottomHeaderContainer}
          onPress={() => {
            setIsShowInfo(prevState => !prevState);
          }}>
          <FontAwesomeIcon
            style={styles.bottomHeaderButton}
            icon={isShowInfo === true ? faAngleDoubleDown : faAngleDoubleUp}
            size={22}
          />
        </TouchableOpacity>
        {/* Bottom Body */}
        <View
          style={
            isShowInfo === true
              ? styles.bottomBodyContainerShow
              : styles.bottomBodyContainer
          }>
          <View style={styles.bottomBodyTitleTextContainer}>
            <FontAwesomeIcon
              style={styles.bottomBodyIcon}
              icon={faUser}
              size={20}
            />
            <Text style={styles.bottomBodyTitle}>Thông tin khách hàng</Text>
          </View>
          <View style={styles.bottomBodyUserContainer}>
            <View style={styles.bottomBodyImageContainer}>
              <Image source={avatar} style={styles.bottomBodyImage} />
            </View>
            <View style={styles.bottomBodyTextContainer}>
              <View style={styles.bottomBodyTitleContainer}>
                <Text style={styles.bottomBodyTextName}>Trần Đại Đăng</Text>
                <Text style={styles.bottomBodyText}>0971547522</Text>
                <Text style={styles.bottomBodyText}>
                  123 Lê Văn Việt, quận 9, thành phố Hồ Chí Minh
                </Text>
              </View>
            </View>
          </View>
          {isShowInfo === true ? (
            <View>
              <View style={styles.bottomBodyAddressContainer}>
                <View style={styles.bottomBodyTitleTextContainer}>
                  <FontAwesomeIcon
                    style={styles.bottomBodyIcon}
                    icon={faMapMarkerAlt}
                    size={20}
                  />
                  <Text style={styles.bottomBodyTitle}>Địa chỉ của bạn</Text>
                </View>
                <Text style={styles.bottomBodyAddressText}>{address}</Text>
              </View>
              <View style={styles.bottomBodyFixContainer}>
                <View style={styles.bottomBodyTitleTextContainer}>
                  <FontAwesomeIcon
                    style={styles.bottomBodyIcon}
                    icon={faWrench}
                    size={20}
                  />
                  <Text style={styles.bottomBodyTitle}>Chi tiết sửa chữa</Text>
                </View>
                <View>
                  <FlatList data={data} renderItem={renderItem} />
                </View>
              </View>
            </View>
          ) : (
            <View />
          )}
          <View style={styles.bottomBodyTextContainerShow}>
            <Text style={styles.bottomBodyTotalTitle}>Tổng chi phí:</Text>
            <Text style={styles.bottomBodyTotalText}>{total} Đ</Text>
          </View>
        </View>
        {/* Bottom Footer */}
        <View style={styles.bottomFooterContainer}>
          <View
            style={
              isShowInfo === true
                ? styles.bottomFooterButtonContainerShow
                : styles.bottomFooterButtonContainer
            }>
            <TouchableOpacity
              style={styles.bottomFooterButtonCall}
              onPress={() => {
                navigation.navigate('HomeComponent');
              }}>
              <FontAwesomeIcon icon={faPhoneAlt} color="#fff" size={20} />
            </TouchableOpacity>
          </View>
          {/* button nav doub */}
          <View style={styles.bottomFooterButtonStage}>
            <TouchableOpacity
              style={styles.bottomFooterButtonStartFix}
              onPress={() => {
                navigation.navigate('StageComponent', {
                  total: total,
                });
              }}>
              <Text style={styles.bottomFooterButtonText}>Đã đến chỗ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomFooterButtonCancel}
              onPress={() => {
                navigation.navigate('DenyComponent');
              }}>
              <Text style={styles.bottomFooterButtonText}>Hủy đơn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: screen.height,
    width: screen.width,
  },
  // Loading
  cancelContainer: {
    alignItems: 'center',
    marginTop: screen.height / 2.5,
  },
  loadingIcon: {
    height: 10,
  },
  loadingText: {
    marginTop: screen.height / 8,
    fontSize: 20,
  },
  map: {
    height: '25%',
    width: '100%',
  },
  mapDetailsShow: {
    height: '60%',
    width: '100%',
  },
  // bottom
  bottomContainer: {
    height: '79%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopColor: '#000',
  },
  // Header
  bottomHeaderContainer: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  bottomHeaderButton: {
    color: '#808080',
  },
  // Bottom Footer
  bottomBodyContainer: {
    flexDirection: 'column',
  },
  bottomBodyContainerShow: {
    flexDirection: 'column',
    height: '68%',
  },
  //  Bottom Body User
  bottomBodyUserContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  bottomBodyImageContainer: {
    margin: 3,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#fb6100',
  },
  bottomBodyImage: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 40,
  },
  bottomBodyTextContainer: {
    flexDirection: 'row',
  },
  bottomBodyTitleContainer: {
    marginLeft: 15,
    flexDirection: 'column',
    width: '90%',
    height: 60,
  },
  bottomBodyText: {
    fontSize: 14,
    marginTop: 3,
    color: '#7c7d7e',
  },
  bottomBodyTextName: {
    fontSize: 16,
    marginTop: 3,
    marginRight: 80,
  },
  //  Bottom body address
  bottomBodyAddressContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#D3D3D3',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    paddingBottom: 5,
  },
  bottomBodyTitleTextContainer: {
    flexDirection: 'row',
  },
  bottomBodyIcon: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
    marginRight: 10,
    color: '#fb6100',
  },
  bottomBodyTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 5,
  },
  bottomBodyAddressText: {
    paddingLeft: 15,
    marginBottom: 10,
  },
  // Bottom body fixer details
  bottomBodyFixContainer: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  bottomBodyFixTextContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    width: 380,
    justifyContent: 'space-between',
  },
  bottomBodyFixTextTitle: {
    fontSize: 15,
  },
  bottomBodyFixTextCost: {
    fontSize: 15,
  },
  //  Footer
  //  bottom Footer
  bottomFooterContainer: {
    flexDirection: 'column',
  },
  //  Bottom Body Total
  bottomBodyTextContainerShow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 395,
    marginBottom: 10,
  },
  bottomBodyTotalTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 15,
  },
  bottomBodyTotalText: {
    fontSize: 15,
  },
  // Bottom footer call
  bottomFooterButtonContainer: {
    height: 50,
    borderTopColor: '#D3D3D3',
    borderTopWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  bottomFooterButtonContainerShow: {
    borderTopColor: '#D3D3D3',
    borderTopWidth: 1,
    paddingTop: 10,
  },
  bottomFooterButtonCall: {
    borderWidth: 1,
    backgroundColor: '#3ae52b',
    borderColor: '#3ae52b',
    borderRadius: 10,
    width: '93%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  bottomFooterButtonStage: {
    flexDirection: 'row',
  },
  // Bottom Footer Start Fix
  bottomFooterButtonStartFix: {
    borderWidth: 1,
    backgroundColor: '#3399FF',
    borderColor: '#3399FF',
    width: screen.width / 2.2,
    borderRadius: 10,
    marginTop: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  // Bottom Footer Cancel
  bottomFooterButtonCancel: {
    borderWidth: 1,
    backgroundColor: '#ff0000',
    borderColor: '#ff0000',
    borderRadius: 10,
    height: 40,
    width: screen.width / 2.2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  bottomFooterButtonText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default MapComponent;
