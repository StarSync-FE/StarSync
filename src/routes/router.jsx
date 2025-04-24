import { ApiErrorBoundary, ErrorBoundary, GlobalErrorBoundary } from '@/components/error';
import { BASE_URL, ENDPOINTS } from '@/constants/api';
import { THROWN_ERRORS } from '@/constants/errors';
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
    errorElement: <GlobalErrorBoundary />,
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
        errorElement: <ApiErrorBoundary />,
        lazy: async () => {
          const { default: ListPage } = await import('@/pages/list/ListPage');
          return {
            Component: ListPage,
            loader: async () => {
              const LIMIT = 10;
              const CURSOR = 0;
              const GENDER = 'female';
              const idolsUrl = `${ENDPOINTS.GET_IDOLS}?pageSize=${LIMIT}&cursor=${CURSOR}`;
              const donationsUrl = ENDPOINTS.GET_DONATIONS;
              const chartUrl = `${ENDPOINTS.GET_CHART}?gender=${GENDER}&pageSize=${LIMIT}&cursor=${CURSOR}`;

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

              // 404: 정상 응답이지만 빈 배열
              if (
                Array.isArray(idols) &&
                idols.length === 0 &&
                Array.isArray(donations) &&
                donations.length === 0 &&
                Array.isArray(chart) &&
                chart.length === 0
              ) {
                throw new Response(THROWN_ERRORS.DATA_NOT_FOUND, {
                  status: STATUS_CODES.NOT_FOUND,
                });
              }

              // 500: 요청 자체 실패 (undefined)
              if (!idols || !donations || !chart) {
                throw new Response(THROWN_ERRORS.FETCH_FAILED, {
                  status: STATUS_CODES.SERVER_ERROR,
                });
              }

              return { idols, donations, chart };
            },
          };
        },
      },
      {
        path: 'mypage',
        errorElement: <ApiErrorBoundary />,
        lazy: async () => {
          const { default: MyPage } = await import('@/pages/my/MyPage');
          return {
            Component: MyPage,
            loader: async () => {
              throw new Response('로그인 필요', {
                status: 401,
                statusText: 'Unauthorized',
              });
            },
            // loader: async () => {
            //   const LIMIT = 30;
            //   const CURSOR = 0;
            //   const url = `${ENDPOINTS.GET_IDOLS}?pageSize=${LIMIT}&cursor=${CURSOR}`;

            //   let idols;

            //   try {
            //     idols = await requestGet(url);
            //     console.log('✅ idols:', idols);
            //   } catch (err) {
            //     console.error('❌ idols 에러:', err?.response?.data || err.message);
            //   }

            //   if (Array.isArray(idols) && idols.length === 0) {
            //     throw new Response(THROWN_ERRORS.DATA_NOT_FOUND, {
            //       status: STATUS_CODES.NOT_FOUND,
            //     });
            //   }

            //   if (!idols) {
            //     throw new Response(THROWN_ERRORS.FETCH_FAILED, {
            //       status: STATUS_CODES.SERVER_ERROR,
            //     });
            //   }

            //   return idols;
            // },
          };
        },
      },
      {
        path: 'test-error',
        lazy: async () => ({
          Component: () => <div>서버 에러 테스트 페이지입니다</div>,
          loader: async () => {
            throw new Response(THROWN_ERRORS.SERVER_ERROR, {
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
