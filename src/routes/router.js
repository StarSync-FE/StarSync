import { lazy } from 'react';
import { createBrowserRouter, useNavigation } from 'react-router-dom';
import App from '../App';
import ErrorBoundary from '../components/ErrorBoundary';
import { handleAction } from '../utils/actions';
import fetchData from '../utils/fetchData';

const Idols = lazy(() => import('../pages/Idols'));
const Donations = lazy(() => import('../pages/Donations'));
const Chart = lazy(() => import('../pages/Chart'));
const UploadImage = lazy(() => import('../pages/UploadImage'));

const PendingUI = ({ children }) => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return isLoading ? <div>Loading...</div> : children;
};

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
        path: '15-1/idols',
        element: (
          <PendingUI>
            <Idols />
          </PendingUI>
        ),
        loader: async () => fetchData('/15-1/idols'),
        action: async ({ request }) => handleAction(request, '/15-1/idols'),
        errorElement: <ErrorBoundary />,
      },
      {
        path: '15-1/donations',
        element: (
          <PendingUI>
            <Donations />
          </PendingUI>
        ),
        loader: async () => fetchData('/15-1/donations'),
        action: async ({ request }) => handleAction(request, '/15-1/donations'),
        errorElement: <ErrorBoundary />,
      },
      {
        path: '15-1/chart',
        element: (
          <PendingUI>
            <Chart />
          </PendingUI>
        ),
        loader: async () => fetchData('/15-1/chart'),
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'images/upload',
        element: (
          <PendingUI>
            <UploadImage />
          </PendingUI>
        ),
        action: async ({ request }) => handleAction(request, '/images/upload'),
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

export default router;
