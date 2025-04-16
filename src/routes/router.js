import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import fetchData from '../utils/fetchData';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
]);

export default router;
