/* eslint-disable prettier/prettier */
import { faHistory, faHome, faList, faUser } from '@fortawesome/free-solid-svg-icons';
import {HomeScreen, ProfileScreen, HistoryScreen} from '../../container/index';
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
    name: 'Lịch sử',
    component: HistoryScreen,
    fontSize: 12,
    icon: faHistory,
  },
  {
    name: 'Tài khoản',
    component: ProfileScreen,
    fontSize: 12,
    icon: faUser,
  },
];

export default data;
