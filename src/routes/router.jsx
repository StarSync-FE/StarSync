import { fetchCharts, fetchDonations, fetchIdols } from '@/api';
import { THROWN_ERRORS } from '@/constants/errors';
import { STATUS_CODES } from '@/constants/statusCodes';
import { ApiErrorBoundary, GlobalErrorBoundary, RenderErrorBoundary } from '@/errorBoundary';
import { safeRequest } from '@/utils/api';
import { throwIfEmptyArray } from '@/utils/validate';
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
              const idols = await safeRequest(() => fetchIdols({ limit: 10, cursor: 0 }), 'idols');
              throwIfEmptyArray(idols);
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
              const idols = await safeRequest(() => fetchIdols({ limit: 10, cursor: 0 }), 'idols');
              const donations = await safeRequest(
                () => fetchDonations({ limit: 10, cursor: 0 }),
                'donations',
              );
              const charts = await safeRequest(
                () => fetchCharts({ gender: 'female', limit: 10, cursor: 0 }),
                'charts',
              );

              throwIfEmptyArray(idols);
              throwIfEmptyArray(donations);
              throwIfEmptyArray(charts);

              return { idols, donations, charts };
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
              const idols = await safeRequest(() => fetchIdols({ limit: 30, cursor: 0 }), 'idols');
              throwIfEmptyArray(idols);
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
