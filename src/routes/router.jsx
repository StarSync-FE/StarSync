import { ErrorBoundary } from '@/components/error';
import { BASE_URL, ENDPOINTS } from '@/constants/api';
import { CONSOLE_ERRORS } from '@/constants/errors';
import { STATUS_CODES } from '@/constants/statusCodes';
import { requestGet } from '@/utils/api';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      const { default: Root } = await import('@/Root.jsx');
      return { Component: Root };
    },
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,

        lazy: async () => {
          const { LandingPage } = await import('@/pages/landing');
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
              const LIMIT = 10;
              const CURSOR = 0;
              const GENDER = 'female';
              const idolsUrl = `${ENDPOINTS.GET_IDOLS}?limit=${LIMIT}&cursor=${CURSOR}`;
              const donationsUrl = ENDPOINTS.GET_DONATIONS;
              const chartUrl = `${ENDPOINTS.GET_CHART}?gender=${GENDER}&limit=${LIMIT}&cursor=${CURSOR}`;

              let idols;
              let donations;
              let chart;

              try {
                idols = await requestGet(idolsUrl);
                console.log('✅ idols:', idols);
              } catch (err) {
                console.error('❌ idols 에러:', err?.response?.data || err.message);
              }

              try {
                donations = await requestGet(donationsUrl);
                console.log('✅ donations:', donations);
              } catch (err) {
                console.error('❌ donations 에러:', err?.response?.data || err.message);
              }

              try {
                chart = await requestGet(chartUrl);
                console.log('✅ chart:', chart);
              } catch (err) {
                console.error('❌ chart 에러:', err?.response?.data || err.message);
              }

              if (!idols || !donations || !chart) {
                throw new Response(CONSOLE_ERRORS.FETCH_FAILED, {
                  status: STATUS_CODES.SERVER_ERROR,
                }); //데이터 로딩 자체가 실패한 상태니까 사용자 입장에서는 "앱 내부의 로직 문제나 서버 이상"처럼 보이는 상황이라 500으로 던짐
              }

              return { idols, donations, chart };
            },
          };
        },
      },
      {
        path: 'mypage',
        lazy: async () => {
          const { default: MyPage } = await import('@/pages/my/MyPage');
          return {
            Component: MyPage,
            loader: async () => {
              const LIMIT = 30;
              const CURSOR = 0;
              const url = `${ENDPOINTS.GET_IDOLS}?limit=${LIMIT}&cursor=${CURSOR}`;

              let idols;

              try {
                idols = await requestGet(url);
                console.log('✅ idols:', idols);
              } catch (err) {
                console.error('❌ idols 에러:', err?.response?.data || err.message);
              }

              if (!idols) {
                throw new Response(CONSOLE_ERRORS.FETCH_FAILED, {
                  status: STATUS_CODES.SERVER_ERROR,
                });
              }

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
            throw new Response(CONSOLE_ERRORS.SERVER_ERROR, {
              status: STATUS_CODES.SERVER_ERROR,
            });
          },
        }),
      },
    ],
  },
  {
    path: '*',
    lazy: async () => {
      const { NotFoundPage } = await import('@/pages/error');
      return { Component: NotFoundPage };
    },
  },
]);

export default router;
