import App from '@/App.jsx';
import { ErrorBoundary } from '@/components/error';
import { PendingUI } from '@/components/loadingStatus';
import { ENDPOINTS } from '@/constants/api';
import { NotFoundPage } from '@/pages/error';
import { fetchData } from '@/utils/api';
import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const LandingPage = lazy(() => import('@/pages/landing/LandingPage'));
const ListPage = lazy(() => import('@/pages/list/ListPage'));
const MyPage = lazy(() => import('@/pages/mypage/MyPage'));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      loader: async () => {
        const idols = await fetchData(ENDPOINTS.GET_IDOLS);
        return idols;
      },
      pendingElement: <PendingUI />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: 'list',
          element: <ListPage />,
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
          element: <MyPage />,
          loader: async () => {
            const idols = await fetchData(ENDPOINTS.GET_IDOLS);
            return idols;
          },
          errorElement: <ErrorBoundary />,
        },
        {
          path: 'test-error',
          element: <div>서버 에러 테스트 페이지입니다</div>,
          loader: async () => {
            throw new Response('서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.', {
              status: 500,
              statusText: 'Internal Server Error',
            });
          },
        },
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_pendingElement: true,
    },
  },
);

export default router;
