/* eslint-disable prettier/prettier */
import { faHome, faList, faUser } from '@fortawesome/free-solid-svg-icons';
import {HomeScreen, ProfileScreen} from '../../container/index';
const data = [
  {
    name: 'Trang chủ',
    component: HomeScreen,
    fontSize: 12,
    icon: faHome,
  },
  {
    name: 'Đơn hàng',
    component: HomeScreen,
    fontSize: 12,
    icon: faList,
  },
  {
    name: 'Tài khoản',
    component: ProfileScreen,
    fontSize: 12,
    icon: faUser,
  },
];

export default data;
