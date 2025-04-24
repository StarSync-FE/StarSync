import { UI_ERRORS } from '@/constants/errors';
import { STATUS_CODES } from '@/constants/statusCodes';
import { ServerErrorPage } from '@/pages/error';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const RenderErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status >= STATUS_CODES.SERVER_ERROR) {
      console.error('🔴 서버 에러:', error);
      return <ServerErrorPage />;
    }

    console.warn('🟡 라우터 에러:', error);
    return <ServerErrorPage />;
  }

  console.error('⚠️ 예상치 못한 일반 에러:', error);
  return <ServerErrorPage />;
};

export default RenderErrorBoundary;
