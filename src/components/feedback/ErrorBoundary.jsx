import { UI_ERRORS } from '@/constants/errors';
import { STATUS_CODES } from '@/constants/statusCodes';
import { ServerErrorPage } from '@/pages/error';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status >= STATUS_CODES.SERVER_ERROR) {
      return <ServerErrorPage />;
    }

    return (
      <div>
        <h1>라우터 에러 발생</h1>
        <p>{error.statusText || UI_ERRORS.UNKNOWN}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>예상치 못한 일반 에러 발생</h1>
      <p>{error?.message || UI_ERRORS.UNKNOWN}</p>
    </div>
  );
};

export default ErrorBoundary;
