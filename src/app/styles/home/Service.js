/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import screen from '../../asset/constants/Measure';

const stylesService = StyleSheet.create({
  servicesContainer: {
    bottom: screen.height / 5.9,
  },
  servicesItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 21,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  // Item
  servicesItemButtonContainer: {
    width: screen.width / 2.3,
    height: screen.height / 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Circle
  servicesItemCircle: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#A9A9A9',
    borderColor: '#A9A9A9',
    marginBottom: 5,
  },
  servicesItemReadyCircle: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#fb6100',
    borderColor: '#fb6100',
    marginBottom: 5,
  },
  // Separator line
  servicesItemLine: {
    alignSelf: 'center',
    backgroundColor: '#A9A9A9',
    width: 1,
    height: '65%',
  },
  // Text Item
  servicesItemText: {
    fontSize: 13,
    color: '#696969',
  },
  servicesItemReadyText: {
    fontSize: 13,
    color: '#fb6100',
  },
  // Text Body
  bodyTextTitle: {
    fontSize: 20,
    color: '#fb6100',
    fontWeight: '700',
    margin: 21,
    marginRight: -10,
  },
});
export default stylesService;
