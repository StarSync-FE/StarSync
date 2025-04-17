import App from '@/App';
import ErrorBoundary from '@/components/ErrorBoundary.jsx';
import PendingUI from '@/components/PendingUI.jsx';
import { ENDPOINTS } from '@/constants/api';
import { handleAction } from '@/utils/actions';
import fetchData from '@/utils/fetchData';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const LandingPage = lazy(() => import('@/pages/LandingPage'));
const ListPage = lazy(() => import('@/pages/ListPage'));
const MyPage = lazy(() => import('@/pages/MyPage'));

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
        loader: async () => fetchData(ENDPOINTS.GET_IDOLS),
        action: async ({ request }) => handleAction(request, ENDPOINTS.GET_IDOLS),
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

export default router;
