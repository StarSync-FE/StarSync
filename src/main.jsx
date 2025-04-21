import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import router from './routes/router';
import GlobalStyle from './styles/Global.styles.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
);
