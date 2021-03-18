import { PageA } from '../components/PageA';
import { PageAdetail1 } from '../components/PageAdetail1';
import { PageAdetail2 } from '../components/PageAdetail2';
import { PageAdetail3 } from '../components/PageADetail3';
export const PageARoutes = [
  {
    path: '/',
    exact: true,
    children: <PageA />,
  },
  {
    path: '/detail1',
    exact: false,
    children: <PageAdetail1 />,
  },
  {
    path: '/detail2',
    exact: false,
    children: <PageAdetail2 />,
  },
  {
    path: '/detail3',
    exact: false,
    children: <PageAdetail3 />,
  },
];
