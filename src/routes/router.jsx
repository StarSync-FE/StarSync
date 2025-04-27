import { ENDPOINTS } from '@/constants/api';
import { THROWN_ERRORS } from '@/constants/errors';
import { STATUS_CODES } from '@/constants/statusCodes';
import { ApiErrorBoundary, GlobalErrorBoundary, RenderErrorBoundary } from '@/errorBoundary';
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
          return {
            Component: () => (
              <RenderErrorBoundary>
                <LandingPage />
              </RenderErrorBoundary>
            ),
            loader: async () => {
              const LIMIT = 10;
              const CURSOR = 0;
              const url = `${ENDPOINTS.GET_IDOLS}?pageSize=${LIMIT}&cursor=${CURSOR}`;

              let idols;

              try {
                idols = await requestGet(url);
                console.log('✅ idols:', idols);
              } catch (err) {
                console.error('❌ idols 에러:', err?.response?.data || err.message);
              }

              if (Array.isArray(idols) && idols.length === 0) {
                throw new Response(THROWN_ERRORS.DATA_NOT_FOUND, {
                  status: STATUS_CODES.NOT_FOUND,
                });
              }

              if (!idols) {
                throw new Response(THROWN_ERRORS.FETCH_FAILED, {
                  status: STATUS_CODES.SERVER_ERROR,
                });
              }

              return idols;
            },
          };
        },
      },
      {
        path: 'list',
        errorElement: <ApiErrorBoundary />,
        lazy: async () => {
          const { default: ListPage } = await import('@/pages/list/ListPage');
          return {
            Component: () => (
              <RenderErrorBoundary>
                <ListPage />
              </RenderErrorBoundary>
            ),
            loader: async () => {
              const LIMIT = 10;
              const CURSOR = 0;
              const idolsUrl = `${ENDPOINTS.GET_IDOLS}?pageSize=${LIMIT}&cursor=${CURSOR}`;
              const donationsUrl = ENDPOINTS.GET_DONATIONS;

              let idols;
              let donations;

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

              // 404: 정상 응답이지만 빈 배열
              if (
                Array.isArray(idols) &&
                idols.length === 0 &&
                Array.isArray(donations) &&
                donations.length === 0
              ) {
                throw new Response(THROWN_ERRORS.DATA_NOT_FOUND, {
                  status: STATUS_CODES.NOT_FOUND,
                });
              }

              // 500: 요청 자체 실패 (undefined)
              if (!idols || !donations) {
                throw new Response(THROWN_ERRORS.FETCH_FAILED, {
                  status: STATUS_CODES.SERVER_ERROR,
                });
              }

              return { idols, donations };
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
            Component: () => (
              <RenderErrorBoundary>
                <MyPage />
              </RenderErrorBoundary>
            ),
            loader: async () => {
              const LIMIT = 30;
              const CURSOR = 0;
              const url = `${ENDPOINTS.GET_IDOLS}?pageSize=${LIMIT}&cursor=${CURSOR}`;

              let idols;

              try {
                idols = await requestGet(url);
                console.log('✅ idols:', idols);
              } catch (err) {
                console.error('❌ idols 에러:', err?.response?.data || err.message);
              }

              if (Array.isArray(idols) && idols.length === 0) {
                throw new Response(THROWN_ERRORS.DATA_NOT_FOUND, {
                  status: STATUS_CODES.NOT_FOUND,
                });
              }

              if (!idols) {
                throw new Response(THROWN_ERRORS.FETCH_FAILED, {
                  status: STATUS_CODES.SERVER_ERROR,
                });
              }

              return idols;
            },
          };
        },
      },
      {
        path: 'test-render-error',
        lazy: async () => {
          const { default: TestRenderError } = await import('@/components/test/TestRenderError');
          return {
            Component: () => (
              <RenderErrorBoundary>
                <TestRenderError />
              </RenderErrorBoundary>
            ),
          };
        },
      },
      {
        path: 'test-api-error',
        errorElement: <ApiErrorBoundary />,
        lazy: async () => ({
          Component: () => <div>API 에러 테스트 페이지입니다</div>,
          loader: async () => {
            throw new Response(THROWN_ERRORS.DATA_NOT_FOUND, {
              status: STATUS_CODES.NOT_FOUND,
            });
          },
        }),
      },

      {
        path: 'test-global-error',
        lazy: async () => ({
          Component: () => <div>글로벌 서버 에러 테스트 페이지입니다</div>,
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
