import uuid from 'uuid';
import Section from '../pages/section/section';
import ThemeSetting from '../pages/theme-setting/theme-setting';

const routers = [
  {
    path: '/',
    exact: true,
    component: Section,
    key: uuid(),
  },
  {
    path: '/theme-setting',
    exact: true,
    component: ThemeSetting,
    key: uuid(),
  },
];

export default routers;
