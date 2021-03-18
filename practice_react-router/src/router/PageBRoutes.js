import { PageB } from '../components/PageB';
import { Parameter } from '../components/Parameter';

export const PageBRoutes = [
  {
    path: '/',
    exact: true,
    children: <PageB />,
  },
  {
    path: '/:id',
    exact: false,
    children: <Parameter />,
  },
];
