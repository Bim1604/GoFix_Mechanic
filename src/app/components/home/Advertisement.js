/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import {stylesSwiper} from '../../styles/home/index';
const data = [
  {
    link: 'https://bizweb.dktcdn.net/100/142/258/themes/184680/assets/bg5-banner7.jpg?1582767541192',
  },
  {
    link: 'https://nhotchinhhang.vn/images/2021/03/20210325_036fbef80c433c82639f11ffe5fee56d_1616660728.jpg',
  },
];
const ImageBody = ({image}) => {
  return (
    <Image
      style={stylesSwiper.default.headerImage}
      resizeMode="stretch"
      source={{
        uri: image,
      }}
    />
  );
};
const AdvertisementComponent = () => {
  return (
    <View style={stylesSwiper.default.headerWrap}>
      <LinearGradient
        style={stylesSwiper.default.LinearGradientWrap}
        colors={['#fe8c00', '#f83600']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}>
        <Swiper
          showsButtons={false}
          autoplay
          activeDotStyle={stylesSwiper.default.headerActiveDot}
          dotStyle={stylesSwiper.default.headerDot}>
          {data.map((url, index) => (
            <ImageBody key={index} image={url.link} />
          ))}
        </Swiper>
      </LinearGradient>
    </View>
  );
};
export default AdvertisementComponent;
