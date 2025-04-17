import App from '@/App.jsx';
import ErrorBoundary from '@/components/ErrorBoundary.jsx';
import PendingUI from '@/components/PendingUI.jsx';
import { ENDPOINTS } from '@/constants/api';
import { handleAction } from '@/utils/actions';
import fetchData from '@/utils/fetchData';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const LandingPage = lazy(() => import('@/pages/landing/LandingPage'));
const ListPage = lazy(() => import('@/pages/list/ListPage'));
const MyPage = lazy(() => import('@/pages/mypage/MyPage'));
// const IdolRegisterPage = lazy(() => import('@/pages/dev/IdolRegisterPage'));

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
          const [idols, donations, chart] = await Promise.all([
            fetchData(ENDPOINTS.GET_IDOLS),
            fetchData(ENDPOINTS.GET_DONATIONS),
            fetchData(ENDPOINTS.GET_CHART),
          ]);
          return { idols, donations, chart };
        },
        action: async ({ request }) => {
          return handleAction(request);
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
      // {
      //   path: 'dev/idol-register',
      //   element: (
      //     <PendingUI>
      //       <IdolRegisterPage />
      //     </PendingUI>
      //   ),
      //   loader: async () => fetchData(ENDPOINTS.GET_IDOLS),
      //   action: async ({ request }) => handleAction(request, ENDPOINTS.POST_IDOL),
      //   errorElement: <ErrorBoundary />,
      // },
    ],
  },
]);

export default router;
