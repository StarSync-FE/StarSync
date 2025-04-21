import App from '@/App.jsx';
import { ErrorBoundary, PendingUI } from '@/components/feedback';
import { ENDPOINTS } from '@/constants/api';
import { NotFoundPage } from '@/pages/error';
import { fetchData } from '@/utils/api';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const LandingPage = lazy(() => import('@/pages/landing/LandingPage'));
const ListPage = lazy(() => import('@/pages/list/ListPage'));
const MyPage = lazy(() => import('@/pages/my/MyPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PendingUI>
        <App />
      </PendingUI>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <PendingUI>
            <LandingPage />
          </PendingUI>
        ),
      },
      {
        path: 'list',
        element: (
          <PendingUI>
            <ListPage />
          </PendingUI>
        ),
        loader: async () => {
          const gender = 'female';
          const chartUrl = `${ENDPOINTS.GET_CHART.replace('{gender}', gender)}?gender=${gender}`;
          const [idols, donations, chart] = await Promise.all([
            fetchData(ENDPOINTS.GET_IDOLS),
            fetchData(ENDPOINTS.GET_DONATIONS),
            fetchData(chartUrl),
          ]);
          return { idols, donations, chart };
        },
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'mypage',
        element: (
          <PendingUI>
            <MyPage />
          </PendingUI>
        ),
        loader: async () => {
          const idols = await fetchData(ENDPOINTS.GET_IDOLS);
          return idols;
        },
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
