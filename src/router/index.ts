import uuid from 'uuid';
import Section from '@my-pages/section';
import Index from '@my-pages/theme-setting';

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
    component: Index,
    key: uuid(),
  },
];

export default routers;
