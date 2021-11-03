/* eslint-disable prettier/prettier */
import { faHistory, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {HomeScreen, ProfileScreen, HistoryScreen} from '../../container/index';
const data = [
  {
    name: 'Trang chủ',
    component: HomeScreen,
    fontSize: 12,
    icon: faHome,
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
