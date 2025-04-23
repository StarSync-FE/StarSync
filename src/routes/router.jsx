import { ErrorBoundary } from '@/components/error';
import { ENDPOINTS } from '@/constants/api';
import { fetchData } from '@/utils/api';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      const { default: App } = await import('@/App.jsx');
      return { Component: App };
    },
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,

        lazy: async () => {
          const { default: LandingPage } = await import('@/pages/landing/LandingPage');
          return { Component: LandingPage };
        },
      },
      {
        path: 'list',
        lazy: async () => {
          const { default: ListPage } = await import('@/pages/list/ListPage');
          return {
            Component: ListPage,
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
          };
        },
      },
      {
        path: 'mypage',
        lazy: async () => {
          const { default: MyPage } = await import('@/pages/mypage/MyPage');
          return {
            Component: MyPage,
            loader: async () => {
              const idols = await fetchData(ENDPOINTS.GET_IDOLS);
              return idols;
            },
          };
        },
      },
      {
        path: 'test-error',
        lazy: async () => ({
          Component: () => <div>서버 에러 테스트 페이지입니다</div>,
          loader: async () => {
            throw new Response('서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.', {
              status: 500,
              statusText: 'Internal Server Error',
            });
          },
        }),
      },
      {
        path: '*',
        lazy: async () => {
          const { NotFoundPage } = await import('@/pages/error');
          return { Component: NotFoundPage };
        },
      },
      {
        path: 'test-error',
        element: (
          <PendingUI>
            <div>서버 에러 테스트 페이지입니다</div>
          </PendingUI>
        ),
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
]);

export default router;
