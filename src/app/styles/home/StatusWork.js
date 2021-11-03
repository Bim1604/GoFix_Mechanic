/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import screen from '../../asset/constants/Measure';

const stylesStatusWork = StyleSheet.create({
  statusContainer: {
    bottom: screen.height / 10,
  },
  titleContainer: {
    flexDirection: 'row',
    width: screen.width / 1.1,
    marginLeft: screen.width / 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // title
  },
  statusTextTitle: {
    fontSize: 20,
    color: '#fb6100',
    fontWeight: '700',
    margin: 5,
  },
  bodyTextTitleStatus: {
    fontSize: 17,
    color: '#000',
    margin: 13,
    marginTop: 21,
    marginBottom: 21,
    marginRight: -10,
  },
  bodyTextTitle: {
    fontSize: 17,
    color: '#696969',
    fontWeight: '700',
    margin: 21,
    marginRight: -10,
  },
  bodyTextReadyTitle: {
    fontSize: 17,
    color: '#309E4B',
    fontWeight: '700',
    margin: 21,
    marginRight: -10,
  },
  //   button
  bodyLinearGradient: {
    borderRadius: 50,
    width: screen.width / 2,
    margin: 35,
  },
  statusButtonContainer: {
    alignItems: 'center',
  },
  //  InActive
  bodyInActiveButton: {
    width: screen.width / 2.02,
    height: screen.height / 18,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    margin: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: '#fb6100',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  bodyInActiveText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#696969',
  },
  //   Active
  bodyActiveButton: {
    width: screen.width / 2.02,
    height: screen.height / 20,
    backgroundColor: '#fb6100',
    borderWidth: 1,
    borderRadius: 50,
    margin: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: '#fb6100',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  bodyActiveText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
  },
});
export default stylesStatusWork;
