import { useRouteError } from 'react-router-dom';
import { ServerErrorPage } from '@/pages/error';

/** 전역의 최종 fallback. 라우터에서 처리하지 못한 모든 라우터 에러를 최종 처리하는 역할 */
const GlobalErrorBoundary = () => {
  const error = useRouteError();

  console.error('🌍 Global Error:', error);

  return <ServerErrorPage />;
};

export default GlobalErrorBoundary;
