/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import screen from '../../asset/constants/Measure';

const stylesHeader = StyleSheet.create({
  // linear gradient
  LinearGradient: {
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  // header
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: screen.height / 3.5,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
    margin: 20,
  },
  headerWelcome: {
    bottom: screen.height / 5.0,
    marginLeft: 20,
    fontSize: 17,
    color: '#fff',
  },
});

export default stylesHeader;
