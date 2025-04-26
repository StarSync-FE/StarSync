import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import router from './routes/router';
import GlobalStyle from './styles/Global.styles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App router={router} />
  </StrictMode>,
);
