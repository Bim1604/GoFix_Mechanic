/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import screen from '../../asset/constants/Measure';
const stylesSwiper = StyleSheet.create({
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
  headerImage: {
    flex: 1,
    borderRadius: 4,
  },
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
});

export default stylesSwiper;
