/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import screen from '../../asset/constants/Measure';

const stylesHeader = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fa',
  },
  headerContainer: {
    flexDirection: 'row',
    height: screen.height / 12,
    alignItems: 'center',
  },
  headerIconBack: {
    color: '#fff',
    marginLeft: screen.width / 20,
  },
  headerText: {
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginLeft: screen.width / 7,
  },
});

export default stylesHeader;
